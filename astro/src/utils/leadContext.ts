export interface BaseContext {
  package_audience?: string;
  review_url?: string;
  page_url?: string;
  page_title?: string;
  selected_package?: string;
  package_price?: string;
  selected_service?: string;
  source_cta?: string;
  lead_intent?: string;
  [key: string]: any;
}

export interface LeadContext extends BaseContext {
  page_url: string;
  page_title: string;
  pathname: string;
  referrer: string;
  timestamp: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
}

export const buildLeadContext = (extraContext: BaseContext = {}): LeadContext => {
  if (typeof window === 'undefined') {
    return {
      page_url: '',
      page_title: '',
      pathname: '',
      referrer: '',
      timestamp: new Date().toISOString(),
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_content: '',
      utm_term: '',
      ...extraContext,
    };
  }

  const urlParams = new URLSearchParams(window.location.search);

  return {
    page_url: window.location.href,
    page_title: document.title,
    pathname: window.location.pathname,
    referrer: document.referrer || '',
    timestamp: new Date().toISOString(),
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_content: urlParams.get('utm_content') || '',
    utm_term: urlParams.get('utm_term') || '',
    ...extraContext,
  };
};

export const buildReviewFormUrl = (baseUrl: string, context: BaseContext = {}): string => {
  const url = new URL(baseUrl, typeof window !== 'undefined' ? window.location.origin : 'https://theeduassist.com');

  if (context.selected_package) {
    url.searchParams.set('package', context.selected_package);
  }
  if (context.selected_service) {
    url.searchParams.set('service', context.selected_service);
  }
  if (context.source_cta) {
    url.searchParams.set('source', context.source_cta);
  }

  // Preserve UTMs if they exist
  if (typeof window !== 'undefined') {
    const currentParams = new URLSearchParams(window.location.search);
    const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    utms.forEach(utm => {
      const val = currentParams.get(utm);
      if (val) {
        url.searchParams.set(utm, val);
      }
    });
  }

  return url.pathname + url.search;
};
