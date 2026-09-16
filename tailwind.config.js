/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          accent: '#0f969c',
          dark: '#0a6b70',
          light: '#e6f7f8',
        },
        shopee: '#ee4d2d',
        tokopedia: '#03ac0e',
        lazada: '#0f146d',
        blibli: '#0095da',
        tiktok: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(15, 150, 156, 0.15)',
        'glow': '0 0 25px rgba(15, 150, 156, 0.3)',
      }
    },
  },
  plugins: [],
}
