import fs from "fs";
import type { SchemaScript } from "./types";

/**
 * Parse every `<script type="application/ld+json">` block in an HTML file
 * and return the structured payloads. Captures the script's `id` and
 * `data-rh` attributes so the audit can detect duplicate IDs.
 */
export function extractSchemasFromHtml(filePath: string): SchemaScript[] {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, "utf-8");
  const scriptRegex = /<script\s+([^>]*?)type=["']application\/ld\+json["']([^>]*?)>([\s\S]*?)<\/script>/gi;
  const results: SchemaScript[] = [];

  let match;
  while ((match = scriptRegex.exec(content)) !== null) {
    const fullTag = match[0];
    const attrs = `${match[1]} ${match[2]}`;
    const innerJson = match[3].trim();

    const idMatch = attrs.match(/id=["']([^"']+)["']/i);
    const dataRhMatch = attrs.match(/data-rh=["']([^"']+)["']/i);

    try {
      const parsed = JSON.parse(innerJson);
      results.push({
        id: idMatch ? idMatch[1] : undefined,
        dataRh: dataRhMatch ? dataRhMatch[1] : undefined,
        json: parsed,
        rawHtml: fullTag,
      });
    } catch (err: any) {
      console.error(`❌ JSON Parse Error in ${filePath}: ${err.message}`);
    }
  }

  return results;
}
