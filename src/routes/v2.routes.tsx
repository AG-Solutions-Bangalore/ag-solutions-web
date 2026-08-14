import { lazy } from "react";
import { Route } from "react-router-dom";
import { v2Loaders } from "./lazyRoutes";

// V2 Lazy Pages
const HomePageV2 = lazy(v2Loaders.home);
const AboutPageV2 = lazy(v2Loaders.about);
const WebDevelopmentPageV2 = lazy(v2Loaders.webDevelopment);
const MobileAppPageV2 = lazy(v2Loaders.mobileApp);
const DigitalMarketingPageV2 = lazy(v2Loaders.digitalMarketing);
const ExportBizNewPage = lazy(v2Loaders.exportBizNew);

export const renderV2Routes = () => (
  <>
    <Route path="home-v2" element={<HomePageV2 />} />
    <Route path="about-v2" element={<AboutPageV2 />} />
    <Route path="service-v2" element={<WebDevelopmentPageV2 />} />
    <Route path="web-development-v2" element={<WebDevelopmentPageV2 />} />
    <Route path="mobile-app-v2" element={<MobileAppPageV2 />} />
    <Route path="mobile-app-development-v2" element={<MobileAppPageV2 />} />
    <Route path="digital-marketing-v2" element={<DigitalMarketingPageV2 />} />
    <Route path="ease-marketing-v2" element={<DigitalMarketingPageV2 />} />
    <Route path="export-biz-new" element={<ExportBizNewPage />} />
  </>
);
