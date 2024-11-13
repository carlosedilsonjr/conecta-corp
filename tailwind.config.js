/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        brand: ['Doto', 'sans-serif'],
        brand2: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
