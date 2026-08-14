import { lazy } from "react";
import { Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { v1Loaders } from "./lazyRoutes";

// V1 Lazy Pages (Legacy)
const HomePage = lazy(v1Loaders.home);
const AboutPage = lazy(v1Loaders.about);
const ContactPage = lazy(v1Loaders.contact);
const PortfolioPage = lazy(v1Loaders.portfolio);
const WebDevelopmentPage = lazy(v1Loaders.webDevelopment);
const MobileAppDevelopmentPage = lazy(v1Loaders.mobileAppDevelopment);
const DesktopApplicationsPage = lazy(v1Loaders.desktopApplications);
const BlogListPage = lazy(v1Loaders.blogList);
const BlogDetailPage = lazy(v1Loaders.blogDetail);
const ProductsPage = lazy(v1Loaders.products);
const ExportBizPage = lazy(v1Loaders.exportBiz);
const EaseMarketingPage = lazy(v1Loaders.easeMarketing);
const GrowTogetherPage = lazy(v1Loaders.growTogether);
const NewPage = lazy(() => import("@/features/v1/home/pages/New/New"));
const ExportBizLegacy = lazy(() => import("@/features/v1/export-biz/pages/ExportBiz"));

export const renderV1Routes = () => (
  <Route element={<AppLayout />}>
    {/* V1 legacy routes — accessible at /home-v1, /about-v1 etc. */}
    <Route path="home-v1" element={<HomePage />} />
    <Route path="about-v1" element={<AboutPage />} />
    <Route path="web-development-v1" element={<WebDevelopmentPage />} />
    <Route path="mobile-app-development-v1" element={<MobileAppDevelopmentPage />} />
    <Route path="ease-marketing-v1" element={<EaseMarketingPage />} />
    <Route path="portfolio" element={<PortfolioPage />} />
    <Route path="desktop-applications" element={<DesktopApplicationsPage />} />
    <Route path="blogs" element={<BlogListPage />} />
    <Route path="blogs/:slug" element={<BlogDetailPage />} />
    <Route path="products" element={<ProductsPage />} />
    <Route path="new" element={<NewPage />} />
    <Route path="exportbiz" element={<ExportBizLegacy />} />
    <Route path="contactus" element={<ContactPage />} />
    <Route path="contacts" element={<ContactPage />} />
    <Route path="export-biz" element={<ExportBizPage />} />
    <Route path="grow-together" element={<GrowTogetherPage />} />
  </Route>
);
