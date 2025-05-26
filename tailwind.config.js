/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#00CFFF",
      },
      boxShadow: {
        "neon-blue-glow": "0 0 16px 2px #00CFFF, 0 0 40px 4px #00CFFF",
      },
      keyframes: {
        slideDownUp: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "10%": { opacity: 1, transform: "translateY(0)" },
          "90%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-100%)" },
        },
      },
      animation: {
        slideDownUp: "slideDownUp 3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
