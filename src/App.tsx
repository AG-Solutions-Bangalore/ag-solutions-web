import { useEffect } from "react";
import { Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import SkipToContent from "./components/accessibility/SkipToContent";
import { getUtmParams, storeUtmParams } from "./utils/utmUtils";
import { renderV1Routes, renderV2Routes, renderV3Routes } from "./routes";
import { loadConfig, applyConfig } from "./hooks/useThemeCustomizer";

function UtmTracker() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = getUtmParams(searchParams);
    storeUtmParams(params);
  }, [location]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenisInstance = (window as any).lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}

function App() {
  // Apply saved theme immediately on mount
  useEffect(() => {
    const saved = loadConfig();
    if (saved) applyConfig(saved);
  }, []);

  useEffect(() => {
    // Prevent browser auto-restoration from clamping scroll to unrendered document height on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || isMobile) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
    });
    (window as any).lenis = lenis;

    let rafId = 0;
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Keep Lenis updated on page height as lazy components/images load
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, []);

  return (
    <>
      <UtmTracker />
      <SkipToContent />
      <ScrollToTop />
      <Routes>
        {/* Primary Routes (V2) — /, /about, /services, /web-development, etc. */}
        {renderV2Routes()}

        {/* Future Version 3 Routes */}
        {renderV3Routes()}

        {/* Legacy V1 Routes — /home-v1, /portfolio, /blogs, etc. */}
        {renderV1Routes()}
      </Routes>
    </>
  );
}

export default App;
