import {defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {name: 'question', title: 'Question', type: 'string'},
    {name: 'answer', title: 'Answer', type: 'portableText'},
    {name: 'category', title: 'Category', type: 'string', options: {list: ['general', 'kajabi', 'services']}},
    {name: 'showOnSite', title: 'Show on site', type: 'boolean'},
    {name: 'orderRank', title: 'Order Rank', type: 'number'},
  ],
})
