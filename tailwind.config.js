const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        mashov:
          '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f',
      },
    },
    fontFamily: {
      sans: ['"Rubik"', ...fontFamily.sans], // make assistant the default font
      mashov: ['"Open Sans"', ...fontFamily.sans],
    },
  },
  plugins: [],
}
