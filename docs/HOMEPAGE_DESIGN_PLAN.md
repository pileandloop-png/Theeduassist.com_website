# Homepage Design Plan

## Overview
The homepage was redesigned to focus on visual storytelling, premium layout, and high-conversion sections, adopting a professional brand system.

## Brand Colors
- **Primary:** Dark Slate Blue `#27496D`
- **Accent:** Light Green `#77BA55`
- **Soft Background:** `#F8FAFC`
- **Soft Green Tint:** `#F3FAF0`
- **Soft Blue Tint:** `#EFF6FF`
- **Text:** Charcoal Text `#1F2937`, Muted Text `#64748B`
- **Border:** `#E5E7EB`

## Homepage Section Order
1. Premium hero
2. Most Used Tools logo slider
3. Choose Your Path section
4. Key Services with icons
5. Kajabi highlight / connected system
6. Learning system infographic
7. Online academy CTA
8. Case studies proof section
9. Course News & Blogs preview
10. Final consultation CTA

## Logo Handling & Fallback Strategy
Since local SVG logo assets (`kajabi.svg`, `moodle.svg`, etc.) in `public/logos/tools/` were not present, we used styled text badges (a clean typography fallback) in the `ToolsLogoSlider` and `HomeKajabiHighlight` sections to avoid hotlinking, scraping, or using unverified raster images.

## Accessibility & Animation Rules
- CSS animations (fade-up, slide-in, hover-lift) are implemented via lightweight utility classes in `src/styles/animations.css`.
- A `@media (prefers-reduced-motion: reduce)` block disables non-essential animations.
- The logo marquee is implemented via CSS. It pauses on `:hover` and `:focus-within`, and is disabled under reduced-motion.
- External links (`target="_blank"`) use `rel="noopener noreferrer"`.
- CTAs have strong focus states.

## Content & Verification
- Unverified stats, fake client logos, fake awards, and fake testimonials were omitted.
- The Kajabi section explicitly contains a disclaimer: *Kajabi is a third-party platform. Platform support does not imply official partnership unless stated.*
- Blog preview items currently indicate "Pending Migration" and route to `/blog/` to prevent broken dead ends.
- The Case Studies section uses real-looking placeholder data requested in the prompt, with no fabricated metrics.

## Future Tasks
- [ ] **Service Pages Redesign:** Remaining service pages should be upgraded to match this design system in a future PR.
- [ ] **Platform Logo Asset Licensing/Sourcing:** Officially procure or license proper vector logos for the `ToolsLogoSlider` and place them locally in `public/logos/tools/`.
- [ ] **Real Case Studies & Blogs:** Once content migration is complete, replace static placeholder case studies and blogs with actual CMS/markdown driven data.
