import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'isVerified',
      title: 'Is Verified?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'permissionStatus',
      title: 'Permission Status',
      type: 'string',
      options: {
        list: [
          {title: 'Approved', value: 'approved'},
          {title: 'Pending', value: 'pending'},
          {title: 'Do Not Use', value: 'doNotUse'},
        ],
      },
      initialValue: 'pending',
    }),
    defineField({
      name: 'showOnSite',
      title: 'Show On Site',
      type: 'boolean',
      initialValue: false,
      description: 'Testimonials must not show unless isVerified is true, permissionStatus is approved, and showOnSite is true.',
    }),
  ],
})
