/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
    extend: {
        fontFamily: {
            sans: ['KyivTypeSans', 'sans-serif'],
            display: ['Georgia', 'serif'],
        },
      colors: {
        dark: '#0D0D0D',
            'nav-bg': '#1A1A1A',
            'dark-bg': '#121212',
            'dark-surface': '#1E1E1E',
        muted: '#A0A0A0',
        'light-gray': '#EBEBEB',
      }
    },
  },
};
