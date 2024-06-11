/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./themes/**/layouts/**/*.html",
    "./layouts/**/*.html"
  ],
  theme: {
    /** Komplette Veränderungen hier direkt z.B. colors: */
    extend: {
      /**extend erweitert Tailwind */
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        nsky: '#0f1e3c',
      },
    },
  },
  plugins: [],
}