import { useState, useRef } from "react";
import {
  Sun,
  Moon,
  Download,
  Upload,
  Save,
  RotateCcw,
  Settings,
  X,
  Check,
} from "lucide-react";
import { useThemeCustomizer } from "@/hooks/useThemeCustomizer";

const BRAND_COLORS = [
  { key: "teal" as const, label: "Teal" },
  { key: "pink" as const, label: "Pink" },
  { key: "yellow" as const, label: "Yellow" },
  { key: "green" as const, label: "Green" },
];

const UI_COLORS = [
  { key: "background" as const, label: "BG" },
  { key: "foreground" as const, label: "Text" },
  { key: "card" as const, label: "Card" },
  { key: "border" as const, label: "Border" },
];

const FONT_LABELS: [number, string][] = [
  [0.75, "75%"],
  [0.8, "80%"],
  [0.85, "85%"],
  [0.9, "90%"],
  [0.95, "95%"],
  [1, "100%"],
  [1.05, "105%"],
  [1.1, "110%"],
  [1.15, "115%"],
  [1.2, "120%"],
  [1.25, "125%"],
  [1.3, "130%"],
  [1.35, "135%"],
  [1.4, "140%"],
  [1.45, "145%"],
  [1.5, "150%"],
];

function getFontLabel(scale: number): string {
  const match = FONT_LABELS.find(([v]) => Math.abs(v - scale) < 0.001);
  return match ? match[1] : `${Math.round(scale * 100)}%`;
}

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [saveFlash, setSaveFlash] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    config,
    updateMode,
    updateColor,
    updateUI,
    updateFontScale,
    save,
    reset,
    doExport,
    doImport,
  } = useThemeCustomizer();

  const handleSave = () => {
    save();
    setSaveFlash(true);
    setTimeout(() => setSaveFlash(false), 1500);
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await doImport(file);
    } catch {
      alert("Invalid theme file. Please upload a valid AG theme JSON.");
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="bg-navy/95 backdrop-blur-sm border-t border-white/10">
      {/* Toggle Bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
        aria-label="Toggle theme customizer"
      >
        {isOpen ? (
          <X className="h-3.5 w-3.5" />
        ) : (
          <Settings className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "8s" }} />
        )}
        <span>{isOpen ? "Close Customizer" : "Customize Theme"}</span>
      </button>

      {/* Expanded Panel */}
      {isOpen && (
        <div className="px-4 pb-5 sm:px-6 md:px-10">
          <div className="mx-auto max-w-6xl space-y-5">

            {/* Row 1: Mode + Brand Colors + UI Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

              {/* ── 1. Dark / Light Mode ────────────────────── */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Mode
                </label>
                <div className="flex items-center gap-1.5 rounded-xl bg-white/5 p-1">
                  <button
                    onClick={() => updateMode("light")}
                    className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold transition-all cursor-pointer border-none ${
                      config.mode === "light"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "bg-transparent text-slate-400 hover:text-white"
                    }`}
                  >
                    <Sun className="h-3.5 w-3.5" />
                    Light
                  </button>
                  <button
                    onClick={() => updateMode("dark")}
                    className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold transition-all cursor-pointer border-none ${
                      config.mode === "dark"
                        ? "bg-slate-700 text-white shadow-sm"
                        : "bg-transparent text-slate-400 hover:text-white"
                    }`}
                  >
                    <Moon className="h-3.5 w-3.5" />
                    Dark
                  </button>
                </div>
              </div>

              {/* ── 2. Brand Colors ─────────────────────────── */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Brand Colors
                </label>
                <div className="flex items-center gap-2.5">
                  {BRAND_COLORS.map(({ key, label }) => (
                    <div key={key} className="flex flex-col items-center gap-1">
                      <label
                        className="relative h-8 w-8 rounded-full cursor-pointer overflow-hidden ring-2 ring-white/20 hover:ring-white/50 transition-all shadow-md"
                        style={{ backgroundColor: config.colors[key] }}
                        title={label}
                      >
                        <input
                          type="color"
                          value={config.colors[key]}
                          onChange={(e) => updateColor(key, e.target.value)}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                      </label>
                      <span className="text-[9px] text-slate-500 font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── 3. UI Colors ────────────────────────────── */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  UI Colors
                </label>
                <div className="flex items-center gap-2.5">
                  {UI_COLORS.map(({ key, label }) => (
                    <div key={key} className="flex flex-col items-center gap-1">
                      <label
                        className="relative h-8 w-8 rounded-lg cursor-pointer overflow-hidden ring-2 ring-white/20 hover:ring-white/50 transition-all shadow-md"
                        style={{ backgroundColor: config.ui[key] }}
                        title={label}
                      >
                        <input
                          type="color"
                          value={config.ui[key]}
                          onChange={(e) => updateUI(key, e.target.value)}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                      </label>
                      <span className="text-[9px] text-slate-500 font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Font Scale + Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* ── 4. Font Scale ───────────────────────────── */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Font Size{" "}
                  <span className="text-white font-mono text-[11px] ml-1">
                    {getFontLabel(config.fontScale)}
                  </span>
                </label>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-500 font-bold select-none">A</span>
                  <input
                    type="range"
                    min="0.75"
                    max="1.5"
                    step="0.01"
                    value={config.fontScale}
                    onChange={(e) => updateFontScale(parseFloat(e.target.value))}
                    className="flex-1 h-1 appearance-none rounded-full bg-white/10 accent-teal cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
                  />
                  <span className="text-base text-slate-500 font-bold select-none">A</span>
                </div>
                {/* Scale markers */}
                <div className="flex justify-between mt-1 px-4">
                  {[75, 100, 125, 150].map((pct) => (
                    <button
                      key={pct}
                      onClick={() => updateFontScale(pct / 100)}
                      className={`text-[9px] font-bold cursor-pointer bg-transparent border-none transition-colors ${
                        Math.round(config.fontScale * 100) === pct
                          ? "text-white"
                          : "text-slate-600 hover:text-slate-400"
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* ── 5. Actions ──────────────────────────────── */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Actions
                </label>
                <div className="flex flex-wrap items-center gap-1.5">
                  {/* Save */}
                  <button
                    onClick={handleSave}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-[11px] font-bold transition-all cursor-pointer border-none ${
                      saveFlash
                        ? "bg-emerald-500 text-white"
                        : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
                    }`}
                    title="Save theme"
                  >
                    {saveFlash ? <Check className="h-3 w-3" /> : <Save className="h-3 w-3" />}
                    {saveFlash ? "Saved!" : "Save"}
                  </button>

                  {/* Export */}
                  <button
                    onClick={doExport}
                    className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-[11px] font-bold text-slate-300 hover:bg-white/20 hover:text-white transition-all cursor-pointer border-none"
                    title="Export theme as JSON"
                  >
                    <Download className="h-3 w-3" />
                    Export
                  </button>

                  {/* Import */}
                  <label className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-[11px] font-bold text-slate-300 hover:bg-white/20 hover:text-white transition-all cursor-pointer">
                    <Upload className="h-3 w-3" />
                    Import
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".json"
                      onChange={handleImport}
                      className="hidden"
                    />
                  </label>

                  {/* Reset */}
                  <button
                    onClick={reset}
                    className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-[11px] font-bold text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all cursor-pointer border-none"
                    title="Reset to defaults"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
