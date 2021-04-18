module.exports = {
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
