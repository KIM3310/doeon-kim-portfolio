import { describe, expect, it } from 'vitest';
import {
  COMMERCIAL_LANES,
  checkoutEnvKeyForLane,
  commerceUrlForRepo,
  inquiryUrlForLane,
  isExternalCommerceUrl,
  laneForRepo,
  resourceUrlForRepo,
  resolveCheckoutUrl,
} from '../commercialLanes';
import { REPOSITORY_COVERAGE } from '../constants';

describe('COMMERCIAL_LANES', () => {
  it('keeps seven bounded service lanes tied to separate public proof', () => {
    expect(COMMERCIAL_LANES).toHaveLength(7);

    for (const lane of COMMERCIAL_LANES) {
      expect(['one-time', 'quote']).toContain(lane.billingMode);
      expect(lane.priceAnchor).toMatch(/USD/);
      expect(lane.priceAnchor).toMatch(/non-binding/i);
      expect(lane.concreteDeliverable).toBeTruthy();
      expect(lane.ctaLabel).toBe('Discuss scope privately');
      expect(lane.dataLabSignal).toMatch(/synthetic|fixture/i);
      expect(lane.paidMotion).toMatch(/No active checkout/);
      expect(lane.privacyBoundary).toMatch(/No sale|never|excluded|not sold|private/i);
      const primaryRepo = lane.primaryRepos[0];
      expect(primaryRepo).toBeDefined();
      if (!primaryRepo) continue;
      expect(lane.fallbackCtaUrl).toBe(
        inquiryUrlForLane(lane.id, primaryRepo),
      );
      expect(resourceUrlForRepo(primaryRepo)).toContain(`/resources/${primaryRepo}/`);
      expect([...lane.primaryRepos, ...lane.supportRepos].every(repo => !repo.includes('https://'))).toBe(true);
    }
  });

  it('covers all 35 repositories exactly once across primary or supporting resource coverage', () => {
    const expectedRepos = REPOSITORY_COVERAGE.flatMap(lane => lane.repositories).sort();
    const resourceRepos = COMMERCIAL_LANES.flatMap(lane => [...lane.primaryRepos, ...lane.supportRepos]).sort();

    expect(expectedRepos).toHaveLength(35);
    expect(new Set(expectedRepos).size).toBe(35);
    expect(resourceRepos).toEqual(expectedRepos);
    expect(new Set(resourceRepos).size).toBe(35);
  });

  it('maps offer query repo slugs to their resource lane', () => {
    expect(laneForRepo('aix-pilot')?.id).toBe('private-ai-readiness-sprint');
    expect(laneForRepo('DOEON-KIM-PORTFOLIO')?.id).toBe('architecture-scope-sprint');
    expect(laneForRepo('twincity-ui')?.id).toBe('architecture-scope-sprint');
    expect(laneForRepo('not-a-repo')).toBeUndefined();
  });

  it('uses the fixed central resource URL format for repo routing', () => {
    expect(commerceUrlForRepo('stage-pilot')).toBe(
      'https://kim3310-doeon-kim-portfolio.pages.dev/resources/stage-pilot/',
    );
  });

  it('uses private inquiry as the fallback and only accepts secure hosted checkout URLs', () => {
    const oneTimeLane = COMMERCIAL_LANES.find(lane => lane.billingMode === 'one-time');
    const quoteLane = COMMERCIAL_LANES.find(lane => lane.billingMode === 'quote');
    expect(oneTimeLane).toBeDefined();
    expect(quoteLane).toBeDefined();
    if (!oneTimeLane || !quoteLane) return;
    const laneEnvKey = checkoutEnvKeyForLane(oneTimeLane.id);

    expect(resolveCheckoutUrl(oneTimeLane, {})).toBe(oneTimeLane.fallbackCtaUrl);
    expect(resolveCheckoutUrl(oneTimeLane, { [laneEnvKey]: 'https://checkout.example/lane' })).toBe('https://checkout.example/lane');
    expect(resolveCheckoutUrl(oneTimeLane, { [laneEnvKey]: 'http://insecure.example/lane' })).toBe(oneTimeLane.fallbackCtaUrl);
    expect(resolveCheckoutUrl(quoteLane, { [checkoutEnvKeyForLane(quoteLane.id)]: 'https://checkout.example/quote' })).toBe(quoteLane.fallbackCtaUrl);
  });

  it('retains legacy private inquiry URL generation for footer contact compatibility', () => {
    expect(inquiryUrlForLane('agent-reliability-audit', 'stage-pilot')).toBe(
      'https://kim3310-doeon-kim-portfolio.pages.dev/?offer=stage-pilot&inquiry=agent-reliability-audit#private-inquiry',
    );
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
