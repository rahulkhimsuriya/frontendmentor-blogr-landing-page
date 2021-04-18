const { colors } = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        brand: {
          light: 'hsl(355, 100%, 74%)',
          DEFAULT: 'hsl(356, 100%, 66%)',
        },
        blue: {
          lighter: 'hsl(207, 13%, 34%)',
          light: 'hsl(237, 23%, 32%)',
          DEFAULT: 'hsl(208, 49%, 24%)',
          dark: 'hsl(237, 18%, 21%)',
          darkest: 'hsl(240, 10%, 16%)',
        },
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
}
