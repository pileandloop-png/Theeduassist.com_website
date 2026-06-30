# Sanity Image Guidelines

This document outlines the rules for handling images in TheEduAssist's Sanity CMS.

## General Image Strategy
- **Use Sanity Images** for normal content images. Examples include blog featured images, service page images, case study images, author profile photos, and platform badges.
- **Do not use Cloudinary** at this stage.
- **Do not use Cloudflare R2** right now. Cloudflare R2 will be configured later for heavy downloadable files, PDFs, lead magnets, and media archives.

## Recommended Image Sizes
- **Hero / Featured Images:** Compress to under 300KB. Dimensions around 1200x630px are ideal for Open Graph/sharing.
- **Author Portraits:** Compress to under 100KB. Dimensions around 400x400px (square).
- **Logos / Platform Badges:** Use SVGs where possible, or compress PNGs under 50KB.

## File Naming Rules
- Use lowercase letters, numbers, and hyphens only.
- No spaces or special characters.
- Name the file descriptively for SEO (e.g., `kajabi-course-setup-service.jpg`, NOT `IMG_1234_Final_v2.jpg`).

## Alt Text Rules
- Alt text is **required** for every image uploaded.
- Describe what the image shows for visually impaired users.
- Keep it concise but descriptive.
- Do not stuff keywords into the alt text.

## What NOT to Upload
- Writers should not upload huge, raw Canva files. Always export and compress them first (e.g., using TinyPNG or similar tools).
- Videos should **not** be uploaded to Sanity. (Use YouTube/Vimeo embeds or wait for future video hosting solutions).
- Large PDFs, lead magnets, or file downloads should **not** be stored inside Sanity during this phase.

## Image Migration Checklist
When migrating images from WordPress to Sanity:
1. Locate the image on the current WordPress site.
2. Download the highest quality version available.
3. Compress the image if it is too large.
4. Rename the file according to the naming rules above.
5. Upload to Sanity and immediately add descriptive Alt Text.
6. Update the `Image Migration Tracker` with your progress.
