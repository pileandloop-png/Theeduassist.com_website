
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://theeduassist.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
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
