import {defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {name: 'quote', title: 'Quote', type: 'text'},
    {name: 'authorName', title: 'Author name', type: 'string'},
    {name: 'authorRole', title: 'Author role', type: 'string'},
    {name: 'authorCompany', title: 'Author company', type: 'string'},
    {name: 'photo', title: 'Photo', type: 'image'},
    {name: 'showOnSite', title: 'Show on site', type: 'boolean'},
    {name: 'orderRank', title: 'Order Rank', type: 'number'},
  ],
})
