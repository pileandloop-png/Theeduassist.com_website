# Google Tag Manager (GTM) Blog Events Guide

No real tracking IDs have been added to the codebase during this phase to protect environment safety.

## Where to add GTM ID later
Once tracking is approved, you can add your GTM Snippet to the `<head>` of `src/layouts/Layout.astro` (using safe public environment variables if applicable, e.g., `import.meta.env.PUBLIC_GTM_ID`).

## Event Structure
The utility `src/utils/analytics.ts` defines a `trackEvent` helper that safely pushes events to `window.dataLayer`.

**Privacy Rule:** It actively strips any common PII keys (`email`, `phone`, `name`, `pii`, etc.).

### Event Names and Payload Examples

1. **blog_search**
   Fires when a user types in the filter search bar.
   `{ event: "blog_search", search_term: "kajabi", timestamp: "..." }`

2. **blog_filter_tag**
   Fires when a category/tag chip is clicked.
   `{ event: "blog_filter_tag", tag: "course-creation", timestamp: "..." }`

3. **blog_cta_click**
   Fires when a major CTA is clicked.
   `{ event: "blog_cta_click", cta_label: "Book Free Audit", timestamp: "..." }`

4. **blog_ai_bar_open**
   Fires when the AI assistant modal is opened.
   `{ event: "blog_ai_bar_open", page_path: "/blog/", timestamp: "..." }`

5. **blog_ai_prompt_copy**
   Fires when the prompt text is copied.
   `{ event: "blog_ai_prompt_copy", page_path: "/blog/my-article", timestamp: "..." }`

6. **blog_ai_tool_click**
   Fires when an outbound AI tool link is clicked.
   `{ event: "blog_ai_tool_click", tool_name: "ChatGPT", timestamp: "..." }`

7. **blog_read_progress_{25|50|75|100}**
   Fires exactly once per milestone as a user scrolls down an article.
   `{ event: "blog_read_progress_50", page_path: "/blog/article", page_title: "...", timestamp: "..." }`

8. **article_toc_click**
   Fires when a table of contents link is clicked.
   `{ event: "article_toc_click", target_id: "#main-points", timestamp: "..." }`

9. **article_share_click**
   Fires when a share network button is clicked.
   `{ event: "article_share_click", network: "LinkedIn", timestamp: "..." }`
