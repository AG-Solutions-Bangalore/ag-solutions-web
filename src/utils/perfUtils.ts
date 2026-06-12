/**
 * Type-safe debounce utility to delay function execution until after
 * a specified wait time has elapsed since the last time it was invoked.
 * Helps optimize INP (Interaction to Next Paint) by deferring expensive calculations.
 */
export function debounce<TArgs extends unknown[], TReturn>(
  func: (...args: TArgs) => TReturn,
  wait: number,
): (...args: TArgs) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (...args: TArgs): void {
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
export function throttle<TArgs extends unknown[], TReturn>(
  func: (...args: TArgs) => TReturn,
  limit: number,
): (...args: TArgs) => void {
  let inThrottle = false;

  return function (...args: TArgs): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}
