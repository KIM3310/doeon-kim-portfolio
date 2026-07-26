export type BillingMode = 'quote' | 'one-time' | 'supporter';

export interface CommercialLane {
  id: string;
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

const issueInquiryUrl = (title: string): string =>
  `https://github.com/KIM3310/doeon-kim-portfolio/issues/new?template=service-inquiry.yml&title=${encodeURIComponent(title)}`;

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
    id: 'storefront-architecture-packs',
    name: 'Storefront Architecture Packs',
    buyer: 'Technical buyers who want a fast map from portfolio proof to scoped implementation work',
    billingMode: 'one-time',
    priceAnchor: 'Architecture adaptation pack from USD 300',
    concreteDeliverable: 'Repo-to-roadmap brief, architecture diagram, risk notes, and a scoped implementation backlog.',
    ctaLabel: 'Buy architecture pack',
    paidMotion: 'Fixed architecture adaptation pack or implementation scoping bundle',
    tagline: 'A central commercial front door that turns the systems gallery into a paid architecture and implementation package.',
    primaryRepos: ['KIM3310', 'doeon-kim-portfolio'],
    supportRepos: [],
    proofSignal: 'Storefront · routing · architecture packs',
    fallbackCtaUrl: issueInquiryUrl('Private workspace inquiry: storefront architecture packs'),
  },
  {
    id: 'aix-governance-sprint',
    name: 'AIX Governance Sprint',
    buyer: 'Enterprise AI, platform, security, and governance teams',
    billingMode: 'quote',
    priceAnchor: 'Scope-before-invoice for private data, deployment, and security requirements',
    concreteDeliverable: 'Governance sprint readout with RAG/eval/DLP boundaries, KPI plan, and private deployment checklist.',
    ctaLabel: 'Scope governance sprint',
    paidMotion: 'Fixed-scope governance sprint, adoption evidence bundle, or private deployment add-on',
    tagline: 'RAG, policy gates, DLP, eval, KPI, and private deployment readiness without unsupported AI transformation claims.',
    primaryRepos: ['aix-pilot', 'enterprise-llm-adoption-kit', 'llm-onprem-deployment-kit'],
    supportRepos: [],
    proofSignal: 'Governance · eval · private deployment',
    fallbackCtaUrl: issueInquiryUrl('Private workspace inquiry: enterprise AI governance'),
  },
  {
    id: 'stagepilot-reliability-lab',
    name: 'StagePilot Reliability Lab',
    buyer: 'AI product teams and agent platform engineers',
    billingMode: 'one-time',
    priceAnchor: 'Reliability report pack from USD 500',
    concreteDeliverable: 'Private scenario suite, trace review, retry/parser findings, and provider scorecard summary.',
    ctaLabel: 'Buy reliability report',
    paidMotion: 'Private benchmark scenarios, hosted regression dashboard, or adapter implementation support',
    tagline: 'Tool-call parsing, retries, traces, benchmark reports, and provider routing for teams shipping real agent systems.',
    primaryRepos: ['stage-pilot', 'agent-runtime-go', 'agent-orchestration-benchmark'],
    supportRepos: ['ai-agent-production-lab', 'ai-security-redteam-lab', 'tool-call-finetune-lab', 'multi-cli-pilot'],
    proofSignal: 'Traces · retries · benchmark reports',
    fallbackCtaUrl: issueInquiryUrl('Private workspace inquiry: agent reliability'),
  },
  {
    id: 'aegisops-response-room',
    name: 'AegisOps Response Room',
    buyer: 'SOC, NOC, IDC, MSP, and infrastructure operations teams',
    billingMode: 'supporter',
    priceAnchor: 'Recurring tabletop support from USD 200/month after scope review',
    concreteDeliverable: 'Incident replay board, tabletop pack, handoff template, and recurring service assurance readout.',
    ctaLabel: 'Start response support',
    paidMotion: 'Tabletop scenario workspace, incident replay pack, or recurring service assurance report',
    tagline: 'Incident replay, service maps, tabletop response, handoff boards, and SLA evidence for operator teams.',
    primaryRepos: ['AegisOps', 'security-threat-response-workbench', 'nw-service-assurance-workbench'],
    supportRepos: ['ops-reliability-workbench', 'honeypot'],
    proofSignal: 'Incident replay · handoff · SLA evidence',
    fallbackCtaUrl: issueInquiryUrl('Private workspace inquiry: security operations'),
  },
  {
    id: 'nexus-data-contract-lab',
    name: 'Nexus Data Contract Lab',
    buyer: 'Data platform, analytics engineering, and operations BI teams',
    billingMode: 'quote',
    priceAnchor: 'Scope-before-invoice for connector, warehouse, and audit-export work',
    concreteDeliverable: 'Connector readiness map, data-quality contract pack, export boundary, and migration report.',
    ctaLabel: 'Scope data contract work',
    paidMotion: 'Connector pack, data-quality migration sprint, or audit/report export bundle',
    tagline: 'Governed NL-to-SQL, lakehouse contracts, Korean public-data automation, and report-ready mapping.',
    primaryRepos: ['Nexus-Hive', 'lakehouse-contract-lab', 'districtpilot-ai'],
    supportRepos: [],
    proofSignal: 'Contracts · public data · document automation',
    fallbackCtaUrl: issueInquiryUrl('Private workspace inquiry: governed data automation'),
  },
  {
    id: 'document-smb-ops-pilot',
    name: 'Document and SMB Ops Pilot',
    buyer: 'Owner-operated shops, agency ops leads, and Korean SMB support teams',
    billingMode: 'one-time',
    priceAnchor: 'Single workflow setup from USD 400',
    concreteDeliverable: 'Approval-safe inbox, public-data enrichment map, document handoff flow, and checkout-readiness checklist.',
    ctaLabel: 'Buy SMB ops setup',
    paidMotion: 'Single-vertical setup package with approval-safe inbox, public-data enrichment, and checkout readiness',
    tagline: 'Approval-first support and document automation with Korean public API and payment-provider readiness boundaries.',
    primaryRepos: ['secure-xl2hwp-local', 'Upstage-DocuAgent', 'smallbiz-ops-copilot'],
    supportRepos: [],
    proofSignal: 'Approval inbox · public APIs · document handoff',
    fallbackCtaUrl: issueInquiryUrl('Private workspace inquiry: document and small business ops pilot'),
  },
  {
    id: 'industrial-regulated-validation-pack',
    name: 'Industrial Regulated Validation Pack',
    buyer: 'Manufacturing operations, industrial AI validation, and human-review workflow teams',
    billingMode: 'quote',
    priceAnchor: 'Scope-before-invoice for dataset, regulated review, and model-card work',
    concreteDeliverable: 'Synthetic control-tower review, model-card/report pack, approval-gate map, and validation limitations note.',
    ctaLabel: 'Scope validation pack',
    paidMotion: 'Synthetic control-tower workshop, private dataset evaluation, or model-card/report package',
    tagline: 'Factory control-tower proof, inspection model cards, and guarded validation workflows without safety or diagnostic guarantees.',
    primaryRepos: ['fab-ops-yield-control-tower', 'weld-defect-vision', 'regulated-case-workbench'],
    supportRepos: ['memory-test-master-change-gate', 'retina-scan-ai'],
    proofSignal: 'Control tower · model cards · validation reports',
    fallbackCtaUrl: issueInquiryUrl('Private workspace inquiry: industrial and regulated validation'),
  },
  {
    id: 'consumer-learning-supporter-lane',
    name: 'Consumer Learning Supporter Lane',
    buyer: 'Supporters, educators, and small teams evaluating lightweight learning or lifestyle tools',
    billingMode: 'supporter',
    priceAnchor: 'Supporter bundle from USD 5/month or one-time theme/report packs from USD 20',
    concreteDeliverable: 'Supporter access plan, export/theme pack, classroom or cohort setup notes, and clear non-clinical boundaries.',
    ctaLabel: 'Support this lane',
    paidMotion: 'Supporter bundles, classroom setup notes, premium exports, or one-time theme/report packs',
    tagline: 'Consumer and education surfaces stay modest: display ads are limited to the approved dream-content site, with no regulated claims or unsupported paid promises.',
    primaryRepos: ['SteadyTap', 'kbbq-idle-unity', 'quantum-workbench'],
    supportRepos: ['the-savior', 'dream-interpretation-pages', 'beaver-study-orchestrator'],
    proofSignal: 'Supporter · education · export packs',
    fallbackCtaUrl: issueInquiryUrl('Private workspace inquiry: consumer learning supporter lane'),
  },
  {
    id: 'digital-twin-ops-readiness',
    name: 'Digital Twin Ops Readiness',
    buyer: 'Facility, logistics, and operations teams that need a synthetic digital-twin planning surface',
    billingMode: 'one-time',
    priceAnchor: 'Readiness review from USD 350',
    concreteDeliverable: 'Synthetic event replay, readiness dashboard notes, dispatch-flow sketch, and data-ingestion boundary.',
    ctaLabel: 'Buy readiness review',
    paidMotion: 'Readiness review, private map/event ingestion plan, or monthly operations report template',
    tagline: 'Digital-twin UI proof is packaged as planning and reporting support, not a claim of live facility integration.',
    primaryRepos: ['twincity-ui'],
    supportRepos: [],
    proofSignal: 'Replay · dispatch · readiness reports',
    fallbackCtaUrl: issueInquiryUrl('Private workspace inquiry: digital twin ops readiness'),
  },
];
