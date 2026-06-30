import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'oldWordPressUrls',
      title: 'Old WordPress URLs',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),
    defineField({
      name: 'showPublicPage',
      title: 'Show Public Page',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'migrationStatus',
      title: 'Migration Status',
      type: 'string',
      options: {
        list: [
          {title: 'Pending', value: 'pending'},
          {title: 'Reviewed', value: 'reviewed'},
        ],
      },
      initialValue: 'pending',
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
    }),
  ],
})
