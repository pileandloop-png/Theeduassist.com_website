# Content Migration Workflow

This file outlines a cautious migration approach when ready.

- Do not change the live WordPress site until migration is fully validated.
- Export content from WordPress, map to Sanity schemas, and import into a staging Sanity dataset first.
- Verify content and images in Studio and on a staging frontend before switching DNS or live domain.
- Use the `SANITY_IMAGE_GUIDELINES.md` for image handling during migration.
