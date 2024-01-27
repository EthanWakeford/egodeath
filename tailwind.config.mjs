/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Calibre', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        black: '#100007',
        white: '#e5dada',
        tertiary: '#840032',
        accent: '#e59500',
        other: '#002642',
      },
      height: {
        '1/2vh': '50vh',
      },
    },
  },
  plugins: [],
};
