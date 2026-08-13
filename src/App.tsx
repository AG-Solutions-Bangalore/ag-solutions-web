import { lazy, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import AppLayout from "./components/layout/AppLayout";
import SkipToContent from "./components/accessibility/SkipToContent";
import { getUtmParams, storeUtmParams } from "./utils/utmUtils";
import {
  loadAboutPage,
  loadAboutPageV2,
  loadServicePageV2,
  loadMobileAppPageV2,
  loadDigitalMarketingPageV2,
  loadBlogDetailPage,
  loadBlogListPage,
  loadContactPage,
  loadDesktopApplicationsPage,
  loadHomePage,
  loadHomePageV2,
  loadMobileAppDevelopmentPage,
  loadNotFoundPage,
  loadPortfolioPage,
  loadWebDevelopmentPage,
  loadProductsPage,
  loadExportBizPage,
  loadEaseMarketingPage,
  loadGrowTogetherPage,
  loadExportBizNewPage,
} from "./routes/lazyRoutes";
import New from "../src/features/home/pages/New/New";
import ExportBiz from "./features/export-biz/pages/ExportBiz";
// import ContactUs from "./features/contact-us-new/pages/ContactUs";



const HomePage = lazy(loadHomePage);
const HomePageV2 = lazy(loadHomePageV2);
const AboutPage = lazy(loadAboutPage);
const AboutPageV2 = lazy(loadAboutPageV2);
const ServicePageV2 = lazy(loadServicePageV2);
const MobileAppPageV2 = lazy(loadMobileAppPageV2);
const DigitalMarketingPageV2 = lazy(loadDigitalMarketingPageV2);
const ContactPage = lazy(loadContactPage);
const PortfolioPage = lazy(loadPortfolioPage);
const WebDevelopmentPage = lazy(loadWebDevelopmentPage);
const MobileAppDevelopmentPage = lazy(loadMobileAppDevelopmentPage);
const DesktopApplicationsPage = lazy(loadDesktopApplicationsPage);
const BlogListPage = lazy(loadBlogListPage);
const BlogDetailPage = lazy(loadBlogDetailPage);
const ProductsPage = lazy(loadProductsPage);
const ExportBizPage = lazy(loadExportBizPage);
const ExportBizNewPage = lazy(loadExportBizNewPage);
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
    window.scrollTo(0, 0);
    const lenisInstance = (window as any).lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}

function App() {
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
        <Route path="home-v2" element={<HomePageV2 />} />
        <Route path="about-v2" element={<AboutPageV2 />} />
        <Route path="service-v2" element={<ServicePageV2 />} />
        <Route path="web-development-v2" element={<ServicePageV2 />} />
        <Route path="mobile-app-v2" element={<MobileAppPageV2 />} />
        <Route path="mobile-app-development-v2" element={<MobileAppPageV2 />} />
        <Route path="digital-marketing-v2" element={<DigitalMarketingPageV2 />} />
        <Route path="ease-marketing-v2" element={<DigitalMarketingPageV2 />} />
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
          <Route path="/new" element={<New />} />
          <Route path="/exportbiz" element={<ExportBiz />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route
            path="export-biz"
            element={<ExportBizPage />}
          />
          <Route
            path="ease-marketing"
            element={<EaseMarketingPage />}
          />
          <Route
            path="grow-together"
            element={<GrowTogetherPage />}
          />
          <Route path="export-biz-new" element={<ExportBizNewPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}


export default App;
