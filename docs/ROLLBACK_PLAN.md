# Rollback Plan

This document details the procedures to revert changes in case of critical failures during or after the website launch.

## When Rollback is Needed

Initiate a rollback if any of the following occur:
* Production site is down or inaccessible.
* Email functionality breaks.
* SSL certificate fails to provision or serve correctly.
* Forms fail to submit or process data correctly.
* Critical pages return 404 errors.
* Major redirect issues are found.
* DNS misconfigurations are detected.

## Website Rollback Options

* **Cloudflare Pages:** Revert the Cloudflare Pages production deployment to a previous successful deployment directly from the dashboard.
* **DNS Repointing:** Repoint DNS temporarily back to the old host if necessary.
* **Backup Hosting:** Keep old WordPress/cPanel available for 30–60 days to allow for a smooth fallback.
* **Restore:** Restore from a backup if needed.

## Email Rollback Options

* **DNS Restoration:** Restore previous DNS records from the exported GoDaddy zone file.
* **MX Records:** Ensure MX records point back to the correct mail host.
* **Mail A Record:** Ensure the `mail` A record points exactly to the GoDaddy/cPanel IP address.
* **Email Authentication:** Ensure SPF, DKIM, and DMARC TXT records are restored exactly as they were.

## Important Directives

* **Do not delete old hosting during launch week.**
* **Do not cancel GoDaddy until email is separated or confirmed safe and fully functional.**
