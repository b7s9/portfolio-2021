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
      gray: colors.gray,
      green: colors.green,
      red: colors.rose,
      primary: {
        light: '#20791C',
        dark: '#093D0A'
      }
    },
    keyframes: {
      wiggle: {
        '0%': { transform: 'rotate(-3deg)' },
        '100%': { transform: 'rotate(3deg)' },
      }
    },
    animation: {
      wiggle: 'wiggle 8s ease-in-out alternate infinite',
      wiggleInverse: 'wiggle 7s ease-in-out alternate-reverse infinite',
    }
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
};
