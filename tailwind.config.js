/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1ac951",

          secondary: "#59d6a8",

          accent: "#e2bd36",

          neutral: "#1A141F",

          "base-100": "#383838",

          info: "#5080E7",

          success: "#5DE9CD",

          warning: "#EFA861",

          error: "#FA3368",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
