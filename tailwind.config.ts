import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: "#0d3349", mid: "#1a4f6e" },
        brand: {
          green: "#00c07f",
          "green-mid": "#00a86b",
          "green-light": "#e6f9f2",
          orange: "#e84e1b",
          navy: "#0d2233",
          pale: "#dce8f0",
          "pale-light": "#eef4f8",
        }
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
