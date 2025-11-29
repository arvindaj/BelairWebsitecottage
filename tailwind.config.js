/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        
        raleway: ["'Raleway'", "sans-serif"],
        didot: ["'GFS Didot'", "serif"],
      },

      keyframes: {
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        wavy: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "rotate-slow": "rotateSlow 6s linear infinite",
        wavy: "wavy 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
