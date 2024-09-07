/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#114C6C",
      },
      fontFamily: {
        pops: ["Poppins", "sans"],
      },
      backgroundImage: {
        "form-gradient": `radial-gradient(50% 50% at 50% 50%, #1C90D0 0%, #0571AB 53.34%, #025987 100%)`,
        "logo-gradient":
          "linear-gradient(90deg, #D6F0FF 0%, #82CEF8 37.77%, #D6F0FF 97.04%);",
        "highlight-card": "linear-gradient(134deg, #FFF 0%, #7BCBF7 100.05%);",
        "review-bg":"linear-gradient(270deg, #78BFE6 0%, #14587D 100%);",
        "footer-bg":"linear-gradient(273deg, #32A3DF 2.89%, #A6DFFD 97.28%)"
      },
    },
  },
  plugins: [],
};
