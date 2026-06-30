import type {StructureResolver} from 'sanity/structure'

const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
      S.divider(),
      S.listItem()
        .title('Main Pages')
        .id('pages')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Services')
        .id('services')
        .child(S.documentTypeList('service').title('Services')),
      S.listItem()
        .title('Kajabi Services')
        .id('kajabi')
        .child(S.documentTypeList('kajabiService').title('Kajabi Services')),
      S.listItem()
        .title('Case Studies')
        .id('caseStudies')
        .child(S.documentTypeList('caseStudy').title('Case Studies')),
      S.listItem()
        .title('Blog Posts')
        .id('posts')
        .child(S.documentTypeList('post').title('Blog Posts')),
      S.listItem()
        .title('Authors')
        .id('authors')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('FAQs')
        .id('faqs')
        .child(S.documentTypeList('faq').title('FAQs')),
      S.listItem()
        .title('Platforms')
        .id('platforms')
        .child(S.documentTypeList('platform').title('Platforms')),
      S.listItem()
        .title('Training Solutions')
        .id('training')
        .child(S.documentTypeList('trainingSolution').title('Training Solutions')),
      S.listItem()
        .title('Testimonials')
        .id('testimonials')
        .child(S.documentTypeList('testimonial').title('Testimonials')),
      S.divider(),
      S.listItem()
        .title('Navigation')
        .id('navigation')
        .child(S.documentTypeList('navigation').title('Navigation')),
      S.listItem()
        .title('CTA Blocks')
        .id('ctaBlock')
        .child(S.documentTypeList('ctaBlock').title('CTA Blocks')),
      S.listItem()
        .title('Processes')
        .id('process')
        .child(S.documentTypeList('process').title('Processes')),
      S.listItem()
        .title('Audience Segments')
        .id('audienceSegment')
        .child(S.documentTypeList('audienceSegment').title('Audience Segments')),
    ])

export default deskStructure
