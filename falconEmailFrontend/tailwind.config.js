/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "background-primary": "#00668A",
        "background-secondary": "#004E71"
      },
      fontFamily: {
        Mukta: ["Mukta, sans-serif"],
        Pacifico: ["Pacifico, cursive"],
        Shadows_1:["Shadows Into Light, cursive"],
        Shadows_2: ["Shadows Into Light Two, cursive"]
      },
      container: {
        padding: "2rem",
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
      }
    },
    screens: {
      "scellphone": "570px",
      "xscellphone": "390px",
      // 'laptop': '1024px',
      // 'desktop': '1280px',
    }
  },
  plugins: [],
};

