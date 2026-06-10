/** @type {import('tailwindcss').Config} */
const rgb = (v) => `rgb(var(${v}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic surfaces / text — driven by CSS variables, theme-aware
        base: rgb('--c-bg'),
        surface: { DEFAULT: rgb('--c-surface'), 2: rgb('--c-surface2') },
        line: { DEFAULT: rgb('--c-line'), 2: rgb('--c-line2') },
        ink: rgb('--c-ink'),
        muted: rgb('--c-muted'),
        faint: rgb('--c-faint'),
        // Accent palette — theme-aware (brighter in dark, deeper in light)
        accent: {
          gold: rgb('--a-gold'),
          cyan: rgb('--a-cyan'),
          violet: rgb('--a-violet'),
          rose: rgb('--a-rose'),
          emerald: rgb('--a-emerald'),
          slate: rgb('--a-slate'),
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Barlow', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
