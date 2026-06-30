import {defineType} from 'sanity'

export default defineType({
  name: 'audienceSegment',
  title: 'Audience Segment',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'summary', title: 'Summary', type: 'text' },
    { name: 'showOnSite', title: 'Show on site', type: 'boolean' },
    { name: 'orderRank', title: 'Order rank', type: 'number' },
  ],
})
