import {defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'meta', title: 'Meta'},
    {name: 'stats', title: 'Stats'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    {name: 'title', title: 'Title', type: 'string', group: 'content'},
    {name: 'slug', title: 'Slug', type: 'slug', group: 'content', options: {source: 'title', maxLength: 96}},
    {name: 'publishedAt', title: 'Published at', type: 'datetime', group: 'meta'},
    {name: 'author', title: 'Author', type: 'reference', to: [{type: 'author'}], group: 'meta'},
    {name: 'mainImage', title: 'Main image', type: 'image', options: {hotspot: true}, group: 'content'},
    {name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, group: 'content'},
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'},
          ],
        },
        {type: 'image', options: {hotspot: true}},
        {
          type: 'object',
          name: 'markdownBlock',
          title: 'Markdown',
          fields: [
            {
              name: 'content',
              title: 'Content',
              type: 'markdown',
            }
          ],
          preview: {
            select: {
              content: 'content'
            },
            prepare(selection: any) {
              const {content} = selection
              return {
                title: 'Markdown Block',
                subtitle: content ? content.substring(0, 40) + '...' : 'Empty'
              }
            }
          }
        },
        {type: 'table'},
        {type: 'ctaSection'},
        {type: 'youtubeEmbed'},
        {type: 'vimeoEmbed'},
        {type: 'loomEmbed'},
        {type: 'twitterEmbed'},
        {type: 'linkedinEmbed'},
        {type: 'figmaEmbed'},
        {type: 'codepenEmbed'},
        {type: 'googleMapsEmbed'},
      ],
    },
    {
      name: 'endCta',
      title: 'End of Blog CTA Section',
      type: 'object',
      group: 'content',
      fields: [
        {name: 'show', title: 'Show End CTA', type: 'boolean', initialValue: false},
        {name: 'heading', title: 'Heading', type: 'string'},
        {name: 'description', title: 'Description', type: 'text', rows: 3},
        {name: 'primaryButtonText', title: 'Primary Button Text', type: 'string'},
        {name: 'primaryButtonUrl', title: 'Primary Button URL', type: 'string'},
        {name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string'},
        {name: 'secondaryButtonUrl', title: 'Secondary Button URL', type: 'string'},
      ],
    },
    {name: 'seo', title: 'SEO', type: 'seoMetaFields', group: 'seo'},
    {name: 'cta', title: 'CTA', type: 'cta', group: 'meta'},
    {
      name: 'stats',
      title: 'Post Statistics',
      type: 'object',
      group: 'stats',
      description: 'Calculated automatically on the website. Can be overridden here if needed.',
      fields: [
        {name: 'wordCount', title: 'Word Count', type: 'number'},
        {name: 'readingTime', title: 'Reading Time (minutes)', type: 'number'},
      ],
      options: {
        columns: 2
      }
    },
  ],
})
