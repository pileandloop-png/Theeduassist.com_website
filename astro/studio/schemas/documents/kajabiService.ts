import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kajabiService',
  title: 'Kajabi Service',
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
      name: 'whatIsIncluded',
      title: 'What Is Included',
      type: 'portableText',
    }),
    defineField({
      name: 'whoItIsFor',
      title: 'Who It Is For',
      type: 'portableText',
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'portableText',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{type: 'faqItem'}],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',
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
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),
  ],
})
