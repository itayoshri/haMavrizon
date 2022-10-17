const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Rubik"', ...fontFamily.sans], // make assistant the default font
      mashov: ['"Open Sans"', ...fontFamily.sans],
    },
  },
  plugins: [],
}
