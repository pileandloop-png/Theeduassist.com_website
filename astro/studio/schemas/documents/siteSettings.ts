import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      initialValue: 'TheEduAssist',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'E-Learning Design Agency',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      initialValue: 'Info@theeduassist.com',
    }),
    defineField({
      name: 'calendlyUrl',
      title: 'Calendly URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedInUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Primary CTA Label',
      type: 'string',
      initialValue: 'Book Free Audit',
    }),
    defineField({
      name: 'primaryCtaHref',
      title: 'Primary CTA Href',
      type: 'string',
      initialValue: '/book-free-audit/',
    }),
    defineField({
      name: 'platformDisclaimer',
      title: 'Platform Disclaimer',
      type: 'string',
      initialValue: 'Platform support does not imply official partnership unless stated.',
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
  ],
})
