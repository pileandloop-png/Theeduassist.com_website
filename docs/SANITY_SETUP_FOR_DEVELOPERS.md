# Sanity Setup for Developers

This document explains how the Sanity integration is configured in the Astro frontend and how to manage the Studio locally.

## Package Setup
We are using the following core packages:
- `sanity`
- `@sanity/client`
- `@sanity/image-url`

Due to peer dependency conflicts between `@astrojs/tailwind` and earlier versions of `@sanity/astro`, the Sanity Studio is configured in a completely separate folder (`/studio/`). This ensures the Studio build does not break or conflict with the main Astro build.

## Environment Variables
The root `.env` file (copied from `.env.example`) requires the following:

```
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2026-06-01
```

The site is designed to build safely even if these variables are missing. It will fall back to "demo" and "production" gracefully, though actual content queries may fail or return empty arrays depending on the Sanity configuration.

**Do not commit real `.env.local` or secret tokens to Git.**

## Local Development (Studio)
To run the Sanity Studio locally:
1. Open a terminal.
2. `cd studio`
3. Make sure dependencies are installed (`npm install --legacy-peer-deps` inside the studio folder).
4. Run `npm run dev`.
5. The Studio will be available (usually at `http://localhost:3333`).

## Local Development (Astro Frontend)
To run the Astro website:
1. Open a terminal in the root directory.
2. Run `npm run dev`.

## CORS Domains
When deploying the Studio or previewing the frontend locally, you must add the relevant URLs to the CORS origins in your Sanity project dashboard (manage.sanity.io). Examples:
- `http://localhost:3000`
- `http://localhost:4321`
- `http://localhost:3333`
- The eventual production domains.

## Connecting Astro Preview
Preview mode is currently not fully implemented to ensure build stability during this foundational phase.
When ready:
- Use `useCdn: false` in the Sanity client configuration to ensure fresh data.
- Supply a `SANITY_VIEWER_TOKEN` environment variable to the client to fetch drafts.

## Using the Sanity Image Helper
Use the exported `urlFor` function from `src/sanity/image.ts` to generate optimized image URLs in your Astro components.

```javascript
import { urlFor } from '../sanity/image';

// In your component
const imageUrl = urlFor(sanityDocument.featuredImage).width(800).url();
```
This respects the hotspot and crop settings configured by the content editors in the Studio.
