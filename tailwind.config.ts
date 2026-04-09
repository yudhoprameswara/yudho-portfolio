import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        foreground: "#f8fafc",
        primary: "#38bdf8",
        "primary-dark": "#0284c7",
        card: "rgba(30, 41, 59, 0.7)",
        "card-border": "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
