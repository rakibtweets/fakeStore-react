/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
