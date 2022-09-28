/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
