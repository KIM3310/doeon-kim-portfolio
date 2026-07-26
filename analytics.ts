export type AnalyticsConsent = 'granted' | 'denied';

export const ANALYTICS_CONSENT_STORAGE_KEY = 'kim3310-analytics-consent';

const hasAnalyticsConsent = (): boolean => {
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY) === 'granted';
  } catch {
    return false;
  }
};

export const updateAnalyticsConsent = (consent: AnalyticsConsent): void => {
  if (typeof window.gtag !== 'function') return;

  window.gtag('consent', 'update', {
    analytics_storage: consent,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
};

export const trackCommerceCtaClick = (
  laneId: string,
  billingMode: string,
  ctaKind: 'lane_checkout' | 'repo_router',
): void => {
  if (typeof window.gtag !== 'function' || !hasAnalyticsConsent()) return;

  window.gtag('event', 'commerce_cta_click', {
    lane_id: laneId,
    billing_mode: billingMode,
    cta_kind: ctaKind,
  });
};
