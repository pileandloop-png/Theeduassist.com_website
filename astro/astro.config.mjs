import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://theeduassist.com',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'jg4gi6mn',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      apiVersion: process.env.PUBLIC_SANITY_API_VERSION || '2026-06-19',
      useCdn: false
    })
  ],
});
