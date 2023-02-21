/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
