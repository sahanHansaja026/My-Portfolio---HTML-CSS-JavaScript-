const { Colors } = require('react-native/Libraries/NewAppScreen');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
      fontFamily: {
        inknut: ["var(--font-inknut)", "serif"],
      },
    },
  },
  plugins: [],
}
