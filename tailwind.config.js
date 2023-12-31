/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constant/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a98b6a",
        primary_hover: "#b6a292",
        white: "#ffffff",
        brown: "#645a57",
        header: "#be9667",
        text: "#757575",
        black: "#000000",
        white_darker: "#f9f8f8",
      },
    },
  },
  plugins: [],
};
