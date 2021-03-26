module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        funda: '#f7a100',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
