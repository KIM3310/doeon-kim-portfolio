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
    name: 'Architecture Utility Lab',
    buyer: 'Builders comparing implementation patterns before committing to a stack',
    billingMode: 'free',
    priceAnchor: 'Free public architecture utilities',
    concreteDeliverable: 'Repository maps, architecture diagrams, risk registers, delivery slices, and reproducible verification notes.',
    ctaLabel: 'Open architecture resources',
    paidMotion: 'Contextual ads may appear on public resource pages; portfolio and sensitive workflow pages stay ad-free',
    tagline: 'Use the portfolio as a free architecture lab for comparing system boundaries, deployment paths, and verification evidence.',
    primaryRepos: ['KIM3310', 'doeon-kim-portfolio'],
    supportRepos: ['twincity-ui'],
    proofSignal: 'Architecture · implementation slices · risk register',
    fallbackCtaUrl: resourceUrlForRepo('KIM3310'),
    dataLabSignal: 'Aggregated, consented page and benchmark patterns only',
    privacyBoundary: 'No sale of personal data; contact messages remain separate from analytics',
  },
  {
    id: 'agent-reliability-audit',
    name: 'Agent Benchmark Lab',
    buyer: 'AI builders comparing agent runtimes, retries, tool calls, and provider behavior',
    billingMode: 'free',
    priceAnchor: 'Free benchmark harnesses and sample reports',
    concreteDeliverable: 'Open methodology, fixtures, trace examples, failure taxonomies, scorecards, and reproducible benchmark reports.',
    ctaLabel: 'Open agent benchmarks',
    paidMotion: 'Public benchmark pages can support contextual ads and aggregate trend reports; private traces are never monetized',
    tagline: 'Compare agent reliability surfaces with inspectable traces, exact-sequence evals, and benchmark data instead of a storefront funnel.',
    primaryRepos: ['stage-pilot', 'agent-runtime-go', 'agent-orchestration-benchmark'],
    supportRepos: ['ai-agent-production-lab', 'ai-security-redteam-lab', 'tool-call-finetune-lab', 'multi-cli-pilot'],
    proofSignal: 'Tool traces · exact-sequence evals · adversarial cases',
    fallbackCtaUrl: resourceUrlForRepo('stage-pilot'),
    dataLabSignal: 'Anonymous aggregate runtime comparisons from consented public usage',
    privacyBoundary: 'Sensitive prompts, tool traces, and private scenarios stay ad-free and out of aggregate datasets',
  },
  {
    id: 'private-ai-readiness-sprint',
    name: 'Private AI Readiness Lab',
    buyer: 'Teams studying governance, RAG evaluation, and private deployment patterns',
    billingMode: 'free',
    priceAnchor: 'Free readiness checklists and synthetic-data demos',
    concreteDeliverable: 'Use-case scorecards, policy boundary examples, evaluation plans, deployment options, and go/no-go templates.',
    ctaLabel: 'Open readiness resources',
    paidMotion: 'Revenue comes from contextual ads on public explainers plus anonymous aggregate readiness benchmarks',
    tagline: 'Explore where enterprise AI is worth deploying, what must stay private, and how outcomes can be measured with synthetic evidence.',
    primaryRepos: ['aix-pilot', 'enterprise-llm-adoption-kit', 'llm-onprem-deployment-kit'],
    supportRepos: ['Nexus-Hive', 'lakehouse-contract-lab', 'districtpilot-ai'],
    proofSignal: 'Governance gates · eval design · private deployment',
    fallbackCtaUrl: resourceUrlForRepo('aix-pilot'),
    dataLabSignal: 'Aggregate readiness patterns from synthetic and consented public sessions',
    privacyBoundary: 'Enterprise content, connector data, and governance reviews remain private by default',
  },
  {
    id: 'incident-operations-exercise',
    name: 'Incident Operations Lab',
    buyer: 'SOC, NOC, MSP, infrastructure, and service assurance operators',
    billingMode: 'free',
    priceAnchor: 'Free incident replay and handoff templates',
    concreteDeliverable: 'Scenario packs, replay boards, role maps, evidence checklists, after-action report templates, and public demos.',
    ctaLabel: 'Open incident resources',
    paidMotion: 'Public learning pages can carry contextual ads; operational incident workflows remain ad-free',
    tagline: 'Practice detection, escalation, handoff, and recovery with public synthetic scenarios and inspectable operator evidence.',
    primaryRepos: ['AegisOps', 'security-threat-response-workbench', 'nw-service-assurance-workbench'],
    supportRepos: ['ops-reliability-workbench', 'honeypot'],
    proofSignal: 'Incident replay · operator handoff · SLA evidence',
    fallbackCtaUrl: resourceUrlForRepo('AegisOps'),
    dataLabSignal: 'Anonymous aggregate timing and workflow-friction benchmarks from public drills',
    privacyBoundary: 'Real incidents, logs, screenshots, and customer environments are never ad surfaces',
  },
  {
    id: 'secure-workflow-pilot',
    name: 'Secure Workflow Utility Lab',
    buyer: 'Operators studying local-first document and approval workflow patterns',
    billingMode: 'free',
    priceAnchor: 'Free local-first workflow demos and checklists',
    concreteDeliverable: 'Bounded workflow examples, local processing notes, approval gates, audit-trail patterns, and deployment runbooks.',
    ctaLabel: 'Open workflow resources',
    paidMotion: 'Sensitive workflow pages stay ad-free; only public, synthetic explainers may include contextual ads',
    tagline: 'Study document and case-work automation while preserving human release gates and sensitive-data boundaries.',
    primaryRepos: ['secure-xl2hwp-local', 'Upstage-DocuAgent', 'smallbiz-ops-copilot'],
    supportRepos: ['regulated-case-workbench'],
    proofSignal: 'Private processing · approval gates · audit trail',
    fallbackCtaUrl: resourceUrlForRepo('secure-xl2hwp-local'),
    dataLabSignal: 'Aggregate UX and checklist completion patterns from public synthetic demos only',
    privacyBoundary: 'Documents, case data, uploads, and regulated examples are never used for ads or sold insights',
  },
  {
    id: 'industrial-validation-discovery',
    name: 'Industrial Validation Data Lab',
    buyer: 'Manufacturing, quality, and applied vision teams studying validation evidence',
    billingMode: 'free',
    priceAnchor: 'Free validation templates and synthetic benchmark boards',
    concreteDeliverable: 'Data suitability templates, baseline evaluation examples, model-card drafts, human-review boundaries, and acceptance criteria.',
    ctaLabel: 'Open validation resources',
    paidMotion: 'Contextual ads and aggregate insights are limited to public synthetic resource pages',
    tagline: 'Assess whether an inspection or factory workflow has enough signal quality and operational ownership to justify deeper validation.',
    primaryRepos: ['fab-ops-yield-control-tower', 'weld-defect-vision'],
    supportRepos: ['memory-test-master-change-gate', 'retina-scan-ai'],
    proofSignal: 'Data suitability · model cards · review boundaries',
    fallbackCtaUrl: resourceUrlForRepo('fab-ops-yield-control-tower'),
    dataLabSignal: 'Aggregate public benchmark trends over synthetic examples and consented interactions',
    privacyBoundary: 'Factory data, health imagery, and private validation results are excluded from ad and insight products',
  },
  {
    id: 'consumer-prototype-customization',
    name: 'Consumer Utility Lab',
    buyer: 'Visitors exploring learning, accessibility, lifestyle, and lightweight game utilities',
    billingMode: 'free',
    priceAnchor: 'Free public utilities and explainers',
    concreteDeliverable: 'Audience-specific flows, local-first notes, claim boundaries, public demos, and handoff-ready source repositories.',
    ctaLabel: 'Open utility resources',
    paidMotion: 'Public consumer utility pages may use contextual ads; sensitive health or document-adjacent utilities stay ad-free',
    tagline: 'Use lightweight learning, accessibility, and game prototypes as free public utilities backed by inspectable source and privacy boundaries.',
    primaryRepos: ['SteadyTap', 'beaver-study-orchestrator', 'kbbq-idle-unity'],
    supportRepos: ['the-savior', 'dream-interpretation-pages', 'quantum-workbench'],
    proofSignal: 'Learning flows · lightweight products · bounded claims',
    fallbackCtaUrl: resourceUrlForRepo('SteadyTap'),
    dataLabSignal: 'Anonymous aggregate usage patterns from consented public utility interactions',
    privacyBoundary: 'Personal reflections, accessibility signals, and user-entered content are not sold',
  },
];
