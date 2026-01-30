/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mystic-dark': '#0f0c29',
        'mystic-purple': '#302b63',
        'mystic-gold': '#ffd700',
        'mystic-gold-hover': '#e6c200',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px #302b63' },
          '100%': { boxShadow: '0 0 20px #ffd700' },
        }
      }
    },
  },
  plugins: [],
};