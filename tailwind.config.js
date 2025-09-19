/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
         xs: "345px",//extra small
         vs:"376px",//very small
         sm:"445px"
      }
    },
  },
  plugins: [],
}

