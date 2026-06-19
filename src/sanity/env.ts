export const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'demo'
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2026-06-01'

// Control whether to use Sanity CDN. Set PUBLIC_SANITY_USE_CDN to 'true' or 'false'.
// Defaults: production -> true, development -> false
export const useCdn = import.meta.env.PUBLIC_SANITY_USE_CDN
  ? import.meta.env.PUBLIC_SANITY_USE_CDN === 'true'
  : import.meta.env.MODE === 'production'

if (!import.meta.env.PUBLIC_SANITY_PROJECT_ID) {
  console.warn(
    'Sanity environment variables not found. The site is running with fallback "demo" project ID. Make sure to configure .env if you need actual Sanity data.'
  )
}
