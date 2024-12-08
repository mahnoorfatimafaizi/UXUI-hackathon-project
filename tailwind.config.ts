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
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPurple: {
          DEFAULT: '#2A254B',
          light: '#3C3569',
          dark: '#1C1933',
        },
      },
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
