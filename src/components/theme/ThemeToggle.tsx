import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 ${className}`} />
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark/Night Mode"}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark/Night Mode"}
      className={`relative inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-xs transition-all duration-300 hover:scale-105 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-pink/50 cursor-pointer ${className}`}
    >
      <Sun
        className={`h-4.5 w-4.5 text-yellow transition-all duration-300 transform ${
          isDark
            ? "rotate-90 scale-0 opacity-0 absolute"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`h-4.5 w-4.5 text-teal transition-all duration-300 transform ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0 absolute"
        }`}
      />
    </button>
  );
}

export default ThemeToggle;
