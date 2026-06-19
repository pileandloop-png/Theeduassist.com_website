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

// Wrapper to gracefully fallback when env vars are missing
export async function fetchFromSanity(query: string, params: Record<string, any> = {}) {
  try {
    return await client.fetch(query, params)
  } catch (error: any) {
    if (error?.message?.includes('Dataset not found') && projectId === 'demo') {
      console.warn('Gracefully skipping Sanity fetch due to missing environment variables.')
      if (query.trim().endsWith('[0]')) {
        return null
      }
      return []
    }
    throw error
  }
}
