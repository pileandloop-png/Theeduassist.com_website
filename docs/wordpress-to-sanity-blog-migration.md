# WordPress to Sanity Blog Migration

## Project Info
- Sanity Project ID: jg4gi6mn
- Sanity Dataset: production

## Overview
This document outlines the migration process and safety rules for moving blog posts from WordPress to Sanity CMS.

## Schema Status
- Schema name: `blogPost`
- Body Format: Portable Text (`portableText`)

### Existing Fields Found:
- title (string)
- slug (slug)
- excerpt (text)
- author (reference)
- category (string)
- tags (array)
- featuredImage (imageWithAlt)
- publishedAt (datetime)
- updatedAt (datetime)
- body (portableText)
- faqs (array)
- relatedServices (array)
- cta (cta)
- seo (seoFields)
- migrationSourceUrl (url)
- migrationStatus (string)

### Migration Fields Added:
- wordpressId (string)
- legacyUrl (url)
- legacySlug (string)
- legacyFeaturedImageUrl (url)
- originalPublishedAt (datetime)
- legacyModifiedAt (datetime)
- lastImportedAt (datetime)
- migrationNotes (text)
- redirectTarget (string)
- contentCluster (string)
- targetAudience (array)
- primaryService (string)
- reviewPriority (string)

### Added Options:
**Content Cluster:**
- Course Creation & Curriculum Design
- Kajabi Setup & Course Platforms
- LMS Implementation & Migration
- AI-Powered E-Learning
- Content Conversion
- Instructional Design & Learner Experience
- Funnels, Automation & Launch Support
- Corporate & Enterprise Learning Systems
- Online Course Business Strategy
- Platform Comparison & Guidance

**Target Audience:**
- creators
- coaches
- consultants
- educators
- publishers
- training companies
- online academies
- corporate teams
- enterprise learning teams

**Primary Service:**
- Course Clarity Blueprint
- Content Conversion Kit
- Kajabi Setup Sprint
- LMS Migration Map
- Course + Platform Build
- Ongoing Course Support
- Enterprise Learning Systems

**Migration Status Options:**
- needs_review
- approved
- published
- redirect_only
- do_not_migrate
- combine_with_other

## Safety Rules

### Frontend Blog Safety
- Only posts with a `migrationStatus` of `approved` or `published` or those without `migrationStatus` (existing manually created ones) are allowed to be displayed on the public frontend and lists.

### Sitemap Safety
- The sitemap generation excludes posts with a `migrationStatus` of `needs_review`, `redirect_only`, `do_not_migrate`, or `combine_with_other`.

### Drafts Safety
- Sanity drafts functionality must remain enabled. No configurations disabling drafts should be added.

## Process

### Redirect CSV
A CSV file (`redirects/wordpress-blog-redirects.csv`) has been created to log necessary redirects. The columns are: `old_url,new_url,action,status,notes`. Do not implement these redirects yet.

### Image Migration Phase
TBD

### Pilot Import Process
TBD

### Rollback Plan
TBD

### QA Checklist
- [ ] Ensure all required fields exist in `blogPost.ts`.
- [ ] Check `getAllBlogPosts.ts` filters by `migrationStatus` properly.
- [ ] Ensure `sitemap.xml.ts` does not include unapproved posts.
- [ ] Ensure no deploy hooks or webhook URLs are accidentally committed.
