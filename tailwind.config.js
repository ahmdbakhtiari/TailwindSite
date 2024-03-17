/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#232626",
        brown: {
          0: "#F2C977",
          100: "#9A762F"
        }
      }
    },
  },
  plugins: [],
}

