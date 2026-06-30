// barrel file for object types
import seo from './seo'
import cta from './cta'
import ctaSection from './ctaSection'
import imageWithAlt from './imageWithAlt'
import processStep from './processStep'
import faqItem from './faqItem'
import link from './link'
import portableText from './portableText'
import * as embeds from './embeds'

export default [
  seo,
  cta,
  ctaSection,
  imageWithAlt,
  processStep,
  faqItem,
  link,
  portableText,
  ...Object.values(embeds)
]
