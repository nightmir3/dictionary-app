/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      serif: ['Merriweather', 'serif']
    },
    extend: {}
  },
  darkMode: 'class',
  plugins: []
}
