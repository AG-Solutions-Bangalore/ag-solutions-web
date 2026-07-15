import { lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import AppLayout from "./components/layout/AppLayout";
import SkipToContent from "./components/accessibility/SkipToContent";
import { getUtmParams, storeUtmParams } from "./utils/utmUtils";
import {
  loadAboutPage,
  loadBlogDetailPage,
  loadBlogListPage,
  loadContactPage,
  loadDesktopApplicationsPage,
  loadHomePage,
  loadMobileAppDevelopmentPage,
  loadNotFoundPage,
  loadPortfolioPage,
  loadWebDevelopmentPage,
  loadProductsPage,
  loadExportBizPage,
  loadEaseMarketingPage,
  loadGrowTogetherPage,
} from "./routes/lazyRoutes";



const HomePage = lazy(loadHomePage);
const AboutPage = lazy(loadAboutPage);
const ContactPage = lazy(loadContactPage);
const PortfolioPage = lazy(loadPortfolioPage);
const WebDevelopmentPage = lazy(loadWebDevelopmentPage);
const MobileAppDevelopmentPage = lazy(loadMobileAppDevelopmentPage);
const DesktopApplicationsPage = lazy(loadDesktopApplicationsPage);
const BlogListPage = lazy(loadBlogListPage);
const BlogDetailPage = lazy(loadBlogDetailPage);
const ProductsPage = lazy(loadProductsPage);
const ExportBizPage = lazy(loadExportBizPage);
const EaseMarketingPage = lazy(loadEaseMarketingPage);
const GrowTogetherPage = lazy(loadGrowTogetherPage);
const NotFoundPage = lazy(loadNotFoundPage);

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
    const lenisInstance = (window as any).lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
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

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, []);

  return (
    <BrowserRouter>
      <UtmTracker />
      <SkipToContent />
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<Navigate to="/portfolio" replace />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<Navigate to="/web-development" replace />} />
          <Route path="web-development" element={<WebDevelopmentPage />} />
          <Route
            path="mobile-app-development"
            element={<MobileAppDevelopmentPage />}
          />
          <Route
            path="desktop-applications"
            element={<DesktopApplicationsPage />}
          />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blogs" element={<BlogListPage />} />
          <Route path="blogs/:slug" element={<BlogDetailPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route
            path="export-biz"
            element={<ExportBizPage defaultOpenModal={false} />}
          />
          <Route
            path="ease-marketing"
            element={<EaseMarketingPage />}
          />
          <Route
            path="grow-together"
            element={<GrowTogetherPage />}
          />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
