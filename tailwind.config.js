/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'bounce': 'bounce 2s infinite',
        'skill-bar': 'skill-bar 1s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'bounce': {
          '0%, 20%, 53%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          '40%, 43%': {
            transform: 'translateY(-10px)'
          },
          '70%': {
            transform: 'translateY(-5px)'
          },
          '90%': {
            transform: 'translateY(-2px)'
          }
        },
        'skill-bar': {
          '0%': {
            width: '0%'
          },
          '100%': {
            width: 'var(--skill-width)'
          }
        }
      },
      backdropBlur: {
        'lg': '16px',
      },
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}