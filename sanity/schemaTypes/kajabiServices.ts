import {defineType} from 'sanity'

export default defineType({
  name: 'kajabiService',
  title: 'Kajabi Service',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'kajabiId', title: 'Kajabi ID', type: 'string'},
    {name: 'summary', title: 'Summary', type: 'text'},
    {name: 'mainImage', title: 'Main image', type: 'image', options: {hotspot: true}},
    {name: 'content', title: 'Content', type: 'portableText'},
    {name: 'orderRank', title: 'Order Rank', type: 'number'},
    {name: 'seo', title: 'SEO', type: 'seo'},
  ],
})
