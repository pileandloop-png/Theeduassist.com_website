import { getAllBlogPosts } from './getAllBlogPosts';
import { getAllCaseStudies } from './getAllCaseStudies';
import { getAllServices } from './getAllServices';

export type PublicRoute = {
  path: string;
  title: string;
  description?: string;
  pageType: 'home' | 'service' | 'kajabi' | 'case-study-listing' | 'case-study-detail' | 'blog-listing' | 'blog-detail' | 'legal' | 'general';
  indexable: boolean;
  includeInSitemap: boolean;
  includeInHumanSitemap: boolean;
  lastModified?: string;
  priority?: string;
  relatedCategory?: string;
};

export async function getAllPublicRoutes(): Promise<PublicRoute[]> {
  const routes: PublicRoute[] = [];

  // Core Pages
  routes.push({
    path: '/',
    title: 'TheEduAssist | E-Learning Design Agency',
    description: 'E-learning design agency building courses, Kajabi platforms, and LMS setups.',
    pageType: 'home',
    indexable: true,
    includeInSitemap: true,
    includeInHumanSitemap: true,
    priority: '1.0'
  });

  routes.push({
    path: '/services/',
    title: 'Services | TheEduAssist',
    pageType: 'service',
    indexable: true,
    includeInSitemap: true,
    includeInHumanSitemap: true,
    priority: '0.9'
  });

  routes.push({
    path: '/kajabi-services/',
    title: 'Kajabi Services | TheEduAssist',
    pageType: 'kajabi',
    indexable: true,
    includeInSitemap: true,
    includeInHumanSitemap: true,
    priority: '0.9'
  });

  routes.push({
    path: '/case-studies/',
    title: 'Case Studies | TheEduAssist',
    pageType: 'case-study-listing',
    indexable: true,
    includeInSitemap: true,
    includeInHumanSitemap: true,
    priority: '0.8'
  });

  routes.push({
    path: '/blog/',
    title: 'Blog | TheEduAssist',
    pageType: 'blog-listing',
    indexable: true,
    includeInSitemap: true,
    includeInHumanSitemap: true,
    priority: '0.8'
  });

  routes.push({
    path: '/about/',
    title: 'About | TheEduAssist',
    pageType: 'general',
    indexable: true,
    includeInSitemap: true,
    includeInHumanSitemap: true,
    priority: '0.7'
  });

  routes.push({
    path: '/contact/',
    title: 'Contact | TheEduAssist',
    pageType: 'general',
    indexable: true,
    includeInSitemap: true,
    includeInHumanSitemap: true,
    priority: '0.8'
  });

  routes.push({
    path: '/book-free-audit/',
    title: 'Get a 24–48 Hour Course Review | TheEduAssist',
    pageType: 'general',
    indexable: true,
    includeInSitemap: true,
    includeInHumanSitemap: true,
    priority: '0.9'
  });

  routes.push({
    path: '/sitemap/',
    title: 'Sitemap | TheEduAssist',
    pageType: 'general',
    indexable: true,
    includeInSitemap: true,
    includeInHumanSitemap: false,
    priority: '0.5'
  });

  // Legal Pages
  const legalPages = ['/privacy-policy/', '/terms-and-conditions/', '/accessibility-statement/', '/cookie-policy/', '/disclaimer/', '/editorial-policy/', '/ai-use-policy/'];
  legalPages.forEach(path => {
    routes.push({
      path,
      title: `${path.replace(/\//g, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} | TheEduAssist`,
      pageType: 'legal',
      indexable: true,
      includeInSitemap: true,
      includeInHumanSitemap: true,
      priority: '0.3'
    });
  });

  // Services dynamically
  const services = await getAllServices();
  services.forEach(service => {
    // Only add if it's not a root service that we already added like /kajabi-services/
    if (service.link !== '/kajabi-services/') {
       routes.push({
        path: service.link,
        title: `${service.title} | TheEduAssist`,
        description: service.description,
        pageType: 'service',
        indexable: true,
        includeInSitemap: true,
        includeInHumanSitemap: true,
        priority: '0.8'
      });
    }
  });

  // Case Studies dynamically
  const caseStudies = await getAllCaseStudies();
  caseStudies.forEach(cs => {
    routes.push({
      path: `/case-studies/${cs.slug}/`,
      title: `${cs.title} | TheEduAssist`,
      description: cs.summary,
      pageType: 'case-study-detail',
      indexable: true,
      includeInSitemap: true,
      includeInHumanSitemap: true,
      lastModified: cs.updatedAt || cs.publishedAt,
      priority: '0.7'
    });
  });

  // Blog Posts dynamically
  const blogPosts = await getAllBlogPosts();
  blogPosts.forEach(post => {
    routes.push({
      path: `/blog/${post.slug}/`,
      title: `${post.title} | TheEduAssist`,
      description: post.excerpt,
      pageType: 'blog-detail',
      indexable: !post.noIndex,
      includeInSitemap: !post.noIndex,
      includeInHumanSitemap: !post.noIndex,
      lastModified: post.updatedAt || post.publishedAt,
      priority: '0.7',
      relatedCategory: post.category
    });
  });

  return routes;
}
