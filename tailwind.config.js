/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
