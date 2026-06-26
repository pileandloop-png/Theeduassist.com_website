# Vercel & Cloudflare Deployment Guide

This document outlines the deployment workflow for TheEduAssist.com using Vercel for hosting and Cloudflare for DNS/CDN.

## 1. Vercel Import Steps

*   **Import GitHub repo:** theeduassist/Theeduassist.com_website
*   **Framework:** Astro
*   **Vercel project domain:** https://theeduassist-com-website-dtg2.vercel.app
*   **Production deployment URL:** https://theeduassist-com-website-dtg2-8zs59fizd-the-edu-assist.vercel.app
*   **Production deployment status:** Ready

*   **Package manager:** `npm@11.17.0` (ensure `pnpm-lock.yaml` is not committed)
*   **Install command:** `npm ci`
*   **Build command:** `npm run build`
*   **Node version:** 22.x
*   **Output directory:** `dist`
*   **Production branch:** `main`
*   **Add environment variables:**
    *   `PUBLIC_SITE_URL=https://theeduassist.com`
    *   `PUBLIC_SANITY_PROJECT_ID=jg4gi6mn`
    *   `PUBLIC_SANITY_DATASET=production`
*   **Initial Deploy:** Deploy a preview first to verify the build.
*   **Live Deploy:** Deploy to production after QA passes.

### Package Manager Mismatch / Troubleshooting
*   Vercel might accidentally use `pnpm` if it detects a `pnpm-lock.yaml` or bases its decision on project creation date. If this happens, ensure `pnpm-lock.yaml` is deleted from the root directory and only `package-lock.json` is committed. We enforce `npm` using `"packageManager": "npm@11.17.0"` in `package.json` and `"installCommand": "npm ci"` in `vercel.json`.
*   Note: Firebase Hosting is deprecated and not the final deployment path. Only use Vercel.

## 2. Domain Setup in Vercel

*   Add `theeduassist.com` in Vercel domain settings.
*   Add `www.theeduassist.com` in Vercel domain settings (redirect to apex).
*   Follow Vercel's DNS instructions exactly for the required records.
*   Update DNS in Cloudflare to point to Vercel.
*   **Important:** Do not change email/MX records. Do not delete unrelated DNS records. Remove old Firebase DNS records only if they conflict and after confirmation.
*   **Status:** custom domain setup pending
*   **Post-launch:** Search Console after domain is stable

## 3. Cloudflare Setup

*   Cloudflare remains the primary DNS/CDN/security/cache layer.
*   **Initial DNS:** Use DNS-only (grey cloud) temporarily if Vercel verification or SSL has issues. (Cloudflare DNS-only first rule)
*   **Proxied Mode:** After Vercel SSL is stable, test proxied/orange-cloud mode. (Cloudflare proxy caution)
*   **Troubleshooting:** If proxied mode creates SSL/domain errors (like too many redirects), switch back to DNS-only and retest. Ensure SSL/TLS encryption mode in Cloudflare is set to "Full (strict)".
*   **Cache:** Purge Cloudflare cache after production deploy only if old content appears.

## 4. Live QA URLs

Verify these critical paths after deployment:

*   `/`
*   `/services/`
*   `/kajabi-services/`
*   `/book-free-audit/`
*   `/contact/`
*   `/blog/`
*   `/case-studies/`
*   `/sitemap/`
*   `/sitemap.xml`
*   `/sitemap-index.xml`
*   `/robots.txt`
*   `/llms.txt`
*   `/ai-summary.md`
