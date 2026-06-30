import { caseStudies } from '../../data/caseStudies';
import { getCaseStudyBySlug, getAllCaseStudies as getSanityCaseStudies } from '../../sanity/queries';

export type CaseStudy = {
  title: string;
  slug: string;
  subtitle: string;
  clientType?: string;
  industry?: string;
  summary: string;
  heroImage?: string;
  heroImageAlt?: string;
  noIndex?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  source: 'sanity' | 'static';
};

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const staticStudies: CaseStudy[] = caseStudies
    .filter(cs => !cs.noIndex)
    .map(cs => ({
      title: cs.title,
      slug: cs.slug,
      subtitle: cs.subtitle,
      clientType: cs.clientType,
      industry: cs.industry,
      summary: cs.summary,
      source: 'static'
    }));

  try {
    const sanityStudies = await getSanityCaseStudies();
    if (sanityStudies && Array.isArray(sanityStudies)) {
      // Merge or return sanity data
      // For now, if we have valid Sanity data we could merge, but we'll just return static for simplicity if Sanity is empty
       const formattedSanity = sanityStudies.map((cs: any) => ({
          title: cs.title,
          slug: cs.slug.current,
          subtitle: cs.subtitle,
          clientType: cs.clientType,
          industry: cs.industry,
          summary: cs.summary,
          publishedAt: cs.publishedAt,
          updatedAt: cs._updatedAt,
          source: 'sanity'
       }));

       // Deduplicate by slug (prefer sanity over static)
       const combined = [...formattedSanity, ...staticStudies];
       const unique = combined.filter((v, i, a) => a.findIndex(t => (t.slug === v.slug)) === i);
       return unique;
    }
  } catch (error) {
    console.log("Sanity case studies fetch failed or dataset not found, falling back to static.");
  }

  return staticStudies;
}
