import { describe, expect, it } from 'vitest';
import {
  INQUIRY_BUDGET_RANGES,
  validateInquiryPayload,
} from '../inquiryContract';

const validPayload = {
  intent: 'commercial',
  email: 'BUYER@Example.com',
  organization: 'Example Corp',
  laneId: 'agent-reliability-audit',
  sourceRepo: 'stage-pilot',
  budgetRange: INQUIRY_BUDGET_RANGES[2],
  summary: 'We need a scoped reliability review for a production agent workflow.',
  consent: true,
  website: '',
};

describe('validateInquiryPayload', () => {
  it('normalizes and accepts a bounded inquiry', () => {
    const result = validateInquiryPayload(validPayload);

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.email).toBe('buyer@example.com');
    expect(result.isBot).toBe(false);
  });

  it('rejects unknown lanes and missing consent', () => {
    expect(validateInquiryPayload({ ...validPayload, laneId: 'made-up' })).toEqual({
      ok: false,
      error: 'Choose a valid service.',
    });
    expect(validateInquiryPayload({ ...validPayload, consent: false })).toEqual({
      ok: false,
      error: 'Consent is required to process the inquiry.',
    });
  });

  it('accepts explicit product research and defaults legacy submissions to commercial', () => {
    const productResearch = validateInquiryPayload({
      ...validPayload,
      intent: 'product-research',
      budgetRange: '5-10-month',
    });
    expect(productResearch.ok && productResearch.value.intent).toBe('product-research');

    const { intent: _intent, ...legacyPayload } = validPayload;
    const legacy = validateInquiryPayload(legacyPayload);
    expect(legacy.ok && legacy.value.intent).toBe('commercial');
  });

  it('keeps commercial and product-research price ranges separate', () => {
    expect(validateInquiryPayload({
      ...validPayload,
      budgetRange: '5-10-month',
    })).toEqual({
      ok: false,
      error: 'Choose a commercial budget range.',
    });

    expect(validateInquiryPayload({
      ...validPayload,
      intent: 'product-research',
      budgetRange: '2500-5000',
    })).toEqual({
      ok: false,
      error: 'Choose a product research price range.',
    });
  });

  it('requires product context for research and support, then normalizes support budget', () => {
    expect(validateInquiryPayload({
      ...validPayload,
      intent: 'support',
      sourceRepo: '',
    })).toEqual({
      ok: false,
      error: 'Source repository is invalid.',
    });

    const support = validateInquiryPayload({
      ...validPayload,
      intent: 'support',
      budgetRange: '10000-plus',
    });
    expect(support.ok).toBe(true);
    if (!support.ok) return;
    expect(support.value.budgetRange).toBe('not-sure');
  });

  it('rejects malformed, unknown, and lane-mismatched source repositories', () => {
    expect(validateInquiryPayload({ ...validPayload, sourceRepo: '../secret' }).ok).toBe(false);
    expect(validateInquiryPayload({
      ...validPayload,
      sourceRepo: 'unknown-repository',
    })).toEqual({
      ok: false,
      error: 'Choose a recognized product or repository.',
    });
    expect(validateInquiryPayload({
      ...validPayload,
      laneId: 'architecture-scope-sprint',
    })).toEqual({
      ok: false,
      error: 'The selected product does not match the service.',
    });
  });

  it('accepts Jalhae research and support through its mapped consumer lane', () => {
    const productResearch = validateInquiryPayload({
      ...validPayload,
      intent: 'product-research',
      laneId: 'consumer-prototype-customization',
      sourceRepo: 'jalhae',
      budgetRange: '5-10-month',
    });
    expect(productResearch.ok).toBe(true);

    const support = validateInquiryPayload({
      ...validPayload,
      intent: 'support',
      laneId: 'consumer-prototype-customization',
      sourceRepo: 'jalhae',
      budgetRange: '',
    });
    expect(support.ok).toBe(true);
  });

  it('rejects oversized summaries', () => {
    expect(validateInquiryPayload({ ...validPayload, summary: 'x'.repeat(4_001) }).ok).toBe(false);
  });

  it('marks the hidden website field as bot traffic without dropping the request contract', () => {
    const result = validateInquiryPayload({ ...validPayload, website: 'https://spam.invalid' });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.isBot).toBe(true);
  });
});
