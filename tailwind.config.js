/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-red-500',
    'bg-yellow-400',
    'bg-pink-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-blue-400',
    'bg-purple-600'
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#FFD700',
          500: '#D4AF37',
          600: '#AA8C2C',
        },
        deep: {
          900: '#0f0c29',
          800: '#302b63',
          700: '#24243e',
        }
      },
      backgroundImage: {
        'mystic-gradient': 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
