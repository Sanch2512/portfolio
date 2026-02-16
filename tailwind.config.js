/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
      colors: {
        umber: '#4A3728',     // Roasted Umber (Dark Brown)
        latte: '#F3E9D2',     // Creamy Latte (Background)
        forest: '#2E4A3D',    // Forest Green (Primary Accent)
        sage: '#8FA893',      // Light Green (Secondary Accent)
        paper: '#FDFBF7',     // Off-white paper
        clay: '#C07A5D',      // Warm accent
      },
      backgroundImage: {
        'paper-pattern': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.08%22/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

