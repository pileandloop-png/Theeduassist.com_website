import { blogPosts } from '../../data/blogPosts';
import { latestBlogPostsQuery } from '../../sanity/queries';
import { fetchFromSanity } from '../../sanity/client';

export function isPublicBlogPost(post: any): boolean {
  if (!post) return false;
  const slug = post.slug?.current || post.slug;
  const publishedAt = post.publishedAt;
  const migrationStatus = post.migrationStatus;

  return !!(
    slug &&
    publishedAt &&
    (migrationStatus === undefined || migrationStatus === null || migrationStatus === 'approved' || migrationStatus === 'published')
  );
}

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
  relatedServices?: any[];
  relatedPlatforms?: any[];
  relatedPosts?: any[];
  blogFaqs?: any[];
  relatedFaqs?: any[];
  relatedCaseStudies?: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
  source: 'sanity' | 'static';
  body?: any;
  content?: string;
  heroImage?: string;
  featuredImage?: any;
  heroImageAlt?: string;
  author?: string;
  tags?: string[];
  seo?: any;
};

export async function getAllBlogPosts(): Promise<NormalizedBlogPost[]> {
  const staticPosts: NormalizedBlogPost[] = blogPosts
    .filter(post => post.status === 'published' && (!post.migrationStatus || post.migrationStatus === 'approved' || post.migrationStatus === 'published'))
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
      source: 'static',
      content: post.content,
      heroImage: post.heroImage,
      heroImageAlt: post.heroImageAlt,
      author: post.author,
      tags: post.tags,
    }));

  try {
    const sanityPosts = await fetchFromSanity(latestBlogPostsQuery);
    if (sanityPosts && Array.isArray(sanityPosts)) {
       const formattedSanity: NormalizedBlogPost[] = sanityPosts.filter(isPublicBlogPost).map((post: any) => ({
          title: post.title,
          slug: post.slug.current || post.slug,
          category: post.category || 'General',
          excerpt: post.excerpt,
          readingTime: post.readingTime,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          seoTitle: post.seo?.metaTitle || post.title,
          seoDescription: post.seo?.metaDescription || post.excerpt,
          noIndex: post.seo?.noindex || false,
          canonicalUrl: post.seo?.canonicalPath,
          seo: post.seo,
          source: 'sanity',
          body: post.body,
          content: post.content,
          featuredImage: post.featuredImage,
          author: post.author,
          tags: post.tags,
          blogFaqs: post.blogFaqs,
          relatedFaqs: post.relatedFaqs,
          relatedServices: post.relatedServices,
          relatedPlatforms: post.relatedPlatforms,
          relatedPosts: Array.isArray(post.relatedPosts) ? post.relatedPosts.filter(isPublicBlogPost) : post.relatedPosts,
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
