# WordPress to Sanity Blog Migration

## 1. Current website blog audit
The live website handles blogs effectively with static data. The design matches the brand, featuring categories, filters, and FAQs on the homepage. However, the blog details fetch a "Content coming soon" placeholder because the body rendering logic was not connected to Sanity's Portable Text.

## 2. Current Sanity blog schema
The Sanity schema for `blogPost` includes fields like Title, Slug, Excerpt, Author, Category, Tags, Featured Image, Published At, Updated At, Content (Portable Text format named `body`), Migration Status, and several SEO fields.

## 3. Blog body rendering fix
The `body` field from Sanity uses Portable Text. We implemented `PortableTextRenderer.tsx` using `@portabletext/react` to safely render the content on `src/pages/blog/[slug].astro`. For static posts, it gracefully falls back to the HTML `content` field.

## 4. Blog FAQ model
We added a native FAQ model connecting to the blog posts. This relies on an array of `faqItem` objects (`blogFaqs`) and an array of references to global `faq` documents (`relatedFaqs`).

## 5. Related FAQs vs inline FAQs
- `relatedFaqs`: Reusable, global FAQs managed centrally.
- `blogFaqs`: Inline FAQs specific to a single blog post.

## 6. Related services/platforms/posts
We added fields for `relatedServices`, `relatedPlatforms`, and `relatedPosts` inside the `blogPost` document. The frontend renders them as clean cards below the main blog body but before the final CTA.

## 7. Visitor understanding fields
The schema was enhanced with `articleType`, `sources`, `lastReviewedAt`, and `reviewedBy` to better categorize intent and content clusters.

## 8. Migration safety fields
WordPress imported posts include `importBatchId`, `migrationStatus`, and `reviewPriority`. Default migration status is `needs_review`.

## 9. Blog visibility rules
Posts only show publicly if:
- `publishedAt` exists AND `slug.current` exists.
- AND `migrationStatus` is undefined OR `approved` OR `published`.
Unapproved imported posts remain hidden.

## 10. Sitemap safety rules
The sitemap logic relies on `getAllPublicRoutes()`, which internally calls `getAllBlogPosts()`. Since `getAllBlogPosts()` filters out posts lacking the correct `migrationStatus`, the sitemap automatically reflects only safe, approved posts.

## 11. FAQ schema rules
FAQ schema is only generated when at least one visible FAQ exists. The frontend explicitly checks that `showOnPage` and `includeInSchema` are true before adding to JSON-LD.

## 12. SEO/GEO/Open Graph/Twitter fields
The frontend respects Open Graph fields, falling back safely:
- OG Title -> Meta Title -> Title
- OG Description -> Meta Description -> Excerpt
- OG Image -> Meta Image -> Hero/Featured Image

## 13. Image handling plan
Images inside Portable Text use `@sanity/image-url` to properly construct reliable CDN URLs based on asset references.

## 14. Redirect CSV process
A CSV stub has been created at `redirects/wordpress-blog-redirects.csv` with the headers `old_url,new_url,action,status,notes`. This will be populated and processed later.

## 15. Pilot import plan
A small batch of posts should be imported with `migrationStatus = 'needs_review'` to verify that they do not leak to the frontend and appear correctly in the Sanity Studio.

## 16. Rollback plan
If the import damages the Sanity dataset, we can delete the imported documents by `importBatchId` or use Sanity history to roll back. Since the frontend is static and decoupled, we can also revert the git commit.

## 17. QA checklist
- Check `npm run build` passes.
- Verify `Content coming soon` is replaced by actual text.
- Ensure existing static posts still load.
- Confirm FAQs only show when data exists.
- Validate JSON-LD outputs properly.

---

### Migration Principle
Old WordPress posts must first be imported as drafts or `migrationStatus = needs_review`. They must be reviewed before publishing. Weak, duplicate, outdated, off-brand, or thin posts should not be published automatically. They should be refreshed, combined, redirected, or marked `do_not_migrate`.
