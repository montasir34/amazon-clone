module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-gradient-mask-image"),
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
],
}