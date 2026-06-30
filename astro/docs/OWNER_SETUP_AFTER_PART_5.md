## GitHub Variables

Go to:

`GitHub repo → Settings → Secrets and variables → Actions → Variables`

Add:

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

## GitHub Secrets

Go to:

`GitHub repo → Settings → Secrets and variables → Actions → Secrets`

Add:

```text
SANITY_VIEWER_TOKEN = Sanity token with Viewer permission, only if private read content is needed
FIREBASE_SERVICE_ACCOUNT_THEEDUASSIST_WEBSITE_PROD = Firebase deploy service account JSON
```

**URGENT NOTE:** The GitHub Secret `FIREBASE_SERVICE_ACCOUNT_THEEDUASSIST_WEBSITE_PROD` must be added before Firebase preview/live deploy can work.
Include location: `Repo Settings → Secrets and variables → Actions → Secrets`.

## Sanity CORS

Go to Sanity Manage:

* Project: TheEduAssist
* Project ID: `jg4gi6mn`
* API → CORS Origins

Add:

* `http://localhost:4321`
* `https://theeduassist-website-prod.web.app`
* later: `https://theeduassist.com`
* later: `https://www.theeduassist.com`

Do not add wildcard `*` with credentials.

## Firebase

Confirm:

* project ID: `theeduassist-website-prod`
* hosting site: `theeduassist-website-prod`
* demo URL: `https://theeduassist-website-prod.web.app`
