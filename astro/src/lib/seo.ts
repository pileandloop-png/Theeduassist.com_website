export const site = {
  url: 'https://theeduassist.com',
  name: 'TheEduAssist',
  title: 'TheEduAssist | Custom eLearning, Kajabi, and LMS Solutions',
  description: 'TheEduAssist helps coaches, businesses, training teams, and educational organizations turn content into engaging online learning experiences.',
};

export function buildCanonicalUrl(path: string): string {
  // Ensure we don't have double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Ensure URL always ends with trailing slash
  const finalPath = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;

  if (finalPath === '/') {
    return site.url;
  }

  // replace double slashes
  const pathWithoutDoubleSlashes = finalPath.replace(/\/{2,}/g, '/');
  return `${site.url}${pathWithoutDoubleSlashes}`;
}

export function formatTitle(title?: string): string {
  if (!title) return site.title;

  // Check if title already includes branding
  if (title.includes(site.name)) {
    return title;
  }

  return `${title} | ${site.name}`;
}

export function formatDescription(description?: string): string {
  return description || site.description;
}
