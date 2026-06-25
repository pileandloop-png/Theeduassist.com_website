# Vercel & Cloudflare Deployment Guide

This document outlines the deployment workflow for TheEduAssist.com using Vercel for hosting and Cloudflare for DNS/CDN.

## 1. Vercel Import Steps

*   **Import GitHub repo:** theeduassist/Theeduassist.com_website
*   **Framework:** Astro
*   **Build command:** `npm run build`
*   **Output directory:** `dist`
*   **Production branch:** `main`
*   **Add environment variables:**
    *   `PUBLIC_SITE_URL=https://theeduassist.com`
    *   `PUBLIC_SANITY_PROJECT_ID=jg4gi6mn`
    *   `PUBLIC_SANITY_DATASET=production`
*   **Initial Deploy:** Deploy a preview first to verify the build.
*   **Live Deploy:** Deploy to production after QA passes.

## 2. Domain Setup in Vercel

*   Add `theeduassist.com` in Vercel domain settings.
*   Add `www.theeduassist.com` in Vercel domain settings (redirect to apex).
*   Follow Vercel's DNS instructions exactly for the required records.
*   Update DNS in Cloudflare to point to Vercel.
*   **Important:** Do not change email/MX records. Do not delete unrelated DNS records. Remove old Firebase DNS records only if they conflict and after confirmation.

## 3. Cloudflare Setup

*   Cloudflare remains the primary DNS/CDN/security/cache layer.
*   **Initial DNS:** Use DNS-only (grey cloud) temporarily if Vercel verification or SSL has issues.
*   **Proxied Mode:** After Vercel SSL is stable, test proxied/orange-cloud mode.
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
