import {
  TELEMETRY_MAX_BYTES,
  TELEMETRY_RATE_LIMIT_DAILY_LIMIT,
  isAllowedTelemetryOrigin,
  isTelemetryOriginAllowedForRepo,
  validateTelemetryPayload,
} from '../../telemetryContract';

type TelemetryEnv = PagesEnv & {
  TELEMETRY_RATE_LIMIT_SALT?: string;
};

const NETWORK_ADDRESS_PATTERN = /^[0-9a-f:.]{3,64}$/i;

const responseHeaders = (origin: string | null): HeadersInit => ({
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  ...(origin && isAllowedTelemetryOrigin(origin) ? { 'Access-Control-Allow-Origin': origin } : {}),
  'Cache-Control': 'no-store',
  'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
  'Content-Type': 'application/json; charset=utf-8',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
});

const json = (body: object, status: number, origin: string | null): Response =>
  Response.json(body, { status, headers: responseHeaders(origin) });

const sha256 = async (value: string): Promise<string> => {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
};

const isoAfter = (milliseconds: number): string => new Date(Date.now() + milliseconds).toISOString();

export const onRequestOptions: PagesFunction<TelemetryEnv> = async ({ request }) => {
  const origin = request.headers.get('Origin');
  if (!isAllowedTelemetryOrigin(origin)) {
    return json({ error: 'Origin is not allowed.' }, 403, origin);
  }
  return new Response(null, { status: 204, headers: responseHeaders(origin) });
};

export const onRequestPost: PagesFunction<TelemetryEnv> = async context => {
  const { request, env } = context;
  const origin = request.headers.get('Origin');
  if (!isAllowedTelemetryOrigin(origin)) {
    return json({ error: 'Origin is not allowed.' }, 403, origin);
  }

  const contentType = request.headers.get('Content-Type') ?? '';
  if (!contentType.toLowerCase().startsWith('application/json')) {
    return json({ error: 'Content-Type must be application/json.' }, 415, origin);
  }

  const contentLength = Number(request.headers.get('Content-Length') ?? '0');
  if (Number.isFinite(contentLength) && contentLength > TELEMETRY_MAX_BYTES) {
    return json({ error: 'Request body is too large.' }, 413, origin);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > TELEMETRY_MAX_BYTES) {
    return json({ error: 'Request body is too large.' }, 413, origin);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return json({ error: 'Request body must be valid JSON.' }, 400, origin);
  }

  const validated = validateTelemetryPayload(payload);
  if ('error' in validated) {
    return json({ error: validated.error }, 400, origin);
  }
  if (!isTelemetryOriginAllowedForRepo(origin, validated.value.repo)) {
    return json({ error: 'Origin is not allowed for this repository.' }, 403, origin);
  }

  const rateLimitSalt = env.TELEMETRY_RATE_LIMIT_SALT?.trim();
  if (!rateLimitSalt || rateLimitSalt.length < 32) {
    console.error(JSON.stringify({ event: 'telemetry_configuration_error' }));
    return json({ error: 'Telemetry storage is temporarily unavailable.' }, 503, origin);
  }

  const networkAddress = request.headers.get('CF-Connecting-IP')?.trim() ?? '';
  if (!NETWORK_ADDRESS_PATTERN.test(networkAddress)) {
    return json({ error: 'Request network could not be verified.' }, 403, origin);
  }

  const now = new Date().toISOString();
  const day = now.slice(0, 10);
  const fingerprint = await sha256(`${rateLimitSalt}:${day}:${networkAddress}`);
  const expiresAt = isoAfter(36 * 60 * 60 * 1_000);

  try {
    const results = await env.LEADS_DB.batch([
      env.LEADS_DB.prepare(
        'DELETE FROM telemetry_rate_limits WHERE expires_at <= ?',
      ).bind(now),
      env.LEADS_DB.prepare(
        `INSERT INTO telemetry_rate_limits (day, fingerprint, count, expires_at)
         VALUES (?, ?, 1, ?)
         ON CONFLICT(day, fingerprint) DO UPDATE SET
           count = count + 1,
           expires_at = excluded.expires_at`,
      ).bind(day, fingerprint, expiresAt),
      env.LEADS_DB.prepare(
        `INSERT INTO telemetry_daily_counters (
          day, repo, event, surface, consent_version, count, updated_at
        )
        SELECT ?, ?, ?, ?, ?, 1, ?
        WHERE (
          SELECT count
          FROM telemetry_rate_limits
          WHERE day = ? AND fingerprint = ?
        ) <= ?
        ON CONFLICT(day, repo, event, surface, consent_version) DO UPDATE SET
          count = telemetry_daily_counters.count + 1,
          updated_at = excluded.updated_at`,
      ).bind(
        day,
        validated.value.repo,
        validated.value.event,
        validated.value.surface,
        validated.value.consentVersion,
        now,
        day,
        fingerprint,
        TELEMETRY_RATE_LIMIT_DAILY_LIMIT,
      ),
    ]);

    const updated = results[2]?.meta.changes === 1;
    if (!updated) {
      return json({ error: 'Telemetry limit reached. Try again later.' }, 429, origin);
    }
  } catch (error) {
    console.error(JSON.stringify({
      event: 'telemetry_storage_error',
      message: error instanceof Error ? error.message : 'Unknown D1 error',
    }));
    return json({ error: 'Telemetry storage is temporarily unavailable.' }, 503, origin);
  }

  return json({ accepted: true }, 202, origin);
};

export const onRequest: PagesFunction<TelemetryEnv> = async context =>
  json({ error: 'Method not allowed.' }, 405, context.request.headers.get('Origin'));
