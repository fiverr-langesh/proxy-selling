/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // custom color
      colors: {
        primary: "#C56EFA",
        secondary: "#FFC700",
        darkSecondary: "#3F0077",
        secondaryLogin: "#C363FD",
        gl: "#D97EFC",
        gr: "#7200FF",
      },

      // custom font
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"], // 'sans' is the default fallback
      },
    },
  },
  plugins: [],
};
