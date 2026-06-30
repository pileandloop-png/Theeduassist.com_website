# Cloudflare Beginner Setup Guide

This guide outlines the basics of Cloudflare and how to properly configure it for TheEduAssist without breaking existing services (like email on GoDaddy/cPanel).

## A. What Cloudflare is

Cloudflare sits between your website's visitors and your hosting provider. It acts as a:
* **DNS manager**: Routes traffic to the correct servers.
* **CDN/cache layer**: Speeds up site loading times by caching assets globally.
* **SSL/TLS layer**: Provides secure HTTPS connections.
* **Security/firewall layer**: Protects against malicious traffic and DDoS attacks.
* **Redirects/rules engine**: Manages page rules and URL redirects.
* **Turnstile anti-spam**: Will be used later as a CAPTCHA alternative to protect forms.

## B. What Cloudflare is not

It is important to understand what Cloudflare does *not* do:
* **Not the CMS**: It doesn't manage your website data.
* **Not the content editor**: You don't write blog posts here.
* **Not the same as Sanity**: Sanity is your CMS where content lives.
* **Not the same as Firebase**: Firebase handles backend services and lead storage.
* **Not where writers write content**: Content creation remains in Sanity.

## C. Beginner setup steps

Follow these steps carefully to ensure a smooth transition:
1. **Create Cloudflare account**: Sign up for a free Cloudflare account.
2. **Add site**: Add `theeduassist.com` to your Cloudflare dashboard.
3. **Let Cloudflare scan DNS records**: Cloudflare will attempt to automatically import existing DNS records.
4. **Do not change nameservers yet**: Keep your current nameservers (GoDaddy/cPanel) active for now.
5. **Export current DNS from GoDaddy/cPanel first**: Make sure you have a backup of your existing DNS records before proceeding.
6. **Compare records**: Check the scanned records in Cloudflare against your exported GoDaddy/cPanel DNS records.
7. **Copy missing records**: Manually add any missing DNS records to Cloudflare.
8. **Keep email records DNS Only**: Ensure all email-related records (MX, mail, webmail, autodiscover, etc.) have their proxy status set to "DNS Only".
9. **Only switch nameservers after QA**: Once all records are verified and the preview site has been tested, you can safely switch the nameservers to Cloudflare.

## D. Cloudflare dashboard areas

Familiarize yourself with these key sections in the Cloudflare dashboard:
* **Websites**: Where you manage your domains.
* **DNS**: Where you configure your DNS records (A, CNAME, MX, TXT, etc.).
* **SSL/TLS**: Where you manage encryption and HTTPS settings.
* **Security**: Where you set up firewalls and bot management.
* **Rules**: Where you configure page rules and redirects.
* **Workers & Pages**: Where frontend apps (like Astro) are hosted.
* **Turnstile**: Where you manage the anti-spam widget.
* **R2 Object Storage**: Where large downloadable files will be stored in the future.

## E. What to avoid

To prevent downtime and ensure email continues to work, **DO NOT**:
* **Do not proxy mail records**: Keep them as "DNS Only" (grey cloud).
* **Do not delete MX records**: These are essential for receiving email.
* **Do not delete SPF/DKIM/DMARC**: These TXT records are required for email deliverability and security.
* **Do not change nameservers before email records are copied**: Doing so will immediately break your email.
* **Do not cancel GoDaddy after website launch**: Your email functionality relies on GoDaddy/cPanel. Do not cancel the service.
