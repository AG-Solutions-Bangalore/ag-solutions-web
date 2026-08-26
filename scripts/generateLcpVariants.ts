/**
 * Generate mobile/smaller variants of LCP images so we can ship
 * a smaller file to phones and save bytes on the critical path.
 *
 * Reads /public/images/laptop.webp (612x408) and writes
 * /public/images/laptop-mobile.webp (475x317) at quality 80.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, "public", "images");

const VARIANTS = [
  // Mobile / tablet - ships to (max-width: 1023px) per HeroSection sizes attr
  { src: "laptop.webp", dest: "laptop-mobile.webp", width: 475, height: 317, quality: 78 },
];

function ensurePillow(): boolean {
  try {
    execSync("python -c \"from PIL import Image; print('ok')\"", { stdio: "ignore" });
    return true;
  } catch {
    console.error("⚠️  Python + Pillow not available - skipping LCP variant generation.");
    return false;
  }
}

function main() {
  if (!ensurePillow()) return;

  let saved = 0;
  for (const v of VARIANTS) {
    const src = path.join(PUBLIC_DIR, v.src);
    const dest = path.join(PUBLIC_DIR, v.dest);

    if (!fs.existsSync(src)) {
      console.warn(`⚠️  Missing source: ${v.src} - skipping ${v.dest}`);
      continue;
    }

    const original = fs.statSync(src).size;
    const cmd = `python -c "from PIL import Image; im=Image.open(r'''${src}'''); im.thumbnail((${v.width}, ${v.height})); im.save(r'''${dest}''', 'WEBP', quality=${v.quality}, method=6)"`;
    execSync(cmd, { stdio: "ignore" });

    const next = fs.statSync(dest).size;
    const delta = original - next;
    saved += Math.max(0, delta);
    console.log(
      `✅ LCP variant: ${v.src} -> ${v.dest} (${(original / 1024).toFixed(1)} KB -> ${(next / 1024).toFixed(1)} KB)`,
    );
  }
  if (saved > 0) {
    console.log(`\n💾 Mobile LCP bytes saved: ${(saved / 1024).toFixed(1)} KB`);
  }
}

main();
