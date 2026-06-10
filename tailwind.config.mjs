/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist"', "system-ui", "sans-serif"],
        pixel: [
          '"GeistPixel-Square"',
          '"Geist Mono"',
          "ui-monospace",
          "SFMono-Regular",
          '"Roboto Mono"',
          "Menlo",
          "Monaco",
          '"Liberation Mono"',
          '"DejaVu Sans Mono"',
          '"Courier New"',
          "monospace",
        ],
        "pixel-grid": [
          '"GeistPixel-Grid"',
          '"Geist Mono"',
          "ui-monospace",
          "SFMono-Regular",
          '"Roboto Mono"',
          "Menlo",
          "Monaco",
          '"Liberation Mono"',
          '"DejaVu Sans Mono"',
          '"Courier New"',
          "monospace",
        ],
        "pixel-line": [
          '"GeistPixel-Line"',
          '"Geist Mono"',
          "ui-monospace",
          "SFMono-Regular",
          '"Roboto Mono"',
          "Menlo",
          "Monaco",
          '"Liberation Mono"',
          '"DejaVu Sans Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      letterSpacing: {
        headline: "0em",
        headlineMd: "0em",
        headlineSm: "0em",
        body: "-0.01em",
        label: "0.05em",
        "label-sm": "0.06em",
      },
      fontSize: {
        "headline-lg": ["48px", { lineHeight: "1.1" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.1" }],
        "headline-md": ["32px", { lineHeight: "1.2" }],
        "headline-sm": ["24px", { lineHeight: "1.2" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        "body-md": ["16px", { lineHeight: "1.6" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "var(--radius)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        outline: "hsl(var(--outline))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
