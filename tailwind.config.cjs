/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"],
      custom2: ["Custom-2", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
