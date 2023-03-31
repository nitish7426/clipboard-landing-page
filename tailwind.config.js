/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
      colors: {
        "primary-1": "hsl(171, 66%, 44%)",
        "primary-2": "hsl(233, 100%, 69%)",
        "neutral-1": "hsl(210, 10%, 33%)",
        "neutral-2": "hsl(201, 11%, 66%)",
      },
    },
  },
  plugins: [],
};
