import { latestBlogPostsQuery } from '../../sanity/queries';
import { fetchFromSanity } from '../../sanity/client';

const normalizeSlug = (s: string) => s?.replace(/^https?:\/\/[^\/]+\/blog\//, '').replace(/\/$/, '');

export function isPublicBlogPost(post: any): boolean {
  if (!post) return false;
  const slug = normalizeSlug(post.slug?.current || post.slug);
  const publishedAt = post.publishedAt;
  const migrationStatus = post.migrationStatus;
  const isDraft = post._id?.startsWith('drafts.');
  const noIndex = post.seo?.noindex;

  return !!(
    slug &&
    publishedAt &&
    !isDraft &&
    (migrationStatus === undefined || migrationStatus === null || migrationStatus === 'approved' || migrationStatus === 'published') &&
    noIndex !== true
  );
}

export type NormalizedBlogPost = {
  id?: string;
  title: string;
  slug: string;
  category: string;
  categories?: any[];
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
  source: 'sanity';
  body?: any;
  content?: string;
  heroImage?: string;
  featuredImage?: any;
  heroImageAlt?: string;
  author?: string;
  tags?: string[];
  seo?: any;
  migrationStatus?: string;
};

export async function getAllBlogPosts(): Promise<NormalizedBlogPost[]> {
  try {
    const sanityPosts = await fetchFromSanity(latestBlogPostsQuery);
    if (sanityPosts && Array.isArray(sanityPosts)) {
       // Filter here as well just to be perfectly safe, though the GROQ query handles most of it.
       const formattedSanity: NormalizedBlogPost[] = sanityPosts.filter(isPublicBlogPost).map((post: any) => ({
          id: post._id,
          title: post.title,
          slug: normalizeSlug(post.slug?.current || post.slug),
          category: post.category || (post.categories?.[0]?.title) || 'General',
          categories: post.categories,
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
          heroImage: post.featuredImage?.asset?.url,
          heroImageAlt: post.featuredImage?.alt || post.title,
          author: post.author,
          tags: post.tags || [],
          blogFaqs: post.blogFaqs,
          relatedFaqs: post.relatedFaqs,
          relatedServices: post.relatedServices,
          relatedPlatforms: post.relatedPlatforms,
          relatedPosts: Array.isArray(post.relatedPosts) ? post.relatedPosts.filter(isPublicBlogPost) : post.relatedPosts,
          migrationStatus: post.migrationStatus,
       }));

       // Deduplicate by slug
       const unique = formattedSanity.filter((v, i, a) => a.findIndex(t => (t.slug === v.slug)) === i);
       return unique;
    }
  } catch (error) {
    console.log("Sanity posts fetch failed or dataset not found.");
  }

  return [];
}

export async function getUniqueBlogCategoriesAndTags() {
  const posts = await getAllBlogPosts();

  const categories = new Map<string, { title: string, slug: string, description?: string }>();
  const tags = new Set<string>();

  posts.forEach(post => {
    if (post.categories && post.categories.length > 0) {
      post.categories.forEach(cat => {
         if (cat.slug?.current || cat.slug) {
            const catSlug = normalizeSlug(cat.slug?.current || cat.slug);
            if (!categories.has(catSlug)) {
                categories.set(catSlug, {
                  title: cat.title,
                  slug: catSlug,
                  description: cat.description
                });
            }
         }
      });
    } else if (post.category) {
       // Fallback to simple string category if structured category not available
       const fallbackSlug = post.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
       if (!categories.has(fallbackSlug)) {
          categories.set(fallbackSlug, {
            title: post.category,
            slug: fallbackSlug
          });
       }
    }

    if (post.tags) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });

  return {
    categories: Array.from(categories.values()),
    tags: Array.from(tags)
  };
}
