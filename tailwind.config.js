/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  // ...
  daisyui: {
    themes: ['light'],
  },
};
