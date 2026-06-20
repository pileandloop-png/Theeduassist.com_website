# SEO Migration Checklist

## Pre-launch
* export old WordPress URLs
* map old URLs to new routes
* mark each as ready/pending/do-not-redirect
* review top landing pages in Google Search Console
* review backlinks if available
* make sure important old service pages have relevant new targets
* keep old WordPress live until final cutover
* do not launch without redirect map
* verify sitemap
* verify robots.txt
* verify canonical URLs
* verify no Firebase `.web.app` canonical
* verify no fake blog post pages
* verify noindex on weak taxonomy pages

## Launch
* deploy Astro to Firebase
* connect domain
* verify HTTPS
* submit sitemap in Google Search Console
* inspect key URLs
* monitor 404s
* monitor indexing
* monitor redirected URLs
* keep old mapping docs

## Post-launch
* fix unexpected 404s
* migrate high-value blog posts in batches
* compress and replace heavy media
* update internal links
* refine blog categories/tags
* update sitemap after content migration
