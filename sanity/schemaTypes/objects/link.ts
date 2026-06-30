import {defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {name: 'label', title: 'Label', type: 'string'},
    {name: 'href', title: 'URL', type: 'url'},
    {name: 'openInNewTab', title: 'Open in new tab', type: 'boolean'},
    {name: 'internal', title: 'Internal reference', type: 'reference', to: [{type: 'page'}]},
  ],
})
