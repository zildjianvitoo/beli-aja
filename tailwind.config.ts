import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-beliAja": "#FE6A3A",
        "secondary-beliAja": "#FBC800",
        "text-color-beliAja": "#040404",
      },
    },
    screens: {
      xs: "390px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
export default config;
