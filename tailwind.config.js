/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
        fancy: ["Dancing Script", "cursive"],
      },
      animation: {
        fontChange: "fontCycle 5s infinite",
      },
      keyframes: {
        fontCycle: {
          "0%": { fontFamily: "Merriweather, serif" },
          "25%": { fontFamily: "Inter, sans-serif" },
          "50%": { fontFamily: "Fira Code, monospace" },
          "75%": { fontFamily: "Dancing Script, cursive" },
          "100%": { fontFamily: "Merriweather, serif" },
        },
      },
    },
  },
  plugins: [],
};
