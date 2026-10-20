import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "#070B14",
        card: "#111827",
        primary: {
          DEFAULT: "#3B82F6",
          accent: "#60A5FA",
          dark: "#1D4ED8",
        },
        slate: {
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "orb-drift-1": "orbDrift1 18s ease-in-out infinite alternate",
        "orb-drift-2": "orbDrift2 22s ease-in-out infinite alternate",
        "glow": "glow 4s ease-in-out infinite alternate",
      },
      keyframes: {
        orbDrift1: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(40px, -30px) scale(1.08)" },
          "100%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        orbDrift2: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-35px, 25px) scale(1.1)" },
          "100%": { transform: "translate(25px, -20px) scale(0.92)" },
        },
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.75" },
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
