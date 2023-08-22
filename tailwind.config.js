/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js, ts}", "./node-modules/flowbite/index.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

