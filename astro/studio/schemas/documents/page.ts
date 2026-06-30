import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
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
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'About', value: 'about'},
          {title: 'Contact', value: 'contact'},
          {title: 'Book Free Audit', value: 'bookFreeAudit'},
          {title: 'Thank You', value: 'thankYou'},
          {title: 'Legal', value: 'legal'},
          {title: 'Generic', value: 'generic'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'portableText',
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
      name: 'noindex',
      title: 'No Index',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),
  ],
})
