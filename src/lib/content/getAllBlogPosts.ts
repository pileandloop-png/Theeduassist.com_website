import { blogPosts } from '../../data/blogPosts';
import { latestBlogPostsQuery } from '../../sanity/queries';
import { fetchFromSanity } from '../../sanity/client';

export type NormalizedBlogPost = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readingTime?: number;
  publishedAt?: string;
  updatedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  relatedServices?: string[];
  relatedCaseStudies?: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
  source: 'sanity' | 'static';
};

export async function getAllBlogPosts(): Promise<NormalizedBlogPost[]> {
  const staticPosts: NormalizedBlogPost[] = blogPosts
    .filter(post => post.status === 'published' && post.migrationStatus !== 'pending')
    .map(post => ({
      title: post.title,
      slug: post.slug,
      category: post.category || 'General',
      excerpt: post.excerpt,
      readingTime: post.readingTime,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      seoTitle: post.seoTitle,
      seoDescription: post.seoDescription,
      relatedCaseStudies: post.relatedCaseStudies,
      canonicalUrl: post.canonicalUrl,
      noIndex: false,
      source: 'static'
    }));

  try {
    const sanityPosts = await fetchFromSanity(latestBlogPostsQuery);
    if (sanityPosts && Array.isArray(sanityPosts)) {
       const formattedSanity: NormalizedBlogPost[] = sanityPosts.map((post: any) => ({
          title: post.title,
          slug: post.slug.current,
          category: post.category || 'General',
          excerpt: post.excerpt,
          readingTime: post.readingTime,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          seoTitle: post.seoTitle,
          seoDescription: post.seoDescription,
          noIndex: false,
          source: 'sanity'
       }));

       // Deduplicate by slug (prefer sanity over static)
       const combined = [...formattedSanity, ...staticPosts];
       const unique = combined.filter((v, i, a) => a.findIndex(t => (t.slug === v.slug)) === i);
       return unique;
    }
  } catch (error) {
    console.log("Sanity posts fetch failed or dataset not found, falling back to static.");
  }

  return staticPosts;
}
