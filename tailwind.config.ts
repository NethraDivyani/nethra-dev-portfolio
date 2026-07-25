import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0F1419",
        "bg-alt": "#131A22",
        surface: "#171F29",
        "surface-hover": "#1D2733",
        line: "rgba(255,255,255,0.08)",
        "line-soft": "rgba(255,255,255,0.04)",
        text: "#E8EAED",
        "text-muted": "#8B98A5",
        "text-faint": "#566270",
        amber: {
          DEFAULT: "#E8A33D",
          dim: "rgba(232,163,61,0.14)",
          light: "#F4B559",
        },
        teal: {
          DEFAULT: "#4FD1C5",
          dim: "rgba(79,209,197,0.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(var(--tw-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--tw-grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "42px 42px",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        "fade-up": "fade-up 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
