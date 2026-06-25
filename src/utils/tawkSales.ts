export interface TawkSalesContext {
  intent?: string;
  sourceCta?: string;
  [key: string]: any;
}

export interface PackageContext {
  packageSlug: string;
  packagePrice?: string;
  pageUrl: string;
  pageTitle: string;
  sourceCta?: string;
}

export interface ServiceContext {
  serviceSlug: string;
  pageUrl: string;
  pageTitle: string;
  sourceCta?: string;
}

export interface ContentContext {
  contentType: 'blog' | 'case_study';
  contentTitle: string;
  pageUrl: string;
  pageTitle: string;
  category?: string;
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

export const openTawkSalesChat = (context: TawkSalesContext = {}) => {
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
        window.Tawk_API.setAttributes({
          source_cta: context.sourceCta || 'right-floating-talk-to-sales',
          lead_intent: context.intent || 'sales_payment_guidance',
          page_url: window.location.href,
          page_title: document.title
        }, function(){});
      } catch(e) {}
    }
  });
};

export const openPackageChat = (context: PackageContext) => {
  const fallbackUrl = `/book-free-audit/?package=${context.packageSlug}`;
  attemptTawkAction(() => {
    if (typeof window.Tawk_API.addEvent === 'function') {
      try {
        window.Tawk_API.addEvent('package_sales_chat_started', {
          'package': context.packageSlug
        }, function(){});
      } catch(e) {}
    }
    if (typeof window.Tawk_API.addTags === 'function') {
      try { window.Tawk_API.addTags(['sales-lead', 'package-lead', 'payment-guidance', context.packageSlug], function(){}); } catch(e) {}
    }
    if (typeof window.Tawk_API.setAttributes === 'function') {
      try {
        window.Tawk_API.setAttributes({
          selected_package: context.packageSlug,
          package_price: context.packagePrice || '',
          page_url: context.pageUrl,
          page_title: context.pageTitle,
          source_cta: context.sourceCta || 'Ask About This Package'
        }, function(){});
      } catch(e) {}
    }
  }, fallbackUrl);
};

export const openServiceChat = (context: ServiceContext) => {
  attemptTawkAction(() => {
    if (typeof window.Tawk_API.addEvent === 'function') {
      try {
        window.Tawk_API.addEvent('service_sales_chat_started', {
          'service': context.serviceSlug
        }, function(){});
      } catch(e) {}
    }
    if (typeof window.Tawk_API.addTags === 'function') {
      try { window.Tawk_API.addTags(['sales-lead', 'service-lead', context.serviceSlug], function(){}); } catch(e) {}
    }
    if (typeof window.Tawk_API.setAttributes === 'function') {
      try {
        window.Tawk_API.setAttributes({
          selected_service: context.serviceSlug,
          page_url: context.pageUrl,
          page_title: context.pageTitle,
          source_cta: context.sourceCta || 'Talk to Sales About This Service',
          lead_intent: 'service_inquiry'
        }, function(){});
      } catch(e) {}
    }
  });
};

export const openBlogChat = (context: ContentContext) => {
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
        window.Tawk_API.setAttributes({
          content_type: context.contentType,
          content_title: context.contentTitle,
          page_url: context.pageUrl,
          page_title: context.pageTitle
        }, function(){});
      } catch(e) {}
    }
  });
};

export const openCaseStudyChat = (context: ContentContext) => {
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
        window.Tawk_API.setAttributes({
          content_type: context.contentType,
          content_title: context.contentTitle,
          page_url: context.pageUrl,
          page_title: context.pageTitle
        }, function(){});
      } catch(e) {}
    }
  });
};
