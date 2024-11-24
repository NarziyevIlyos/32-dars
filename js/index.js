tailwind.config = {
  theme: {
    container: {
      center: true,
      width: {
        // tablet
        tb: "682px",
        // desktop
        ds: "1170px",
      },
      padding: {
        DEFAULT: "30px",
        tb: "0px",
      },
    },
    screens: {
      // tablet
      tb: "780px",
      // desktop
      ds: "1280px",
    },
    extend: {
      colors: {
        body_bg_color: "#F8F9FF",
        btn_color: "#009379",
        text_color: "#2D2D2D",
      },
      boxShadow: {
        shadow: "34.85px 29.63px 48.34px 0px #3366FF0D",
        "mini-card-shadow": "34.85px 29.63px 48.34px 0px #3366FF0D",
      },
      letterSpacing: {
        tightest: "-0.025em",
      },
    },
  },
};
