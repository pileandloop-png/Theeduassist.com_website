# Logo and Favicon Implementation

## Logo Files Created
- `public/brand/theeduassist-logo.svg`: Full circular badge with curved text.
- `public/brand/theeduassist-logo-mark.svg`: Simplified circular icon/mark for small use, favicon source, and mobile use.
- `public/brand/theeduassist-logo-wordmark.svg`: Horizontal wordmark for header if the circular logo is too large.

## Favicon Files Created
- `public/favicon.svg`: SVG favicon based on the simplified logo mark.
- `public/site.webmanifest`: Web manifest file for PWA and favicon configuration.

*Note: `favicon.ico` and `apple-touch-icon.png` still need designer/export confirmation to ensure quality at small sizes and different platforms.*

## Usage
- **Header**: The horizontal wordmark (`theeduassist-logo-wordmark.svg`) is used in the main navigation header to fit the layout.
- **Footer**: The simplified logo mark (`theeduassist-logo-mark.svg`) is placed in the footer.
- **Favicon**: The `favicon.svg` is referenced in `src/layouts/Layout.astro`.

## Brand Colors
The following brand colors are implemented via CSS variables/Tailwind tokens:
- **Light Green (`#77BA55`)**: Accent color, used in logo outer ring.
- **Dark Slate Blue (`#27496D`)**: Primary brand color, used in logo inner circle and footer background.
- **White (`#FFFFFF`)**: Used for text and icons inside the logo.

## Accessibility
- Logo images have been given meaningful alt text (e.g., `alt="TheEduAssist e-learning design agency logo"`).
- Decorative SVG elements inside the logo do not add noisy screen-reader output.
- Social links in the footer have accessible labels (e.g., `aria-label="TheEduAssist on LinkedIn"`).

## Future Updates
- **Replacing SVG**: To update the logos, replace the SVG files in the `public/brand/` directory with the final designer-approved assets. Ensure the filenames match to prevent broken links.
- **Warning**: Do not hotlink logos from external sources. Always use locally hosted SVG files.
- **Note**: Platform and Kajabi logos are intentionally not added in this implementation phase.
