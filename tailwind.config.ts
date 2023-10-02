import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        VT323: ["VT323"],
      },
      animation: {
        blink: "blink 1.8s infinite",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["peer-hover"],
      animation: ["peer-hover"],
    },
  },
  plugins: [],
};
export default config;
