import { onLCP, onINP, onCLS, onFCP, onTTFB, type Metric } from "web-vitals";

type WebVitalsReporter = (metric: Metric) => void;

/**
 * Lightweight Core Web Vitals reporter.
 * Logs metrics to console and exposes them on `window.__webVitals` so
 * Lighthouse-style tooling (or a quick `console.table(window.__webVitals)`)
 * can read them on demand.
 *
 * It deliberately avoids sending network beacons, dynamic script
 * injection, or extra layout work so it does not affect the metrics it
 * measures.
 */
export function reportWebVitals(onReport?: WebVitalsReporter): void {
  if (typeof window === "undefined") return;

  const sink = (metric: Metric) => {
    const w = window as unknown as { __webVitals?: Record<string, Metric> };
    w.__webVitals = w.__webVitals ?? {};
    w.__webVitals[metric.name] = metric;

    // Single console.info so as not to flood devtools.
    // eslint-disable-next-line no-console
    console.info(
      `[web-vitals] ${metric.name}=${metric.value.toFixed(1)} (id=${metric.id})`,
    );

    onReport?.(metric);
  };

  onLCP(sink);
  onINP(sink);
  onCLS(sink);
  onFCP(sink);
  onTTFB(sink);
}