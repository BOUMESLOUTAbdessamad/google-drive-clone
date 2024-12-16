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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: "#FA7275",
          second:"#EA6365",
          white:"#FFFFFF",
          black:"#04050C",
          nightblue: "#131524",
          error: "#B80000"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
