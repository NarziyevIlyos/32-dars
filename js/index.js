tailwind.config = {
  theme: {
    container: {
      center: true,
      width: {
        tablet: "682px",
        desktop: "1170px",
      },
      padding: {
        default: "30px",
        tablet: "0px",
      },
    },
    screens: {
      tablet: "780px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        body_bg_color: "#F8F9FF",
        btn_color: "#009379",
        text_color: "#2D2D2D",
      },
    },
    letterSpacing: {
      tightest: "-0.025em"
    }
  },
};



