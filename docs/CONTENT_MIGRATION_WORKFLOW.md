# Content Migration Workflow

This document details the process for migrating content from the existing WordPress site to the new Sanity CMS.

## The Most Important Rule: WordPress Stays Live
The current WordPress site at `theeduassist.com` remains live and untouched during this entire process. We are building the foundation in Sanity and Astro side-by-side. Do not alter, delete, or break anything on the live WordPress site.

## Strategy
1. **Migrate Main Pages First:** Start with Services, Case Studies, and essential pages (Home, About).
2. **Blog Later:** Blog posts are lower priority right now and will be migrated after the core structural pages.

## Workflow Using the Migration Tracker
We use a Migration Tracker spreadsheet to coordinate the work.

1. **Assignment:** The PM lists all existing WordPress URLs in the tracker and assigns a Writer.
2. **Old URL / New URL Mapping:** For every page, record the old WordPress URL and the new Astro/Sanity slug. Redirects will eventually be built based on this mapping.
3. **Drafting:** The assigned Writer creates the document in Sanity, copying content from the Old URL and formatting it for the new schema.
4. **Status Columns:** The Writer updates the tracker (e.g., changing status from "Pending" to "Draft Complete").
5. **Approval Workflow:** The Editor reviews the Sanity draft. They ensure brand guidelines are met (no fake claims, proper tone) and update the tracker to "Editor Approved".
6. **Publishing:** Once approved, the document is published in Sanity. The "Sanity Status" column in the tracker is marked "Published".

## Brand & Compliance Rules (No Fake Claims)
During migration, ensure that all migrated content adheres strictly to our new guidelines:
- **No fake metrics.** (Remove them if they exist on the old site).
- **No fake client names.**
- **No fake testimonials.** Testimonials require the "isVerified" toggle to be checked in Sanity and permission status approved before they will ever display on the site.
- **No fake platform partnerships.** We provide support for platforms like Kajabi; we are not their official partners.

## Preview QA Process
Once the developer links the Astro frontend to the Sanity production dataset:
1. Review the content on the new staging/preview link.
2. Check formatting, links, images, and mobile responsiveness.
3. Mark "Preview Status" as "Verified" on the tracker.
