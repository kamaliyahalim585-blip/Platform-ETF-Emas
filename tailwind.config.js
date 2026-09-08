/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fef9f0',
          100: '#fdf1d8',
          200: '#fbe4b1',
          300: '#f7d589',
          400: '#f5c860',
          500: '#d4af37',
          600: '#c9a227',
          700: '#b8951f',
          800: '#a78b1a',
          900: '#5c5a14',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-in': 'slide-in 0.5s ease-in-out',
        'bounce-in': 'bounce-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
