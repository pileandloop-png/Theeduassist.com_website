import {defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'bio', title: 'Bio', type: 'array', of: [{type: 'block'}]},
  ],
})
