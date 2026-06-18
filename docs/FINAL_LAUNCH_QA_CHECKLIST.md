# Final Launch QA Checklist

## Before final preview

* [ ] `npm run build` passes
* [ ] `npm run preview` works
* [ ] all pages render
* [ ] no 404s on main routes
* [ ] no fake content
* [ ] no Lorem ipsum
* [ ] no broken internal links
* [ ] one H1 per page
* [ ] meta titles/descriptions present
* [ ] sitemap works
* [ ] robots.txt works
* [ ] llms.txt works
* [ ] ai-summary.md works
* [ ] public markdown files work if created
* [ ] `_redirects` exists if using Cloudflare Pages
* [ ] 404 page works
* [ ] forms render
* [ ] Turnstile behavior understood
* [ ] Calendly links work
* [ ] Sanity Studio documented
* [ ] Sanity env vars documented
* [ ] Firebase env vars documented
* [ ] Cloudflare docs reviewed
* [ ] DNS export completed
* [ ] email DNS records documented
* [ ] WordPress backup completed
* [ ] cPanel backup completed

## Preview QA

* [ ] desktop homepage
* [ ] mobile homepage
* [ ] Kajabi Services
* [ ] Services
* [ ] Custom eLearning
* [ ] LMS Migration
* [ ] AI-Powered eLearning
* [ ] Case Studies
* [ ] About
* [ ] Contact
* [ ] Book Free Audit
* [ ] Thank You
* [ ] Blog placeholder
* [ ] Legal pages
* [ ] Policy pages
* [ ] Footer links
* [ ] Header nav
* [ ] CTAs
* [ ] Forms
* [ ] Calendly
* [ ] 404 page

## Before production

* [ ] Hosting provider selected
* [ ] env vars configured
* [ ] preview approved
* [ ] redirects tested on preview if possible
* [ ] DNS/email safety checklist approved
* [ ] rollback plan ready
* [ ] launch owner assigned
* [ ] test window selected
* [ ] team notified

## After production

* [ ] check `https://theeduassist.com`
* [ ] check `https://www.theeduassist.com`
* [ ] check SSL
* [ ] check homepage
* [ ] check service pages
* [ ] check old URL redirects
* [ ] check forms
* [ ] check Calendly
* [ ] check sitemap
* [ ] check robots
* [ ] check email send/receive
* [ ] check webmail
* [ ] check Search Console verification
* [ ] check Bing verification
* [ ] monitor errors
