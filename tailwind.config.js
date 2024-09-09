/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': '"League Spartan", sans-serif'
      },
      backgroundImage: {
        mobile: 'url("/bg-header-mobile.svg")',
        desktop: 'url("/bg-header-desktop.svg")'
      }
    }
  },
  plugins: []
}
