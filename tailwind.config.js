//const { orange } = require('color-name');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./index.html",
    "./contact.html",
    "./investment.html",
  ],
  theme: {
    extend: {
      appearance: ["responsive", "hover", "focus"],
    },
    screens: {
      lg: "1080px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".appearance-none": {
          "-webkit-appearance": "none",
          "-moz-appearance": "none",
          appearance: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    },
  ],
};
