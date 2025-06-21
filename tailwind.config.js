/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "151312",
        light: {
          100: '#d6c6FF',
          200: '#b39dff',
          300: '#9066ff',
          400: '#6d2dff',
          500: '#4a00ff',
          600: '#3700d9',
          700: '#2400b2',
          800: '#11008c',
          900: '#000066',
        },
        dark: {
          100: '#000000',
          200: '#111111',
          300: '#222222',
          400: '#333333',
          500: '#444444',
          600: '#555555',
          700: '#666666',
          800: '#777777',
          900: '#888888',
        },
        accent: '#AB8BFF'
      }
    },
  },
  plugins: [],
}