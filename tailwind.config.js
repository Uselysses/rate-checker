/** @type {import('tailwindcss').Config} */
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
    extend: {},
  },
  plugins: [],
}
