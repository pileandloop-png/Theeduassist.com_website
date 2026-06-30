import { getAllPublicRoutes } from '../lib/content/getAllPublicRoutes';

export const GET = async () => {
    const routes = await getAllPublicRoutes();
    const sitemapRoutes = routes.filter(r => r.includeInSitemap);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapRoutes.map(route => {
        // Build absolute URL
        const path = route.path.startsWith('/') ? route.path : `/${route.path}`;
        // Add trailing slash if needed
        const urlWithSlash = path.endsWith('/') ? path : `${path}/`;
        const url = `https://theeduassist.com${urlWithSlash === '/' ? '' : urlWithSlash}`;

        return `
    <url>
        <loc>${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>${route.priority || '0.8'}</priority>
        ${route.lastModified ? `<lastmod>${new Date(route.lastModified).toISOString()}</lastmod>` : ''}
    </url>`;
    }).join('')}
</urlset>`;

    return new Response(sitemap.trim(), {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600'
        }
    });
};
