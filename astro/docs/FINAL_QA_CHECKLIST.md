## Repo checks

* branch protection active
* no direct main commits
* PR approved
* checks passed
* no `.env` tracked
* no real secrets committed
* no service account JSON committed

## Build checks

* `npm ci` passes
* `npm run validate:env` passes
* `npm run build` passes
* `npm run validate:redirects` passes
* `npm run validate:links` if present

## Website checks

* homepage loads
* header logo appears
* mobile menu works
* footer links work
* services page works
* Kajabi page works
* LMS service page works
* blog page works
* sanity-test page handled correctly
* 404 page works
* favicon works
* robots.txt works
* sitemap works

## SEO checks

* canonical uses `https://theeduassist.com`
* Firebase demo URL is not canonical
* sitemap uses final domain
* robots.txt does not block important pages
* old WordPress junk URLs are excluded
* no fake blog pages

## Security checks

* no public Sanity viewer token
* no private keys in repo
* GitHub Variables configured
* GitHub Secrets configured
* Firebase service account secret exists
* Sanity CORS configured

## Launch checks

* preview URL reviewed
* desktop screenshot reviewed
* mobile screenshot reviewed
* owner approval received
* live deploy approved
