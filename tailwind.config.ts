import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // add default font to be used as default sans font
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "button-bg-default": "#96C7CE",
        "button-hover": "#8BD1D9",
        "background": "#F1EDEE",
        "user-font": "#177E89",
        "screen": "#D9D9D9",
      },
      //Extend font and add fontFamily to include a custom font
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
