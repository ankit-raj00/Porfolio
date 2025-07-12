/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#0d1117',
        'background-light': '#f9fafb',
        'primary-blue-teal': '#00bcd4',
        'highlight-green': '#10b981',
        'accent-purple': '#6366f1',
        'text-dark': '#1f2937',
        'text-light': '#ffffff',
        'soft-gray': '#d1d5db',
        'gold': '#f59e0b',
        navy: '#0A192F',
        teal: '#00BFA6',
        white: '#F9FAFB',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}