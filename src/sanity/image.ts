import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

/**
 * Helper to build an image URL.
 * It respects hotspot/crop data if enabled on the schema.
 *
 * Usage example:
 * urlFor(source).width(800).auto('format').url()
 */
export function urlFor(source: any) {
  return builder.image(source)
}
