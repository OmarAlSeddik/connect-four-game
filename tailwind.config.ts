import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk"],
    },
    extend: {
      colors: {
        cDark: "#2e7cd6",
        cLight: "#479dff",
        cRed: "#fd6687",
        cYellow: "#ffce67",
      },
      boxShadow: {
        custom: "0 0.625rem 0 #000",
        customActive: "0 0.3125rem 0 #000",
      },
    },
  },
  plugins: [],
} satisfies Config;
