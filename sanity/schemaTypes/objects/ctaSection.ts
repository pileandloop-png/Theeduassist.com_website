import {defineType} from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text', rows: 3},
    {name: 'buttonText', title: 'Button Text', type: 'string'},
    {name: 'buttonUrl', title: 'Button URL', type: 'string'},
    {
      name: 'buttonStyle',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Outline', value: 'outline'},
        ],
      },
    },
  ],
})
