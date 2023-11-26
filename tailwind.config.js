/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // custom color
      colors: {
        primary: "#C56EFA",
        secondary: "#FFC700",
        gl: "#D97EFC",
        gr: "#7200FF",
        text: "#3F0077",
      },

      // custom font
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"], // 'sans' is the default fallback
      },
    },
  },
  plugins: [],
};
