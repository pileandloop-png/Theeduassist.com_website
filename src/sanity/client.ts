import { createClient } from '@sanity/client'
import { projectId, dataset, apiVersion } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for public published content
  // Note: For preview/drafts, configure an environment variable for token and set useCdn: false
  // token: import.meta.env.SANITY_VIEWER_TOKEN,
})
