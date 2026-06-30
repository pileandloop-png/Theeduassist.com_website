import {defineType} from 'sanity'

export default defineType({
  name: 'ctaBlock',
  title: 'CTA Block',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'ctas', title: 'CTAs', type: 'array', of: [{ type: 'cta' }] },
  ],
})
