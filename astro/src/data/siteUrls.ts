export const SITE_BASE_URL = "https://theeduassist.com";

export const DEMO_BASE_URL = "https://theeduassist.com";

export const canonicalUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_BASE_URL}${normalizedPath}`;
};
