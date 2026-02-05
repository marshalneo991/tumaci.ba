/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          DEFAULT: '#1e40af', // Institutional Navy Blue
          dark: '#1e3a8a',
        },
        accent: {
          light: '#f0f9ff',
          DEFAULT: '#0ea5e9', // Light Blue
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'ps-serif'],
      },
    },
  },
  plugins: [],
}
