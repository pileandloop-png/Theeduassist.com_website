import {defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Call To Action',
  type: 'object',
  fields: [
    {name: 'label', title: 'Label', type: 'string'},
    {name: 'url', title: 'URL', type: 'url'},
    {name: 'openInNewTab', title: 'Open in new tab', type: 'boolean'},
    {name: 'style', title: 'Style', type: 'string', options: {list: ['primary','secondary','link']}},
  ],
})
