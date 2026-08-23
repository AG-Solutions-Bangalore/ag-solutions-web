import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const SRC_DIR = path.join(ROOT_DIR, "src");

console.log("\n============================================================");
console.log("🖼️  AG SOLUTIONS - AUTOMATED IMAGE OPTIMIZER & AUDITOR");
console.log("============================================================\n");

// 1. Convert all PNG files in public/ to WebP and remove PNGs (protecting favicon icons)
function getFilesRecursively(dir: string, extensions: string[]): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath, extensions));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  }
  return results;
}

const allPngs = getFilesRecursively(PUBLIC_DIR, [".png"]);
const protectedIcons = ["favicon-16x16.png", "favicon-32x32.png"];
const convertedMap = new Map<string, string>();

let convertedCount = 0;
let totalSavedBytes = 0;

for (const pngPath of allPngs) {
  const fileName = path.basename(pngPath);
  if (protectedIcons.includes(fileName)) {
    continue; // Keep standard browser favicons
  }

  const webpPath = pngPath.replace(/\.png$/i, ".webp");
  const relPng = path.relative(PUBLIC_DIR, pngPath).replace(/\\/g, "/");
  const relWebp = path.relative(PUBLIC_DIR, webpPath).replace(/\\/g, "/");

  try {
    const originalSize = fs.statSync(pngPath).size;

    // Convert to WebP using Python PIL
    execSync(
      `python -c "from PIL import Image; im=Image.open(r'''${pngPath}'''); im.save(r'''${webpPath}''', 'WEBP', quality=85, method=6)"`,
      { stdio: "ignore" }
    );

    const newSize = fs.statSync(webpPath).size;
    const saved = originalSize - newSize;
    totalSavedBytes += Math.max(0, saved);

    // Delete the original PNG
    fs.unlinkSync(pngPath);

    convertedMap.set(relPng, relWebp);
    convertedMap.set("/" + relPng, "/" + relWebp);
    convertedMap.set(`images/${fileName}`, `images/${fileName.replace(/\.png$/i, ".webp")}`);
    convertedMap.set(`/images/${fileName}`, `/images/${fileName.replace(/\.png$/i, ".webp")}`);

    console.log(`✅ Converted & Removed: ${relPng} -> ${relWebp} (${(originalSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB)`);
    convertedCount++;
  } catch (err) {
    console.error(`❌ Failed to convert: ${relPng}`, err);
  }
}

if (convertedCount > 0) {
  console.log(`\n🎉 Successfully converted ${convertedCount} PNG(s) to WebP and removed originals!`);
  console.log(`💾 Total Storage/Bandwidth Saved: ${(totalSavedBytes / 1024).toFixed(1)} KB\n`);
} else {
  console.log(`✨ All local images are already in optimal WebP format.\n`);
}

// 2. Scan codebase for .png references and update local ones, warn on remote ones
console.log("🔍 Scanning codebase for PNG references & Remote Server Assets...");

const codeFiles = [
  ...getFilesRecursively(SRC_DIR, [".ts", ".tsx", ".js", ".jsx", ".css", ".html"]),
  path.join(ROOT_DIR, "index.html"),
];

let updatedFilesCount = 0;
const remoteImageWarnings: { file: string; line: number; text: string }[] = [];

for (const filePath of codeFiles) {
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  const lines = content.split("\n");
  lines.forEach((line, index) => {
    // Check for PNG usage
    if (line.includes(".png")) {
      // Check if it's a remote/server image path
      if (line.includes("getImageUrl(") || line.includes("http://") || line.includes("https://")) {
        remoteImageWarnings.push({
          file: path.relative(ROOT_DIR, filePath).replace(/\\/g, "/"),
          line: index + 1,
          text: line.trim(),
        });
      }
    }
  });

  // Auto-replace known converted PNG paths to WebP
  for (const [oldRel, newRel] of convertedMap.entries()) {
    if (content.includes(oldRel)) {
      content = content.replaceAll(oldRel, newRel);
      modified = true;
    }
  }

  // Also replace explicit laptop.png and ag-sl-desk.png references
  if (content.includes("/images/laptop.png")) {
    content = content.replaceAll("/images/laptop.png", "/images/laptop.webp");
    modified = true;
  }
  if (content.includes("/images/ag-sl-desk.png")) {
    content = content.replaceAll("/images/ag-sl-desk.png", "/images/ag-sl-desk.webp");
    modified = true;
  }
  if (content.includes("/images/ag-sl-desk1.png")) {
    content = content.replaceAll("/images/ag-sl-desk1.png", "/images/ag-sl-desk1.webp");
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf-8");
    updatedFilesCount++;
    console.log(`📝 Auto-updated references in: ${path.relative(ROOT_DIR, filePath)}`);
  }
}

// 3. Display Warnings for Remote / Server Images
if (remoteImageWarnings.length > 0) {
  console.log("\n⚠️  [REMOTE / SERVER ASSET WARNINGS]");
  console.log("------------------------------------------------------------");
  console.log("The following code locations reference images loaded from the remote server/API.");
  console.log("👉 Please make sure these images are uploaded to the server in .webp format for best performance!\n");

  remoteImageWarnings.forEach((w) => {
    console.log(`  📍 ${w.file}:${w.line}`);
    console.log(`     ${w.text}\n`);
  });
  console.log("------------------------------------------------------------\n");
} else {
  console.log("✅ No problematic remote image references found.\n");
}

console.log("============================================================\n");
