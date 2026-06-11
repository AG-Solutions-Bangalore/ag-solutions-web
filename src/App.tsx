import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lenis from "lenis";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./module/home/pages/HomePage";
import AboutPage from "./module/about/pages/AboutPage";
import ContactPage from "./module/contact-us/pages/ContactPage";
import PortfolioPage from "./module/portfolio/pages/PortfolioPage";
import WebDevelopmentPage from "./module/service/web-development/pages/WebDevelopmentPage";
import MobileAppDevelopmentPage from "./module/service/mobile-app-development/pages/MobileAppDevelopmentPage";
import DesktopApplicationsPage from "./module/service/desktop-applications/pages/DesktopApplicationsPage";
import BlogListPage from "./module/blog/pages/BlogListPage";
import BlogDetailPage from "./module/blog/pages/BlogDetailPage";

function PageSpacer() {
  return <div className="h-[94px] bg-white" />;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<PageSpacer />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<PageSpacer />} />
          <Route path="services/web-development" element={<WebDevelopmentPage />} />
          <Route path="services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
          <Route path="services/desktop-applications" element={<DesktopApplicationsPage />} />
          <Route path="products" element={<PageSpacer />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blogs" element={<BlogListPage />} />
          <Route path="blogs/:slug" element={<BlogDetailPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="*" element={<PageSpacer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
