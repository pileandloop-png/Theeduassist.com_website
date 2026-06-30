import {defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}},
    {name: 'client', title: 'Client', type: 'string'},
    {name: 'summary', title: 'Summary', type: 'text'},
    {name: 'mainImage', title: 'Main image', type: 'image', options: {hotspot: true}},
    {name: 'content', title: 'Content', type: 'portableText'},
    {name: 'results', title: 'Results', type: 'text'},
    {name: 'orderRank', title: 'Order Rank', type: 'number'},
    {name: 'seo', title: 'SEO', type: 'seo'},
  ],
})
