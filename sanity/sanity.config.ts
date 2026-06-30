import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import type {DefaultDocumentNodeResolver} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {table} from '@sanity/table'
import {seoMetaFields} from 'sanity-plugin-seo'
import {tableOfContentsPlugin} from 'sanity-plugin-table-of-contents'
import {markdownSchema} from 'sanity-plugin-markdown'
import {Iframe} from 'sanity-plugin-iframe-pane'
import {presentationTool} from 'sanity/presentation'
import {assist} from '@sanity/assist'
import schemaTypes from './schemaTypes'
import deskStructure from './deskStructure'
import {GenerateSeoAction} from './actions/generateSeo'

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc: any) => {
            const slug = doc?.slug?.current
            // Use trailing slash to prevent Astro redirects that strip query parameters
            return slug
              ? `http://localhost:4321/api/preview/?slug=${slug}&type=post`
              : `http://localhost:4321/api/preview/`
          },
          reload: {
            button: true,
          },
        })
        .title('Preview'),
    ])
  }
  return S.document().views([S.view.form()])
}

export default defineConfig({
  name: 'default',
  title: 'TheEduAssist',

  projectId: 'jg4gi6mn',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure,
      defaultDocumentNode,
    }),
    visionTool(),
    table(),
    seoMetaFields(),
    tableOfContentsPlugin({
      fieldNames: ['body'],
      documentTypes: ['post'],
    }),
    markdownSchema(),
    assist(),
    presentationTool({
      // Use trailing slash here too
      previewUrl: 'http://localhost:4321/api/preview/',
      resolve: {
        locations: {
          post: (doc, context) => {
            if (!doc.slug?.current) return null
            return {
              locations: [
                {
                  title: doc.title || 'Untitled',
                  href: `/blog/${doc.slug.current}`,
                },
                {
                  title: 'Blog',
                  href: '/blog',
                },
              ],
            }
          },
        },
      },
    }),
  ],

  document: {
    actions: (prev, context) => {
      return context.schemaType === 'post' ? [...prev, GenerateSeoAction] : prev
    },
    productionUrl: async (prev, context) => {
      const {document} = context
      if (document._type === 'post') {
        const slug = (document.slug as any)?.current
        if (slug) {
          return `https://theeduassist.com/api/preview/?slug=${slug}&type=post`
        }
      }
      return prev
    },
  },

  schema: {
    name: 'default',
    types: schemaTypes,
  },
})
