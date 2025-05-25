import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#02182C",
      },
      backgroundImage: {
        "hero-pattern": "url('/hero.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
