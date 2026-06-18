# Final Hosting Decision Guide

This document outlines the hosting strategy for TheEduAssist.

## Cloudflare Pages

* **Use case:** simple static hosting
* **Benefits:** good if Cloudflare handles DNS/CDN/security
* **Features:** supports `_redirects`
* **Suitability:** good for static Astro frontend

## Firebase Hosting

* **Use case:** good if Firebase backend/forms are central
* **Features:** supports preview channels
* **Integration:** works well with Firebase Functions/Firestore
* **Suitability:** can serve static Astro `dist`

## Recommendation

* For simplest static website + Cloudflare DNS/security: **Cloudflare Pages**
* For one Firebase-centered backend/hosting workflow: **Firebase Hosting**
* **Important:** Do not use both for the same live website

## Decision Checklist

* [ ] Is Firebase backend already active?
* [ ] Is Cloudflare DNS already active?
* [ ] Who will manage deployment?
* [ ] Which preview system is easier for team?
* [ ] Where are redirects managed?
* [ ] Where are env vars managed?
* [ ] Which provider will be easier to roll back?
