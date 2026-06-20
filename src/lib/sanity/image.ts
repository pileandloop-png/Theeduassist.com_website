import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './client';

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source) {
  if (!source) {
    return null;
  }
  return builder.image(source);
}
