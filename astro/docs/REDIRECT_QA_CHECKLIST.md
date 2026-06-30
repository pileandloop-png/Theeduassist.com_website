# Redirect QA Checklist

Use this checklist to verify that URL redirects are working correctly and preserving SEO value during and after the migration.

*   [ ] Test old main page URLs
*   [ ] Test old service URLs
*   [ ] Confirm 301 status
*   [ ] Confirm final destination is correct
*   [ ] Confirm no redirect chains
*   [ ] Confirm no redirect loops
*   [ ] Confirm canonical on destination is correct
*   [ ] Confirm sitemap only contains new URLs
*   [ ] Confirm old URLs are not in new sitemap
*   [ ] Confirm no catch-all homepage redirect
*   [ ] Confirm high-value old blog URLs are migrated or intentionally pending
*   [ ] Confirm Search Console 404s are reviewed after launch

## Sample Test Commands

You can use `curl` to inspect HTTP headers and redirect statuses:

```bash
curl -I https://theeduassist.com/about-us/
curl -I https://theeduassist.com/contact-us/
curl -I https://theeduassist.com/custom-elearning-content-development/
```
