import { SERVICE_OFFERS } from './serviceOffers';

export const INQUIRY_MAX_BYTES = 12_000;
export const INQUIRY_RETENTION_DAYS = 90;
export const INQUIRY_CONSENT_VERSION = '2026-07-28';

export const INQUIRY_INTENTS = [
  'commercial',
  'product-research',
  'support',
] as const;

export const INQUIRY_LANE_IDS = [
  'architecture-scope-sprint',
  'agent-reliability-audit',
  'private-ai-readiness-sprint',
  'incident-operations-exercise',
  'secure-workflow-pilot',
  'industrial-validation-discovery',
  'consumer-prototype-customization',
] as const;

export const COMMERCIAL_BUDGET_RANGES = [
  'under-1000',
  '1000-2500',
  '2500-5000',
  '5000-10000',
  '10000-plus',
  'not-sure',
] as const;

export const PRODUCT_RESEARCH_BUDGET_RANGES = [
  'under-5-month',
  '5-10-month',
  '10-20-month',
  'one-time-only',
  'free-only',
] as const;

export const INQUIRY_BUDGET_RANGES = [
  ...COMMERCIAL_BUDGET_RANGES,
  ...PRODUCT_RESEARCH_BUDGET_RANGES,
] as const;

export type InquiryIntent = (typeof INQUIRY_INTENTS)[number];
export type InquiryLaneId = (typeof INQUIRY_LANE_IDS)[number];
export type InquiryBudgetRange = (typeof INQUIRY_BUDGET_RANGES)[number];

export const INQUIRY_SOURCE_LANES: Readonly<Record<string, InquiryLaneId>> =
  Object.freeze({
    ...Object.fromEntries(
      SERVICE_OFFERS.map(offer => [offer.repo, offer.laneId]),
    ),
    jalhae: 'consumer-prototype-customization',
  });

export interface InquirySubmission {
  intent: InquiryIntent;
  email: string;
  organization: string;
  laneId: InquiryLaneId;
  sourceRepo: string;
  budgetRange: InquiryBudgetRange;
  summary: string;
  consent: true;
  website: string;
}

export type InquiryValidationResult =
  | { ok: true; value: InquirySubmission; isBot: boolean }
  | { ok: false; error: string };

const laneIds = new Set<string>(INQUIRY_LANE_IDS);
const budgetRanges = new Set<string>(INQUIRY_BUDGET_RANGES);
const commercialBudgetRanges = new Set<string>(COMMERCIAL_BUDGET_RANGES);
const productResearchBudgetRanges = new Set<string>(PRODUCT_RESEARCH_BUDGET_RANGES);
const intents = new Set<string>(INQUIRY_INTENTS);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const repoPattern = /^[A-Za-z0-9._-]{1,100}$/;

const field = (record: Record<string, unknown>, key: string): string => {
  const value = record[key];
  return typeof value === 'string' ? value.trim() : '';
};

export const validateInquiryPayload = (payload: unknown): InquiryValidationResult => {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { ok: false, error: 'Request body must be a JSON object.' };
  }

  const record = payload as Record<string, unknown>;
  const rawIntent = field(record, 'intent') || 'commercial';
  const email = field(record, 'email').toLowerCase();
  const organization = field(record, 'organization');
  const laneId = field(record, 'laneId');
  const sourceRepo = field(record, 'sourceRepo');
  const rawBudgetRange = field(record, 'budgetRange');
  const summary = field(record, 'summary');
  const website = field(record, 'website');

  if (!intents.has(rawIntent)) {
    return { ok: false, error: 'Choose a valid inquiry type.' };
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return { ok: false, error: 'Enter a valid email address.' };
  }
  if (organization.length > 160) {
    return { ok: false, error: 'Organization must be 160 characters or fewer.' };
  }
  if (!laneIds.has(laneId)) {
    return { ok: false, error: 'Choose a valid service.' };
  }
  if (!repoPattern.test(sourceRepo)) {
    return { ok: false, error: 'Source repository is invalid.' };
  }
  const expectedLane = INQUIRY_SOURCE_LANES[sourceRepo];
  if (!expectedLane) {
    return { ok: false, error: 'Choose a recognized product or repository.' };
  }
  if (expectedLane !== laneId) {
    return { ok: false, error: 'The selected product does not match the service.' };
  }

  const budgetRange = rawIntent === 'support' ? 'not-sure' : rawBudgetRange;
  if (!budgetRanges.has(budgetRange)) {
    return { ok: false, error: 'Choose a valid budget range.' };
  }
  if (rawIntent === 'commercial' && !commercialBudgetRanges.has(budgetRange)) {
    return { ok: false, error: 'Choose a commercial budget range.' };
  }
  if (
    rawIntent === 'product-research' &&
    !productResearchBudgetRanges.has(budgetRange)
  ) {
    return { ok: false, error: 'Choose a product research price range.' };
  }
  if (summary.length < 20 || summary.length > 4_000) {
    return { ok: false, error: 'Project summary must be between 20 and 4,000 characters.' };
  }
  if (record.consent !== true) {
    return { ok: false, error: 'Consent is required to process the inquiry.' };
  }

  return {
    ok: true,
    isBot: website.length > 0,
    value: {
      intent: rawIntent as InquiryIntent,
      email,
      organization,
      laneId: laneId as InquiryLaneId,
      sourceRepo,
      budgetRange: budgetRange as InquiryBudgetRange,
      summary,
      consent: true,
      website,
    },
  };
};
