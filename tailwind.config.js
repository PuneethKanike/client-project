/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
     colors: {
  bodyColor: "#E5D9F2",   // Light background
  textGreen: "#2e3a59",   // Muted green for contrast
  textSuperLight: "#818ea3", // Lighter shade for readability
  textLight: "#36454F",   // Darker shade for readability
  textDark: "#000000",    // Softer contrast for secondary text
  hoverColor: "#dec0ff", // Light hover effect with green tone
},

      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: " 0 10px 30px -10px rgba(2,12,27,0.7)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
