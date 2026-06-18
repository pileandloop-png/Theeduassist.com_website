# Manual Launch Sequence

## Phase 1: Final code freeze

* merge all approved PRs
* no new features
* final build
* final preview

## Phase 2: Backups

* WordPress backup
* cPanel backup
* database export
* media export
* DNS export
* email records export

## Phase 3: Preview deployment

* deploy preview
* run QA checklist
* test forms
* test Calendly
* test redirects

## Phase 4: DNS prep

* add site to Cloudflare if not already
* copy DNS records
* verify email records
* keep email DNS-only
* do not switch nameservers until approved

## Phase 5: Production publish

* deploy production build
* attach custom domain
* update DNS only after approval
* test SSL
* test www/non-www

## Phase 6: Post-launch

* test email
* test forms
* submit sitemap
* monitor 404s
* watch Search Console
* keep WordPress backup active
