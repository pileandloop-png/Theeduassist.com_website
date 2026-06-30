# Cloudflare R2 for Future Downloads

Cloudflare R2 is an S3-compatible object storage service that is excellent for hosting large files. While we are currently using Sanity Images for standard web content, R2 will be utilized in the future for specific use cases.

## Explain:
Use R2 later for:
* PDF lead magnets
* free checklists
* course templates
* downloadable resources
* resource packs
* large media archives

Do not use R2 now for:
* normal Sanity blog images
* small service images
* author images
* platform badges
* content images writers upload daily

## Future folder structure:
When R2 is implemented, consider using a structured bucket layout:
* `lead-magnets/`
* `templates/`
* `case-study-downloads/`
* `course-samples/`
* `brand-assets/`
* `archives/`

## Access model:
* public downloadable resources can use public bucket/custom domain later
* private client resources need authentication and should not be public
* do not store confidential client files publicly
