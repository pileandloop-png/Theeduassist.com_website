import { canonicalUrl } from '../../data/siteUrls';

export const getCanonicalUrl = (path: string) => {
  // safe path normalization
  // helper to generate canonical URL
  // no query string in canonical unless intentionally needed
  let cleanPath = path;
  if (cleanPath.includes('?')) {
    cleanPath = cleanPath.split('?')[0];
  }

  if (!cleanPath.endsWith('/') && cleanPath !== '/') {
      cleanPath += '/';
  }

  return canonicalUrl(cleanPath);
};
