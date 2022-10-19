/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "Lucida Grande",
        "Lucida Sans Unicode",
        "Lucida Sans",
        "Geneva",
        "Verdana",
        "sans-serif",
      ]
    },
    extend: {

    },
    colors: {
      primary: colors.blue,
      primaryAccent: colors.sky,
      secondary: colors.amber,
      neutral: colors.slate,
      black: colors.black,
      white: colors.white,
      red: colors.red,
    }
  },
  plugins: [],
}
