import {defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}},
    {name: 'mainImage', title: 'Main image', type: 'image', options: {hotspot: true}},
    {name: 'content', title: 'Content', type: 'portableText'},
    {name: 'seo', title: 'SEO', type: 'seo'},
    {name: 'cta', title: 'CTA', type: 'cta'},
  ],
})
