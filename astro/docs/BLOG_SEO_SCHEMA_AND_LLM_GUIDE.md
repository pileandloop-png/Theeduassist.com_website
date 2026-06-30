# Blog SEO, Schema, and LLM/GEO Readiness Guide

## Schema (JSON-LD) Rules
*   **Real Data Only:** We do not invent fake authors, fake publish dates, or fake statistics for placeholders.
*   **WebPage Schema:** Used on the `/blog/` and `/resources/` hub pages. It establishes `TheEduAssist` as the publisher and the hub as a list/collection.
*   **BlogPosting/Article Schema:** Only applied to real, reviewed, and published article pages (`/blog/[slug]`). It includes `headline`, `description`, `datePublished` (if exists), `image` (if exists), and links to the canonical `mainEntityOfPage`.
*   **BreadcrumbList Schema:** (To be added via global SEO helper if applicable) - provides clear hierarchy (Home > Blog > Article).

## Canonical URLs
*   All canonical tags are strictly forced to use the absolute path `https://theeduassist.com/...` via `buildCanonicalUrl`. No trailing Firebase `.web.app` domains will bleed into Google indexing.

## Indexing (Robots)
*   The main hubs `/blog/` and `/resources/` are indexable.
*   Real, published articles are indexable.
*   Old WordPress taxonomy junks, empty tags, and typo tags are strictly assigned `noindex` or are not generated at all to prevent crawl bloat.

## Sitemap
*   Astro's sitemap generation will automatically pick up the new canonical `/blog/` paths. We do not inject old WordPress URLs into the Astro sitemap to avoid confusing search engines.

## LLM/GEO Summary Strategy
*   We created `public/llms.txt` and `public/ai-summary.md` to directly feed concise, accurate positioning of "TheEduAssist" to AI crawlers, Perplexity, and ChatGPT search. We emphasize our Kajabi, LMS Migration, and Course Creation expertise without stuffing keywords.
