import {defineType} from 'sanity'

export default defineType({
  name: 'process',
  title: 'Process',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'steps', title: 'Steps', type: 'array', of: [{ type: 'processStep' }] },
  ],
})
