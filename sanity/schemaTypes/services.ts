import {defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}},
    {name: 'summary', title: 'Summary', type: 'text'},
    {name: 'mainImage', title: 'Main image', type: 'image', options: {hotspot: true}},
    {name: 'content', title: 'Content', type: 'portableText'},
    {name: 'orderRank', title: 'Order Rank', type: 'number'},
    {name: 'seo', title: 'SEO', type: 'seo'},
    {name: 'cta', title: 'CTA', type: 'cta'},
  ],
})
