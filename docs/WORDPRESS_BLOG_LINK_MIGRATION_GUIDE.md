# WordPress Blog Link Migration Guide

This document explains the strategy for safely handling the inventory of old URLs moving from WordPress to Astro.

## Inventory Strategy
The central source of truth for the migration state is `src/data/wordpressBlogInventory.ts`.
This list maps the old slug, its topic cluster, and an explicit `recommendedAction`.

## Redirect Rules
*   **Do Not Bulk Redirect:** We will NOT blindly redirect all old URLs to the homepage, as that is a soft-404 and terrible for SEO.
*   **1-to-1 Mapping:** High-priority articles should be rewritten/reviewed in Sanity and migrated 1-to-1 (`redirectStatus: 'ready'`).
*   **Merge into Guides:** Weak content can be merged into stronger, pillar resources (`mergeIntoGuide`), then redirected to the pillar.
*   **Service Mapping:** Content that acts like a service page but was a blog post should safely 301 redirect to the respective `/services/` or `/kajabi-services/` route.

## What NOT to Migrate
*   URLs containing `__trashed`
*   MailPoet plugins/archive pages
*   Query string template URLs (`?wpr_templates`)
*   Typo tags (e.g., `scrom`, `autralia`)

## Owner Review Checklist
1. [ ] Review `wordpressBlogInventory.ts` and verify priority levels.
2. [ ] For items marked `migrate`, rewrite content in markdown or Sanity.
3. [ ] Confirm media assets are downloaded and properly attached to new posts.
4. [ ] Update internal links inside the post body to point to Astro paths.
5. [ ] Change `contentStatus` to `published` and `redirectStatus` to `ready`.
6. [ ] Update the global `redirects.ts` file to execute the final 301s.
