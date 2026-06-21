export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  status: "draft" | "reviewed" | "published";
  readingTime?: number;
  wordCount?: number;
  heroImage?: string;
  heroImageAlt?: string;
  canonicalUrl?: string;
  oldWordPressUrl?: string;
  migrationStatus?: string;
  seoTitle?: string;
  seoDescription?: string;
  faq?: any[];
  content?: string;
};

export const blogPosts: BlogPost[] = [];
