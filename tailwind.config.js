/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Unified palette — matches the CSS custom properties in src/index.css
        // so Tailwind-driven components and plain-CSS components render
        // identically.
        void: '#05060B',
        panel: '#0D1024',
        panel2: '#131736',
        line: '#211C3F',
        'line-bright': '#3A3166',
        signal: {
          DEFAULT: '#46E8E0',
          dim: '#2A8B82',
        },
        plasma: {
          DEFAULT: '#8B7CF6',
          dim: '#5B3FA0',
        },
        magenta: '#FF5FA2',
        warn: '#FFB454',
        ghost: '#E7ECFB',
        slate: {
          DEFAULT: '#8892B0',
          dim: '#565C7A',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'nebula-radial':
          'radial-gradient(60% 60% at 50% 40%, rgba(139,124,246,0.18) 0%, rgba(70,232,224,0.08) 35%, rgba(5,6,11,0) 70%)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(12px, -16px)' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-10px, 14px) rotate(3deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-slow-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.8)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        drift: 'drift 7s ease-in-out infinite',
        'drift-slow': 'drift-slow 11s ease-in-out infinite',
        'spin-slow': 'spin-slow 60s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 60s linear infinite',
        'spin-slower': 'spin-slow 110s linear infinite',
        'pulse-dot': 'pulse-dot 2.2s ease-in-out infinite',
        blink: 'blink 1s steps(2, start) infinite',
      },
    },
  },
  plugins: [],
};
