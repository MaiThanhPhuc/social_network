module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
    },
    colors: {
      primaryblue: "#0079D3",
      bodytxt: "#1c1c1c",
      white: "#ffffff",
      gray: "#E3E3E3",
      black: "#000000",
      grayLight: "#EAEAEB",
      grayText: "#84878B",
      inputColor: "#E7ECF3",
      red: "#FF0000",
      green: "#6ECB63",
    },
    extend: {
      spacing: {
        10: "10px",
        20: "20px",
        iW: "340px",
        inputRecoveryPassWidth: "250px",
        fW2: "320px",
        mW: "600px",
        heightRecoveryPass: "300px",
        postWidth: "500px",
        footerWidth: "330px",
        signinHeight: "450px",
        signupHeight: "530px",
        pTopNav: "64px",
        UserAvatar: "150px",
        messageWidth: "700px",
        messHeight: "500px",
        reportWidth: "400px",
        shareWidth: "540px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0079D3",

          secondary: "#ffffff",

          accent: "#FF0000",

          neutral: "#000000",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
