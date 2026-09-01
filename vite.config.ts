import { defineConfig, type Plugin } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

/**
 * Make the main CSS bundle non-render-blocking.
 *
 * Vite emits <link rel="stylesheet" crossorigin href="/assets/index-*.css">
 * which blocks the first paint for the full CSS download. We replace it
 * with the same preload + media="print" → media="all" pattern used for
 * Google Fonts so the page can paint as soon as HTML is parsed.
 */
function nonBlockingCss(): Plugin {
  return {
    name: "ag:non-blocking-css",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(
          /<link\s+rel="stylesheet"\s+crossorigin\s+href="(\/assets\/index-[^"]+\.css)">/,
          (_, href) => {
            return [
              `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">`,
              `<noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`,
            ].join("");
          },
        );
      },
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    nonBlockingCss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router") || id.includes("react-router-dom")) {
              return "vendor-router";
            }
            if (id.includes("@tanstack") || id.includes("axios")) {
              return "vendor-query";
            }
            if (id.includes("framer-motion")) {
              return "vendor-motion";
            }
            if (id.includes("lucide-react")) {
              return "vendor-icons";
            }
            if (id.includes("react-helmet-async")) {
              return "vendor-helmet";
            }
            if (id.includes("lenis")) {
              return "vendor-lenis";
            }
            if (
              id.includes("/react/") ||
              id.includes("/react-dom/") ||
              id.includes("/scheduler/") ||
              id.includes("\\react\\") ||
              id.includes("\\react-dom\\") ||
              id.includes("\\scheduler\\")
            ) {
              return "vendor-react";
            }
            return "vendor-others";
          }
        },
      },
    },
  },
});
