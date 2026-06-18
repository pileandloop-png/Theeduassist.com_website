import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'trainingSolution',
  title: 'Training Solution',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'audience',
      title: 'Audience',
      type: 'string',
    }),
    defineField({
      name: 'sampleDeliverables',
      title: 'Sample Deliverables',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}, {type: 'kajabiService'}]}],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Fields',
      type: 'seoFields',
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
