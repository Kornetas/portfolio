/** @type {import('tailwindcss').Config} */
export default {
  // Specify the files where Tailwind should look for class names
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Custom color palette
      colors: {
        "neon-blue": "#00CFFF",
      },
      // Custom box shadow for a neon blue glow effect
      boxShadow: {
        "neon-blue-glow": "0 0 16px 2px #00CFFF, 0 0 40px 4px #00CFFF",
      },
      // Custom keyframes for animations
      keyframes: {
        slideDownUp: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "10%": { opacity: 1, transform: "translateY(0)" },
          "90%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-100%)" },
        },
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(6px)" },
        },
      },
      // Custom animation utilities
      animation: {
        slideDownUp: "slideDownUp 3s cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-x": "bounce-x 1s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
