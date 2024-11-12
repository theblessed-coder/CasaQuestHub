/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        // 'fadeInDiag': ""
      },

      keyframes: {
        fade: {
          '0%': { opacity: 0},
          '100%': { opacity: 1 }
        },

        fadeIn: {
          '0%': { opacity: 0, transform: "translateX(-10px)"},
          '100%': { opacity: 1 }
        },

        fadeInDiag: {
          '0%': { opacity: 0, transform: "translate(-5px, -5px)"},
          '100%': { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
};

