## Local development

1. Copy `.env.example` to `.env.local`
2. Add real local values in `.env.local`
3. Never commit `.env.local`
4. Run:

```bash
npm install
npm run dev
```

## GitHub deployment

1. Owner adds public values as GitHub Actions Variables
2. Owner adds private values as GitHub Actions Secrets
3. GitHub Actions creates `.env.production` during deployment
4. Astro reads `.env.production` during `npm run build`
5. Firebase deploys the built `dist` folder

## Required GitHub Actions Variables

Add these in:

`GitHub repo → Settings → Secrets and variables → Actions → Variables`

```text
PUBLIC_SANITY_PROJECT_ID = jg4gi6mn
PUBLIC_SANITY_DATASET = production
PUBLIC_SANITY_API_VERSION = 2026-06-19
PUBLIC_FIREBASE_PROJECT_ID = theeduassist-website-prod
PUBLIC_FIREBASE_AUTH_DOMAIN = theeduassist-website-prod.firebaseapp.com
PUBLIC_FIREBASE_STORAGE_BUCKET = value from Firebase web app config
PUBLIC_FIREBASE_API_KEY = value from Firebase web app config
PUBLIC_FIREBASE_APP_ID = value from Firebase web app config
PUBLIC_FIREBASE_MESSAGING_SENDER_ID = value from Firebase web app config
PUBLIC_FIREBASE_MEASUREMENT_ID = value from Firebase web app config
PUBLIC_SITE_URL = https://theeduassist.com
PUBLIC_DEMO_SITE_URL = https://theeduassist-website-prod.web.app
```

## Required GitHub Actions Secrets

Add these in:

`GitHub repo → Settings → Secrets and variables → Actions → Secrets`

```text
SANITY_VIEWER_TOKEN = Sanity token with Viewer permission, only if private read content is needed
FIREBASE_SERVICE_ACCOUNT_THEEDUASSIST_WEBSITE_PROD = Firebase deploy service account JSON
```

## Optional Firebase Functions / Forms Secrets

```text
TURNSTILE_SECRET_KEY = Cloudflare Turnstile server-side secret
EMAIL_API_KEY = email provider API key
```
