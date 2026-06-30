import {defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {name: 'title', title: 'Site title', type: 'string'},
    {name: 'logo', title: 'Logo', type: 'image', options: {hotspot: true}},
    {name: 'footerText', title: 'Footer text', type: 'text'},
    {name: 'seo', title: 'SEO', type: 'seo'},
  ],
})
