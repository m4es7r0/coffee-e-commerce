/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const constants = {
  beige: "#a49b8f",
  red: "#f23c3d",
  green: "#008f65",
  "green-origin": "#106e33",
  "green-dark": "#006043",
  "green-light": "#e6f3ef",
  black: "#222",
  "gray-light": "#e8e7e3",
  white: "#fff",
};

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: colors.transparent,
      ...constants,
    },
    extend: {
      letterSpacing: {
        basic: ".3rem",
      },
    },
  },
  plugins: [],
};
