import { QueryClient } from "@tanstack/react-query";

// Single shared QueryClient instance used by both the React tree
// (QueryClientProvider in main.tsx) and imperative prefetch helpers
// (e.g. lazyRoutes.prefetchPortfolio) so a single cache survives both.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes cache stale
      gcTime: 10 * 60 * 1000, // 10 minutes garbage collection
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
