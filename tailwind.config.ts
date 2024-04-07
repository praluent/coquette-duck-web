import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors: {
        banner: {
          DEFAULT: "#004976"},
        
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        fuji: {
        
        "primary": "#E2E8F0", //200
        "info":"#1E293B",//800
        "secondary": "#94A3B8", //400
        "success":"#475569",//600
        "accent": "#FB7185",
        "neutral": "#2a323c",
        "base-100": "#1d232a",
        "warning": "#ffbe00",        
        "error": "#ff5861",

        },
      },
    ],
  },
}


export default config;
