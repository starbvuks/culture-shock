import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "main-bg": "#F2EDE0",
        "main-orange": "#FF9051",
        "main-bg-hover": "#DFD2B2",
        "main-search-bg": "#E5DBC1",
      },
      fontFamily: {
        monstserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        'inner-large': 'inset  0  8px  12px  0 rgba(0,  0,  0,  0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
