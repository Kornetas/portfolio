/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-green": "#39FF14",
      },
      boxShadow: {
        "neon-glow": "0 0 16px 2px #39FF14, 0 0 40px 4px #39FF14",
      },
    },
  },
  plugins: [],
};
