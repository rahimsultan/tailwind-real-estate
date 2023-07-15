/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        black:{
          900: '#000000',
          dark: '#242527',
          light: '#2B2B2B'
        },
        gray:{
          dark: '#C4C4C4',
          light: '#E5E5E5'
        },
        blue:{
          light: '#2387C0',
          dark: '#0A72AD',
        }
      }
    },
  },
  plugins: [],
}

