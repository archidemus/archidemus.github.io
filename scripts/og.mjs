// ponytail: one-shot OG image generator. Run `bun run gen:og` after editing name/role.
// Renders an on-brand 1200x630 card with the GeistPixel fonts, then writes public/og.png.
// Not wired into the build — content is static, regen only when name/role change.
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "fs";

const ROOT = new URL("..", import.meta.url).pathname;
const font = (n) => readFileSync(`${ROOT}public/fonts/${n}`).toString("base64");
const GRID = font("GeistPixel-Grid.woff2"); // big name (matches hero)
const SQ = font("GeistPixel-Square.woff2"); // labels / mono

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <style>
      @font-face{font-family:'Grid';src:url(data:font/woff2;base64,${GRID}) format('woff2');}
      @font-face{font-family:'Sq';src:url(data:font/woff2;base64,${SQ}) format('woff2');}
    </style>
    <!-- subtle dot grid (matches body bg texture) -->
    <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#e3e0dd" opacity="0.035"/>
    </pattern>
  </defs>

  <!-- base -->
  <rect width="1200" height="630" fill="#131313"/>
  <rect width="1200" height="630" fill="url(#dots)"/>

  <!-- chamfered frame: matches .btn-chamfer (chamfers top-left + bottom-right) -->
  <polygon points="36,24 1176,24 1176,618 1164,630 24,630 24,36"
           fill="none" stroke="#00dcc6" stroke-width="1.5" opacity="0.7"/>

  <!-- + corner markers (matches .chip motif) -->
  <text x="40" y="52" font-family="Sq" font-size="16" fill="#00dcc6">+</text>
  <text x="1148" y="612" font-family="Sq" font-size="16" fill="#00dcc6">+</text>

  <!-- top row -->
  <text x="72" y="92" font-family="Sq" font-size="22" fill="#00dcc6">IN_</text>
  <text x="1128" y="92" font-family="Sq" font-size="22" fill="#9aaaa6" text-anchor="end">archidemus.me</text>

  <!-- role label -->
  <text x="72" y="220" font-family="Sq" font-size="26" fill="#00dcc6">&gt; INGENIERO CIVIL INFORMÁTICO</text>

  <!-- name -->
  <text x="72" y="330" font-family="Grid" font-size="92" fill="#e3e0dd">Ignacio Norambuena</text>

  <!-- teal accent bar under name (dither-line motif) -->
  <rect x="74" y="352" width="430" height="4" fill="#00dcc6"/>

  <!-- role + blinking-cursor block -->
  <text x="72" y="406" font-family="Sq" font-size="24" fill="#00dcc6">CTO &amp; CO-FUNDADOR @ ZENTIA</text>
  <rect x="566" y="384" width="12" height="24" fill="#00dcc6"/>

  <!-- tagline -->
  <text x="72" y="460" font-family="Sq" font-size="22" fill="#9aaaa6">IoT minero · Automatización industrial · Full-stack</text>

  <!-- bottom handles -->
  <text x="72" y="556" font-family="Sq" font-size="18" fill="#9aaaa6">linkedin.com/in/inorambuenaa</text>
  <text x="1128" y="556" font-family="Sq" font-size="18" fill="#9aaaa6" text-anchor="end">github.com/archidemus</text>
</svg>`;

const png = new Resvg(svg, { fitTo: { mode: "original" } }).render().asPng();
writeFileSync(`${ROOT}public/og.png`, png);
console.log("wrote public/og.png", png.length, "bytes");
