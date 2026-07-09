import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E1C3D",
          dark: "#08112A",
          light: "#1B2B5E",
        },
        accent: {
          DEFAULT: "#CE2222",
          hover: "#B01A1A",
          light: "#FEE2E2",
        },
        background: "#FFFFFF",
        foreground: "#0F172A",
        muted: {
          DEFAULT: "#EEF2FA",
          foreground: "#64748B",
        },
        border: "#CBD5E1",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        "logos-scroll": "logosScroll 30s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        logosScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
