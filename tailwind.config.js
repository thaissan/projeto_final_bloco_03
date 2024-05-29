/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: '#00788E',
        customGray: '#ECECEC',
        customRed: '#A30131',
    },
  },
  plugins: [],
}
}