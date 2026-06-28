import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableText',
    }),
    defineField({
      name: 'blogFaqs',
      title: 'Inline FAQs',
      description: 'FAQs specific to this blog post',
      type: 'array',
      of: [{type: 'faqItem'}],
    }),
    defineField({
      name: 'relatedFaqs',
      title: 'Related FAQs',
      description: 'Select reusable global FAQs',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'faq'}]}],
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}, {type: 'kajabiService'}]}],
    }),
    defineField({
      name: 'relatedPlatforms',
      title: 'Related Platforms',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'platform'}]}],
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'blogPost'}]}],
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
      name: 'migrationSourceUrl',
      title: 'Migration Source URL',
      type: 'url',
    }),
    defineField({
      name: 'wordpressId',
      title: 'WordPress ID',
      type: 'string',
    }),
    defineField({
      name: 'legacyUrl',
      title: 'Legacy URL',
      type: 'url',
    }),
    defineField({
      name: 'legacySlug',
      title: 'Legacy Slug',
      type: 'string',
    }),
    defineField({
      name: 'legacyFeaturedImageUrl',
      title: 'Legacy Featured Image URL',
      type: 'url',
    }),
    defineField({
      name: 'originalPublishedAt',
      title: 'Original Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'legacyModifiedAt',
      title: 'Legacy Modified At',
      type: 'datetime',
    }),
    defineField({
      name: 'lastImportedAt',
      title: 'Last Imported At',
      type: 'datetime',
    }),
    defineField({
      name: 'migrationStatus',
      title: 'Migration Status',
      type: 'string',
      options: {
        list: [
          {title: 'Needs Review', value: 'needs_review'},
          {title: 'Approved', value: 'approved'},
          {title: 'Published', value: 'published'},
          {title: 'Redirect Only', value: 'redirect_only'},
          {title: 'Do Not Migrate', value: 'do_not_migrate'},
          {title: 'Combine With Other', value: 'combine_with_other'},
        ],
      },
      initialValue: 'needs_review',
    }),
    defineField({
      name: 'migrationNotes',
      title: 'Migration Notes',
      type: 'text',
    }),
    defineField({
      name: 'redirectTarget',
      title: 'Redirect Target',
      type: 'string',
    }),
    defineField({
      name: 'importBatchId',
      title: 'Import Batch ID',
      type: 'string',
    }),
    defineField({
      name: 'contentCluster',
      title: 'Content Cluster',
      type: 'string',
      options: {
        list: [
          'Course Creation & Curriculum Design',
          'Kajabi Setup & Course Platforms',
          'LMS Implementation & Migration',
          'AI-Powered E-Learning',
          'Content Conversion',
          'Instructional Design & Learner Experience',
          'Funnels, Automation & Launch Support',
          'Corporate & Enterprise Learning Systems',
          'Online Course Business Strategy',
          'Platform Comparison & Guidance'
        ]
      }
    }),
    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Creators', value: 'creators'},
          {title: 'Coaches', value: 'coaches'},
          {title: 'Consultants', value: 'consultants'},
          {title: 'Educators', value: 'educators'},
          {title: 'Publishers', value: 'publishers'},
          {title: 'Training Companies', value: 'training companies'},
          {title: 'Online Academies', value: 'online academies'},
          {title: 'Corporate Teams', value: 'corporate teams'},
          {title: 'Enterprise Learning Teams', value: 'enterprise learning teams'}
        ]
      }
    }),
    defineField({
      name: 'primaryService',
      title: 'Primary Service',
      type: 'string',
      options: {
        list: [
          'Course Clarity Blueprint',
          'Content Conversion Kit',
          'Kajabi Setup Sprint',
          'LMS Migration Map',
          'Course + Platform Build',
          'Ongoing Course Support',
          'Enterprise Learning Systems'
        ]
      }
    }),
    defineField({
      name: 'reviewPriority',
      title: 'Review Priority',
      type: 'string',
      options: {
        list: [
          {title: 'High', value: 'high'},
          {title: 'Medium', value: 'medium'},
          {title: 'Low', value: 'low'}
        ]
      },
      initialValue: 'medium'
    }),
    defineField({
      name: 'articleType',
      title: 'Article Type',
      type: 'string',
      options: {
        list: [
          'Guide',
          'Tutorial',
          'Comparison',
          'Event Guide',
          'Checklist',
          'Thought Leadership',
          'Case Study',
          'News / Update'
        ]
      }
    }),
    defineField({
      name: 'sources',
      title: 'Sources',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'url', type: 'url', title: 'URL'},
            {name: 'notes', type: 'text', title: 'Notes'},
            {name: 'dateChecked', type: 'datetime', title: 'Date Checked'}
          ]
        }
      ]
    }),
    defineField({
      name: 'lastReviewedAt',
      title: 'Last Reviewed At',
      type: 'datetime',
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Reviewed By',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
    }),
  ],
})
