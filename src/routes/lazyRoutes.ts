const normalizePath = (path: string) => {
  const pathname = path.split(/[?#]/, 1)[0] || "/";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return withLeadingSlash.length > 1 && withLeadingSlash.endsWith("/")
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
};

/* ==========================================================================
   VERSION 1 (v1) PAGE LOADERS
   ========================================================================== */
export const v1Loaders = {
  home: () => import("@/features/v1/home/pages/HomePage"),
  about: () => import("@/features/v1/about/pages/AboutPage"),
  contact: () => import("@/features/v1/contact-us/pages/ContactPage"),
  portfolio: () => import("@/features/v1/portfolio/pages/PortfolioPage"),
  webDevelopment: () => import("@/features/v1/service/web-development/pages/WebDevelopmentPage"),
  mobileAppDevelopment: () => import("@/features/v1/service/mobile-app-development/pages/MobileAppDevelopmentPage"),
  desktopApplications: () => import("@/features/v1/service/desktop-applications/pages/DesktopApplicationsPage"),
  blogList: () => import("@/features/v1/blog/pages/BlogListPage"),
  blogDetail: () => import("@/features/v1/blog/pages/BlogDetailPage"),
  products: () => import("@/features/v1/products/pages/ProductsPage"),
  exportBiz: () => import("@/features/v1/products/pages/ExportBizPage"),
  easeMarketing: () => import("@/features/v1/products/pages/EaseMarketingPage"),
  growTogether: () => import("@/features/v1/products/pages/GrowTogetherPage"),
  notFound: () => import("@/features/v1/not-found/pages/NotFoundPage"),
};

/* ==========================================================================
   VERSION 2 (v2) PAGE LOADERS
   ========================================================================== */
export const v2Loaders = {
  home: () => import("@/features/v2/home/pages/HomePage"),
  about: () => import("@/features/v2/about/pages/AboutPage"),
  webDevelopment: () => import("@/features/v2/services/pages/WebDevelopmentPageV2"),
  mobileApp: () => import("@/features/v2/services/pages/MobileAppPageV2"),
  digitalMarketing: () => import("@/features/v2/services/pages/DigitalMarketingPageV2"),
  exportBizNew: () => import("@/features/v2/export-biz/pages/ExportBizNewPage"),
};

/* ==========================================================================
   VERSION 3 (v3) PAGE LOADERS (Scalable placeholder for future v3)
   ========================================================================== */
export const v3Loaders = {
  // e.g. home: () => import("@/features/v3/home/pages/HomePageV3"),
};

/* ==========================================================================
   CONVENIENCE NAMED EXPORTS (Maintains backward compatibility)
   ========================================================================== */
export const loadHomePage = v1Loaders.home;
export const loadAboutPage = v1Loaders.about;
export const loadContactPage = v1Loaders.contact;
export const loadPortfolioPage = v1Loaders.portfolio;
export const loadWebDevelopmentPage = v1Loaders.webDevelopment;
export const loadMobileAppDevelopmentPage = v1Loaders.mobileAppDevelopment;
export const loadDesktopApplicationsPage = v1Loaders.desktopApplications;
export const loadBlogListPage = v1Loaders.blogList;
export const loadBlogDetailPage = v1Loaders.blogDetail;
export const loadProductsPage = v1Loaders.products;
export const loadExportBizPage = v1Loaders.exportBiz;
export const loadEaseMarketingPage = v1Loaders.easeMarketing;
export const loadGrowTogetherPage = v1Loaders.growTogether;
export const loadNotFoundPage = v1Loaders.notFound;

export const loadHomePageV2 = v2Loaders.home;
export const loadAboutPageV2 = v2Loaders.about;
export const loadWebDevelopmentPageV2 = v2Loaders.webDevelopment;
export const loadServicePageV2 = v2Loaders.webDevelopment;
export const loadMobileAppPageV2 = v2Loaders.mobileApp;
export const loadDigitalMarketingPageV2 = v2Loaders.digitalMarketing;
export const loadExportBizNewPage = v2Loaders.exportBizNew;

/* ==========================================================================
   ROUTE PRELOADING MAP
   ========================================================================== */
const routeLoaders: Record<string, () => Promise<unknown>> = {
  // V1 Routes
  "/": loadHomePage,
  "/about": loadAboutPage,
  "/contacts": loadContactPage,
  "/contactus": loadContactPage,
  "/portfolio": loadPortfolioPage,
  "/web-development": loadWebDevelopmentPage,
  "/mobile-app-development": loadMobileAppDevelopmentPage,
  "/desktop-applications": loadDesktopApplicationsPage,
  "/blogs": loadBlogListPage,
  "/products": loadProductsPage,
  "/export-biz": loadExportBizPage,
  "/ease-marketing": loadEaseMarketingPage,
  "/grow-together": loadGrowTogetherPage,

  // V2 Routes
  "/home-v2": loadHomePageV2,
  "/about-v2": loadAboutPageV2,
  "/service-v2": loadServicePageV2,
  "/web-development-v2": loadWebDevelopmentPageV2,
  "/mobile-app-v2": loadMobileAppPageV2,
  "/mobile-app-development-v2": loadMobileAppPageV2,
  "/digital-marketing-v2": loadDigitalMarketingPageV2,
  "/ease-marketing-v2": loadDigitalMarketingPageV2,
  "/export-biz-new": loadExportBizNewPage,
};

export const preloadRoute = (path: string) => {
  const loader = routeLoaders[normalizePath(path)];

  if (loader) {
    void loader();
  }
};
