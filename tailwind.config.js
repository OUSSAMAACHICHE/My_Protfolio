/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        secondary: '#4A90E2',
        danger: '#FF5252',
        background: '#121212',
        text: '#E0E0E0',
        textSecondary: '#A0A0A0',
        action: '#FFC107',
        card: '#1E1E1E',
        borders: '#4A90E2',

      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        headings: ['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

