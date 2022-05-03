module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        mainColor: "#58468C",
        altColor: "#FF4800",
        mainColor2: "#8579a6",
        lightColor: "#AFAFAF",
        bodyBg: "#FAFAFA",
      },
      backgroundImage: {
        heroSection: "url('/images/slider_bg.jpg')",
        iconBg: "url('/images/Polygon.png')",
        wave: "url('/images/wave.svg')",
        contact: "url('/images/foggy-birds.png')",
        sliderPattern:
          "linear-gradient(to right bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url('/images/pic4.jpg')",
      },
      fontFamily: {
        bigTexts: "'Poppins', sans-serif",
      },
      backgroundPosition: {
        "right-center": "right center",
      },
      keyframes: {
        moveAround: {
          "0%, 100%": {
            transform: "translate(0px,0px) rotate(0deg)",
          },
          "20%": {
            transform: "translate(73px,-1px) rotate(36deg)",
          },
          "40%": {
            transform: "translate(141px,72px) rotate(72deg)",
          },
          "60%": {
            transform: "translate(83px,122px) rotate(108deg)",
          },
          "80%": {
            transform: "translate(-40px,72px) rotate(144deg)",
          },
        },
        modalFadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: " translateY(0)",
          },
        },
      },
      animation: {
        moveFirst: "moveAround 25s infinite linear",
        moveSecond: "moveAround 10s infinite linear",
        moveThird: "moveAround 15s infinite linear",
        moveFourth: "moveAround 30s infinite linear",
        moveFifth: "moveAround 15s infinite linear",
        moveSixth: "moveAround 35s infinite linear",
        modalFadeIn: "1000ms ease-in-out 0s normal none 1 running fadeInDown",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
