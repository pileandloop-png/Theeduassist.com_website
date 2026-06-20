import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://theeduassist.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'jg4gi6mn',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      apiVersion: process.env.PUBLIC_SANITY_API_VERSION || '2026-06-19',
      useCdn: false
    }),
    sitemap({
      filter: (page) =>
        page !== 'https://theeduassist.com/thank-you/' &&
        !page.includes('/studio/') &&
        !page.includes('/preview/') &&
        !page.includes('/admin/') &&
        !page.includes('/drafts/') &&
        !page.includes('/internal/')
    })
  ],
});
