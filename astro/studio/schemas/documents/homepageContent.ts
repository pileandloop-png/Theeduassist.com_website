import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepageContent',
  title: 'Homepage Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'heroSupportLine',
      title: 'Hero Support Line',
      type: 'string',
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Primary CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'primaryCtaHref',
      title: 'Primary CTA Href',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaLabel',
      title: 'Secondary CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaHref',
      title: 'Secondary CTA Href',
      type: 'string',
    }),
    defineField({
      name: 'toolsSectionTitle',
      title: 'Tools Section Title',
      type: 'string',
    }),
    defineField({
      name: 'toolsSectionSubtitle',
      title: 'Tools Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'choosePathTitle',
      title: 'Choose Path Title',
      type: 'string',
    }),
    defineField({
      name: 'choosePathSubtitle',
      title: 'Choose Path Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'finalCtaTitle',
      title: 'Final CTA Title',
      type: 'string',
    }),
    defineField({
      name: 'finalCtaText',
      title: 'Final CTA Text',
      type: 'text',
    }),
  ],
})
