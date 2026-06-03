/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          300: '#86efac',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#1b5e3f',
        },
        accent: {
          gold: '#C4A040',
          orange: '#D97E3A',
          'orange-dark': '#C76B2D',
        },
        neutral: {
          light: '#F8F6F3',
          dark: '#0F1011',
        }
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1B5E3F 0%, #D97E3A 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0F1011 0%, #0A0A0B 100%)',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'md': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'lg': '0 20px 48px rgba(0, 0, 0, 0.16)',
        'hover': '0 24px 64px rgba(217, 126, 58, 0.25)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
