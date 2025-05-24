/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "pixel-purple": "#8a2be2",
        "pixel-blue": "#00bfff",
        "pixel-green": "#00ff7f",
        "pixel-yellow": "#ffd700",
        "pixel-pink": "#ff69b4",
        "pixel-dark": "#1a1a2e",
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        vt323: ["VT323", "monospace"],
        "geist-sans": ["var(--font-geist-sans)", "sans-serif"],
        "geist-mono": ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
