/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out",

        "slide-up": "slideUp 0.7s ease-in-out",
        "magic-glow": "magic-glow 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        slideUp: {
          "0%": { transform: "translateY(10%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },

        sparkle: {
          "0%": {
            opacity: 0,
            "text-shadow":
              "0 0 10px #ffffff, 0 0 15px #ffcc00, 0 0 20px #ffcc00", // Resplandor blanco y dorado
          },
          "30%": {
            opacity: 1,
            "text-shadow":
              "0 0 15px #ffcc00, 0 0 25px #ffcc00, 0 0 35px #ffcc00", // Aumento del brillo
          },
          "50%": {
            opacity: 1,
            "text-shadow":
              "0 0 20px #ffcc00, 0 0 30px #ffcc00, 0 0 40px #ffcc00", // Máximo resplandor
          },
          "100%": {
            opacity: 0,
            "text-shadow":
              "0 0 10px #ffffff, 0 0 15px #ffcc00, 0 0 20px #ffcc00", // Disminución del brillo
          },
        },
      },
    },
  },
  plugins: [],
};
