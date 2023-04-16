import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      
    },
    extend: {
      colors: {
        cDark: "#5C2DD5",
        cLight: "#7945FF",
        cPink: "#FD6687",
        cYellow: "#FFCE67",
      },
    },
  },
  plugins: [],
} satisfies Config;
