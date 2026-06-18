import { client } from './client'

// Site settings
export async function getSiteSettings() {
  return await client.fetch(`*[_type == "siteSettings"][0]`)
}

// All pages
export async function getAllPages() {
  return await client.fetch(`*[_type == "page"] | order(title asc)`)
}

// Page by slug
export async function getPageBySlug(slug: string) {
  return await client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}

// All services
export async function getAllServices() {
  return await client.fetch(`*[_type == "service"] | order(orderRank asc)`)
}

// Service by slug
export async function getServiceBySlug(slug: string) {
  return await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug })
}

// All Kajabi services
export async function getAllKajabiServices() {
  return await client.fetch(`*[_type == "kajabiService"] | order(orderRank asc)`)
}

// All case studies
export async function getAllCaseStudies() {
  return await client.fetch(`*[_type == "caseStudy"] | order(orderRank asc)`)
}

// All FAQs by category
export async function getFaqsByCategory(category: string) {
  return await client.fetch(`*[_type == "faq" && category == $category && showOnSite == true] | order(orderRank asc)`, { category })
}

// All platforms to show as badges
export async function getPlatformsForBadges() {
  return await client.fetch(`*[_type == "platform" && showAsBadge == true] | order(orderRank asc)`)
}

// All training solutions to show on site
export async function getTrainingSolutions() {
  return await client.fetch(`*[_type == "trainingSolution" && showOnSite == true] | order(orderRank asc)`)
}

// Blog posts by migration status
export async function getBlogPostsByMigrationStatus(status: string) {
  return await client.fetch(`*[_type == "blogPost" && migrationStatus == $status] | order(publishedAt desc)`, { status })
}
