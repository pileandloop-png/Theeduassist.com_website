export function normalizeSlug(s?: string | null): string {
  if (!s) return '';
  return s.replace(/^https?:\/\/[^\/]+(\/blog)?\//, '').replace(/\/$/, '');
}

export function extractTextFromPortableText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n\n');
}

export function estimateReadingTime(text?: string | null): number {
  if (!text) return 1;
  const wpm = 200;
  const cleanText = text.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
  const words = cleanText.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wpm));
}

export function createHeadingId(text: string): string {
  if (!text) return '';
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function extractHeadingsForToc(body: any): { depth: number; slug: string; text: string }[] {
  if (!body || !Array.isArray(body)) return [];

  const headings: { depth: number; slug: string; text: string }[] = [];

  body.forEach(block => {
    if (block._type === 'block' && /^h[2-3]$/.test(block.style)) {
      const depth = parseInt(block.style.replace('h', ''), 10);
      const text = block.children?.map((child: any) => child.text).join('') || '';
      const slug = createHeadingId(text);
      if (text && slug) {
        headings.push({ depth, slug, text });
      }
    }
  });

  return headings;
}

export function dedupePostsBySlug(posts: any[]): any[] {
  if (!posts || !Array.isArray(posts)) return [];

  const grouped = new Map<string, any[]>();

  posts.forEach(post => {
    const slug = normalizeSlug(post.slug?.current || post.slug);
    if (!slug) return;
    if (!grouped.has(slug)) {
      grouped.set(slug, []);
    }
    grouped.get(slug)!.push(post);
  });

  const deduped: any[] = [];
  grouped.forEach((slugPosts, slug) => {
    if (slugPosts.length === 1) {
      deduped.push(slugPosts[0]);
    } else {
      // Find the best post among duplicates
      slugPosts.sort((a, b) => {
        // 1. published document (not draft)
        const aIsDraft = a._id?.startsWith('drafts.');
        const bIsDraft = b._id?.startsWith('drafts.');
        if (aIsDraft !== bIsDraft) return aIsDraft ? 1 : -1;

        // 2. has slug (always true if we group by slug)
        // 3. has publishedAt
        if (!!a.publishedAt !== !!b.publishedAt) return a.publishedAt ? -1 : 1;

        // 4. migrationStatus missing/null/approved/published
        const aMigStatus = a.migrationStatus;
        const bMigStatus = b.migrationStatus;
        const aValidMig = !aMigStatus || ['approved', 'published'].includes(aMigStatus);
        const bValidMig = !bMigStatus || ['approved', 'published'].includes(bMigStatus);
        if (aValidMig !== bValidMig) return aValidMig ? -1 : 1;

        // 5. has body
        if (!!a.body !== !!b.body) return a.body ? -1 : 1;

        // 6. has image
        const aHasImg = !!(a.heroImage || a.featuredImage || a.image);
        const bHasImg = !!(b.heroImage || b.featuredImage || b.image);
        if (aHasImg !== bHasImg) return aHasImg ? -1 : 1;

        // 7. latest _updatedAt
        const aUpdate = a._updatedAt || a.updatedAt || a.publishedAt || '';
        const bUpdate = b._updatedAt || b.updatedAt || b.publishedAt || '';
        if (aUpdate !== bUpdate) return new Date(bUpdate).getTime() - new Date(aUpdate).getTime();

        return 0;
      });
      deduped.push(slugPosts[0]);
    }
  });

  return deduped;
}

export function getRelatedPosts(currentPost: any, allPosts: any[], limit: number = 3): any[] {
  if (!currentPost || !allPosts) return [];

  const currentSlug = normalizeSlug(currentPost.slug?.current || currentPost.slug);

  // Exclude current post and invalid ones
  const validPosts = allPosts.filter(p => {
    const pSlug = normalizeSlug(p.slug?.current || p.slug);
    return pSlug && pSlug !== currentSlug;
  });

  const related = [];
  const currentCategory = currentPost.category;
  const currentTags = currentPost.tags || [];

  // 1. Same category first
  if (currentCategory) {
    const sameCat = validPosts.filter(p => p.category === currentCategory);
    for (const p of sameCat) {
      if (related.length < limit && !related.find(r => r.id === p.id || r._id === p._id || r.slug === p.slug)) {
        related.push(p);
      }
    }
  }

  // 2. Overlapping tags second
  if (related.length < limit && currentTags.length > 0) {
    // Sort remaining posts by number of matching tags
    const withTagCounts = validPosts
      .filter(p => !related.find(r => r.id === p.id || r._id === p._id || r.slug === p.slug))
      .map(p => {
        const pTags = p.tags || [];
        const matchCount = pTags.filter((t: string) => currentTags.includes(t)).length;
        return { post: p, count: matchCount };
      })
      .filter(item => item.count > 0)
      .sort((a, b) => b.count - a.count);

    for (const item of withTagCounts) {
      if (related.length < limit) {
        related.push(item.post);
      }
    }
  }

  // 3. Fallback to latest posts
  if (related.length < limit) {
    const remaining = validPosts
      .filter(p => !related.find(r => r.id === p.id || r._id === p._id || r.slug === p.slug))
      .sort((a, b) => {
         const dateA = new Date(a.publishedAt || 0).getTime();
         const dateB = new Date(b.publishedAt || 0).getTime();
         return dateB - dateA;
      });

    for (const p of remaining) {
      if (related.length < limit) {
        related.push(p);
      }
    }
  }

  return related;
}
