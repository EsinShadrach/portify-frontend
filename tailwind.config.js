/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fluorescent_cyan: "#18e3eb",
        prussian_blue: "#00345cff",
        prussian_blue_2: "#072b4bff",
        blue_munsell: "#0e8b9bff",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

