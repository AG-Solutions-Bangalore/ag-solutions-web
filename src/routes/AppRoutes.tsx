import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { pageLoaders } from "./lazyRoutes";
import Layout from "@/components/layout/Layout";

// Lazy Loaded Pages
const HomePage = lazy(pageLoaders.home);
const AboutPage = lazy(pageLoaders.about);
const WebDevelopmentPage = lazy(pageLoaders.webDevelopment);
const MobileAppPage = lazy(pageLoaders.mobileApp);
const DigitalMarketingPage = lazy(pageLoaders.digitalMarketing);
const ExportBizPage = lazy(pageLoaders.exportBiz);
const BizStockPage = lazy(pageLoaders.bizstock);
const EaseMarketingPage = lazy(pageLoaders.easeMarketing);
const ProductsPage = lazy(pageLoaders.products);
const ComingSoonPage = lazy(pageLoaders.comingSoon);
const PortfolioPage = lazy(pageLoaders.portfolio);
const ContactPage = lazy(pageLoaders.contact);
const NotFoundPage = lazy(pageLoaders.notFound);
const BlogListPage = lazy(pageLoaders.blogList);
const BlogDetailPage = lazy(pageLoaders.blogDetail);

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home */}
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />

        {/* About Us */}
        <Route path="about" element={<AboutPage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="privacy-policy" element={<AboutPage />} />
        <Route path="terms-and-conditions" element={<AboutPage />} />

        {/* Services */}
        <Route path="services" element={<WebDevelopmentPage />} />
        <Route path="web-development" element={<WebDevelopmentPage />} />
        <Route path="services/web-development" element={<WebDevelopmentPage />} />

        <Route path="mobile-app" element={<MobileAppPage />} />
        <Route path="mobile-app-development" element={<MobileAppPage />} />
        <Route path="services/mobile-app" element={<MobileAppPage />} />
        <Route path="services/mobile-app-development" element={<MobileAppPage />} />

        <Route path="digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="services/digital-marketing" element={<DigitalMarketingPage />} />

        {/* Products */}
        <Route path="products" element={<ProductsPage />} />
        <Route path="export-biz" element={<ExportBizPage />} />
        <Route path="export-biz-new" element={<ExportBizPage />} />
        <Route path="products/export-biz" element={<ExportBizPage />} />

        <Route path="bizstock" element={<BizStockPage />} />
        <Route path="biz-stock" element={<BizStockPage />} />
        <Route path="products/bizstock" element={<BizStockPage />} />
        <Route path="products/biz-stock" element={<BizStockPage />} />

        <Route path="ease-marketing" element={<EaseMarketingPage />} />
        <Route path="products/ease-marketing" element={<EaseMarketingPage />} />
        <Route path="services/ease-marketing" element={<EaseMarketingPage />} />
        <Route path="EASE-Marketing" element={<EaseMarketingPage />} />
        <Route path="products/EASE-Marketing" element={<EaseMarketingPage />} />

        {/* Coming Soon */}
        <Route
          path="grow-together"
          element={
            <ComingSoonPage
              title="Grow Together"
              subtitle="Collaborative Business Networking & Growth Platform"
              description="A centralized collaborative platform for cross-industry networking, lead exchange, and scalable community growth."
            />
          }
        />
        <Route
          path="products/grow-together"
          element={
            <ComingSoonPage
              title="Grow Together"
              subtitle="Collaborative Business Networking & Growth Platform"
              description="A centralized collaborative platform for cross-industry networking, lead exchange, and scalable community growth."
            />
          }
        />

        {/* Portfolio */}
        <Route path="portfolio" element={<PortfolioPage />} />

        {/* Blog Routes */}
        <Route path="blogs" element={<BlogListPage />} />
        <Route path="blog" element={<BlogListPage />} />
        <Route path="blogs/:slug" element={<BlogDetailPage />} />
        <Route path="blog/:slug" element={<BlogDetailPage />} />

        {/* Contact Us */}
        <Route path="contacts" element={<ContactPage />} />
        <Route path="contactus" element={<ContactPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* Catch-all 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
