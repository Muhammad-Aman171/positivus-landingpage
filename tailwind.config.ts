import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sapce-grotesk': ['var(--font-grotesk)']
      },
      screens:{
        '3xl': '2200px'
      }
    },
  },
  plugins: [],
};
export default config;
