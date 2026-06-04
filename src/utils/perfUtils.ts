/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Type-safe debounce utility to delay function execution until after
 * a specified wait time has elapsed since the last time it was invoked.
 * Helps optimize INP (Interaction to Next Paint) by deferring expensive calculations.
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (...args: Parameters<T>): void {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

/**
 * Type-safe throttle utility to limit the execution rate of a function.
 * Restricts invocation to at most once per specified duration.
 * Useful for high-frequency events like scroll, resize, or mousemove.
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return function (...args: Parameters<T>): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}
