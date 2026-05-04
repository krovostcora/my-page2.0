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
          mist: {
              50: '#f9fbfb',
              100: '#f1f3f3',
              200: '#e3e7e8',
              300: '#d0d6d8',
              400: '#9ca8ab',
              500: '#67787c',
              600: '#4b585b',
              700: '#394447',
              800: '#22292b',
              900: '#1a1c1b',
              950: '#090b0c',
          },
      }
    },
  },
};
