import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#526f53', // Vert Arcadia principal
          50: '#f3f6f3',
          100: '#e3e9e2',
          200: '#c7d4c6',
          300: '#a0b5a0',
          400: '#759275',
          500: '#526f53',
          600: '#415a42',
          700: '#344835',
          800: '#2b3a2c',
          900: '#243025',
          950: '#131b14',
        },
        secondary: {
          DEFAULT: '#b57e5a',
          50: '#faf6f2',
          100: '#ece1d3',
          200: '#e5d5c3',
          300: '#d4b89d',
          400: '#c19776',
          500: '#b57e5a',
          600: '#a76c4f',
          700: '#8b5743',
          800: '#71483b',
          900: '#5c3d32',
          950: '#311e19',
        },
        neutral: {
          DEFAULT: '#525252', // Gris pour le texte
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#2c2c2c',
          800: '#1a1a1a',
          900: '#0a0a0a',
        },
        white: '#ffffff',
        black: '#000000',
      },
      zIndex: {
        1001: '1001',
      },
    },
  },
  plugins: [],
} satisfies Config;
