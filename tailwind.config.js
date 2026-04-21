import formsPlugin from '@tailwindcss/forms';
import containerQueriesPlugin from '@tailwindcss/container-queries';

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-highest": "#e2e2e2",
        "tertiary-fixed": "#8ff9a8",
        "secondary-fixed": "#e5e2e1",
        "secondary-fixed-dim": "#c8c6c5",
        "on-tertiary-fixed": "#00210b",
        "secondary-container": "#e2dfde",
        "on-primary-fixed": "#400014",
        "surface-tint": "#bc004b",
        "on-secondary": "#ffffff",
        "tertiary-container": "#00823f",
        "on-surface-variant": "#5a4044",
        "error-container": "#ffdad6",
        "tertiary": "#006630",
        "surface-dim": "#dadada",
        "outline": "#8e6f74",
        "on-primary-fixed-variant": "#900038",
        "inverse-primary": "#ffb2be",
        "surface-container-lowest": "#ffffff",
        "on-error": "#ffffff",
        "tertiary-fixed-dim": "#73dc8e",
        "background": "#f9f9f9",
        "on-tertiary-container": "#dcffdd",
        "surface-container-high": "#e8e8e8",
        "primary-fixed": "#ffd9de",
        "on-surface": "#1a1c1c",
        "on-secondary-fixed-variant": "#474746",
        "primary": "#b00046",
        "on-error-container": "#93000a",
        "inverse-surface": "#2f3131",
        "on-secondary-fixed": "#1c1b1b",
        "on-background": "#1a1c1c",
        "outline-variant": "#e3bdc3",
        "on-secondary-container": "#636262",
        "surface-container-low": "#f3f3f3",
        "surface": "#f9f9f9",
        "primary-fixed-dim": "#ffb2be",
        "on-tertiary": "#ffffff",
        "surface-variant": "#e2e2e2",
        "secondary": "#5f5e5e",
        "primary-container": "#dc0c5a",
        "on-primary": "#ffffff",
        "surface-bright": "#f9f9f9",
        "inverse-on-surface": "#f1f1f1",
        "surface-container": "#eeeeee",
        "on-primary-container": "#fff2f3",
        "error": "#ba1a1a",
        "on-tertiary-fixed-variant": "#005226"
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px"
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [
    formsPlugin,
    containerQueriesPlugin,
  ],
}
