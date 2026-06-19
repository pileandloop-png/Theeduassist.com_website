import { fetchFromSanity } from './client'

// Site settings
export async function getSiteSettings() {
  return await fetchFromSanity(`*[_type == "siteSettings"][0]`)
}

// All pages
export async function getAllPages() {
  return await fetchFromSanity(`*[_type == "page"] | order(title asc)`)
}

// Page by slug
export async function getPageBySlug(slug: string) {
  return await fetchFromSanity(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}

// All services
export async function getAllServices() {
  return await fetchFromSanity(`*[_type == "service"] | order(orderRank asc)`)
}

// Service by slug
export async function getServiceBySlug(slug: string) {
  return await fetchFromSanity(`*[_type == "service" && slug.current == $slug][0]`, { slug })
}

// All Kajabi services
export async function getAllKajabiServices() {
  return await fetchFromSanity(`*[_type == "kajabiService"] | order(orderRank asc)`)
}

// All case studies
export async function getAllCaseStudies() {
  return await fetchFromSanity(`*[_type == "caseStudy"] | order(orderRank asc)`)
}

// All FAQs by category
export async function getFaqsByCategory(category: string) {
  return await fetchFromSanity(`*[_type == "faq" && category == $category && showOnSite == true] | order(orderRank asc)`, { category })
}

// All platforms to show as badges
export async function getPlatformsForBadges() {
  return await fetchFromSanity(`*[_type == "platform" && showAsBadge == true] | order(orderRank asc)`)
}

// All training solutions to show on site
export async function getTrainingSolutions() {
  return await fetchFromSanity(`*[_type == "trainingSolution" && showOnSite == true] | order(orderRank asc)`)
}

// Blog posts by migration status
export async function getBlogPostsByMigrationStatus(status: string) {
  return await fetchFromSanity(`*[_type == "blogPost" && migrationStatus == $status] | order(publishedAt desc)`, { status })
}

// Authors
export async function getAllAuthors() {
  return await fetchFromSanity(`*[_type == "author"] | order(name asc)`)
}

export async function getAuthorBySlug(slug: string) {
  return await fetchFromSanity(`*[_type == "author" && slug.current == $slug][0]`, { slug })
}

// Posts
export async function getAllPosts() {
  // Return all posts including those without `publishedAt` (saved drafts),
  // ordering by `publishedAt` then `_createdAt` so newest appear first.
  return await fetchFromSanity(`*[_type == "post"] | order(publishedAt desc, _createdAt desc)`)
}

export async function getPostBySlug(slug: string) {
  return await fetchFromSanity(`*[_type == "post" && slug.current == $slug][0]`, { slug })
}

// Testimonials
export async function getAllTestimonials() {
  return await fetchFromSanity(`*[_type == "testimonial" && showOnSite == true] | order(orderRank asc)`)
}

// Case study by slug
export async function getCaseStudyBySlug(slug: string) {
  return await fetchFromSanity(`*[_type == "caseStudy" && slug.current == $slug][0]`, { slug })
}

// Navigation
export async function getNavigation() {
  return await fetchFromSanity(`*[_type == "navigation"][0]`)
}

// CTA blocks
export async function getCtaBlocks() {
  return await fetchFromSanity(`*[_type == "ctaBlock"] | order(_createdAt desc)`)
}

// Process flows
export async function getProcessByTitle(title: string) {
  return await fetchFromSanity(`*[_type == "process" && title == $title][0]`, { title })
}

// Audience segments
export async function getAudienceSegments() {
  return await fetchFromSanity(`*[_type == "audienceSegment" && showOnSite == true] | order(orderRank asc)`)
}
