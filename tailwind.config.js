const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.purple,
      green: colors.green,
      blue: colors.blue,
      teal: colors.teal,
    },
    boxShadow: {
      custom: '0 0 0 0 rgba(#000000, .8)'
    },
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(2px, 10px)' },
          '100%': { transform: 'translate(0, -0px)' }
        },
        floatsm: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(1px, 4px)' },
          '100%': { transform: 'translate(0, -0px)' }
        },
        pulse: {
          '0%': {},
          '70%': { boxShadow: '0 0 0 50px rgba(#000000, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(#000000, 0)' }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        floatsm: 'floatsm 3s ease-in-out infinite',
        pulse: 'pulse 1.5s infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}