import { createClient } from '@sanity/client'
import { projectId, dataset, apiVersion } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for public reads, no token needed
})

// Wrapper to gracefully fallback when env vars are missing
export async function fetchFromSanity(query: string, params: Record<string, any> = {}) {
  try {
    return await client.fetch(query, params)
  } catch (error: any) {
    if ((error?.message?.includes('Dataset not found') || error?.message?.includes('Project not found')) && projectId === 'demo') {
      console.warn('Gracefully skipping Sanity fetch due to missing environment variables.')
      if (query.trim().endsWith('[0]')) {
        return null
      }
      return []
    }
    throw error
  }
}
