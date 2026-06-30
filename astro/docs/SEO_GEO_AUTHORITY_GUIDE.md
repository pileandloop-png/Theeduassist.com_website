# SEO, GEO, and Authority Guide

This document outlines the principles and standards for Search Engine Optimization (SEO), Generative Engine Optimization (GEO), Artificial Intelligence Engine Optimization (AEO), Schema integration, and general trust authority for TheEduAssist.

## 1. SEO Principles

* **Prioritize User Intent:** Create content that answers real questions from course creators, educators, and training teams.
* **Semantic HTML:** Use clear headings (H1, H2, H3), semantic tags, and maintain a logical document outline.
* **Canonical URLs:** All pages must define a canonical URL to prevent duplicate content issues.
* **Clean URLs:** Ensure trailing slashes and clean paths are consistently applied.
* **Metadata:** Every page must have a unique title and description.

## 2. GEO / AEO Principles

* **Machine-Readable Summaries:** Maintain plain-text markdown summaries in the `public/` directory (e.g., `ai-summary.md`, `services.md`, `kajabi-services.md`).
* **llms.txt:** Maintain `public/llms.txt` to provide Large Language Models with structured facts about the company.
* **Fact-Based Content:** Do not use exaggerated claims or vague marketing jargon. State clearly what TheEduAssist does and who it helps.
* **No Speculation:** Prevent AI misinterpretation by being explicit about limitations (e.g., "TheEduAssist is not an official partner of Kajabi").

## 3. robots.txt Rules

* Always allow crawling of main content pages.
* Explicitly disallow utility, admin, and draft routes.
* Do not use robots.txt as a security measure for sensitive data.
* Ensure the Sitemap URL is declared.

## 4. Sitemap Rules

* Use the `@astrojs/sitemap` integration to automatically generate the sitemap.
* Filter out non-indexable utility routes (e.g., `/thank-you/`, `/studio/`, `/drafts/`).
* Ensure the base site URL is correctly set to `https://theeduassist.com`.

## 5. llms.txt & AI Summary Maintenance

* When services are added or removed, update `public/llms.txt`, `public/ai-summary.md`, and `public/services.md`.
* Ensure contact and booking paths remain accurate.

## 6. Schema Rules

* Use JSON-LD format.
* Use the helper functions in `src/lib/schema.ts` to keep implementations clean and consistent.
* Only add schema that is accurate (e.g., do not add Review schema without real, verified reviews).
* Main pages to include: Organization, WebSite, ProfessionalService, WebPage, BreadcrumbList, and FAQPage where applicable.

## 7. Anti-Spam Rules

* No fake reviews.
* No fake ratings.
* No fake awards.
* No hidden text.
* No doorway pages.
* No mass AI blog publishing without review.
* No copied competitor content.
* No fake address.
* No fake partnerships.
* No fake pricing.
* No fake guarantees.

## 8. Policy Page Rules

* Keep policy pages accessible via the footer.
* Maintain an Editorial Policy that explicitly details human review and verification standards.
* Maintain an AI Use Policy detailing responsible AI use in workflows.
* Keep statements truthful and mark them for legal review before full production launch.

## 9. Claim Verification Checklist

- [ ] Are all listed services actually provided?
- [ ] Are case studies based on real projects?
- [ ] Is partnership status accurately represented (or disclaimed)?
- [ ] Are testimonials (if any) from real clients?

## 10. Launch Validation Checklist

- [ ] Build passes without errors.
- [ ] `robots.txt` exists and is correct.
- [ ] `sitemap-index.xml` and `sitemap-0.xml` are generated.
- [ ] Schema validates using standard testing tools.
- [ ] Policy pages are reachable via the footer.
- [ ] Metadata is complete for all new routes.

## Migration Resources

For managing redirects and tracking SEO impacts during the WordPress migration, refer to:
* [WordPress Migration Inventory](./WORDPRESS_MIGRATION_INVENTORY.md)
* [Blog Migration Pending](./BLOG_MIGRATION_PENDING.md)
* [Redirect QA Checklist](./REDIRECT_QA_CHECKLIST.md)
* [URL Migration Tracker Template](./templates/url-migration-tracker.csv)
