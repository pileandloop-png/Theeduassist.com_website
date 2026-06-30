export interface Heading {
  depth: number;
  slug: string;
  text: string;
}

export function extractHeadings(body: any[]): Heading[] {
  if (!body || !Array.isArray(body)) return [];

  return body
    .filter((block) => block._type === 'block' && /^h[1-6]$/.test(block.style))
    .map((block) => {
      const text = block.children
        .map((child: any) => child.text)
        .join('');

      const slug = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      return {
        depth: parseInt(block.style.replace('h', '')),
        slug,
        text,
      };
    });
}
