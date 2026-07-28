import {
  isAllowedTelemetryOrigin,
  validateTelemetryRepo,
} from '../../telemetryContract';

type BenchmarkRow = {
  total: number;
};

type DimensionRow = {
  name: string;
  total: number;
};

const responseHeaders = (origin: string | null): HeadersInit => ({
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  ...(origin && isAllowedTelemetryOrigin(origin) ? { 'Access-Control-Allow-Origin': origin } : {}),
  'Cache-Control': 'no-store',
  'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
  'Content-Type': 'application/json; charset=utf-8',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
});

const json = (body: object, status: number, origin: string | null): Response =>
  Response.json(body, { status, headers: responseHeaders(origin) });

export const onRequestOptions: PagesFunction<PagesEnv> = async ({ request }) => {
  const origin = request.headers.get('Origin');
  if (origin && !isAllowedTelemetryOrigin(origin)) {
    return json({ error: 'Origin is not allowed.' }, 403, origin);
  }
  return new Response(null, { status: 204, headers: responseHeaders(origin) });
};

export const onRequestGet: PagesFunction<PagesEnv> = async ({ request, env }) => {
  const origin = request.headers.get('Origin');
  if (origin && !isAllowedTelemetryOrigin(origin)) {
    return json({ error: 'Origin is not allowed.' }, 403, origin);
  }

  const url = new URL(request.url);
  const repo = url.searchParams.get('repo');
  if (!validateTelemetryRepo(repo)) {
    return json({ error: 'Repository is not allowed.' }, 400, origin);
  }

  try {
    const [allTime, today, byEvent, bySurface] = await Promise.all([
      env.LEADS_DB.prepare(
        'SELECT COALESCE(SUM(count), 0) AS total FROM telemetry_daily_counters WHERE repo = ?',
      ).bind(repo).first<BenchmarkRow>(),
      env.LEADS_DB.prepare(
        `SELECT COALESCE(SUM(count), 0) AS total
         FROM telemetry_daily_counters
         WHERE repo = ? AND day = ?`,
      ).bind(repo, new Date().toISOString().slice(0, 10)).first<BenchmarkRow>(),
      env.LEADS_DB.prepare(
        `SELECT event AS name, SUM(count) AS total
         FROM telemetry_daily_counters
         WHERE repo = ?
         GROUP BY event
         ORDER BY total DESC, event ASC
         LIMIT 20`,
      ).bind(repo).all<DimensionRow>(),
      env.LEADS_DB.prepare(
        `SELECT surface AS name, SUM(count) AS total
         FROM telemetry_daily_counters
         WHERE repo = ?
         GROUP BY surface
         ORDER BY total DESC, surface ASC
         LIMIT 20`,
      ).bind(repo).all<DimensionRow>(),
    ]);

    return json({
      repo,
      totals: {
        allTime: Number(allTime?.total ?? 0),
        today: Number(today?.total ?? 0),
      },
      byEvent: byEvent.results.map(row => ({
        event: row.name,
        total: Number(row.total),
      })),
      bySurface: bySurface.results.map(row => ({
        surface: row.name,
        total: Number(row.total),
      })),
    }, 200, origin);
  } catch (error) {
    console.error(JSON.stringify({
      event: 'benchmark_storage_error',
      message: error instanceof Error ? error.message : 'Unknown D1 error',
    }));
    return json({ error: 'Benchmark totals are temporarily unavailable.' }, 503, origin);
  }
};

export const onRequest: PagesFunction<PagesEnv> = async context =>
  json({ error: 'Method not allowed.' }, 405, context.request.headers.get('Origin'));
