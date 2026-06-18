# Final Rollback Plan

This document outlines the strategy for reverting the launch if critical issues arise.

## Rollback triggers

* website down
* SSL not working
* email broken
* major pages 404
* forms failing
* redirect loops
* wrong site published
* DNS misconfiguration

## Website rollback

* Revert to previous Cloudflare Pages deployment, or
* Revert Firebase Hosting release, or
* Temporarily point DNS back to old hosting if necessary
* Keep WordPress/cPanel intact for 30–60 days

## Email rollback

* Restore old DNS from exported GoDaddy/cPanel zone
* Ensure MX records point to correct mail host
* Ensure mail A record points to correct server
* Restore SPF/DKIM/DMARC exactly
* Test Outlook send/receive

## Important

* **Do not delete** WordPress during launch week
* **Do not cancel** GoDaddy during launch week
* **Do not migrate** email during website launch
* **Keep old hosting** available
