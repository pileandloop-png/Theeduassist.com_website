import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seoFields',
  title: 'SEO Fields',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'focusKeyword',
      title: 'Focus Keyword',
      type: 'string',
    }),
    defineField({
      name: 'additionalKeywords',
      title: 'Additional Keywords',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'canonicalPath',
      title: 'Canonical Path',
      type: 'string',
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
    }),
    defineField({
      name: 'twitterCardType',
      title: 'Twitter Card Type',
      type: 'string',
      options: {
        list: [
          {title: 'Summary', value: 'summary'},
          {title: 'Summary Large Image', value: 'summary_large_image'}
        ]
      }
    }),
    defineField({
      name: 'noindex',
      title: 'No Index',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
