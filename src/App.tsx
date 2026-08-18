import { useEffect, useRef } from "react";
import { Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import SkipToContent from "./components/accessibility/SkipToContent";
import { extractUtmParams, storeUtmParams } from "./utils/utmUtils";
import { createCampaignVisit } from "./features/v2/products/api/campaignApi";
import { renderV1Routes, renderV2Routes, renderV3Routes } from "./routes";

function UtmTracker() {
  const location = useLocation();
  const trackedKeysRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = extractUtmParams(searchParams);
    storeUtmParams(params);

    if (params.utm_source || params.utm_campaign) {
      const trackingKey = `${location.pathname}?utm_source=${params.utm_source}&utm_campaign=${params.utm_campaign}&utm_medium=${params.utm_medium}`;

      if (!trackedKeysRef.current.has(trackingKey)) {
        trackedKeysRef.current.add(trackingKey);

        createCampaignVisit({
          utm_source: params.utm_source,
          utm_campaign: params.utm_campaign,
          page: location.pathname || window.location.pathname || "/",
          fullUrl: window.location.href,
          referrer: document.referrer || "",
          timestamp: new Date().toISOString(),
        }).catch((err) => {
          console.error("Failed to log campaign visit:", err);
        });
      }
    }
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
  // Clean up any stale inline theme style overrides on mount so CSS tokens and next-themes drive theme cleanly
  useEffect(() => {
    const root = document.documentElement;
    const staleProps = [
      "--background",
      "--foreground",
      "--card",
      "--card-foreground",
      "--popover",
      "--popover-foreground",
      "--border",
      "--input",
      "--dark",
      "--light",
      "--muted",
      "--navy",
    ];
    staleProps.forEach((prop) => root.style.removeProperty(prop));
    try {
      localStorage.removeItem("ag-theme-config");
    } catch {
      // ignore
    }
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
