import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk"],
    },
    fontSize: {
      xs: ["1rem", "1.3125rem"],
      sm: ["1.25rem", "1.625rem"],
      lg: ["3.5rem", "4.4375rem"],
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
      fontSize: {
        mm: ["1.5rem", "1.9375rem"],
      },
    },
  },
  plugins: [],
} satisfies Config;
