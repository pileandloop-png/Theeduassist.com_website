# Launch QA Checklist

## Before Production Deployment

- [ ] `npm run build` passes successfully
- [ ] All pages render correctly
- [ ] No broken links
- [ ] No placeholder Lorem ipsum text
- [ ] No fake stats or testimonials
- [ ] Sitemap is generated successfully
- [ ] `robots.txt` works as expected
- [ ] `llms.txt` works as expected
- [ ] `ai-summary.md` works as expected
- [ ] `_redirects` file exists and is populated
- [ ] Custom 404 page works
- [ ] Forms render correctly
- [ ] Form endpoints are configured with correct values
- [ ] Calendly links work and point to correct bookings
- [ ] Analytics environment variables configured (if ready)
- [ ] Sanity environment variables configured (if CMS used)
- [ ] Mobile layout and responsiveness checked
- [ ] Open Graph metadata checked for accurate previews
- [ ] JSON-LD schema checked for validity
- [ ] Accessibility quick check performed
- [ ] Lighthouse/PageSpeed scores checked
- [ ] DNS records exported from previous host
- [ ] Email DNS records copied correctly to Cloudflare
- [ ] Rollback plan reviewed and ready

## After Production Deployment

- [ ] Visit https://theeduassist.com
- [ ] Visit https://www.theeduassist.com
- [ ] Check canonical URLs are pointing to correct primary domain
- [ ] Check old URLs correctly redirect to new paths
- [ ] Check contact form submission
- [ ] Check audit form submission
- [ ] Check Calendly integration flow
- [ ] Check live sitemap
- [ ] Check live `robots.txt`
- [ ] Check analytics are receiving data
- [ ] Check Google Search Console verification
- [ ] Check Bing Webmaster Tools verification
- [ ] Check Outlook send capabilities
- [ ] Check Outlook receive capabilities
- [ ] Check webmail access
- [ ] Monitor for unexpected 404s in logs/analytics
- [ ] Submit new sitemap in Google Search Console
- [ ] Submit new sitemap in Bing Webmaster Tools
