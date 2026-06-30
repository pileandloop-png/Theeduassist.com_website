# DNS and Email Safety Checklist

This checklist is critical to ensure that email services remain functional during the migration to Cloudflare and the launch of the new Astro website.

## Current situation:
* WordPress live on GoDaddy/cPanel
* business email likely depends on GoDaddy/cPanel
* website may move later
* email must remain working
* GoDaddy should stay active for 30–60 days after website launch

## DNS records to export and preserve:
Before making any changes to DNS, ensure the following records are exported and backed up:
* A records
* AAAA records
* CNAME records
* MX records
* TXT records
* SPF TXT
* DKIM TXT
* DMARC TXT
* autodiscover
* mail
* webmail
* cpanel
* Google verification
* Microsoft/Outlook verification
* Calendly/domain verification if any
* any other third-party verification records

## Proxy rules:
When adding records to Cloudflare, carefully configure the proxy status:
* Website records can be proxied when appropriate.
* Email records must stay DNS Only.
* `mail` A record must be DNS Only.
* MX records are never proxied.
* TXT records are DNS records only.
* `webmail`, `cpanel`, and `autodiscover` should normally be DNS Only unless specifically verified.

## Pre-switch email test:
Before changing the nameservers to Cloudflare, run these tests to establish a baseline:
* Send from each Outlook mailbox
* Receive to each Outlook mailbox
* Test webmail login
* Test mobile Outlook if used
* Screenshot/export current DNS
* Note current mail server IP
* Note all MX priorities

## Post-switch email test:
Immediately after switching the nameservers to Cloudflare, repeat the tests:
* Send from each Outlook mailbox
* Receive to each Outlook mailbox
* Test webmail
* Check SPF/DKIM/DMARC
* Check Calendly/domain verification if used
* Monitor for 24–48 hours

## Important warning:
Website migration and email migration are separate projects. Do not migrate email during website launch.

## Related Migration Documentation

* [Launch Migration Checklist](./LAUNCH_MIGRATION_CHECKLIST.md)
* [WordPress Migration Inventory](./WORDPRESS_MIGRATION_INVENTORY.md)
