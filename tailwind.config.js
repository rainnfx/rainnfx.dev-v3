/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'section': '62.5rem',
        'footer': '96%',
      }
    },
    colors: {
      'midnight': '#011627',
      'light-slate': '#7f9dfa',
      'darker-slate': '#233554',
      'lightest-slate': '#CCD6F6',
      'lavendar': '#b38df0',
      'mint': '#7fdbca',
      'buttermilk': '#e9f996',
      'off-white': '#e9e9f7',
      'offer-white': '#d8d8e8',
      'charged-orange': '#fc7f73',
      'comment': '#7b9494',
    },
  },
  plugins: [],
}