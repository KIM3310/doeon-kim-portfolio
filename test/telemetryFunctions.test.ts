import { describe, expect, it, vi } from 'vitest';
import {
  TELEMETRY_CONSENT_VERSION,
  TELEMETRY_RATE_LIMIT_DAILY_LIMIT,
} from '../telemetryContract';
import { onRequestGet } from '../functions/api/benchmarks';
import { onRequestPost } from '../functions/api/events';

const RATE_LIMIT_SALT = 'test-telemetry-rate-limit-salt-with-at-least-32-characters';
const NETWORK_ADDRESS = '203.0.113.22';
const ORIGIN = 'https://stage-pilot.pages.dev';

const validPayload = {
  repo: 'stage-pilot',
  event: 'resource_view',
  surface: 'central_resource',
  consentVersion: TELEMETRY_CONSENT_VERSION,
};

interface CapturedStatement {
  sql: string;
  bindings: unknown[];
  bind: (...values: unknown[]) => CapturedStatement;
  first: <T>() => Promise<T>;
  all: <T>() => Promise<{ results: T[] }>;
}

const statement = (
  sql: string,
  bindings: unknown[] = [],
  firstResult: unknown = { total: 0 },
  allResults: unknown[] = [],
): CapturedStatement => ({
  sql,
  bindings,
  bind: (...values: unknown[]) => statement(sql, values, firstResult, allResults),
  first: async <T>() => firstResult as T,
  all: async <T>() => ({ results: allResults as T[] }),
});

const eventContext = (
  options: {
    body?: string;
    aggregateChanges?: number;
    batchError?: Error;
    origin?: string | null;
    networkAddress?: string | null;
    rateLimitSalt?: string;
    contentType?: string;
  } = {},
): {
  context: Parameters<typeof onRequestPost>[0];
  batch: ReturnType<typeof vi.fn>;
} => {
  const batch = vi.fn(async () => {
    if (options.batchError) throw options.batchError;
    return [
      { meta: { changes: 0 } },
      { meta: { changes: 1 } },
      { meta: { changes: options.aggregateChanges ?? 1 } },
    ];
  });
  const headers = new Headers({
    'Content-Type': options.contentType ?? 'application/json',
  });
  if (options.origin !== null) {
    headers.set('Origin', options.origin ?? ORIGIN);
  }
  if (options.networkAddress !== null) {
    headers.set('CF-Connecting-IP', options.networkAddress ?? NETWORK_ADDRESS);
  }

  return {
    context: {
      request: new Request('https://kim3310-doeon-kim-portfolio.pages.dev/api/events', {
        method: 'POST',
        headers,
        body: options.body ?? JSON.stringify(validPayload),
      }),
      env: {
        LEADS_DB: {
          prepare: (sql: string) => statement(sql),
          batch,
        },
        TELEMETRY_RATE_LIMIT_SALT: options.rateLimitSalt ?? RATE_LIMIT_SALT,
      },
    } as unknown as Parameters<typeof onRequestPost>[0],
    batch,
  };
};

describe('/api/events', () => {
  it('stores only aggregate counters and hashed rate-limit fingerprints', async () => {
    const { context, batch } = eventContext();
    const response = await onRequestPost(context);

    expect(response.status).toBe(202);
    await expect(response.json()).resolves.toEqual({ accepted: true });
    expect(batch).toHaveBeenCalledTimes(1);

    const [statements] = batch.mock.calls[0] as [CapturedStatement[]];
    expect(statements).toHaveLength(3);
    expect(statements[0]?.sql).toContain('DELETE FROM telemetry_rate_limits');
    expect(statements[1]?.sql).toContain('INSERT INTO telemetry_rate_limits');
    expect(statements[2]?.sql).toContain('INSERT INTO telemetry_daily_counters');
    expect(statements[2]?.sql).toContain('ON CONFLICT');

    const bindings = statements.flatMap(item => item.bindings);
    expect(bindings).toContain('stage-pilot');
    expect(bindings).toContain('resource_view');
    expect(bindings).toContain('central_resource');
    expect(bindings).toContain(TELEMETRY_RATE_LIMIT_DAILY_LIMIT);
    expect(bindings).not.toContain(NETWORK_ADDRESS);
    expect(bindings).not.toContain(JSON.stringify(validPayload));
    expect(bindings.some(value => typeof value === 'string' && /^[0-9a-f]{64}$/.test(value))).toBe(true);
  });

  it('rejects oversized, non-exact, and origin-mismatched submissions', async () => {
    const oversized = await onRequestPost(
      eventContext({
        body: JSON.stringify({
          ...validPayload,
          surface: 'x'.repeat(513),
        }),
      }).context,
    );
    expect(oversized.status).toBe(413);

    const extraField = await onRequestPost(
      eventContext({
        body: JSON.stringify({ ...validPayload, url: 'https://example.com' }),
      }).context,
    );
    expect(extraField.status).toBe(400);

    const mismatched = await onRequestPost(
      eventContext({
        body: JSON.stringify({ ...validPayload, repo: 'aix-pilot' }),
      }).context,
    );
    expect(mismatched.status).toBe(403);
  });

  it('allows the central portfolio origin to submit any allowed repo', async () => {
    const response = await onRequestPost(
      eventContext({
        origin: 'https://kim3310-doeon-kim-portfolio.pages.dev',
        body: JSON.stringify({ ...validPayload, repo: 'aix-pilot' }),
      }).context,
    );

    expect(response.status).toBe(202);
  });

  it('fails closed without a secret salt or verifiable network address', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const noSalt = await onRequestPost(
      eventContext({ rateLimitSalt: 'too-short' }).context,
    );
    expect(noSalt.status).toBe(503);
    expect(consoleError).toHaveBeenCalledWith(expect.stringContaining('telemetry_configuration_error'));
    consoleError.mockRestore();

    const noNetwork = await onRequestPost(
      eventContext({ networkAddress: null }).context,
    );
    expect(noNetwork.status).toBe(403);
  });

  it('returns 429 when aggregate counters are not updated because the fingerprint is over limit', async () => {
    const response = await onRequestPost(
      eventContext({ aggregateChanges: 0 }).context,
    );

    expect(response.status).toBe(429);
  });
});

describe('/api/benchmarks', () => {
  it('returns safe aggregate totals for an allowed repository', async () => {
    const prepared: CapturedStatement[] = [];
    const env = {
      LEADS_DB: {
        prepare: (sql: string) => {
          const firstResult = prepared.length < 2 ? { total: prepared.length === 0 ? 12 : 3 } : { total: 0 };
          const allResults = prepared.length === 2
            ? [{ name: 'resource_view', total: 12 }]
            : prepared.length === 3
              ? [{ name: 'central_resource', total: 12 }]
              : [];
          const item = statement(sql, [], firstResult, allResults);
          prepared.push(item);
          return item;
        },
      },
    };

    const response = await onRequestGet({
      request: new Request(
        'https://kim3310-doeon-kim-portfolio.pages.dev/api/benchmarks?repo=stage-pilot',
        { headers: { Origin: ORIGIN } },
      ),
      env,
    } as unknown as Parameters<typeof onRequestGet>[0]);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      repo: 'stage-pilot',
      totals: {
        allTime: 12,
        today: 3,
      },
      byEvent: [{ event: 'resource_view', total: 12 }],
      bySurface: [{ surface: 'central_resource', total: 12 }],
    });
    expect(prepared).toHaveLength(4);
    expect(prepared.every(item => item.sql.includes('telemetry_daily_counters'))).toBe(true);
  });

  it('rejects unknown repositories and unknown CORS origins', async () => {
    const env = { LEADS_DB: { prepare: (sql: string) => statement(sql) } };

    const unknownRepo = await onRequestGet({
      request: new Request(
        'https://kim3310-doeon-kim-portfolio.pages.dev/api/benchmarks?repo=jalhae',
      ),
      env,
    } as unknown as Parameters<typeof onRequestGet>[0]);
    expect(unknownRepo.status).toBe(400);

    const unknownOrigin = await onRequestGet({
      request: new Request(
        'https://kim3310-doeon-kim-portfolio.pages.dev/api/benchmarks?repo=stage-pilot',
        { headers: { Origin: 'https://attacker.invalid' } },
      ),
      env,
    } as unknown as Parameters<typeof onRequestGet>[0]);
    expect(unknownOrigin.status).toBe(403);
  });
});
