import {defineType} from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    {name: 'question', title: 'Question', type: 'string'},
    {name: 'answer', title: 'Answer', type: 'array', of: [{type: 'block'}]},
  ],
})
