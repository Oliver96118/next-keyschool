/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#FC6011",
        "custom-gray": "#F2F2F2",
        "custom-blue": "#367FC0",
      },
      keyframes: {
        displayEase: {
          '0%': {opacity:'0%'},
          '50%': {opacity:'100%'},
          '100%':{opacity:'0%'},
        }
      },
      animation: {
        displayEase : 'displayEase 3s linear'
      }
    },
  },
  plugins: [],
};
