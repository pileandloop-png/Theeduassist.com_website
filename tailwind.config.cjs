/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#27496D',   // Dark Slate Blue
          accent: '#77BA55',    // Light Green
          navy: '#0B1F3A',      // Deep Navy
          softBg: '#F8FAFC',    // Soft Background
          softGreen: '#F3FAF0', // Soft Green Tint
          softBlue: '#EFF6FF',  // Soft Blue Tint
          textMain: '#1F2937',  // Charcoal Text
          textMuted: '#64748B', // Muted Text
          border: '#E5E7EB',    // Border
        }
      }
    },
  },
  plugins: [],
}
