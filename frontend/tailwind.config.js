/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007BFF', // Example primary blue
        'secondary': '#6C757D', // Example secondary gray
        'light': '#F8F9FA',
        'dark': '#1a202c', // Dark background
        'dark-card': '#2d3748', // Slightly lighter dark for cards
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 