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
