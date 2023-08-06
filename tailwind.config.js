/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sg: "576px",
      md: "768px",
      lg: "992px",
      xg: "1280px",
    },
    colors: {
      primary: {
        100: "#e6e6e6",
        200: "#cccccc",
        300: "#b3b3b3",
        400: "#999999",
        500: "#A9A9A9", // Original Neutral Gray
        600: "#8c8c8c",
        700: "#737373",
        800: "#595959",
        900: "#404040",
        1000: "#262626",
      },
      grey: {
        100: "#102a42",
        200: "#243a52",
        300: "#324d67",
        400: "#48647f",
        500: "#617d98",
        600: "#829ab0",
        700: "#9eb2c7",
        800: "#bcccdc",
        900: "#dae2ec",
        1000: "#f1f5f8",
      },
      white: "#fff",
      "red-dark": "#bb2525",
      "red-light": "#e66b6b",
      "green-dark": "#25bb32",
      "green-light": "#6be675",
      black: "#222",
    },
    extend: {
      fontFamily: {
        sans: ["Playfair Display", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        DEFAULT: ".25rem",
        lg: ".5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
