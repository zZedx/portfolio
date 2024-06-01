import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dddddd",
        accent: "#929294",
        secondary: "#1a1b20",
      },
      height: {
        dvh: "100dvh",
      },
      width: {
        dvh: "100dvw",
      },
    },
  },
  plugins: [],
};
export default config;
