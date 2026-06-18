# Media Hosting Decision Guide

This document compares various media hosting solutions and provides the current recommendation for TheEduAssist.

## Sanity Images
* best for normal CMS images
* easiest for writers
* supports image pipeline/URL transforms
* good for blog/service/case study images
* not for videos or huge downloads

## Cloudinary
* powerful image/video platform
* good transformations
* credit/quota model
* another system to manage
* not recommended for TheEduAssist starter stage

## Cloudflare R2
* object storage
* good for large downloads
* useful later for PDFs, lead magnets, templates
* not ideal as first writer-friendly image workflow
* requires developer setup and file management logic

## Firebase Storage
* useful inside Firebase apps
* can store files
* not first recommendation for CMS image workflow
* may be useful later for app/user uploads, not public CMS images

## Final recommendation
* **Now:** Sanity Images for all general CMS content (blog, service, authors, case studies).
* **Later:** Cloudflare R2 for large downloads (PDFs, lead magnets, resources).
* **Avoid Cloudinary** at starter stage to prevent unnecessary complexity and costs.
* **Do not** store heavy downloads in Sanity long-term.
* **Do not** store normal CMS images in R2 at the start.
