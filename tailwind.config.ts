import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#171e19",
        sage: "#b7c6c2",
        taupe: "#9f8d8b",
        beige: "#d7c5b2",
        cyan: "#d5f4f9",
        softblue: "#bbe2f5",
        charcoal: "#302b2f",
        bone: "#fafafa",
      },
      fontFamily: {
        display: ["var(--font-display)", "Anton", "Impact", "sans-serif"],
        sans: [
          "var(--font-body)",
          "Plus Jakarta Sans",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      maxWidth: {
        frame: "1440px",
      },
      transitionTimingFunction: {
        cinema: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatLong: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(12px, -24px)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-long": "floatLong 9s ease-in-out infinite",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
      },
      letterSpacing: {
        "super-wide": "0.22em",
      },
    },
  },
  plugins: [],
};
export default config;
