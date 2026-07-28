import type { InquiryLaneId } from './inquiryContract';

export type BillingMode = 'quote' | 'one-time' | 'supporter';

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
}

export const PORTFOLIO_COMMERCE_BASE_URL = 'https://kim3310-doeon-kim-portfolio.pages.dev/';

export const commerceUrlForRepo = (repoSlug: string): string => {
  const url = new URL(PORTFOLIO_COMMERCE_BASE_URL);
  url.searchParams.set('offer', repoSlug);
  url.hash = 'service-offers';
  return url.toString();
};

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
    buyer: 'Product and engineering teams turning an idea or prototype into an implementation plan',
    billingMode: 'one-time',
    priceAnchor: 'Fixed scope from USD 900',
    concreteDeliverable: 'System context map, architecture diagram, risk register, delivery slices, and an implementation estimate.',
    ctaLabel: 'Request a scope sprint',
    paidMotion: 'A short paid discovery that can stand alone or become the first implementation milestone',
    tagline: 'Convert a loose product concept into a decision-ready technical plan with explicit boundaries, costs, and verification steps.',
    primaryRepos: ['KIM3310', 'doeon-kim-portfolio'],
    supportRepos: ['twincity-ui'],
    proofSignal: 'Architecture · implementation slices · risk register',
    fallbackCtaUrl: inquiryUrlForLane('architecture-scope-sprint', 'KIM3310'),
  },
  {
    id: 'agent-reliability-audit',
    name: 'Agent Reliability Audit',
    buyer: 'AI product teams and agent platform engineers',
    billingMode: 'one-time',
    priceAnchor: 'Fixed audit from USD 1,500',
    concreteDeliverable: 'Private scenario suite, trace review, failure taxonomy, provider scorecard, and prioritized remediation plan.',
    ctaLabel: 'Request an agent audit',
    paidMotion: 'Paid audit first; regression harness and runtime remediation are separately scoped follow-on work',
    tagline: 'Find expensive agent failures before users do: malformed tool calls, retry loops, provider drift, and unsafe side effects.',
    primaryRepos: ['stage-pilot', 'agent-runtime-go', 'agent-orchestration-benchmark'],
    supportRepos: ['ai-agent-production-lab', 'ai-security-redteam-lab', 'tool-call-finetune-lab', 'multi-cli-pilot'],
    proofSignal: 'Tool traces · exact-sequence evals · adversarial cases',
    fallbackCtaUrl: inquiryUrlForLane('agent-reliability-audit', 'stage-pilot'),
  },
  {
    id: 'private-ai-readiness-sprint',
    name: 'Private AI Readiness Sprint',
    buyer: 'Enterprise AI, data platform, security, and governance teams',
    billingMode: 'quote',
    priceAnchor: 'Typical discovery scope from USD 2,500',
    concreteDeliverable: 'Use-case scorecard, data and policy boundaries, evaluation plan, deployment options, and a go/no-go roadmap.',
    ctaLabel: 'Scope an AI readiness sprint',
    paidMotion: 'Readiness sprint first; private deployment, connector, and governance implementation follow only after evidence review',
    tagline: 'Choose where enterprise AI is worth deploying, what must stay private, and how the result will be measured before committing infrastructure.',
    primaryRepos: ['aix-pilot', 'enterprise-llm-adoption-kit', 'llm-onprem-deployment-kit'],
    supportRepos: ['Nexus-Hive', 'lakehouse-contract-lab', 'districtpilot-ai'],
    proofSignal: 'Governance gates · eval design · private deployment',
    fallbackCtaUrl: inquiryUrlForLane('private-ai-readiness-sprint', 'aix-pilot'),
  },
  {
    id: 'incident-operations-exercise',
    name: 'Incident Operations Exercise',
    buyer: 'SOC, NOC, MSP, infrastructure, and service assurance teams',
    billingMode: 'one-time',
    priceAnchor: 'Facilitated exercise from USD 1,800',
    concreteDeliverable: 'Scenario pack, incident replay board, role and handoff map, evidence checklist, and after-action report.',
    ctaLabel: 'Plan an incident exercise',
    paidMotion: 'A fixed tabletop exercise with optional workflow adaptation and recurring assurance reporting',
    tagline: 'Pressure-test detection, escalation, handoff, and recovery workflows with inspectable evidence instead of a slide-only tabletop.',
    primaryRepos: ['AegisOps', 'security-threat-response-workbench', 'nw-service-assurance-workbench'],
    supportRepos: ['ops-reliability-workbench', 'honeypot'],
    proofSignal: 'Incident replay · operator handoff · SLA evidence',
    fallbackCtaUrl: inquiryUrlForLane('incident-operations-exercise', 'AegisOps'),
  },
  {
    id: 'secure-workflow-pilot',
    name: 'Secure Workflow Pilot',
    buyer: 'Operations teams moving sensitive documents or approval-heavy work out of manual inboxes',
    billingMode: 'quote',
    priceAnchor: 'Pilot scope from USD 2,000',
    concreteDeliverable: 'One bounded workflow, local or private processing boundary, approval gate, audit trail, and deployment runbook.',
    ctaLabel: 'Scope a secure workflow',
    paidMotion: 'Start with one measurable workflow and redacted sample data; expand only after the approval and audit path is verified',
    tagline: 'Automate document and case work while keeping humans in control of release, escalation, and sensitive-data boundaries.',
    primaryRepos: ['secure-xl2hwp-local', 'Upstage-DocuAgent', 'smallbiz-ops-copilot'],
    supportRepos: ['regulated-case-workbench'],
    proofSignal: 'Private processing · approval gates · audit trail',
    fallbackCtaUrl: inquiryUrlForLane('secure-workflow-pilot', 'secure-xl2hwp-local'),
  },
  {
    id: 'industrial-validation-discovery',
    name: 'Industrial Validation Discovery',
    buyer: 'Manufacturing, quality, and applied vision teams evaluating an operational AI use case',
    billingMode: 'quote',
    priceAnchor: 'Discovery scope from USD 2,500',
    concreteDeliverable: 'Data suitability review, baseline evaluation, model-card draft, human-review boundary, and pilot acceptance criteria.',
    ctaLabel: 'Scope validation discovery',
    paidMotion: 'Discovery and evidence pack first; private dataset evaluation or control-tower integration is a separate milestone',
    tagline: 'Determine whether a factory or inspection use case has enough data, signal quality, and operational ownership to justify a pilot.',
    primaryRepos: ['fab-ops-yield-control-tower', 'weld-defect-vision'],
    supportRepos: ['memory-test-master-change-gate', 'retina-scan-ai'],
    proofSignal: 'Data suitability · model cards · review boundaries',
    fallbackCtaUrl: inquiryUrlForLane(
      'industrial-validation-discovery',
      'fab-ops-yield-control-tower',
    ),
  },
  {
    id: 'consumer-prototype-customization',
    name: 'Consumer Prototype Customization',
    buyer: 'Education, content, and small product teams adapting a tested prototype to a defined audience',
    billingMode: 'one-time',
    priceAnchor: 'Fixed customization from USD 1,000',
    concreteDeliverable: 'One audience-specific flow, branded content set, privacy and claim boundary, deployment package, and handoff notes.',
    ctaLabel: 'Request prototype customization',
    paidMotion: 'Paid customization or white-label prototype; advertising remains limited to the separately approved content site',
    tagline: 'Turn a learning, utility, or lightweight game prototype into a focused branded release without pretending every experiment is a standalone startup.',
    primaryRepos: ['SteadyTap', 'beaver-study-orchestrator', 'kbbq-idle-unity'],
    supportRepos: ['the-savior', 'dream-interpretation-pages', 'quantum-workbench'],
    proofSignal: 'Learning flows · lightweight products · bounded claims',
    fallbackCtaUrl: inquiryUrlForLane(
      'consumer-prototype-customization',
      'SteadyTap',
    ),
  },
];
