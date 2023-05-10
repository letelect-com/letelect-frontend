/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        volkhov: "'Volkhov', sans-serif",

      },
      colors: {
        primary: "#003fac",
        onPrimary: "#ffffff",
        success: "rgb(21, 184, 57)",
        danger: "rgba(216, 31, 31, 0.8)",
        primaryLight: "rgba(32, 60, 100, 0.8)",
        secondary: "#b79a64",
        secondaryDeep: "#ffbf0d"
      }
    },
  },
  plugins: [],
}