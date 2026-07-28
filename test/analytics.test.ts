import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  trackCommerceCtaClick,
  updateAnalyticsConsent,
} from '../analytics';

describe('commerce analytics consent', () => {
  afterEach(() => {
    delete window.gtag;
  });

  it('does not emit commerce events before analytics consent', () => {
    window.gtag = vi.fn();

    trackCommerceCtaClick('agent-reliability-audit', 'one-time', 'lane_checkout');

    expect(window.gtag).not.toHaveBeenCalled();
  });

  it('emits only lane-level commerce metadata after consent', () => {
    window.gtag = vi.fn();
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, 'granted');

    trackCommerceCtaClick('agent-reliability-audit', 'one-time', 'repo_router');

    expect(window.gtag).toHaveBeenCalledWith('event', 'commerce_cta_click', {
      lane_id: 'agent-reliability-audit',
      billing_mode: 'one-time',
      cta_kind: 'repo_router',
    });
  });

  it('keeps all advertising consent signals denied', () => {
    window.gtag = vi.fn();

    updateAnalyticsConsent('granted');

    expect(window.gtag).toHaveBeenCalledWith('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  });
});
