import siteSettings from './documents/siteSettings'
import page from './documents/page'
import service from './documents/service'
import kajabiService from './documents/kajabiService'
import caseStudy from './documents/caseStudy'
import blogPost from './documents/blogPost'
import author from './documents/author'
import faq from './documents/faq'
import platform from './documents/platform'
import trainingSolution from './documents/trainingSolution'
import testimonial from './documents/testimonial'
import category from './documents/category'
import tag from './documents/tag'
import homepageContent from './documents/homepageContent'

import seoFields from './objects/seoFields'
import cta from './objects/cta'
import imageWithAlt from './objects/imageWithAlt'
import portableText from './objects/portableText'
import processStep from './objects/processStep'
import faqItem from './objects/faqItem'
import link from './objects/link'

export const schemaTypes = [
  // documents
  siteSettings,
  homepageContent,
  page,
  service,
  kajabiService,
  caseStudy,
  blogPost,
  category,
  tag,
  author,
  faq,
  platform,
  trainingSolution,
  testimonial,

  // objects
  seoFields,
  cta,
  imageWithAlt,
  portableText,
  processStep,
  faqItem,
  link,
]
