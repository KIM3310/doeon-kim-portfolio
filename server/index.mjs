import http from 'node:http';
import { pathToFileURL } from 'node:url';

const PORT = Number(process.env.PORT || 8080);
const PRODUCT_NAME = 'Applied Ops Archive';
const MODEL = process.env.FABTWIN_MODEL || process.env.FABPILOT_MODEL || 'gemini-2.5-flash';
const API_KEY = process.env.GEMINI_API_KEY || '';
const ALLOW_MOCK = process.env.FABTWIN_ALLOW_MOCK === '1' || process.env.FABPILOT_ALLOW_MOCK === '1';

const resolveAllowedOrigins = () => {
  const raw = process.env.PORTFOLIO_CORS_ORIGINS || process.env.FABTWIN_CORS_ORIGINS || '';
  const configured = raw.split(',').map((value) => value.trim()).filter(Boolean);
  return new Set([
    ...configured,
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'https://doeon-kim-portfolio.pages.dev',
    'https://kim3310.github.io',
  ]);
};

const buildCorsHeaders = (req) => {
  const origin = typeof req.headers.origin === 'string' ? req.headers.origin.trim() : '';
  const headers = {
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
  if (origin && resolveAllowedOrigins().has(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
};

export const json = (req, res, status, body) => {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    ...buildCorsHeaders(req),
  });
  res.end(JSON.stringify(body));
};

const readBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    const err = new Error('Invalid JSON in request body');
    err.statusCode = 400;
    throw err;
  }
};

const buildPrompt = (mission) => `
You are generating an operator-ready semiconductor incident brief for ${PRODUCT_NAME}.

Return ONLY valid JSON with this exact shape:
{
  "operatorBrief": "string",
  "reviewerSummary": "string",
  "nextSafeAction": "string"
}

Mission title: ${mission.incident?.title || mission.title || 'Unknown mission'}
Severity: ${mission.incident?.severity || mission.severity || 'Unknown'}
Summary: ${mission.incident?.summary || mission.summary || ''}
Window: ${mission.incident?.window || mission.window || ''}
Owner: ${mission.incident?.owner || mission.owner || ''}
Root cause: ${mission.incident?.rootCause || mission.rootCause || ''}
Escalation: ${mission.incident?.escalation || mission.escalation || ''}

Evidence:
${(mission.evidenceNodes || []).map((item) => `- ${item.title}: ${item.detail}`).join('\n')}

Decision trace:
${(mission.decisionTrace || []).map((item) => `- ${item.label}: ${item.copy}`).join('\n')}

Automation steps:
${(mission.automationSteps || []).map((item) => `- [${item.state}] ${item.title}: ${item.copy}`).join('\n')}

Handoff:
${(mission.handoff || []).map((item) => `- ${item.label}: ${item.value}`).join('\n')}

Requirements:
- concise, operator-safe English
- mention approval boundary explicitly
- mention the most important next safe action
- do not invent new evidence
`.trim();

const buildMockResponse = (mission) => ({
  operatorBrief: [
    `Mission: ${mission.incident?.title || mission.title}`,
    `Severity: ${mission.incident?.severity || mission.severity}`,
    `Owner: ${mission.incident?.owner || mission.owner}`,
    '',
    `Summary: ${mission.incident?.summary || mission.summary}`,
    `Root cause hypothesis: ${mission.incident?.rootCause || mission.rootCause}`,
    `Approval boundary: ${(mission.automationSteps || []).find((item) => item.state === 'blocked')?.copy || 'Human approval required before real-world action.'}`,
  ].join('\n'),
  reviewerSummary: `${PRODUCT_NAME} identified ${(mission.evidenceNodes || []).length} evidence nodes and staged ${(mission.automationSteps || []).length} bounded next steps for reviewer inspection.`,
  nextSafeAction: (mission.automationSteps || []).find((item) => item.state === 'ready')?.title || 'Review evidence and confirm the safest bounded action.',
});

const generateLiveBrief = async (mission) => {
  if (!API_KEY) {
    if (ALLOW_MOCK) return buildMockResponse(mission);
    throw new Error('Missing GEMINI_API_KEY');
  }

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': API_KEY,
    },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: buildPrompt(mission) }] }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Gemini request failed (${response.status}): ${text}`);
  }

  const payload = await response.json();
  const text = payload?.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join('').trim();
  if (!text) throw new Error('Gemini response did not include text');
  return JSON.parse(text);
};

const server = http.createServer(async (req, res) => {
  if (!req.url) return json(req, res, 400, { error: 'Missing URL' });
  if (req.method === 'OPTIONS') return json(req, res, 200, { ok: true });

  if (req.method === 'GET' && req.url === '/health') {
    return json(req, res, 200, {
      ok: true,
      service: 'fabtwin-runtime',
      ready: Boolean(API_KEY) || ALLOW_MOCK,
      mode: API_KEY ? 'gemini' : ALLOW_MOCK ? 'mock' : 'unconfigured',
      model: MODEL,
    });
  }

  if (req.method === 'POST' && req.url === '/api/mission-brief') {
    try {
      const body = await readBody(req);
      const mission = body?.mission;
      if (!mission) return json(req, res, 400, { error: 'Missing mission payload' });
      const result = await generateLiveBrief(mission);
      return json(req, res, 200, { ok: true, mode: API_KEY ? 'gemini' : 'mock', ...result });
    } catch (error) {
      const status = error?.statusCode || 500;
      return json(req, res, status, {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown runtime failure',
      });
    }
  }

  return json(req, res, 404, { error: 'Not found' });
});

const isEntrypoint =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isEntrypoint) {
  server.listen(PORT, () => {
    console.log(`[fabtwin-runtime] listening on http://localhost:${PORT}`);
    console.log(
      `[fabtwin-runtime] mode=${API_KEY ? 'gemini' : ALLOW_MOCK ? 'mock' : 'unconfigured'} model=${MODEL}`
    );
  });
}

export { buildCorsHeaders, resolveAllowedOrigins, server };
