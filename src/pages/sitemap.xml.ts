export const GET = async () => {
    const urls = [
        "https://theeduassist.com/",
        "https://theeduassist.com/services/",
        "https://theeduassist.com/services/course-creation/",
        "https://theeduassist.com/services/custom-elearning-development/",
        "https://theeduassist.com/services/content-conversion/",
        "https://theeduassist.com/services/ai-powered-elearning/",
        "https://theeduassist.com/services/funnels-automation/",
        "https://theeduassist.com/services/lms-implementation-migration/",
        "https://theeduassist.com/services/ongoing-support-maintenance/",
        "https://theeduassist.com/kajabi-services/",
        "https://theeduassist.com/case-studies/",
        "https://theeduassist.com/case-studies/sqa-aligned-vocational-training/",
        "https://theeduassist.com/case-studies/business-analytics-corporate-training/",
        "https://theeduassist.com/case-studies/language-courses-book-publisher/",
        "https://theeduassist.com/blog/",
        "https://theeduassist.com/blog/course-idea-to-online-program/",
        "https://theeduassist.com/blog/kajabi-setup-checklist/",
        "https://theeduassist.com/blog/lms-migration-checklist/",
        "https://theeduassist.com/blog/content-conversion-to-elearning/",
        "https://theeduassist.com/blog/ai-elearning-production-support/",
        "https://theeduassist.com/blog/before-building-online-course-platform/",
        "https://theeduassist.com/about/",
        "https://theeduassist.com/contact/",
        "https://theeduassist.com/book-free-audit/",
        "https://theeduassist.com/privacy-policy/",
        "https://theeduassist.com/terms-and-conditions/",
        "https://theeduassist.com/sitemap/"
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(url => `
    <url>
        <loc>${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`).join('')}
</urlset>`;

    return new Response(sitemap.trim(), {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
};
