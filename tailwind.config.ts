import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          white: '#FFFFFF',
          black: '#0A0A0A',
        },
        accent: {
          purple: '#7D8CBA',
          hover: '#8A99C7',
        },
        grey: {
          900: '#111111',
          800: '#1A1A1A',
          700: '#2A2A2A',
          500: '#6B6B6B',
          300: '#A8A8A8',
        },
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        sans: 'var(--font-sans)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #7D8CBA, 0 0 10px #7D8CBA' },
          '100%': { boxShadow: '0 0 10px #7D8CBA, 0 0 20px #7D8CBA, 0 0 30px #7D8CBA' },
        },
      },
    },
  },
  plugins: [],
}
export default config

