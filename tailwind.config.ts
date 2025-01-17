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
      },
      fontFamily: {
        cormorantGaramond: ["var(--font-cormorant-garamond)", "serif"], 
        poppins: ["var(--font-poppins)", "sans-serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
