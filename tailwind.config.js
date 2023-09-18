/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins"
      },
      colors: {
        primary: '#274875',
        secondary: '#D9D9D9',
        textcol: '#726E6E'
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
    variants: {
      extend: {
        padding: ['hover', 'focus'],
      },
    },
    

  },
  plugins: [],
}

