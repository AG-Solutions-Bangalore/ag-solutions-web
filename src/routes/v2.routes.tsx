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

// V2 Product Pages
const EaseMarketingPage = lazy(v2Loaders.easeMarketing);
const GrowTogetherPage = lazy(v2Loaders.growTogether);

// V2 Common Pages
const NotFoundPage = lazy(v2Loaders.notFound);

export const renderV2Routes = () => (
  <Route element={<LayoutV2 />}>
    <Route index element={<HomePageV2 />} />
    <Route path="about" element={<AboutPageV2 />} />
    <Route path="services" element={<WebDevelopmentPageV2 />} />
    <Route path="services/web-development" element={<WebDevelopmentPageV2 />} />
    <Route path="services/mobile-app" element={<MobileAppPageV2 />} />
    <Route path="services/mobile-app-development" element={<MobileAppPageV2 />} />
    <Route path="services/digital-marketing" element={<DigitalMarketingPageV2 />} />
    <Route path="services/ease-marketing" element={<DigitalMarketingPageV2 />} />
    <Route path="products" element={<ProductsPage />} />
    <Route path="products/export-biz" element={<ExportBizPage />} />
    <Route path="products/ease-marketing" element={<EaseMarketingPage />} />
    <Route path="products/grow-together" element={<GrowTogetherPage />} />
    <Route path="export-biz-new" element={<ExportBizPage />} />
    
    {/* Catch-all route for V2 */}
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);
