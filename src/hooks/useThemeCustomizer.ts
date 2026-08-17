import { useState, useCallback, useEffect } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────

export interface ThemeConfig {
  mode: "light" | "dark";
  colors: {
    teal: string;
    pink: string;
    yellow: string;
    green: string;
  };
  ui: {
    background: string;
    foreground: string;
    card: string;
    border: string;
  };
  fontScale: number; // multiplier: 1 = default, 0.8 = smaller, 1.5 = larger
}

// ── Constants ──────────────────────────────────────────────────────────────────

const STORAGE_KEY = "ag-theme-config";

const DEFAULT_COLORS = {
  teal: "#00a8b5",
  pink: "#e93568",
  yellow: "#f5a623",
  green: "#7cb342",
} as const;

const DEFAULT_UI_LIGHT = {
  background: "#ffffff",
  foreground: "#1e293b",
  card: "#ffffff",
  border: "#e2e8f0",
} as const;

const DEFAULT_UI_DARK = {
  background: "#090d16",
  foreground: "#f8fafc",
  card: "#0f172a",
  border: "#1e293b",
} as const;

const DEFAULT_FONT_SIZES: Record<string, number> = {
  xs: 0.75,
  sm: 0.875,
  base: 1,
  lg: 1.125,
  xl: 1.25,
  "2xl": 1.5,
  "3xl": 1.875,
  "4xl": 2.25,
  "5xl": 3,
  "6xl": 3.75,
  "7xl": 4.5,
};

export function getDefaultConfig(mode: "light" | "dark" = "light"): ThemeConfig {
  return {
    mode,
    colors: { ...DEFAULT_COLORS },
    ui: mode === "dark" ? { ...DEFAULT_UI_DARK } : { ...DEFAULT_UI_LIGHT },
    fontScale: 1,
  };
}

// ── CSS Application ────────────────────────────────────────────────────────────

/** Derive hover/light/border shades from a base hex color */
function hexToHSL(hex: string): { h: number; s: number; l: number } {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function deriveShades(hex: string) {
  const { h, s, l } = hexToHSL(hex);
  return {
    base: hex,
    hover: hslToHex(h, s, Math.max(0, l - 10)),
    light: hslToHex(h, Math.min(100, s + 10), Math.min(98, l + 40)),
    border: hslToHex(h, Math.min(100, s + 5), Math.min(92, l + 25)),
  };
}

export function applyConfig(config: ThemeConfig) {
  const root = document.documentElement;

  // Dark / light mode
  if (config.mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Brand colors + derived shades
  const colorNames = ["teal", "pink", "yellow", "green"] as const;
  for (const name of colorNames) {
    const shades = deriveShades(config.colors[name]);
    root.style.setProperty(`--${name}`, shades.base);
    root.style.setProperty(`--${name}-hover`, shades.hover);
    root.style.setProperty(`--${name}-light`, shades.light);
    root.style.setProperty(`--${name}-border`, shades.border);
  }

  // Font scale
  for (const [key, baseRem] of Object.entries(DEFAULT_FONT_SIZES)) {
    root.style.setProperty(`--font-${key}`, `${(baseRem * config.fontScale).toFixed(4)}rem`);
  }
}

export function clearAppliedConfig() {
  const root = document.documentElement;
  root.classList.remove("dark");

  const colorNames = ["teal", "pink", "yellow", "green"];
  for (const name of colorNames) {
    for (const suffix of ["", "-hover", "-light", "-border"]) {
      root.style.removeProperty(`--${name}${suffix}`);
    }
  }
  // UI colors
  for (const prop of ["--background", "--foreground", "--card", "--card-foreground", "--popover", "--popover-foreground", "--border", "--input"]) {
    root.style.removeProperty(prop);
  }
  for (const key of Object.keys(DEFAULT_FONT_SIZES)) {
    root.style.removeProperty(`--font-${key}`);
  }
}

// ── LocalStorage ───────────────────────────────────────────────────────────────

export function saveConfig(config: ThemeConfig) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // storage full or blocked — silently ignore
  }
}

export function loadConfig(): ThemeConfig | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Basic validation
    if (parsed && parsed.colors && typeof parsed.fontScale === "number") {
      // Migrate old configs without ui field
      if (!parsed.ui) {
        parsed.ui = parsed.mode === "dark" ? { ...DEFAULT_UI_DARK } : { ...DEFAULT_UI_LIGHT };
      }
      return parsed as ThemeConfig;
    }
  } catch {
    // corrupted — ignore
  }
  return null;
}

function clearSavedConfig() {
  localStorage.removeItem(STORAGE_KEY);
}

// ── Import / Export ────────────────────────────────────────────────────────────

export function exportConfig(config: ThemeConfig) {
  const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ag-theme-config.json";
  a.click();
  URL.revokeObjectURL(url);
}

export function importConfig(file: File): Promise<ThemeConfig> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string);
        if (parsed && parsed.colors && typeof parsed.fontScale === "number") {
          if (!parsed.ui) {
            parsed.ui = parsed.mode === "dark" ? { ...DEFAULT_UI_DARK } : { ...DEFAULT_UI_LIGHT };
          }
          resolve(parsed as ThemeConfig);
        } else {
          reject(new Error("Invalid theme config file"));
        }
      } catch {
        reject(new Error("Failed to parse JSON"));
      }
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsText(file);
  });
}

// ── Hook ───────────────────────────────────────────────────────────────────────

export function useThemeCustomizer() {
  const [config, setConfig] = useState<ThemeConfig>(() => {
    return loadConfig() || getDefaultConfig();
  });

  // Apply whenever config changes
  useEffect(() => {
    applyConfig(config);
  }, [config]);

  const updateMode = useCallback((mode: "light" | "dark") => {
    setConfig((prev) => {
      const defaults = mode === "dark" ? DEFAULT_UI_DARK : DEFAULT_UI_LIGHT;
      return { ...prev, mode, ui: { ...defaults } };
    });
  }, []);

  const updateColor = useCallback((name: keyof ThemeConfig["colors"], value: string) => {
    setConfig((prev) => ({
      ...prev,
      colors: { ...prev.colors, [name]: value },
    }));
  }, []);

  const updateUI = useCallback((name: keyof ThemeConfig["ui"], value: string) => {
    setConfig((prev) => ({
      ...prev,
      ui: { ...prev.ui, [name]: value },
    }));
  }, []);

  const updateFontScale = useCallback((scale: number) => {
    setConfig((prev) => ({ ...prev, fontScale: scale }));
  }, []);

  const save = useCallback(() => {
    saveConfig(config);
  }, [config]);

  const reset = useCallback(() => {
    clearSavedConfig();
    clearAppliedConfig();
    setConfig(getDefaultConfig());
  }, []);

  const doExport = useCallback(() => {
    exportConfig(config);
  }, [config]);

  const doImport = useCallback(async (file: File) => {
    const imported = await importConfig(file);
    setConfig(imported);
    saveConfig(imported);
    applyConfig(imported);
  }, []);

  const hasCustomTheme = loadConfig() !== null;

  return {
    config,
    hasCustomTheme,
    updateMode,
    updateColor,
    updateUI,
    updateFontScale,
    save,
    reset,
    doExport,
    doImport,
  };
}
