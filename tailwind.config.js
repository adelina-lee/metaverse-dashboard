/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './src/**/*.{html,js}',
    './*.{html,js}',
    './assets/**/*.{html,js}',
    './node_modules/preline/dist/*.js',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    colors: {
      'whitePurple': '#F2F2FF',
      'lightPurple': '#A4A4D4',
      'basicPurple': '#4E089B',
      'bluePurple': '#311FAB',

      'darkPurple': '#241D44',
      'blackPurple': '#0A0522',

      'neonTeal': '#42C6C2',
      'lightTeal': '#44AABE',
      'mediumTeal': '#40D2C4',

      'blackGray': '#424242',
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

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1799px',
      // => @media (min-width: 1799px) { ... }

      '4xl': '2000px',
      // => @media (min-width: 1799px) { ... }
    },
    extend: {
      spacing: {
        '1.5': '0.375rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
      backgroundSize: {
        'size-200': '200% 200%',
    },
    backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
    },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
]
}
