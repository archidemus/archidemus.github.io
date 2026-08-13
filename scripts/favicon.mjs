// ponytail: one-shot favicon generator (Digital Loom brand).
// Run `bun run gen:favicon` after editing. Writes public/favicon.svg + favicon.ico.
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "fs";

const ROOT = new URL("..", import.meta.url).pathname;
const font = (n) => readFileSync(`${ROOT}public/fonts/${n}`).toString("base64");
const SQUARE = font("GeistPixel-Square.woff2");

const CHAMFER = 4;
const svg = (size) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
  <defs>
    <style>
      @font-face{font-family:'Sq';src:url(data:font/woff2;base64,${SQUARE}) format('woff2');}
    </style>
  </defs>
  <!-- chamfered square, sharp corners -->
  <polygon points="${CHAMFER},0 32,0 32,${32 - CHAMFER} ${32 - CHAMFER},32 0,32 0,${CHAMFER}"
           fill="#131313"/>
  <!-- + corner markers (chip motif) -->
  <text x="3" y="6.5" font-family="Sq" font-size="7" fill="#00dcc6">+</text>
  <text x="27" y="29" font-family="Sq" font-size="7" fill="#00dcc6">+</text>
  <!-- brand: IN_ in GeistPixel-Square, electric teal -->
  <text x="16" y="21" font-family="Sq" font-size="14" fill="#00dcc6" text-anchor="middle">IN_</text>
</svg>`;

const icoFromPngs = (pngs) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(pngs.length, 4); // count
  const dirSize = 16 * pngs.length;
  const dir = [];
  let offset = 6 + dirSize;
  for (const { size, data } of pngs) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    dir.push(entry);
    offset += data.length;
  }
  return Buffer.concat([header, ...dir, ...pngs.map((p) => p.data)]);
};

const sizes = [16, 32, 48, 64];
const pngs = sizes.map((size) => ({
  size,
  data: new Resvg(svg(size), { fitTo: { mode: "original" } }).render().asPng(),
}));

writeFileSync(`${ROOT}public/favicon.svg`, svg(32));
writeFileSync(`${ROOT}public/favicon.ico`, icoFromPngs(pngs));
console.log(
  "wrote public/favicon.svg + favicon.ico",
  pngs.map((p) => `${p.size}x${p.size} (${p.data.length}B)`).join(", ")
);
