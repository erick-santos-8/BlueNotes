/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "azul1": "#272FE6",
        "azul2": "#3F45BB",
        "azul3": "#494C91",
        "azul4": "#444666"
      }
    },
  },
  plugins: [],
}