import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'TheEduAssist CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'demo',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    visionTool(),
    media(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem()
              .title('Main Pages')
              .child(S.documentTypeList('page').title('Pages')),
            S.listItem()
              .title('Services')
              .child(S.documentTypeList('service').title('Services')),
            S.listItem()
              .title('Kajabi Services')
              .child(S.documentTypeList('kajabiService').title('Kajabi Services')),
            S.listItem()
              .title('Case Studies')
              .child(S.documentTypeList('caseStudy').title('Case Studies')),
            S.listItem()
              .title('Blog Posts')
              .child(S.documentTypeList('blogPost').title('Blog Posts')),
            S.listItem()
              .title('FAQs')
              .child(S.documentTypeList('faq').title('FAQs')),
            S.listItem()
              .title('Authors')
              .child(S.documentTypeList('author').title('Authors')),
            S.listItem()
              .title('Platforms')
              .child(S.documentTypeList('platform').title('Platforms')),
            S.listItem()
              .title('Training Solutions')
              .child(S.documentTypeList('trainingSolution').title('Training Solutions')),
            S.listItem()
              .title('Testimonials')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'siteSettings',
                  'page',
                  'service',
                  'kajabiService',
                  'caseStudy',
                  'blogPost',
                  'faq',
                  'author',
                  'platform',
                  'trainingSolution',
                  'testimonial',
                ].includes(listItem.getId() as string)
            ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
