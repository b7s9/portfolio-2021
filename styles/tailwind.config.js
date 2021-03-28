const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  purge: {
    content: ['_site/**/*.html', '_site/styles.css', '_site/js/*.js'],
    options: {
      safelist: {
        standard: [/dark/],
      },
    },
  },
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(3deg)' },
        },
        push: {
          '0%': { transform: 'translateY(1rem)' },
          '100%': { transform: 'translateY(-1rem)' },
        },
      },
      animation: {
        spin: 'spin 4s linear infinite',
        spinLong: 'spin 8s linear infinite',
        wiggle: 'wiggle 6s ease-in-out alternate infinite',
        wiggleInverse: 'wiggle 5s ease-in-out alternate-reverse infinite',
        push: 'push 6s ease-in-out alternate infinite',
        pushAlt: 'push 4s ease-in-out alternate infinite',
        pushInverse: 'push 5s ease-in-out alternate-reverse infinite',
      },
    },
    fontFamily: {
      sans: [
        'Inter, Overpass, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      ],
      serif: ['Piazzolla, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
      mono: [
        'Menlo, ui-monospace, SFMono-Regular, Monaco, Consolas, "Ubuntu Mono", "Liberation Mono", "Courier New", monospace',
      ],
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
        50: '#E0FBEC',
        100: '#C4FCDD',
        200: '#A0F5C5',
        300: '#85DDAC',
        400: '#6FCC99',
        500: '#36B971',
        600: '#2AA863',
        700: '#278752',
        800: '#136739',
        900: '#16492D',
        light: '#85DDAC',
        dark: '#136739',
      },
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    lineHeight: ['dark'],
    fontSize: ['responsive', 'dark'],
  },
  plugins: [],
}
