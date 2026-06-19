import { createClient } from '@sanity/client'
import { projectId, dataset, apiVersion, useCdn } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn, // Respect PUBLIC_SANITY_USE_CDN or default by NODE env
  // Note: For preview/drafts set `SANITY_VIEWER_TOKEN` in server env and
  // ensure `PUBLIC_SANITY_USE_CDN=false` for fresh data reads.
  token: import.meta.env.SANITY_VIEWER_TOKEN || undefined,
})
