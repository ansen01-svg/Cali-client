/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#292929",
        secondary: "#333",
        dark: "#000",
        blue: "#081f2c",
        orange: "#f0725c",
        green: "#71b77e",
      },
      colors: {
        primary: "#fff",
        secondary: "#000",
        yellow_text: "#f2cd5f",
        red_text: "#f0725c",
      },
      fontSize: {
        medium: "14px",
      },
    },
  },
  plugins: [],
};
