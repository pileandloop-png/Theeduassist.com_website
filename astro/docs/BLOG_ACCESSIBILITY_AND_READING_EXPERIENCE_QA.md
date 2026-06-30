# Accessibility and Reading Experience QA

## Reading Progress Bar
*   Provides a visual cue for long articles.
*   **Reduced Motion:** If `prefers-reduced-motion: reduce` is active, the bar gracefully hides to prevent triggering vestibular issues.

## AI Prompt Modal
*   Uses `aria-modal="true"`, `role="dialog"`, and `aria-labelledby`.
*   Includes a screen-reader-only Close button label.
*   Accessible close methods: Click the 'X', click the backdrop, or press `Escape` on the keyboard.

## Keyboard Accessibility
*   All filter chips use `<button>` elements with clear focus states (`focus:ring-2`, `focus:ring-offset-1`, `focus:ring-[var(--color-primary)]`).
*   The search input has an associated `sr-only` label.
*   Filter state is communicated via `aria-pressed`.

## Color Contrast
*   Brand colors (`var(--color-primary)` and `var(--color-accent)`) have been used against white or light slate backgrounds to ensure readable contrast ratios for text.
*   Text sizes maintain legible scaling on mobile.

## Mobile Responsiveness
*   No horizontal scroll bars or overflow issues. Filter chips gracefully wrap (`flex-wrap`).
*   Touch targets for the AI footer bar, filter buttons, and pagination/share buttons are appropriately sized.
