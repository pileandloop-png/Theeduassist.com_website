# Sanity Publish & Rebuild Workflow

This document outlines the content publishing workflow and how Sanity triggers a rebuild on Vercel.

## Current Manual Workflow

1.  Publish blog/case study in Sanity.
2.  Vercel rebuild is needed to reflect changes.
3.  Trigger deploy manually in Vercel or push to `main` branch.
4.  Astro rebuild fetches the latest Sanity content.
5.  New content appears in blog routes, sitemap, schema, related articles, and AI-readable files.

## Future Automated Workflow (Deploy Hooks)

To automate rebuilds when content changes, we use Vercel Deploy Hooks and Sanity Webhooks.

1.  **In Vercel, create Deploy Hook:**
    *   Navigate to **Project Settings → Git → Deploy Hooks**.
    *   **Name:** `sanity-content-rebuild`
    *   **Branch:** `main`
2.  **Copy the generated Deploy Hook URL.**
3.  **In Sanity:**
    *   Navigate to **Manage project → API → Webhooks**.
    *   Create a new webhook for `publish` and `unpublish` events.
    *   **Target URL:** Paste the Vercel Deploy Hook URL.
    *   Apply this to blog posts first, optionally extending to case studies later.
4.  Sanity publish events will now automatically trigger a Vercel rebuild.
5.  The Vercel rebuild updates static pages, sitemap, schema, and AI-readable files.

## Security Important Notes

*   **Treat the Vercel Deploy Hook URL like a secret.**
*   Do not commit the Deploy Hook URL to the repository.
*   Do not expose the Deploy Hook URL in the frontend code.
*   Do not expose Vercel tokens.
*   Do not expose Sanity private tokens.

*   **Vercel deploy hook URL must not be committed.**
*   **hook is created in Vercel and pasted into Sanity dashboard only.**