/**
 * PostCSS configuration for the project.
 *
 * This wires the new Tailwind PostCSS plugin and Autoprefixer into the build pipeline.
 * Make sure you install the package `@tailwindcss/postcss` in devDependencies.
 *
 * Example:
 *   npm install -D @tailwindcss/postcss autoprefixer
 *
 * Vite (or another bundler) will pick this up automatically when processing CSS.
 */

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
