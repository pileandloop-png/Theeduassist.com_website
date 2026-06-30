import { createClient } from '@sanity/client';

export const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'jg4gi6mn';
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2026-06-19';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export async function fetchFromSanity(query, params = {}) {
  try {
    return await sanityClient.fetch(query, params);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    // Gracefully handle missing dataset or empty results
    if (error.message?.includes("Dataset not found") || error.message?.includes("Project not found")) {
      return query.includes('[0]') ? null : [];
    }
    return query.includes('[0]') ? null : [];
  }
}
