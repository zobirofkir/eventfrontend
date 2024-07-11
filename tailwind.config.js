/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('https://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-1.gif')",
        "bg-sidebare": "url('/src/images/bg/bg.jpg')",
        "bg-dashboard": "url('/src/images/bg/bg.jpg')",
      },
    },
  },
  plugins: [],
}
