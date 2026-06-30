import {defineType} from 'sanity'

export const youtubeEmbed = defineType({
  name: 'youtubeEmbed',
  title: 'YouTube Embed',
  type: 'object',
  fields: [
    {name: 'url', title: 'YouTube Video URL', type: 'url'}
  ]
})

export const vimeoEmbed = defineType({
  name: 'vimeoEmbed',
  title: 'Vimeo Embed',
  type: 'object',
  fields: [
    {name: 'url', title: 'Vimeo Video URL', type: 'url'}
  ]
})

export const loomEmbed = defineType({
  name: 'loomEmbed',
  title: 'Loom Embed',
  type: 'object',
  fields: [
    {name: 'url', title: 'Loom Video URL', type: 'url'}
  ]
})

export const twitterEmbed = defineType({
  name: 'twitterEmbed',
  title: 'X (Twitter) Embed',
  type: 'object',
  fields: [
    {name: 'url', title: 'X (Twitter) URL', type: 'url'}
  ]
})

export const linkedinEmbed = defineType({
  name: 'linkedinEmbed',
  title: 'LinkedIn Embed',
  type: 'object',
  fields: [
    {name: 'url', title: 'LinkedIn Post URL', type: 'url'}
  ]
})

export const figmaEmbed = defineType({
  name: 'figmaEmbed',
  title: 'Figma Embed',
  type: 'object',
  fields: [
    {name: 'url', title: 'Figma URL', type: 'url'}
  ]
})

export const codepenEmbed = defineType({
  name: 'codepenEmbed',
  title: 'CodePen Embed',
  type: 'object',
  fields: [
    {name: 'url', title: 'CodePen URL', type: 'url'}
  ]
})

export const googleMapsEmbed = defineType({
  name: 'googleMapsEmbed',
  title: 'Google Maps Embed',
  type: 'object',
  fields: [
    {name: 'url', title: 'Google Maps URL', type: 'url'}
  ]
})
