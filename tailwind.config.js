/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "hsla(184, 83%, 25%, 1)",
        secondary: "hsla(202, 81%, 25%, 1)",
        lightGreen: "hsla(174, 29%, 86%, 1)",
        grayS27L86: "hsla(238, 27%, 20%, 1)",
        grayS0L100A6: "hsla(0, 0%, 100%, 0.6)",
        grayS0L35: "hsla(0, 0%, 35%, 1)",
        grayS0L30: "hsla(0, 0%, 30%, 1)",
        grayS0L96: "hsla(0, 0%, 96%, 1)",
        grayS0L98: "hsla(0, 0%, 98%, 1)",
        grayS40L10: "hsla(0, 40%, 10%, 1)",
        grayS10L37: "hsla(237, 10%, 37%, 1)",
        grayS0L77: "hsla(0, 0%, 77%, 1)",
        grayS12L53: "hsla(240, 12%, 53%, 1)",
        grayS19L18: "hsla(200, 19%, 18%, 1)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "SemiBold"],
        raleway: ["Raleway", "Regular"],
      },
    },
  },
  plugins: [],
};
