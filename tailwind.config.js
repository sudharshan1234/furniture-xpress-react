/** @type {import('tailwindcss').Config} */
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
        100: "#453227",
        200: "#5f4435",
        300: "#795744",
        400: "#936a53",
        500: "#ab7a5f",
        600: "#b99179",
        700: "#c5a491",
        800: "#d1b6a8",
        900: "#decbc0",
        1000: "#eaded7",
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