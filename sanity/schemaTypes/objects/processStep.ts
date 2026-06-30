import {defineType} from 'sanity'

export default defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'object',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'icon', title: 'Icon', type: 'image'},
  ],
})
