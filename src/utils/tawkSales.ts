import { buildLeadContext, buildReviewFormUrl } from './leadContext';

export interface TawkSalesContext {
  intent?: string;
  sourceCta?: string;
  [key: string]: any;
}

export interface PackageContext {
  packageAudience?: string;
  packageName?: string;
  packageSlug: string;
  packagePrice?: string;
  pageUrl?: string; // Kept for backwards compatibility
  pageTitle?: string; // Kept for backwards compatibility
  sourceCta?: string;
}

export interface ServiceContext {
  serviceSlug: string;
  pageUrl?: string; // Kept for backwards compatibility
  pageTitle?: string; // Kept for backwards compatibility
  sourceCta?: string;
}

export interface ContentContext {
  contentType: 'blog' | 'case_study';
  contentTitle: string;
  pageUrl?: string; // Kept for backwards compatibility
  pageTitle?: string; // Kept for backwards compatibility
  category?: string;
}

export interface PlatformContext {
  selected_platform: string;
  platform_group?: string;
  recommended_service?: string;
  recommended_package?: string;
  official_url?: string;
  pageUrl?: string;
  pageTitle?: string;
  sourceCta?: string;
  lead_intent?: string;
  project_type?: string;
  package_price?: string;
}

// Global declaration for Tawk API
declare global {
  interface Window {
    Tawk_API?: any;
  }
}

const attemptTawkAction = (actionFn: () => void, fallbackUrl: string = '/book-free-audit/') => {
  if (typeof window === 'undefined') return;

  try {
    if (window.Tawk_API && typeof window.Tawk_API.showWidget === 'function') {
      try { window.Tawk_API.showWidget(); } catch(e) {}

      if (typeof window.Tawk_API.maximize === 'function') {
        try { window.Tawk_API.maximize(); } catch(e) {}
      }

      actionFn();
    } else {
      window.location.href = fallbackUrl;
    }
  } catch (error) {
    console.warn("Tawk action failed", error);
    window.location.href = fallbackUrl;
  }
};

export const openGeneralSalesChat = (context: TawkSalesContext = {}) => {
  const leadContext = buildLeadContext({
    source_cta: context.sourceCta || 'right-floating-talk-to-sales',
    lead_intent: context.intent || 'sales_payment_guidance'
  });

  const fallbackUrl = buildReviewFormUrl('/book-free-audit/', leadContext);

  attemptTawkAction(() => {
    if (typeof window.Tawk_API.addEvent === 'function') {
      try {
        window.Tawk_API.addEvent('right_sales_widget_clicked', {}, function(){});
      } catch(e) {}
    }
    if (typeof window.Tawk_API.addTags === 'function') {
      try { window.Tawk_API.addTags(['sales-lead', 'payment-guidance'], function(){}); } catch(e) {}
    }
    if (typeof window.Tawk_API.setAttributes === 'function') {
      try {
        window.Tawk_API.setAttributes(leadContext, function(){});
      } catch(e) {}
    }
  }, fallbackUrl);
};

export const openPlatformSalesChat = (context: PlatformContext) => {
  const leadContext = buildLeadContext({
    selected_platform: context.selected_platform,
    platform_group: context.platform_group || '',
    recommended_service: context.recommended_service || '',
    recommended_package: context.recommended_package || '',
    official_url: context.official_url || '',
    source_cta: context.sourceCta || 'platform-guidance-cta',
    lead_intent: context.lead_intent || 'platform_guidance',
    project_type: context.project_type || '',
    package_price: context.package_price || '',
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    page_title: typeof window !== 'undefined' ? document.title : '',
  });

  const fallbackUrl = buildReviewFormUrl(`/book-free-audit/?platform=${context.selected_platform}&source=platforms-page`, leadContext);

  attemptTawkAction(() => {
    if (typeof window.Tawk_API.addEvent === 'function') {
      try {
        window.Tawk_API.addEvent('platform_sales_chat_started', {
          'platform': context.selected_platform
        }, function(){});
      } catch(e) {}
    }
    if (typeof window.Tawk_API.addTags === 'function') {
      try {
        const tags = ['sales-lead', 'platform-lead', 'platform-guidance', context.selected_platform.toLowerCase().replace(/[^a-z0-9]+/g, '-')];
        if (context.platform_group) {
          tags.push(context.platform_group.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
        }
        window.Tawk_API.addTags(tags, function(){});
      } catch(e) {}
    }
    if (typeof window.Tawk_API.setAttributes === 'function') {
      try {
        window.Tawk_API.setAttributes({
          ...leadContext,
          review_url: fallbackUrl
        }, function(){});
      } catch(e) {}
    }
  }, fallbackUrl);
};

export const openStartPackageChat = (context: PackageContext) => {
  const leadContext = buildLeadContext({
    selected_package: context.packageName || context.packageSlug,
    package_slug: context.packageSlug,
    package_price: context.packagePrice || '',
    source_cta: context.sourceCta || 'Start This Package',
    lead_intent: 'package_start',
    package_audience: context.packageAudience || '',
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    page_title: typeof window !== 'undefined' ? document.title : '',
  });

  const fallbackUrl = buildReviewFormUrl('/book-free-audit/', leadContext);

  attemptTawkAction(() => {
    if (typeof window.Tawk_API.addEvent === 'function') {
      try {
        window.Tawk_API.addEvent('package_sales_chat_started', {
          'package': context.packageSlug
        }, function(){});
      } catch(e) {}
    }
    if (typeof window.Tawk_API.addTags === 'function') {
      try { window.Tawk_API.addTags(['sales-lead', 'package-lead', 'payment-guidance', 'start-package', `package-${context.packageSlug}`], function(){}); } catch(e) {}
    }
    if (typeof window.Tawk_API.setAttributes === 'function') {
      try {
        window.Tawk_API.setAttributes({
          ...leadContext,
          review_url: fallbackUrl
        }, function(){});
      } catch(e) {}
    }
  }, fallbackUrl);
};

export const openStartServiceChat = (context: ServiceContext) => {
  const leadContext = buildLeadContext({
    selected_service: context.serviceSlug,
    source_cta: context.sourceCta || 'Start This Service',
    lead_intent: 'service_inquiry'
  });

  const fallbackUrl = buildReviewFormUrl('/book-free-audit/', leadContext);

  attemptTawkAction(() => {
    if (typeof window.Tawk_API.addEvent === 'function') {
      try {
        window.Tawk_API.addEvent('service_sales_chat_started', {
          'service': context.serviceSlug
        }, function(){});
      } catch(e) {}
    }
    if (typeof window.Tawk_API.addTags === 'function') {
      try { window.Tawk_API.addTags(['sales-lead', 'service-lead', 'payment-guidance', 'form-fallback', context.serviceSlug], function(){}); } catch(e) {}
    }
    if (typeof window.Tawk_API.setAttributes === 'function') {
      try {
        window.Tawk_API.setAttributes({
          ...leadContext,
          review_url: fallbackUrl
        }, function(){});
      } catch(e) {}
    }
  }, fallbackUrl);
};

export const openBlogChat = (context: ContentContext) => {
  const leadContext = buildLeadContext({
    content_type: context.contentType,
    content_title: context.contentTitle,
    source_cta: 'blog-cta'
  });

  const fallbackUrl = buildReviewFormUrl('/book-free-audit/', leadContext);

  attemptTawkAction(() => {
    if (typeof window.Tawk_API.addEvent === 'function') {
      try {
        window.Tawk_API.addEvent('blog_sales_question_started', {
          'blog': context.contentTitle
        }, function(){});
      } catch(e) {}
    }
    if (typeof window.Tawk_API.addTags === 'function') {
      try { window.Tawk_API.addTags(['blog-reader', 'sales-lead', context.category || 'general'], function(){}); } catch(e) {}
    }
    if (typeof window.Tawk_API.setAttributes === 'function') {
      try {
        window.Tawk_API.setAttributes(leadContext, function(){});
      } catch(e) {}
    }
  }, fallbackUrl);
};

export const openCaseStudyChat = (context: ContentContext) => {
  const leadContext = buildLeadContext({
    content_type: context.contentType,
    content_title: context.contentTitle,
    source_cta: 'case-study-cta'
  });

  const fallbackUrl = buildReviewFormUrl('/book-free-audit/', leadContext);

  attemptTawkAction(() => {
    if (typeof window.Tawk_API.addEvent === 'function') {
      try {
        window.Tawk_API.addEvent('case_study_sales_chat_started', {
          'case_study': context.contentTitle
        }, function(){});
      } catch(e) {}
    }
    if (typeof window.Tawk_API.addTags === 'function') {
      try { window.Tawk_API.addTags(['case-study-reader', 'sales-lead'], function(){}); } catch(e) {}
    }
    if (typeof window.Tawk_API.setAttributes === 'function') {
      try {
        window.Tawk_API.setAttributes(leadContext, function(){});
      } catch(e) {}
    }
  }, fallbackUrl);
};
