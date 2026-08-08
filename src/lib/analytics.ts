import { EVENT } from '@/constants';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const UTM_PARAMS = {
  utm_source: 'gakuwaka_lp',
  utm_medium: 'referral',
  utm_campaign: 'gakuwaka_2026',
};

export function getFormUrlWithUtm(): string {
  const url = new URL(EVENT.formUrl);
  Object.entries(UTM_PARAMS).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
}

export function trackApplyClick(location: string): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'apply_click', {
      event_category: 'engagement',
      event_label: location,
    });
  }
}
