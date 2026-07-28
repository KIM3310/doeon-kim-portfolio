import {
  INQUIRY_CONSENT_VERSION,
  INQUIRY_MAX_BYTES,
  INQUIRY_RETENTION_DAYS,
  validateInquiryPayload,
} from '../../inquiryContract';

const CANONICAL_ORIGIN = 'https://kim3310-doeon-kim-portfolio.pages.dev';
const ALLOWED_ORIGINS = new Set([
  CANONICAL_ORIGIN,
  'https://kim3310.github.io',
]);
const LOCAL_ORIGIN_HOSTS = new Set(['localhost', '127.0.0.1', '::1']);
const NETWORK_ADDRESS_PATTERN = /^[0-9a-f:.]{3,64}$/i;
export const INQUIRY_EMAIL_DAILY_LIMIT = 3;
export const INQUIRY_NETWORK_DAILY_LIMIT = 5;
export const INQUIRY_GLOBAL_HOURLY_LIMIT = 100;

type InquiryEnv = PagesEnv & {
  INQUIRY_RATE_LIMIT_SALT: string;
};

export const isAllowedInquiryOrigin = (origin: string | null): boolean => {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.has(origin)) return true;

  try {
    const parsed = new URL(origin);
    return parsed.protocol === 'http:' && LOCAL_ORIGIN_HOSTS.has(parsed.hostname);
  } catch {
    return false;
  }
};

const responseHeaders = (origin: string | null): HeadersInit => ({
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  ...(origin && isAllowedInquiryOrigin(origin) ? { 'Access-Control-Allow-Origin': origin } : {}),
  'Cache-Control': 'no-store',
  'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
  'Content-Type': 'application/json; charset=utf-8',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
});

const json = (body: object, status: number, origin: string | null): Response =>
  Response.json(body, { status, headers: responseHeaders(origin) });

const isoBefore = (milliseconds: number): string => new Date(Date.now() - milliseconds).toISOString();
const isoAfter = (milliseconds: number): string => new Date(Date.now() + milliseconds).toISOString();

const sha256 = async (value: string): Promise<string> => {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
};

export const onRequestOptions: PagesFunction<InquiryEnv> = async ({ request }) => {
  const origin = request.headers.get('Origin');
  if (!isAllowedInquiryOrigin(origin)) {
    return json({ error: 'Origin is not allowed.' }, 403, origin);
  }
  return new Response(null, { status: 204, headers: responseHeaders(origin) });
};

export const onRequestPost: PagesFunction<InquiryEnv> = async ({ request, env }) => {
  const origin = request.headers.get('Origin');
  if (!isAllowedInquiryOrigin(origin)) {
    return json({ error: 'Origin is not allowed.' }, 403, origin);
  }

  const contentType = request.headers.get('Content-Type') ?? '';
  if (!contentType.toLowerCase().startsWith('application/json')) {
    return json({ error: 'Content-Type must be application/json.' }, 415, origin);
  }

  const contentLength = Number(request.headers.get('Content-Length') ?? '0');
  if (Number.isFinite(contentLength) && contentLength > INQUIRY_MAX_BYTES) {
    return json({ error: 'Request body is too large.' }, 413, origin);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > INQUIRY_MAX_BYTES) {
    return json({ error: 'Request body is too large.' }, 413, origin);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return json({ error: 'Request body must be valid JSON.' }, 400, origin);
  }

  const validated = validateInquiryPayload(payload);
  if (!validated.ok) {
    return json({ error: validated.error }, 400, origin);
  }

  if (validated.isBot) {
    return json({ accepted: true }, 202, origin);
  }

  const now = new Date().toISOString();
  const rateLimitSalt = env.INQUIRY_RATE_LIMIT_SALT?.trim();
  if (!rateLimitSalt || rateLimitSalt.length < 32) {
    console.error(JSON.stringify({ event: 'inquiry_configuration_error' }));
    return json({ error: 'Inquiry storage is temporarily unavailable.' }, 503, origin);
  }

  const networkAddress = request.headers.get('CF-Connecting-IP')?.trim() ?? '';
  if (!NETWORK_ADDRESS_PATTERN.test(networkAddress)) {
    return json({ error: 'Request network could not be verified.' }, 403, origin);
  }

  const emailHash = await sha256(validated.value.email);
  const requestFingerprint = await sha256(
    `${rateLimitSalt}:${now.slice(0, 10)}:${networkAddress}`,
  );
  const dayAgo = isoBefore(24 * 60 * 60 * 1_000);
  const dayStart = `${now.slice(0, 10)}T00:00:00.000Z`;
  const hourAgo = isoBefore(60 * 60 * 1_000);
  const id = crypto.randomUUID();
  const expiresAt = isoAfter(INQUIRY_RETENTION_DAYS * 24 * 60 * 60 * 1_000);

  let inserted = false;
  try {
    const results = await env.LEADS_DB.batch([
      env.LEADS_DB.prepare(
        'DELETE FROM private_inquiries WHERE expires_at <= ?',
      ).bind(now),
      env.LEADS_DB.prepare(
        `INSERT INTO private_inquiries (
          id, created_at, expires_at, intent, email, email_hash, request_fingerprint,
          organization, lane_id, source_repo, budget_range, summary, consent_version, status
        )
        SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new'
        WHERE (
          SELECT COUNT(*)
          FROM private_inquiries
          WHERE email_hash = ? AND created_at >= ?
        ) < ?
        AND (
          SELECT COUNT(*)
          FROM private_inquiries
          WHERE request_fingerprint = ? AND created_at >= ?
        ) < ?
        AND (
          SELECT COUNT(*)
          FROM private_inquiries
          WHERE created_at >= ?
        ) < ?`,
      ).bind(
        id,
        now,
        expiresAt,
        validated.value.intent,
        validated.value.email,
        emailHash,
        requestFingerprint,
        validated.value.organization,
        validated.value.laneId,
        validated.value.sourceRepo,
        validated.value.budgetRange,
        validated.value.summary,
        INQUIRY_CONSENT_VERSION,
        emailHash,
        dayAgo,
        INQUIRY_EMAIL_DAILY_LIMIT,
        requestFingerprint,
        dayStart,
        INQUIRY_NETWORK_DAILY_LIMIT,
        hourAgo,
        INQUIRY_GLOBAL_HOURLY_LIMIT,
      ),
    ]);
    inserted = results[1]?.meta.changes === 1;
  } catch (error) {
    console.error(JSON.stringify({
      event: 'inquiry_storage_error',
      message: error instanceof Error ? error.message : 'Unknown D1 error',
    }));
    return json({ error: 'Inquiry storage is temporarily unavailable.' }, 503, origin);
  }

  if (!inserted) {
    return json({ error: 'Inquiry limit reached. Try again later.' }, 429, origin);
  }

  return json({ accepted: true, reference: id, retainedUntil: expiresAt }, 201, origin);
};

export const onRequest: PagesFunction<InquiryEnv> = async context =>
  json({ error: 'Method not allowed.' }, 405, context.request.headers.get('Origin'));
