# Cloudflare Pages Setup Guide

This guide details the steps required to set up the website on Cloudflare Pages.

## A. Create Cloudflare Pages Project

1. Log in to Cloudflare.
2. Go to **Workers & Pages** -> **Pages**.
3. Connect the GitHub repo.
4. Select `TheEduAssist` repo.
5. Set the framework preset to `Astro`.
6. Set the Build command to `npm run build`.
7. Set the Output directory to `dist`.
8. Save and deploy.

## B. Add Environment Variables

In the Cloudflare Pages dashboard for the project, add the following variables (do not add fake values):

* Add Sanity variables (e.g., `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`, `PUBLIC_SANITY_API_VERSION`, `SANITY_VIEWER_TOKEN`)
* Add form endpoint variables
* Add analytics variables
* Add webmaster verification variables

## C. Preview Test

Before moving to production, test the preview deployment:

1. Open the preview URL.
2. Test main pages.
3. Test forms.
4. Test Calendly links.
5. Test redirects if possible.
6. Test sitemap.
7. Test robots.txt.
8. Test llms.txt.
9. Test ai-summary.md.
10. Test mobile responsiveness.

## D. Production Domain

1. Add custom domain: `theeduassist.com`.
2. Add `www.theeduassist.com`.
3. **Crucial:** Do not switch nameservers until DNS and email records are copied and checked as detailed in the DNS Email Safety guide.
