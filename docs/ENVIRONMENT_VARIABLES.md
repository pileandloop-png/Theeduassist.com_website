# Environment Variables Checklist

This document lists all the environment variables used across the project.

## Rules
* Do not commit real secrets to the repository.
* Public variables (starting with `PUBLIC_`) may be visible in the browser.
* Private tokens must never be exposed to client-side code.
* Add variables in the Cloudflare Pages dashboard before production deployment.
* Test build with missing optional variables.
* Test production with real variables only after values are created.

## Sanity Variables
```env
PUBLIC_SANITY_PROJECT_ID=
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2026-06-01
SANITY_VIEWER_TOKEN=
```

## Forms Variables
```env
PUBLIC_FORM_ENDPOINT_CONTACT=
PUBLIC_FORM_ENDPOINT_PROJECT=
PUBLIC_FORM_ENDPOINT_AUDIT=
PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

## Analytics Variables
```env
PUBLIC_GA_MEASUREMENT_ID=
PUBLIC_CLARITY_PROJECT_ID=
PUBLIC_GOOGLE_SITE_VERIFICATION=
PUBLIC_BING_SITE_VERIFICATION=
```
