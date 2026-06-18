# TheEduAssist Astro Website Deployment Guide

**Project name:** TheEduAssist Astro Website
**Production domain:** https://theeduassist.com
**Build command:** `npm run build`
**Output directory:** `dist`
**Node version note:** Ensure Node v22.12.0 or higher
**Local development command:** `npm run dev`
**Local preview command:** `npm run preview`

---

## Deployment Preview Flow
1. Open a Pull Request for new changes.
2. Ensure CI build checks and `npm run validate:redirects` pass.
3. Deploy the specific branch to a Cloudflare Pages or Firebase Hosting preview environment.
4. Run QA checklists (`docs/FINAL_LAUNCH_QA_CHECKLIST.md`) against the preview URL.
5. After approval, merge PR into the main branch.

## Production Deployment Flow
1. Ensure the merged main branch produces a passing build.
2. Check environment variables are fully configured in the production hosting dashboard (do NOT commit secrets to the repository).
3. The selected main host (Cloudflare Pages or Firebase Hosting) triggers a production deployment.
4. Verify production URL using Post-Launch checklist.

---

## A. Local verification

Run these locally before opening any PR or doing a manual deployment:

```bash
npm install --legacy-peer-deps
npm run build
npm run preview
```

Ensure everything looks correct at `http://localhost:4321`.

---

## B. Cloudflare Pages setup

1. Connect GitHub repo to Cloudflare Pages.
2. Select Astro framework preset if available.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Root directory: `/`
6. Add environment variables if needed.
7. **Deploy a preview branch first.**
8. **Do not attach production domain** (theeduassist.com) until QA is complete.

---

## C. Firebase Hosting setup

1. Install Firebase CLI if needed: `npm install -g firebase-tools`
2. Run `firebase init hosting`
3. Choose the appropriate Firebase project.
4. Public directory: `dist`
5. Configure as single-page app: **generally no** for static Astro unless the project intentionally needs SPA fallback.
6. Run `npm run build`
7. Run `firebase hosting:channel:deploy preview-name` for preview if configured.
8. **Deploy to production** (`firebase deploy --only hosting`) only after QA.

---

## D. What not to do

* **Do not switch nameservers in this step.**
* **Do not change email records.**
* **Do not cancel GoDaddy.**
* **Do not delete WordPress.**
* **Do not hardcode secrets** (use Cloudflare Pages / Firebase variables config instead).
* **No live DNS changes from repo.**
* **No email migration from repo.**
