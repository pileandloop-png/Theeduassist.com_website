# Master Environment Variables Checklist

This document details all environment variables needed for TheEduAssist Astro site.

## Sanity

* `PUBLIC_SANITY_PROJECT_ID=`
* `PUBLIC_SANITY_DATASET=production`
* `PUBLIC_SANITY_API_VERSION=2026-06-01`
* `SANITY_VIEWER_TOKEN=`

## Firebase

* `PUBLIC_FIREBASE_API_KEY=`
* `PUBLIC_FIREBASE_AUTH_DOMAIN=`
* `PUBLIC_FIREBASE_PROJECT_ID=`
* `PUBLIC_FIREBASE_STORAGE_BUCKET=`
* `PUBLIC_FIREBASE_MESSAGING_SENDER_ID=`
* `PUBLIC_FIREBASE_APP_ID=`

## Forms/Turnstile

* `PUBLIC_TURNSTILE_SITE_KEY=`
* `TURNSTILE_SECRET_KEY=`
* `LEAD_NOTIFICATION_EMAIL=info@theeduassist.com`
* `LEAD_FROM_EMAIL=`
* `SENDGRID_API_KEY=`
* `RESEND_API_KEY=`

## Analytics/Search

* `PUBLIC_GA_MEASUREMENT_ID=`
* `PUBLIC_CLARITY_PROJECT_ID=`
* `PUBLIC_GOOGLE_SITE_VERIFICATION=`
* `PUBLIC_BING_SITE_VERIFICATION=`

## Rules

* **Do not commit** `.env.local`
* **Do not commit** real tokens
* Public variables (starting with `PUBLIC_`) can be visible in browser
* Private tokens must **not** be exposed to client code
* Production variables must be set in the hosting provider dashboard
* Test preview with missing optional vars
* Test production with real vars only after approved
