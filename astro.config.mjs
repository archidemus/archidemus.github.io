// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://archidemus.me",
  base: "",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
