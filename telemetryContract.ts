export const TELEMETRY_MAX_BYTES = 512;
export const TELEMETRY_CONSENT_VERSION = '2026-07-28';
export const TELEMETRY_RATE_LIMIT_DAILY_LIMIT = 240;
export const TELEMETRY_ALLOWED_EVENTS = [
  'resource_view',
  'resource_cta_click',
  'architecture_doc_open',
  'privacy_support_open',
] as const;
export const TELEMETRY_ALLOWED_SURFACES = ['central_resource'] as const;

export const TELEMETRY_ALLOWED_REPOS = [
  'KIM3310',
  'doeon-kim-portfolio',
  'aix-pilot',
  'enterprise-llm-adoption-kit',
  'stage-pilot',
  'agent-runtime-go',
  'agent-orchestration-benchmark',
  'ai-agent-production-lab',
  'ai-security-redteam-lab',
  'tool-call-finetune-lab',
  'multi-cli-pilot',
  'AegisOps',
  'security-threat-response-workbench',
  'nw-service-assurance-workbench',
  'ops-reliability-workbench',
  'llm-onprem-deployment-kit',
  'secure-xl2hwp-local',
  'honeypot',
  'Upstage-DocuAgent',
  'smallbiz-ops-copilot',
  'Nexus-Hive',
  'lakehouse-contract-lab',
  'districtpilot-ai',
  'fab-ops-yield-control-tower',
  'memory-test-master-change-gate',
  'weld-defect-vision',
  'regulated-case-workbench',
  'retina-scan-ai',
  'the-savior',
  'dream-interpretation-pages',
  'SteadyTap',
  'kbbq-idle-unity',
  'quantum-workbench',
  'twincity-ui',
  'beaver-study-orchestrator',
] as const;

export type TelemetryRepo = (typeof TELEMETRY_ALLOWED_REPOS)[number];
export type TelemetryEvent = (typeof TELEMETRY_ALLOWED_EVENTS)[number];
export type TelemetrySurface = (typeof TELEMETRY_ALLOWED_SURFACES)[number];

export interface TelemetryEventSubmission {
  repo: TelemetryRepo;
  event: TelemetryEvent;
  surface: TelemetrySurface;
  consentVersion: typeof TELEMETRY_CONSENT_VERSION;
}

export type TelemetryValidationResult =
  | { ok: true; value: TelemetryEventSubmission }
  | { ok: false; error: string };

const CENTRAL_TELEMETRY_ORIGINS = new Set([
  'https://kim3310-doeon-kim-portfolio.pages.dev',
  'https://kim3310.github.io',
]);

const originRepoBindings = new Map<string, ReadonlySet<TelemetryRepo>>([
  [
    'https://aix-pilot.pages.dev',
    new Set<TelemetryRepo>(['aix-pilot']),
  ],
  [
    'https://enterprise-llm-kit.pages.dev',
    new Set<TelemetryRepo>(['enterprise-llm-adoption-kit']),
  ],
  [
    'https://stage-pilot.pages.dev',
    new Set<TelemetryRepo>(['stage-pilot']),
  ],
  [
    'https://aegisops-ai-incident-doctor.pages.dev',
    new Set<TelemetryRepo>(['AegisOps']),
  ],
  [
    'https://security-threat-response-workbench.ehdjs1351.workers.dev',
    new Set<TelemetryRepo>(['security-threat-response-workbench']),
  ],
  [
    'https://nw-service-assurance-workbench.ehdjs1351.workers.dev',
    new Set<TelemetryRepo>(['nw-service-assurance-workbench']),
  ],
  [
    'https://secure-xl2hwp-local.pages.dev',
    new Set<TelemetryRepo>(['secure-xl2hwp-local']),
  ],
  [
    'https://upstage-docuagent.pages.dev',
    new Set<TelemetryRepo>(['Upstage-DocuAgent']),
  ],
  [
    'https://smallbiz-ops-copilot.pages.dev',
    new Set<TelemetryRepo>(['smallbiz-ops-copilot']),
  ],
  [
    'https://nexus-hive.pages.dev',
    new Set<TelemetryRepo>(['Nexus-Hive']),
  ],
  [
    'https://fab-ops-yield-control-tower.pages.dev',
    new Set<TelemetryRepo>(['fab-ops-yield-control-tower']),
  ],
  [
    'https://regulated-case-workbench.pages.dev',
    new Set<TelemetryRepo>(['regulated-case-workbench']),
  ],
  [
    'https://steadytap.pages.dev',
    new Set<TelemetryRepo>(['SteadyTap']),
  ],
  [
    'https://kbbq-idle-unity.pages.dev',
    new Set<TelemetryRepo>(['kbbq-idle-unity']),
  ],
  [
    'https://twincity-ui.pages.dev',
    new Set<TelemetryRepo>(['twincity-ui']),
  ],
]);

const allowedRepos = new Set<string>(TELEMETRY_ALLOWED_REPOS);
const allowedEvents = new Set<string>(TELEMETRY_ALLOWED_EVENTS);
const allowedSurfaces = new Set<string>(TELEMETRY_ALLOWED_SURFACES);
const telemetryFields = new Set(['repo', 'event', 'surface', 'consentVersion']);

export const isAllowedTelemetryOrigin = (origin: string | null): boolean => {
  if (!origin) return false;
  if (CENTRAL_TELEMETRY_ORIGINS.has(origin)) return true;
  return originRepoBindings.has(origin);
};

export const isTelemetryOriginAllowedForRepo = (
  origin: string | null,
  repo: string,
): repo is TelemetryRepo => {
  if (!allowedRepos.has(repo)) return false;
  if (!origin) return false;
  if (CENTRAL_TELEMETRY_ORIGINS.has(origin)) return true;
  return originRepoBindings.get(origin)?.has(repo as TelemetryRepo) ?? false;
};

export const validateTelemetryPayload = (payload: unknown): TelemetryValidationResult => {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { ok: false, error: 'Request body must be a JSON object.' };
  }

  const record = payload as Record<string, unknown>;
  const keys = Object.keys(record);
  if (
    keys.length !== telemetryFields.size ||
    keys.some(key => !telemetryFields.has(key))
  ) {
    return { ok: false, error: 'Request body contains unsupported fields.' };
  }

  const repo = record.repo;
  const event = record.event;
  const surface = record.surface;
  const consentVersion = record.consentVersion;

  if (typeof repo !== 'string' || !allowedRepos.has(repo)) {
    return { ok: false, error: 'Repository is not allowed.' };
  }
  if (typeof event !== 'string' || !allowedEvents.has(event)) {
    return { ok: false, error: 'Event is invalid.' };
  }
  if (typeof surface !== 'string' || !allowedSurfaces.has(surface)) {
    return { ok: false, error: 'Surface is invalid.' };
  }
  if (consentVersion !== TELEMETRY_CONSENT_VERSION) {
    return { ok: false, error: 'Consent version is invalid.' };
  }

  return {
    ok: true,
    value: {
      repo: repo as TelemetryRepo,
      event: event as TelemetryEvent,
      surface: surface as TelemetrySurface,
      consentVersion: TELEMETRY_CONSENT_VERSION,
    },
  };
};

export const validateTelemetryRepo = (repo: string | null): repo is TelemetryRepo =>
  typeof repo === 'string' && allowedRepos.has(repo);
