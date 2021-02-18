const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Overpass, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'],
      'serif': ['Piazzolla, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
      'mono': ['Menlo, ui-monospace, SFMono-Regular, Monaco, Consolas, "Ubuntu Mono", "Liberation Mono", "Courier New", monospace']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      green: colors.green,
      red: colors.rose,
      primary: {
        light: '#20791C',
        dark: '#093D0A'
      }
    }
  },
  variants: {},
  plugins: [],
};
