import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        antic: ["'Antic Didone'", "serif"],
        "antic-didone": ["'Antic Didone'", "serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      colors: {
        hayaat: {
          bg:       "#6b6355",
          dark:     "#3d3830",
          gold:     "#bfaf9d",
          footer:   "#4a4438",
          cream:    "#f5f2ee",
        },
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};
export default config;
