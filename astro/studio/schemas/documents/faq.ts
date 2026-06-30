import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Kajabi', value: 'kajabi'},
          {title: 'LMS', value: 'lms'},
          {title: 'Custom eLearning', value: 'custom-elearning'},
          {title: 'AI eLearning', value: 'ai-elearning'},
          {title: 'Free Audit', value: 'free-audit'},
          {title: 'General', value: 'general'},
        ],
      },
    }),
    defineField({
      name: 'relatedPage',
      title: 'Related Page',
      type: 'reference',
      to: [{type: 'page'}, {type: 'service'}, {type: 'kajabiService'}],
    }),
    defineField({
      name: 'orderRank',
      title: 'Order Rank',
      type: 'number',
    }),
    defineField({
      name: 'showOnSite',
      title: 'Show On Site',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
