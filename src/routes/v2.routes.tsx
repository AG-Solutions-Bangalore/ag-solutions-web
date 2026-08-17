import { lazy } from "react";
import { Route } from "react-router-dom";
import { v2Loaders } from "./lazyRoutes";
import LayoutV2 from "@/components/layout/v2/Layout";

// V2 Lazy Pages
const HomePageV2 = lazy(v2Loaders.home);
const AboutPageV2 = lazy(v2Loaders.about);
const WebDevelopmentPageV2 = lazy(v2Loaders.webDevelopment);
const MobileAppPageV2 = lazy(v2Loaders.mobileApp);
const DigitalMarketingPageV2 = lazy(v2Loaders.digitalMarketing);
const ExportBizPage = lazy(v2Loaders.exportBiz);
const ProductsPage = lazy(v2Loaders.products);
const ComingSoonPage = lazy(v2Loaders.comingSoon);
const ContactPage = lazy(v2Loaders.contact);
const NotFoundPage = lazy(v2Loaders.notFound);

export const renderV2Routes = () => (
  <Route element={<LayoutV2 />}>
    {/* Home */}
    <Route index element={<HomePageV2 />} />
    <Route path="home" element={<HomePageV2 />} />
    <Route path="home-v2" element={<HomePageV2 />} />

    {/* About Us */}
    <Route path="about" element={<AboutPageV2 />} />
    <Route path="about-us" element={<AboutPageV2 />} />
    <Route path="about-v2" element={<AboutPageV2 />} />
    <Route path="privacy-policy" element={<AboutPageV2 />} />
    <Route path="terms-and-conditions" element={<AboutPageV2 />} />

    {/* Services (Direct top-level & aliases) */}
    <Route path="services" element={<WebDevelopmentPageV2 />} />
    <Route path="web-development" element={<WebDevelopmentPageV2 />} />
    <Route path="web-development-v2" element={<WebDevelopmentPageV2 />} />
    <Route path="services/web-development" element={<WebDevelopmentPageV2 />} />

    <Route path="mobile-app" element={<MobileAppPageV2 />} />
    <Route path="mobile-app-development" element={<MobileAppPageV2 />} />
    <Route path="mobile-app-v2" element={<MobileAppPageV2 />} />
    <Route path="mobile-app-development-v2" element={<MobileAppPageV2 />} />
    <Route path="services/mobile-app" element={<MobileAppPageV2 />} />
    <Route path="services/mobile-app-development" element={<MobileAppPageV2 />} />

    <Route path="digital-marketing" element={<DigitalMarketingPageV2 />} />
    <Route path="digital-marketing-v2" element={<DigitalMarketingPageV2 />} />
    <Route path="ease-marketing" element={<DigitalMarketingPageV2 />} />
    <Route path="services/digital-marketing" element={<DigitalMarketingPageV2 />} />
    <Route path="services/ease-marketing" element={<DigitalMarketingPageV2 />} />

    {/* Products (Direct top-level & aliases) */}
    <Route path="products" element={<ProductsPage />} />
    <Route path="export-biz" element={<ExportBizPage />} />
    <Route path="export-biz-new" element={<ExportBizPage />} />
    <Route path="products/export-biz" element={<ExportBizPage />} />

    {/* Coming Soon Products */}
    <Route
      path="EASE-Marketing"
      element={
        <ComingSoonPage
          title="EASE Marketing"
          subtitle="Intelligent Marketing & Campaign Workflow Platform"
          description="We are crafting a comprehensive digital marketing operations and workflow builder to simplify multi-channel campaign coordination."
        />
      }
    />
    <Route
      path="products/EASE-Marketing"
      element={
        <ComingSoonPage
          title="EASE Marketing"
          subtitle="Intelligent Marketing & Campaign Workflow Platform"
          description="We are crafting a comprehensive digital marketing operations and workflow builder to simplify multi-channel campaign coordination."
        />
      }
    />
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

    {/* Blog (Coming Soon) */}
    <Route
      path="blogs"
      element={
        <ComingSoonPage
          title="AG Solutions Blog"
          subtitle="Tech Trends, Case Studies & Digital Growth"
          description="Our engineering and strategy teams are preparing in-depth articles, case studies, and modern technology guides."
        />
      }
    />
    <Route
      path="blog"
      element={
        <ComingSoonPage
          title="AG Solutions Blog"
          subtitle="Tech Trends, Case Studies & Digital Growth"
          description="Our engineering and strategy teams are preparing in-depth articles, case studies, and modern technology guides."
        />
      }
    />

    {/* Contact Us */}
    <Route path="contacts" element={<ContactPage />} />
    <Route path="contactus" element={<ContactPage />} />
    <Route path="contact" element={<ContactPage />} />

    {/* Catch-all route for V2 */}
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);
