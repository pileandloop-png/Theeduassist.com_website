import {defineType} from 'sanity'

export default defineType({
  name: 'platform',
  title: 'Platform',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'logo', title: 'Logo', type: 'image'},
    {name: 'website', title: 'Website', type: 'url'},
    {name: 'showAsBadge', title: 'Show as badge', type: 'boolean'},
    {name: 'orderRank', title: 'Order Rank', type: 'number'},
  ],
})
