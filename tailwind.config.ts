import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        neutral: "var(--color-neutral)",
        basis: "var(--color-basis)",
        fixed: "var(--color-fixed)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
      },
    },
  },
  plugins: [],
};
export default config;
