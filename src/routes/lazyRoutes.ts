const normalizePath = (path: string) => {
  const pathname = path.split(/[?#]/, 1)[0] || "/";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return withLeadingSlash.length > 1 && withLeadingSlash.endsWith("/")
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
};

export const loadHomePage = () => import("@/features/home/pages/HomePage");
export const loadAboutPage = () => import("@/features/about/pages/AboutPage");
export const loadContactPage = () =>
  import("@/features/contact-us/pages/ContactPage");
export const loadPortfolioPage = () =>
  import("@/features/portfolio/pages/PortfolioPage");
export const loadWebDevelopmentPage = () =>
  import(
    "@/features/service/web-development/pages/WebDevelopmentPage"
  );
export const loadMobileAppDevelopmentPage = () =>
  import(
    "@/features/service/mobile-app-development/pages/MobileAppDevelopmentPage"
  );
export const loadDesktopApplicationsPage = () =>
  import(
    "@/features/service/desktop-applications/pages/DesktopApplicationsPage"
  );
export const loadBlogListPage = () =>
  import("@/features/blog/pages/BlogListPage");
export const loadBlogDetailPage = () =>
  import("@/features/blog/pages/BlogDetailPage");
export const loadProductsPage = () =>
  import("@/features/products/pages/ProductsPage");
export const loadExportBizPage = () =>
  import("@/features/products/pages/ExportBizPage");
export const loadEaseMarketingPage = () =>
  import("@/features/products/pages/EaseMarketingPage");
export const loadGrowTogetherPage = () =>
  import("@/features/products/pages/GrowTogetherPage");
export const loadExportBizNewPage = () =>
  import("@/features/export-biz-new/pages/ExportBizNewPage");
export const loadNotFoundPage = () =>
  import("@/features/not-found/pages/NotFoundPage");

const routeLoaders: Record<string, () => Promise<unknown>> = {
  "/": loadHomePage,
  "/about": loadAboutPage,
  "/contacts": loadContactPage,
  "/portfolio": loadPortfolioPage,
  "/web-development": loadWebDevelopmentPage,
  "/mobile-app-development": loadMobileAppDevelopmentPage,
  "/desktop-applications": loadDesktopApplicationsPage,
  "/blogs": loadBlogListPage,
  "/products": loadProductsPage,
  "/export-biz": loadExportBizPage,
  "/export-biz-new": loadExportBizNewPage,
  "/ease-marketing": loadEaseMarketingPage,
  "/grow-together": loadGrowTogetherPage,
};

export const preloadRoute = (path: string) => {
  const loader = routeLoaders[normalizePath(path)];

  if (loader) {
    void loader();
  }
};

