/**
 * Tailwind CSS configuration for the React app.
 *
 * This file registers the paths Tailwind should scan for class names and
 * extends a few colors used in the existing styles so you can use semantic
 * names (e.g. `bg-discordBg`, `bg-sidebarSmall`, `text-accent`).
 *
 * PostCSS config (create `postcss.config.cjs` at project root with the snippet
 * below) is required so tooling (Vite) runs Tailwind and autoprefixer:
 *
 * // postcss.config.cjs
 * // module.exports = {
 * //   plugins: {
 * //     tailwindcss: {},
 * //     autoprefixer: {},
 * //   },
 * // };
 *
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Tailwind will scan these locations for class names
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // Project-specific colors (keeps parity with original styles)
        discordBg: "#2C2D32",      // body background
        accent: "#677bc3",         // spinner box color / accents
      },
    },
  },
  plugins: [],
};
