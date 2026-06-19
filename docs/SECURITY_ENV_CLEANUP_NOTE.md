# Security Env Cleanup Note

* root `.env` must never be committed
* `.env.local` is for local development only
* `.env.production` is generated in GitHub Actions later
* real secrets belong in GitHub Actions Secrets
* public config belongs in GitHub Actions Variables
* any exposed secret must be rotated manually by the owner
* never create `PUBLIC_SANITY_VIEWER_TOKEN`
* never expose private tokens in browser code
