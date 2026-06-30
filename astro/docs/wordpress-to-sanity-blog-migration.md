# WordPress to Sanity Blog Migration

## 1. Current Sanity blog schema
The `blogPost` schema supports standard fields (title, slug, excerpt, author, body, publishedAt, updatedAt) as well as specific migration fields.

## 2. Current FAQ model
FAQs are supported via inline `blogFaqs` directly on the document and global `relatedFaqs` referencing reusable `faq` documents.

## 3. relatedFaqs and blogFaqs behavior
Global FAQs load before inline FAQs.

## 4. FAQ visibility and sorting rules
Global FAQs check `showOnSite === true` and sort by `orderRank`.
Inline FAQs check `showOnPage === true` and sort by `sortOrder`.

## 5. FAQ schema rules
Only FAQs that pass the visibility checks and have `includeInSchema === true` (for inline FAQs) and valid non-empty questions and answers are outputted in the JSON-LD `FAQPage` schema.

## 6. Blog body rendering notes
PortableText is used via `PortableTextRenderer.tsx`, gracefully falling back to static HTML content if needed.

## 7. Related services/platforms/posts behavior
Related fields (`relatedServices`, `relatedPlatforms`, `relatedPosts`) are rendered if they exist, providing contextual links.

## 8. SEO/GEO metadata rules
Metadata maps directly from SEO object or falls back cleanly (metaTitle -> title, metaDescription -> excerpt, etc).

## 9. Migration status fields
- `migrationStatus`: indicates if post needs review, is approved, redirect only, etc.
- Options: `needs_review`, `approved`, `published`, `redirect_only`, `do_not_migrate`, `combine_with_other`

## 10. Public visibility rules
Only posts with a valid `slug.current`, `publishedAt`, and either no `migrationStatus` or status of `approved`/`published` are shown on the frontend.

## 11. Sitemap/RSS/llms safety rules
Sitemap relies on `getAllPublicRoutes()`, which inherits the public visibility filtering. RSS is not currently implemented. `llms.txt` and AI summary follow the exact same global rules.

## 12. Redirect CSV process
A CSV file at `redirects/wordpress-blog-redirects.csv` tracks old URLs, new URLs, and statuses.

## 13. Image migration phase
Images will be mapped using Sanity image objects (via `featuredImage` and `body` image blocks).

## 14. Pilot import process
Old WordPress posts must first be imported as drafts or `migrationStatus = needs_review`. They must be reviewed before publishing. Weak, duplicate, outdated, off-brand, or thin posts should be refreshed, combined, redirected, or marked `do_not_migrate`.

## 15. Rollback plan
Posts can simply have their `migrationStatus` set back to `needs_review` or drafts.

## 16. QA checklist
Check `/blog/` list page and detail pages. Confirm FAQs show up correctly. Check sitemaps. Check build passes.
