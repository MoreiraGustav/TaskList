import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        Lemon: ["Lemon", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
