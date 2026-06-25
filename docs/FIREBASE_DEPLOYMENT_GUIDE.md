> **Deprecated: Firebase Hosting is no longer the primary deployment path. Use Vercel + Cloudflare instead.**

## Clean Cloud Shell deploy

```bash
cd ~

rm -rf Theeduassist.com_website

git clone https://github.com/theeduassist/Theeduassist.com_website.git
cd Theeduassist.com_website

git checkout main
git pull origin main

npm install
npm run create:env:production
npm run validate:env
npm run build
npm run validate:redirects

firebase use theeduassist-website-prod
firebase deploy --only hosting
```

Important:
Manual Cloud Shell deploy requires `.env.production` values available in shell environment or manual `.env.local` equivalent.

## Safer preview first

```bash
firebase use theeduassist-website-prod
firebase hosting:channel:deploy final-preview
```

Then live deploy only after preview QA:

```bash
firebase deploy --only hosting
```

Do not run:

* `firebase deploy`
* `firebase deploy --only functions`
* `firebase deploy --only firestore:rules`
* `npm audit fix --force`
* `npm install --legacy-peer-deps`
