// tailwind.config.cjs
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        blob: "blob 10s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#0d9488",
          "primary-focus": "#0f766e",
          "primary-content": "#fff",
          "base-100": "#f0fdfa",
          accent: "#0d9488",
          "accent-focus": "#fff",
          "accent-content": "#fff",
        },
      },
    ],
  },
};
