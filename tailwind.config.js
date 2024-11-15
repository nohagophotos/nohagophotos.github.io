/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Paths de los archivos en src
  ],
  theme: {
    extend: {
      fontFamily: {
        Fontspring: ['Fontspring', 'sans-serif'],
        Gadugi: ['Gadugi', 'sans-serif'],
      },
      colors: {
        nhpred: '#F9414B',
      },
    },
  },
  plugins: [],
 } 