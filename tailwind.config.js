/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spring: {
          50: '#f2f9f0',
          100: '#e1f3dc',
          200: '#c5e7bd',
          300: '#9dd690',
          400: '#75bf63',
          500: '#6DB33F', // Official Spring Green
          600: '#53962d',
          700: '#407625',
          800: '#365e23',
          900: '#2f4f20',
          950: '#152b0e',
        },
        obsidian: {
          900: '#0B0F17',
          800: '#111827',
          700: '#1F2937',
          600: '#374151',
        },
        cyanGlow: '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'terminal-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
