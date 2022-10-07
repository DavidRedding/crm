/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      phone: '454px',
      tablet: '613px',
      smlaptop: '870px',
      laptop: '1080px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        var: {
          prim: '#8d69f1',
          high: '#d13267',
          bg: '#f5f5f5',
        },
      },
    },
  },
  plugins: [],
};
