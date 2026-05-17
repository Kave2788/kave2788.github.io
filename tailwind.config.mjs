/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          900: '#001f3f',
          800: '#003366',
          700: '#004080',
          500: '#0066cc',
          400: '#00aaff',
          200: '#80d4ff',
          100: '#e0f4ff',
        },
        gold: {
          400: '#d4af37',
          300: '#e8c84a',
          200: '#f5e17a',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
