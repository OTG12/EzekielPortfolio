// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'spin-in': 'spin-in 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'spin-in': {
          from: { 
            opacity: '0',
            transform: 'rotate(-90deg) scale(0.9)',
          },
          to: { 
            opacity: '1',
            transform: 'rotate(0deg) scale(1)',
          },
        },
        'slide-in': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'apple-in': 'cubic-bezier(0.5, 0, 0.5, 1)',
        'apple-out': 'cubic-bezier(0.2, 0, 1, 1)',
      },
      transitionDuration: {
        'apple': '300ms',
        'apple-slow': '500ms',
        'apple-fast': '150ms',
      }
    },
  },
  plugins: [],
}