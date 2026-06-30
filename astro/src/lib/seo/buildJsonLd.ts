import {
    organizationSchema,
    websiteSchema,
    professionalServiceSchema,
    serviceSchema,
    faqPageSchema,
    breadcrumbSchema,
    webPageSchema,
    collectionPageSchema,
    blogPostingSchema
} from './schema';

export function buildGlobalSchemas() {
    return [
        organizationSchema(),
        websiteSchema(),
        professionalServiceSchema()
    ];
}

export function buildPageSchema(
    type: 'WebPage' | 'CollectionPage' | 'Service' | 'Article',
    name: string,
    description: string,
    urlPath: string,
    additionalProps?: any
) {
    const baseSchema = {
        "@context": "https://schema.org",
        "@type": type,
        "name": name,
        "description": description,
        "url": `https://theeduassist.com${urlPath.startsWith('/') ? '' : '/'}${urlPath}${urlPath.endsWith('/') ? '' : '/'}`
    };

    if (type === 'Service') {
        return serviceSchema(name, description, urlPath);
    }

    if (type === 'CollectionPage') {
        return collectionPageSchema(name, description, urlPath);
    }

    if (type === 'Article') {
        // Extend for article
        return {
             ...baseSchema,
             "@type": "Article",
             "headline": name,
             "author": {
                 "@type": "Organization",
                 "name": "TheEduAssist"
             },
             ...additionalProps
        };
    }

    return webPageSchema(name, description, urlPath);
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
    return faqPageSchema(faqs);
}

export function buildBreadcrumbsSchema(items: { name: string; urlPath: string }[]) {
    return breadcrumbSchema(items);
}
