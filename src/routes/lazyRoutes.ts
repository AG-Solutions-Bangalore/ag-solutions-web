const normalizePath = (path: string) => {
  const pathname = path.split(/[?#]/, 1)[0] || "/";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return withLeadingSlash.length > 1 && withLeadingSlash.endsWith("/")
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
};

/* ==========================================================================
   DATA PREFETCH HELPERS
   ========================================================================== */
// Routes whose first paint is gated on a remote API call benefit from
// prefetching on nav hover/focus. Add new entries here.
const dataPrefetchers: Record<string, () => void> = {
  "/portfolio": () => {
    void import("@/features/portfolio/api/portfolioApi").then(({ getProjects }) => {
      void import("@/utils/queryClient").then(({ queryClient }) => {
        void import("@/utils/queryKeys").then(({ queryKeys }) => {
          queryClient.prefetchQuery({
            queryKey: queryKeys.projects.list("all"),
            queryFn: () => getProjects("all"),
            staleTime: 15 * 60 * 1000,
          });
        });
      });
    });
  },
};

export const prefetchRouteData = (path: string) => {
  const key = normalizePath(path);
  const prefetcher = dataPrefetchers[key];
  if (prefetcher) {
    prefetcher();
  }
};

/* ==========================================================================
   PAGE LOADERS (Direct & Unversioned)
   ========================================================================== */
export const pageLoaders = {
  home: () => import("@/features/home/pages/HomePage"),
  about: () => import("@/features/about/pages/AboutPage"),
  webDevelopment: () => import("@/features/services/pages/WebDevelopmentPageV2"),
  mobileApp: () => import("@/features/services/pages/MobileAppPageV2"),
  digitalMarketing: () => import("@/features/services/pages/DigitalMarketingPageV2"),
  exportBiz: () => import("@/features/products/export-biz/pages/ExportBizNewPage"),
  bizstock: () => import("@/features/products/bizstock/pages/BizStockPage"),
  quoteBiz: () => import("@/features/products/quote-biz/pages/QuoteBizPage"),
  products: () => import("@/features/products/pages/ProductsPage"),
  easeMarketing: () => import("@/features/products/ease-marketing/pages/EaseMarketingPage"),
  growTogether: () => import("@/features/coming-soon/pages/ComingSoonPage"),
  comingSoon: () => import("@/features/coming-soon/pages/ComingSoonPage"),
  notFound: () => import("@/features/not-found/pages/NotFoundPageV2"),
  contact: () => import("@/features/contact-us/pages/ContactPage"),
  portfolio: () => import("@/features/portfolio/pages/PortfolioPage"),
  blogList: () => import("@/features/blog/pages/BlogListPage"),
  blogDetail: () => import("@/features/blog/pages/BlogDetailPage"),
};

// Aliases for compatibility
export const v2Loaders = pageLoaders;
export const v1Loaders = pageLoaders;

/* ==========================================================================
   CONVENIENCE NAMED EXPORTS
   ========================================================================== */
export const loadHomePage = pageLoaders.home;
export const loadAboutPage = pageLoaders.about;
export const loadContactPage = pageLoaders.contact;
export const loadPortfolioPage = pageLoaders.portfolio;
export const loadWebDevelopmentPage = pageLoaders.webDevelopment;
export const loadMobileAppPage = pageLoaders.mobileApp;
export const loadDigitalMarketingPage = pageLoaders.digitalMarketing;
export const loadProductsPage = pageLoaders.products;
export const loadExportBizPage = pageLoaders.exportBiz;
export const loadBizStockPage = pageLoaders.bizstock;
export const loadQuoteBizPage = pageLoaders.quoteBiz;
export const loadEaseMarketingPage = pageLoaders.easeMarketing;
export const loadGrowTogetherPage = pageLoaders.growTogether;
export const loadBlogListPage = pageLoaders.blogList;
export const loadBlogDetailPage = pageLoaders.blogDetail;
export const loadNotFoundPage = pageLoaders.notFound;

/* ==========================================================================
   ROUTE PRELOADING MAP
   ========================================================================== */
const routeLoaders: Record<string, () => Promise<unknown>> = {
  "/": loadHomePage,
  "/home": loadHomePage,
  "/about": loadAboutPage,
  "/about-us": loadAboutPage,
  "/contact": loadContactPage,
  "/contacts": loadContactPage,
  "/contactus": loadContactPage,
  "/portfolio": loadPortfolioPage,
  "/services": loadWebDevelopmentPage,
  "/web-development": loadWebDevelopmentPage,
  "/mobile-app": loadMobileAppPage,
  "/mobile-app-development": loadMobileAppPage,
  "/digital-marketing": loadDigitalMarketingPage,
  "/ease-marketing": loadEaseMarketingPage,
  "/EASE-Marketing": loadEaseMarketingPage,
  "/products": loadProductsPage,
  "/export-biz": loadExportBizPage,
  "/export-biz-new": loadExportBizPage,
  "/bizstock": loadBizStockPage,
  "/biz-stock": loadBizStockPage,
  "/quote-biz": loadQuoteBizPage,
  "/quote-biz/": loadQuoteBizPage,
  "/grow-together": loadGrowTogetherPage,
  "/blogs": loadBlogListPage,
  "/blog": loadBlogListPage,
};

export const preloadRoute = (path: string) => {
  const loader = routeLoaders[normalizePath(path)];

  if (loader) {
    void loader();
  }
};
