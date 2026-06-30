> **Deprecated: Firebase Hosting is no longer the primary deployment path. Use Vercel + Cloudflare instead.**

# Firebase Hosting vs Cloudflare Pages

This document outlines the hosting options for the static Astro site and provides recommendations for TheEduAssist.

## Option A: Firebase Hosting + Cloudflare DNS/CDN/security
Use if:
* Firebase is already used for forms/backend
* team wants one Google/Firebase ecosystem
* developer is comfortable with Firebase CLI

## Option B: Cloudflare Pages + Firebase only for backend/forms
Use if:
* you want Cloudflare to host the static Astro site
* you want simple CDN/DNS/hosting in one Cloudflare platform
* Firebase is only for leads/backend

## Recommended for TheEduAssist:
Choose one main host, not both.

**Beginner recommendation:**
* If Firebase backend/forms become important: Firebase Hosting + Cloudflare DNS is acceptable.
* If static website simplicity is priority: Cloudflare Pages + Firebase backend only is cleaner.
* Do not use Firebase Hosting and Cloudflare Pages simultaneously for the same production website.

## Build Configurations
No matter which platform you choose, the build process for the Astro site is similar:

* **Astro build command:** `npm run build`
* **Astro output directory:** `dist`
* **Firebase Hosting output:** `dist`
* **Cloudflare Pages build output:** `dist`
