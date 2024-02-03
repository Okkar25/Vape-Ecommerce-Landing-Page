/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      member: "#EBEBE9",
    },

    extend: {
      colors: {
        slideGradient: "#2d2d2d",
        slideImgBg: "#eaeaea",
      },
      fontFamily: {
        montserrat: "Montserrat",
        roboto: "Roboto",
      },
    },
  },
  plugins: [require("flowbite/plugin", "tailwind-scrollbar-hide")],
};
