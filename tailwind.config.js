/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "one": "#a46352",
        "two": "#b53e01",
        "three": "#99441d",
        "four": "#481a06",
        "five": "#1b1517",
      }
    },
  },
  plugins: [],
}

