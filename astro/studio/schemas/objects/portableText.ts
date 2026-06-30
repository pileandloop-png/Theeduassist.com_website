import {defineType} from 'sanity'

export default defineType({
  name: 'portableText',
  title: 'Portable Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) => Rule.uri({scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: true})
              },
            ],
          },
        ],
      },
    },
    {
      type: 'imageWithAlt',
    },
  ],
})
