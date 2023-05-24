/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "main":"#FFF",
        "blue":"#0a3b8e"
      }
    },
  },
  plugins: [],
}