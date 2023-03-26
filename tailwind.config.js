tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
      height: {
        "3/4": "60px",
        forgif: "30rem",
        "footer-height": "16rem",
        lastsectionh:"40vw"
      },
      width: {
        forgif: "70vw",
        lastsectionw:"40vw"
      },
      margin: {
        "4/5": "13rem",
        check: "20%",
        test: "10%",
      },
      backgroundColor: {
        "chakranti-200": "rgb(15 15 15)",
        "footer-400": "rgb(22 21  23)",
      },
      backgroundImage: {
        "garvi-background": "url('./images/1120_Slice-Illos-2-copy.gif')",
      },
      fontSize: {
        bigg: "5rem",
        smoller: "2rem",
        medium: "3rem",
      },
      fontFamily: {
        sans: ["CustomFont", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        bounce: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
    },
  },
};
