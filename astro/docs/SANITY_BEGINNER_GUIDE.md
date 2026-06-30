# Beginner Guide to Sanity CMS for TheEduAssist

## What is Sanity?
Sanity is a modern, flexible content management system (CMS) where all the content for TheEduAssist website is stored. It serves as a single source of truth for text, images, and structured data like case studies or services.

## Difference between WordPress and Sanity
- **WordPress** is a monolithic system where the backend (content) and frontend (website) are tightly coupled. WordPress currently powers the live website.
- **Sanity** is a "headless" CMS. It only stores content and provides an API. Our new frontend is built with **Astro**, which requests content from Sanity.
- **Note:** The current WordPress site remains live while we transition. Please continue adding content to Sanity without worrying about the live site breaking.

## Terminology
- **Project:** The main container in Sanity for TheEduAssist.
- **Dataset:** A specific database within a project. We use `production`.
- **Studio:** The editor interface where you write and manage content.
- **Schema:** The structural blueprint defining what fields (like "Title", "Featured Image", "Author") are available for each type of content.

## How We Use Sanity
Sanity is for text, metadata, and *normal* CMS images (e.g., blog post images, author portraits).

**What NOT to store in Sanity:**
- Do not store huge, raw Canva files. Always compress images.
- Do not upload videos to Sanity.
- Do not upload heavy downloadable files, large PDFs, templates, or media archives here yet. (These will go into a different system, like Cloudflare R2, later.)

## Logging In
1. Navigate to the Studio URL (provided by the developer).
2. Log in using your designated account credentials or single sign-on as instructed.

## Creating and Editing Content
1. On the left side of the Studio, click the content type you want to create (e.g., "Blog Posts" or "Services").
2. Click the pencil icon or "Create new" button.
3. Fill out the fields. Mandatory fields typically have a small asterisk or will show validation warnings.
4. When you are done editing, click **Publish** in the bottom right corner. If you just want to save your progress without publishing, the Studio automatically saves your work as a draft.

## Uploading Images & Alt Text
- When adding an image, you can click "Select" to upload from your computer.
- You must **always** fill in the "Alternative Text" (Alt Text) field. This is critical for accessibility and SEO.
- Use the built-in hotspot tool to specify the focal point of an image if it's going to be cropped differently on desktop vs mobile.

## Beginner Practice Content
To get familiar with Sanity, you can try creating a practice service entry using the following details:

- **Title:** Kajabi Course Setup
- **Slug:** `kajabi-course-setup` (Click "Generate" next to the slug field)
- **Short Description:** Setup support for Kajabi courses, lessons, modules, pages, and launch structure.
- **Who it is for:** Coaches, course creators, consultants, and training teams preparing to launch or clean up a Kajabi course.
- **Problems solved:** Course content is scattered, lessons are not organized, Kajabi pages look unfinished, launch flow is unclear.
- **Deliverables:** Course structure, module and lesson organization, upload guidance, Kajabi page setup support, launch checklist.
- **CTA:** Book Free Audit
- **SEO Title:** Kajabi Course Setup Support | TheEduAssist
- **SEO Description:** Get Kajabi course setup support for lessons, modules, content upload, launch structure, and course organization.
