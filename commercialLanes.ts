import type { InquiryLaneId } from './inquiryContract';

export type BillingMode = 'free' | 'quote' | 'one-time' | 'supporter';

export interface CommercialLane {
  id: InquiryLaneId;
  name: string;
  buyer: string;
  billingMode: BillingMode;
  priceAnchor: string;
  concreteDeliverable: string;
  ctaLabel: string;
  paidMotion: string;
  tagline: string;
  primaryRepos: string[];
  supportRepos: string[];
  proofSignal: string;
  fallbackCtaUrl: string;
  dataLabSignal: string;
  privacyBoundary: string;
}

export const PORTFOLIO_COMMERCE_BASE_URL = 'https://kim3310-doeon-kim-portfolio.pages.dev/';

export const resourceUrlForRepo = (repoSlug: string): string => {
  const url = new URL(PORTFOLIO_COMMERCE_BASE_URL);
  url.pathname = `/resources/${repoSlug}/`;
  url.search = '';
  url.hash = '';
  return url.toString();
};

export const commerceUrlForRepo = resourceUrlForRepo;

export const inquiryUrlForLane = (
  laneId: InquiryLaneId,
  sourceRepo: string,
): string => {
  const url = new URL(PORTFOLIO_COMMERCE_BASE_URL);
  url.searchParams.set('offer', sourceRepo);
  url.searchParams.set('inquiry', laneId);
  url.hash = 'private-inquiry';
  return url.toString();
};

export const resourceUrlForLane = (lane: CommercialLane): string =>
  resourceUrlForRepo(lane.primaryRepos[0] ?? 'doeon-kim-portfolio');

export const isExternalCommerceUrl = (value: string): boolean => {
  try {
    return new URL(value).origin !== new URL(PORTFOLIO_COMMERCE_BASE_URL).origin;
  } catch {
    return false;
  }
};

export const checkoutEnvKeyForLane = (laneId: string): string =>
  `VITE_CHECKOUT_${laneId.toUpperCase().replace(/[^A-Z0-9]+/g, '_')}_URL`;

const isSafeHostedCheckoutUrl = (value: unknown): value is string => {
  if (typeof value !== 'string' || value.trim() === '') return false;

  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

export const resolveCheckoutUrl = (
  lane: CommercialLane,
  env: Record<string, unknown> = import.meta.env,
): string => {
  if (lane.billingMode === 'free') return lane.fallbackCtaUrl;
  if (lane.billingMode === 'quote') return lane.fallbackCtaUrl;

  const laneCheckoutUrl = env[checkoutEnvKeyForLane(lane.id)];

  if (isSafeHostedCheckoutUrl(laneCheckoutUrl)) return laneCheckoutUrl;
  return lane.fallbackCtaUrl;
};

export const laneForRepo = (repoSlug: string): CommercialLane | undefined => {
  const normalizedRepo = repoSlug.toLowerCase();
  return COMMERCIAL_LANES.find(lane =>
    [...lane.primaryRepos, ...lane.supportRepos].some(repo => repo.toLowerCase() === normalizedRepo),
  );
};

export const COMMERCIAL_LANES: CommercialLane[] = [
  {
    id: 'architecture-scope-sprint',
    name: 'Architecture Scope Sprint',
    buyer: 'Builders comparing implementation patterns before committing to a stack',
    billingMode: 'one-time',
    priceAnchor: 'Fixed scope from USD 900 (non-binding starting point)',
    concreteDeliverable: 'System context map, architecture diagram, risk register, delivery slices, and implementation estimate.',
    ctaLabel: 'Discuss scope privately',
    paidMotion: 'No active checkout; final scope, timing, and fees are confirmed in writing.',
    tagline: 'Turn an existing system context into a bounded architecture review with explicit assumptions, risks, and delivery slices.',
    primaryRepos: ['KIM3310', 'doeon-kim-portfolio'],
    supportRepos: ['twincity-ui'],
    proofSignal: 'Architecture · implementation slices · risk register',
    fallbackCtaUrl: inquiryUrlForLane('architecture-scope-sprint', 'KIM3310'),
    dataLabSignal: 'Public proof uses synthetic or fixture data; private customer material is excluded.',
    privacyBoundary: 'No sale of personal data; contact messages remain separate from analytics',
  },
  {
    id: 'agent-reliability-audit',
    name: 'Agent Reliability Audit',
    buyer: 'AI builders comparing agent runtimes, retries, tool calls, and provider behavior',
    billingMode: 'one-time',
    priceAnchor: 'Fixed audit from USD 1,500 (non-binding starting point)',
    concreteDeliverable: 'Private scenario suite, trace review, failure taxonomy, provider scorecard, and prioritized remediation plan.',
    ctaLabel: 'Discuss scope privately',
    paidMotion: 'No active checkout; final scope, timing, and fees are confirmed in writing.',
    tagline: 'Test a bounded set of private agent scenarios and turn trace failures into a prioritized remediation plan.',
    primaryRepos: ['stage-pilot', 'agent-runtime-go', 'agent-orchestration-benchmark'],
    supportRepos: ['ai-agent-production-lab', 'ai-security-redteam-lab', 'tool-call-finetune-lab', 'multi-cli-pilot'],
    proofSignal: 'Tool traces · exact-sequence evals · adversarial cases',
    fallbackCtaUrl: inquiryUrlForLane('agent-reliability-audit', 'stage-pilot'),
    dataLabSignal: 'Public proof uses synthetic or fixture data; private customer material is excluded.',
    privacyBoundary: 'Sensitive prompts, tool traces, and private scenarios stay ad-free and out of aggregate datasets',
  },
  {
    id: 'private-ai-readiness-sprint',
    name: 'Private AI Readiness Sprint',
    buyer: 'Teams studying governance, RAG evaluation, and private deployment patterns',
    billingMode: 'quote',
    priceAnchor: 'Typical discovery scope from USD 2,500 (non-binding starting point)',
    concreteDeliverable: 'Use-case scorecard, data and policy boundaries, evaluation plan, deployment options, and go or no-go roadmap.',
    ctaLabel: 'Discuss scope privately',
    paidMotion: 'No active checkout; final scope, timing, and fees are confirmed in writing.',
    tagline: 'Assess one enterprise AI use case across value, data, policy, evaluation, and deployment boundaries.',
    primaryRepos: ['aix-pilot', 'enterprise-llm-adoption-kit', 'llm-onprem-deployment-kit'],
    supportRepos: ['Nexus-Hive', 'lakehouse-contract-lab', 'districtpilot-ai'],
    proofSignal: 'Governance gates · eval design · private deployment',
    fallbackCtaUrl: inquiryUrlForLane('private-ai-readiness-sprint', 'aix-pilot'),
    dataLabSignal: 'Public proof uses synthetic or fixture data; private customer material is excluded.',
    privacyBoundary: 'Enterprise content, connector data, and governance reviews remain private by default',
  },
  {
    id: 'incident-operations-exercise',
    name: 'Incident Operations Exercise',
    buyer: 'SOC, NOC, MSP, infrastructure, and service assurance operators',
    billingMode: 'one-time',
    priceAnchor: 'Facilitated exercise from USD 1,800 (non-binding starting point)',
    concreteDeliverable: 'Scenario pack, incident replay board, role and handoff map, evidence checklist, and after-action report.',
    ctaLabel: 'Discuss scope privately',
    paidMotion: 'No active checkout; final scope, timing, and fees are confirmed in writing.',
    tagline: 'Run a synthetic incident exercise focused on escalation, handoff, and after-action evidence.',
    primaryRepos: ['AegisOps', 'security-threat-response-workbench', 'nw-service-assurance-workbench'],
    supportRepos: ['ops-reliability-workbench', 'honeypot'],
    proofSignal: 'Incident replay · operator handoff · SLA evidence',
    fallbackCtaUrl: inquiryUrlForLane('incident-operations-exercise', 'AegisOps'),
    dataLabSignal: 'Public proof uses synthetic or fixture data; private customer material is excluded.',
    privacyBoundary: 'Real incidents, logs, screenshots, and customer environments are never ad surfaces',
  },
  {
    id: 'secure-workflow-pilot',
    name: 'Secure Workflow Pilot',
    buyer: 'Operators studying local-first document and approval workflow patterns',
    billingMode: 'quote',
    priceAnchor: 'Pilot scope from USD 2,000 (non-binding starting point)',
    concreteDeliverable: 'One bounded workflow, private processing boundary, approval gate, audit trail, and deployment runbook.',
    ctaLabel: 'Discuss scope privately',
    paidMotion: 'No active checkout; final scope, timing, and fees are confirmed in writing.',
    tagline: 'Scope one approval-sensitive workflow with private processing, audit, and human-release boundaries.',
    primaryRepos: ['secure-xl2hwp-local', 'Upstage-DocuAgent', 'smallbiz-ops-copilot'],
    supportRepos: ['regulated-case-workbench'],
    proofSignal: 'Private processing · approval gates · audit trail',
    fallbackCtaUrl: inquiryUrlForLane('secure-workflow-pilot', 'secure-xl2hwp-local'),
    dataLabSignal: 'Public proof uses synthetic or fixture data; private customer material is excluded.',
    privacyBoundary: 'Documents, case data, uploads, and regulated examples are never used for ads or sold insights',
  },
  {
    id: 'industrial-validation-discovery',
    name: 'Industrial Validation Discovery',
    buyer: 'Manufacturing, quality, and applied vision teams studying validation evidence',
    billingMode: 'quote',
    priceAnchor: 'Discovery scope from USD 2,500 (non-binding starting point)',
    concreteDeliverable: 'Data suitability review, baseline evaluation, model-card draft, human-review boundary, and pilot acceptance criteria.',
    ctaLabel: 'Discuss scope privately',
    paidMotion: 'No active checkout; final scope, timing, and fees are confirmed in writing.',
    tagline: 'Determine whether an industrial AI use case has sufficient data, ownership, and acceptance criteria for a pilot.',
    primaryRepos: ['fab-ops-yield-control-tower', 'weld-defect-vision'],
    supportRepos: ['memory-test-master-change-gate', 'retina-scan-ai'],
    proofSignal: 'Data suitability · model cards · review boundaries',
    fallbackCtaUrl: inquiryUrlForLane('industrial-validation-discovery', 'fab-ops-yield-control-tower'),
    dataLabSignal: 'Public proof uses synthetic or fixture data; private customer material is excluded.',
    privacyBoundary: 'Factory data, health imagery, and private validation results are excluded from ad and insight products',
  },
  {
    id: 'consumer-prototype-customization',
    name: 'Consumer Prototype Customization',
    buyer: 'Visitors exploring learning, accessibility, lifestyle, and lightweight game utilities',
    billingMode: 'one-time',
    priceAnchor: 'Fixed customization from USD 1,000 (non-binding starting point)',
    concreteDeliverable: 'One audience-specific flow, branded content set, privacy and claim boundary, deployment package, and handoff notes.',
    ctaLabel: 'Discuss scope privately',
    paidMotion: 'No active checkout; final scope, timing, and fees are confirmed in writing.',
    tagline: 'Adapt one bounded public utility flow with explicit privacy and claim boundaries.',
    primaryRepos: ['SteadyTap', 'beaver-study-orchestrator', 'kbbq-idle-unity'],
    supportRepos: ['the-savior', 'dream-interpretation-pages', 'quantum-workbench'],
    proofSignal: 'Learning flows · lightweight products · bounded claims',
    fallbackCtaUrl: inquiryUrlForLane('consumer-prototype-customization', 'SteadyTap'),
    dataLabSignal: 'Public proof uses synthetic or fixture data; private customer material is excluded.',
    privacyBoundary: 'Personal reflections, accessibility signals, and user-entered content are not sold',
  },
];
