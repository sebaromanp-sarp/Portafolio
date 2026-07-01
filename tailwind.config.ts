import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF5EC",
        ink: "#2A241C",
        rust: "#C1552C",
        "rust-dark": "#9B4322",
        sage: "#6E7F5C",
        "sage-dark": "#54614A",
        card: "#F1E7D6",
        line: "#D9CBB0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "grid-paper":
          "linear-gradient(to right, #D9CBB0 1px, transparent 1px), linear-gradient(to bottom, #D9CBB0 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
