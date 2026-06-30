import {defineType} from 'sanity'

export default defineType({
  name: 'trainingSolution',
  title: 'Training Solution',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'summary', title: 'Summary', type: 'text'},
    {name: 'mainImage', title: 'Main image', type: 'image'},
    {name: 'content', title: 'Content', type: 'portableText'},
    {name: 'showOnSite', title: 'Show on site', type: 'boolean'},
    {name: 'orderRank', title: 'Order Rank', type: 'number'},
    {name: 'seo', title: 'SEO', type: 'seo'},
  ],
})
