# DNS and Email Safety Guide

**CRITICAL: This document outlines the required steps to maintain email functionality during the website migration.**

## Current Situation

* The website is moving to Cloudflare Pages.
* Email remains on GoDaddy/cPanel.
* GoDaddy Deluxe/server should **not** be cancelled immediately.
* WordPress/cPanel should be kept for at least 30–60 days after launch as a backup and to ensure email safety.

## DNS Records Migration

The following DNS records must be copied from GoDaddy/cPanel to Cloudflare **before** switching nameservers:

* A records
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
* Google verification records
* Microsoft/Outlook verification records
* Any other existing third-party verification records

## Proxy Status Rules in Cloudflare

* Website records may be proxied when appropriate.
* **Email records must be DNS Only.**
* MX records are not proxied.
* `mail` A record should be DNS Only.
* `webmail`, `cpanel`, and `autodiscover` should be DNS Only unless verified otherwise.
* DKIM, SPF, and DMARC TXT records must be copied exactly.

## Important Tests Before Launch

* Send an email from each Outlook account.
* Receive an email to each Outlook account.
* Test webmail login.
* Test autodiscover if used.
* Check SPF/DKIM/DMARC after the DNS switch.
* Keep screenshots/export of old DNS.

## Important Rules

* Do not change email hosting in this website launch.
* Do not cancel GoDaddy until email dependency is reviewed.
* Do not delete cPanel mailboxes.
* Do not delete old WordPress files until backup is confirmed.
