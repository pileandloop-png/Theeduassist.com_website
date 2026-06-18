# Cloudflare Pre-Launch Checklist

This checklist outlines the necessary steps to take before, during, and after transitioning DNS and hosting to Cloudflare.

## Before adding domain to Cloudflare:
- [ ] export GoDaddy DNS
- [ ] export cPanel email settings
- [ ] screenshot current DNS
- [ ] confirm mail server IP
- [ ] confirm MX
- [ ] confirm SPF/DKIM/DMARC
- [ ] confirm current WordPress backup
- [ ] confirm Astro preview site works
- [ ] confirm forms work
- [ ] confirm redirects are ready

## Before switching nameservers:
- [ ] all DNS records copied to Cloudflare
- [ ] email records set to DNS Only
- [ ] preview site QA passed
- [ ] old URLs redirect plan ready
- [ ] backup ready
- [ ] rollback plan ready
- [ ] email test before switch complete

## After switch:
- [ ] website works
- [ ] www works
- [ ] non-www works
- [ ] SSL works
- [ ] email sends/receives
- [ ] webmail works
- [ ] sitemap works
- [ ] forms work
- [ ] Calendly works
- [ ] monitor for 48 hours
