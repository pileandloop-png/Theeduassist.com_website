import {defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {name: 'metaTitle', title: 'Meta title', type: 'string'},
    {name: 'metaDescription', title: 'Meta description', type: 'text'},
    {name: 'keywords', title: 'Keywords', type: 'array', of: [{type: 'string'}], options: {layout: 'tags'}},
    {name: 'ogTitle', title: 'Open Graph Title', type: 'string'},
    {name: 'ogDescription', title: 'Open Graph Description', type: 'text'},
    {name: 'ogImage', title: 'Open Graph Image', type: 'image', options: {hotspot: true}},
    {name: 'canonicalUrl', title: 'Canonical URL', type: 'url'},
    {name: 'noIndex', title: 'NoIndex Toggle', type: 'boolean', initialValue: false},
  ],
})
