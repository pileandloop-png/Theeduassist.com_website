import { services } from '../../data/services';

export type ServiceRoute = {
  title: string;
  slug: string;
  description: string;
  link: string;
  source: 'static';
};

export async function getAllServices(): Promise<ServiceRoute[]> {
  const allServices = [
    ...(services.coreServices || []),
    // Get unique items from categories that have links
    ...services.categories.flatMap(c => c.items).filter((item, index, self) =>
        item.link && self.findIndex(t => t.link === item.link) === index
    ).map(item => ({ title: item.label, link: item.link, description: '' }))
  ];

  // deduplicate by link
  const uniqueServices = allServices.filter((s, index, self) => s.link && self.findIndex(t => t.link === s.link) === index);

  return uniqueServices
    .filter(s => s.link) // Only return those with a link
    .map(s => {
      // Extract slug from link
      let slug = s.link!;
      if (slug.startsWith('/services/')) {
        slug = slug.replace('/services/', '').replace('/', '');
      } else if (slug.startsWith('/')) {
        slug = slug.replace('/', '').replace('/', '');
      }

      return {
        title: s.title,
        slug,
        description: s.description || '',
        link: s.link!,
        source: 'static'
      };
    });
}
