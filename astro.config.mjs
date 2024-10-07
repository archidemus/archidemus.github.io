// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://archidemus.github.io",
  base: "archidemus.me",
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), partytown()],
});