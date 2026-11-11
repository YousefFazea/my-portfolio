/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef6ff',
          100: '#dbeafe',
          700: '#1f3d6b',
          800: '#19345d',
          900: '#172b4d',
          950: '#0f2343'
        },
        academic: {
          green: '#2b9d78',
          teal: '#1b8a9a',
          gold: '#c58b17',
          ink: '#1f2937'
        }
      },
      boxShadow: {
        academic: '0 10px 30px rgba(15, 35, 67, 0.08)',
        soft: '0 8px 22px rgba(15, 35, 67, 0.06)'
      }
    }
  },
  plugins: []
};
