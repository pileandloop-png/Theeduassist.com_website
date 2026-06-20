# Category and Tag SEO Rules

- **Why tags are not public at launch**: Public tag pages created from messy WordPress tags often lead to thin or duplicate content. These will remain disabled to prevent SEO dilution.
- **Why typo tags are merged**: Typos dilute tag authority. They are mapped to clean aliases in `src/data/tagAliases.ts`.
- **Why categories require enough content before public indexing**: Empty or thin category pages are seen as low value by search engines. We only make them indexable when they have substantial content.
- **How to decide when a category can be indexed**: A category should have at least 3-5 high-quality, relevant posts before its `showPublicPage` and indexable status are enabled.
- **How Sanity tags/categories should be cleaned before publishing**: Ensure Sanity terms match clean aliases and have accurate descriptions. Remove duplicates or unneeded terms before generating public pages.
