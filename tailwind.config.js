/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-spring": "#FFFCD6",
        "yellow-orange": "#FBB040",
        "yellow-sugar": "#FFFEF4",
      },
    },
  },
  plugins: [],
};

