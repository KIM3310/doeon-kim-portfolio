import { describe, expect, it, vi } from 'vitest';
import {
  INQUIRY_EMAIL_DAILY_LIMIT,
  INQUIRY_GLOBAL_HOURLY_LIMIT,
  INQUIRY_NETWORK_DAILY_LIMIT,
  isAllowedInquiryOrigin,
  onRequestPost,
} from '../functions/api/inquiries';

const RATE_LIMIT_SALT = 'test-rate-limit-salt-with-at-least-32-characters';
const NETWORK_ADDRESS = '203.0.113.10';

const validPayload = {
  intent: 'commercial',
  email: 'buyer@example.com',
  organization: 'Example Corp',
  laneId: 'agent-reliability-audit',
  sourceRepo: 'agent-runtime-go',
  budgetRange: '2500-5000',
  summary: 'We need a bounded reliability audit for a production agent workflow.',
  consent: true,
  website: '',
};

interface CapturedStatement {
  sql: string;
  bindings: unknown[];
  bind: (...values: unknown[]) => CapturedStatement;
}

const statement = (sql: string, bindings: unknown[] = []): CapturedStatement => ({
  sql,
  bindings,
  bind: (...values: unknown[]) => statement(sql, values),
});

const requestContext = (
  insertChanges: number,
  batchError?: Error,
  options: {
    rateLimitSalt?: string;
    networkAddress?: string | null;
    origin?: string | null;
  } = {},
): {
  context: Parameters<typeof onRequestPost>[0];
  batch: ReturnType<typeof vi.fn>;
} => {
  const batch = vi.fn(async () => {
    if (batchError) throw batchError;
    return [
      { meta: { changes: 0 } },
      { meta: { changes: insertChanges } },
    ];
  });
  const database = {
    prepare: (sql: string) => statement(sql),
    batch,
  };
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  if (options.origin !== null) {
    headers.set(
      'Origin',
      options.origin ?? 'https://kim3310-doeon-kim-portfolio.pages.dev',
    );
  }
  if (options.networkAddress !== null) {
    headers.set('CF-Connecting-IP', options.networkAddress ?? NETWORK_ADDRESS);
  }
  const request = new Request('https://kim3310-doeon-kim-portfolio.pages.dev/api/inquiries', {
    method: 'POST',
    headers,
    body: JSON.stringify(validPayload),
  });

  return {
    context: {
      request,
      env: {
        LEADS_DB: database,
        INQUIRY_RATE_LIMIT_SALT: options.rateLimitSalt ?? RATE_LIMIT_SALT,
      },
    } as unknown as Parameters<typeof onRequestPost>[0],
    batch,
  };
};

describe('isAllowedInquiryOrigin', () => {
  it('allows canonical, static mirror, and local development origins', () => {
    expect(isAllowedInquiryOrigin('https://kim3310-doeon-kim-portfolio.pages.dev')).toBe(true);
    expect(isAllowedInquiryOrigin('https://kim3310.github.io')).toBe(true);
    expect(isAllowedInquiryOrigin('http://127.0.0.1:8791')).toBe(true);
    expect(isAllowedInquiryOrigin('http://localhost:5173')).toBe(true);
  });

  it('rejects malformed, remote HTTP, and unapproved HTTPS origins', () => {
    expect(isAllowedInquiryOrigin(null)).toBe(false);
    expect(isAllowedInquiryOrigin('not-an-origin')).toBe(false);
    expect(isAllowedInquiryOrigin('http://example.com')).toBe(false);
    expect(isAllowedInquiryOrigin('https://attacker.invalid')).toBe(false);
  });

  it('checks all rate limits and inserts in one D1 transaction without storing the raw network address', async () => {
    const { context, batch } = requestContext(1);
    const response = await onRequestPost(context);
    const body = await response.json() as { accepted?: boolean; reference?: string };

    expect(response.status).toBe(201);
    expect(body.accepted).toBe(true);
    expect(body.reference).toMatch(/^[0-9a-f-]{36}$/);
    expect(batch).toHaveBeenCalledTimes(1);

    const [statements] = batch.mock.calls[0] as [CapturedStatement[]];
    expect(statements).toHaveLength(2);
    expect(statements[0]?.sql).toContain('DELETE FROM private_inquiries');
    expect(statements[1]?.sql).toContain('INSERT INTO private_inquiries');
    expect(statements[1]?.sql).toContain('SELECT COUNT(*)');
    expect(statements[1]?.bindings).toContain(INQUIRY_EMAIL_DAILY_LIMIT);
    expect(statements[1]?.bindings).toContain(INQUIRY_NETWORK_DAILY_LIMIT);
    expect(statements[1]?.bindings).toContain(INQUIRY_GLOBAL_HOURLY_LIMIT);
    expect(statements[1]?.bindings).not.toContain(NETWORK_ADDRESS);
    expect(
      statements[1]?.bindings.some(value =>
        typeof value === 'string' && /^[0-9a-f]{64}$/.test(value),
      ),
    ).toBe(true);
  });

  it('rejects requests without an allowed origin or verifiable network address', async () => {
    const noOrigin = await onRequestPost(requestContext(1, undefined, { origin: null }).context);
    expect(noOrigin.status).toBe(403);

    const noNetwork = await onRequestPost(
      requestContext(1, undefined, { networkAddress: null }).context,
    );
    expect(noNetwork.status).toBe(403);

    const invalidNetwork = await onRequestPost(
      requestContext(1, undefined, { networkAddress: 'not an address' }).context,
    );
    expect(invalidNetwork.status).toBe(403);
  });

  it('fails closed when the rate-limit salt is missing or too short', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const response = await onRequestPost(
      requestContext(1, undefined, { rateLimitSalt: 'too-short' }).context,
    );

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual({
      error: 'Inquiry storage is temporarily unavailable.',
    });
    expect(consoleError).toHaveBeenCalledWith(expect.stringContaining('inquiry_configuration_error'));
    consoleError.mockRestore();
  });

  it('returns 429 when the transactional insert does not acquire capacity', async () => {
    const { context } = requestContext(0);
    const response = await onRequestPost(context);

    expect(response.status).toBe(429);
    await expect(response.json()).resolves.toEqual({
      error: 'Inquiry limit reached. Try again later.',
    });
  });

  it('returns a generic 503 when D1 rejects the transaction', async () => {
    const { context } = requestContext(0, new Error('database detail'));
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const response = await onRequestPost(context);

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual({
      error: 'Inquiry storage is temporarily unavailable.',
    });
    expect(consoleError).toHaveBeenCalledWith(expect.stringContaining('inquiry_storage_error'));
    consoleError.mockRestore();
  });
});
