import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#090b10",
        panel: "#10141d",
        line: "#202735",
        muted: "#8c96a8",
        accent: "#8b7cff",
        mint: "#64d6b0",
      },
      boxShadow: {
        glow: "0 0 50px rgba(139,124,255,.12)",
      },
    },
  },
  plugins: [],
};
export default config;
