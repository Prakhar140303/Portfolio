import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['latin', 'sans-serif'],
        scrollBehavior: ['responsive'],
      }
    },
  },
  plugins: [daisyui],
}

