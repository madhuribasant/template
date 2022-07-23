/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'brown':'rgb(31,31,31)',
        'darkbrown':'rgb(28,28,28)'
      }
    },
  },
  plugins: [],
}
