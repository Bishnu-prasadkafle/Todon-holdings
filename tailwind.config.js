// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Deep slate blue
        secondary: "#22d3ee", // Bright cyan
        accent: "#38bdf8", // Sky blue
        soft: "#f8fafc", // Soft white
        overlay: "#0f172acc", // Semi-transparent overlay
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 4px 20px rgba(16, 185, 129, 0.4)",
        glowHover: "0 8px 24px rgba(34, 211, 238, 0.5)",
      },
      backgroundImage: {
        gradientHero:
          "linear-gradient(to right, #0f172a, #1e293b, transparent)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],

  plugins: [],
};
tailwind.config.js;
