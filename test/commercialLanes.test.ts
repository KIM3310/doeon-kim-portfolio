import { describe, expect, it } from 'vitest';
import {
  COMMERCIAL_LANES,
  checkoutEnvKeyForLane,
  commerceUrlForRepo,
  inquiryUrlForLane,
  isExternalCommerceUrl,
  laneForRepo,
  resolveCheckoutUrl,
} from '../commercialLanes';
import { REPOSITORY_COVERAGE } from '../constants';

describe('COMMERCIAL_LANES', () => {
  it('keeps the commercial hub focused on seven sellable outcomes', () => {
    expect(COMMERCIAL_LANES).toHaveLength(7);

    for (const lane of COMMERCIAL_LANES) {
      expect(['quote', 'one-time', 'supporter']).toContain(lane.billingMode);
      expect(lane.priceAnchor).toBeTruthy();
      expect(lane.concreteDeliverable).toBeTruthy();
      expect(lane.ctaLabel).toBeTruthy();
      const primaryRepo = lane.primaryRepos[0];
      expect(primaryRepo).toBeDefined();
      if (!primaryRepo) continue;
      expect(lane.fallbackCtaUrl).toBe(
        inquiryUrlForLane(lane.id, primaryRepo),
      );
      expect(lane.fallbackCtaUrl).toContain('#private-inquiry');
      expect([...lane.primaryRepos, ...lane.supportRepos].every(repo => !repo.includes('https://'))).toBe(true);
    }
  });

  it('covers all 35 repositories exactly once across primary or supporting commercial coverage', () => {
    const expectedRepos = REPOSITORY_COVERAGE.flatMap(lane => lane.repositories).sort();
    const commercialRepos = COMMERCIAL_LANES.flatMap(lane => [...lane.primaryRepos, ...lane.supportRepos]).sort();

    expect(expectedRepos).toHaveLength(35);
    expect(new Set(expectedRepos).size).toBe(35);
    expect(commercialRepos).toEqual(expectedRepos);
    expect(new Set(commercialRepos).size).toBe(35);
  });

  it('maps offer query repo slugs to their commercial lane', () => {
    expect(laneForRepo('aix-pilot')?.id).toBe('private-ai-readiness-sprint');
    expect(laneForRepo('DOEON-KIM-PORTFOLIO')?.id).toBe('architecture-scope-sprint');
    expect(laneForRepo('twincity-ui')?.id).toBe('architecture-scope-sprint');
    expect(laneForRepo('not-a-repo')).toBeUndefined();
  });

  it('uses the fixed central commerce URL format for repo routing', () => {
    expect(commerceUrlForRepo('stage-pilot')).toBe(
      'https://kim3310-doeon-kim-portfolio.pages.dev/?offer=stage-pilot#service-offers',
    );
  });

  it('resolves hosted checkout URLs from provider-agnostic Vite env keys with safe fallback', () => {
    const lane = COMMERCIAL_LANES[0];
    expect(lane).toBeDefined();
    if (!lane) return;
    const laneEnvKey = checkoutEnvKeyForLane(lane.id);

    expect(resolveCheckoutUrl(lane, {})).toBe(lane.fallbackCtaUrl);
    expect(resolveCheckoutUrl(lane, { [laneEnvKey]: 'https://checkout.example/lane' })).toBe('https://checkout.example/lane');
    expect(resolveCheckoutUrl(lane, { [laneEnvKey]: 'http://insecure.example/lane' })).toBe(lane.fallbackCtaUrl);
  });

  it('keeps quote-only lanes on the scoped inquiry route even when a checkout URL is configured', () => {
    const quoteLane = COMMERCIAL_LANES.find(lane => lane.billingMode === 'quote');
    expect(quoteLane).toBeDefined();
    if (!quoteLane) return;

    expect(resolveCheckoutUrl(quoteLane, {
      [checkoutEnvKeyForLane(quoteLane.id)]: 'https://checkout.example/unsafe-quote',
    })).toBe(quoteLane.fallbackCtaUrl);
  });

  it('opens only hosted provider URLs as external commerce', () => {
    expect(
      isExternalCommerceUrl(
        inquiryUrlForLane('agent-reliability-audit', 'stage-pilot'),
      ),
    ).toBe(false);
    expect(isExternalCommerceUrl('https://checkout.example/agent-audit')).toBe(true);
    expect(isExternalCommerceUrl('not-a-url')).toBe(false);
  });
});
