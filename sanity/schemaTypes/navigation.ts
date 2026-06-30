import {defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'header', title: 'Header links', type: 'array', of: [{ type: 'link' }] },
    { name: 'footerCompanyLinks', title: 'Footer company links', type: 'array', of: [{ type: 'link' }] },
    { name: 'footerLegalLinks', title: 'Footer legal links', type: 'array', of: [{ type: 'link' }] },
  ],
})
