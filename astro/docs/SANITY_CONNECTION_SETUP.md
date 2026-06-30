# Sanity Connection Setup

This document outlines the steps to securely connect the Astro frontend to the Sanity CMS dataset and manage CORS origins.

## Owner Setup Steps in Sanity Manage

1. Open the project `TheEduAssist` in Sanity Manage.
2. Verify **Project ID:** `jg4gi6mn`.
3. Verify **Dataset:** `production`.
4. Go to **API → CORS Origins**.
5. Add local dev origin:
   `http://localhost:4321`
6. Add Firebase demo origin:
   `https://theeduassist-website-prod.web.app`
7. Later add final domain:
   `https://theeduassist.com`
   `https://www.theeduassist.com`
8. **Do not use wildcard `*` with credentials.**
9. Only enable credentials for trusted domains if token-based browser access is truly needed.
10. **Prefer no token in browser.** Token usage should be restricted to server/build context only.

## Local Development

Run the start command to start the Astro server locally.

Visit `http://localhost:4321/sanity-test/` to verify the connection.

## Expected Behavior on Empty Dataset

If the Sanity dataset is valid but no published content exists yet, the test route `/sanity-test/` will show:

> "Sanity is connected, but no published content was found yet."

The application is designed to build and run perfectly fine even if the dataset is entirely empty, falling back to static components.

## Upcoming GitHub Actions Integration

In Part 5, GitHub Variables/Secrets will be added for the backend integration (e.g., tokens, database configurations). These will include server-only variables for robust builds.
