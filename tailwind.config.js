/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Print-style palette: paper, ink, and a handful of flat spot colours.
      // Values live in index.css as RGB channels (light on :root, dark on
      // .dark) so opacity modifiers like `ink/15` keep working in both themes.
      // Mustard is too light to carry text on paper; it's only used as a fill.
      colors: {
        paper: {
          DEFAULT: "rgb(var(--paper) / <alpha-value>)",
          dark: "rgb(var(--paper-dark) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
        },
        tomato: "rgb(var(--tomato) / <alpha-value>)",
        cobalt: "rgb(var(--cobalt) / <alpha-value>)",
        mustard: "rgb(var(--mustard) / <alpha-value>)",
        leaf: "rgb(var(--leaf) / <alpha-value>)",
        plum: "rgb(var(--plum) / <alpha-value>)",
        ochre: "rgb(var(--ochre) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
