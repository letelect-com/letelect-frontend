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
        open: "'Open Sans', sans-serif"

      },
      colors: {
        primary: "#003fac",
        onPrimary: "#f7f7f7",
        success: "rgb(21, 184, 57)",
        danger: "rgba(216, 31, 31, 0.8)",
        primaryLight: "rgba(32, 60, 100, 0.8)",
        secondary: "#b79a64",
        secondaryDeep: "#ffbf0d",
        dark: "#050100",
        accent: "#fbfbf9"

      }
    },
  },
  plugins: [],
}