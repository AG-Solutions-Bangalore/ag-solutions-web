/**
 * Route & Ownership Registry
 * Central registry mapping route paths, names, status, and developer ownership.
 */
export interface RouteRegistryItem {
  path: string;
  name: string;
  category: "Home" | "About" | "Services" | "Products" | "Blog" | "Contact" | "Utility";
  status: "Production Ready" | "Coming Soon" | "In Review";
  owner: string;
  dependencies?: string[];
  apiRequirements?: string[];
}

export const ROUTE_REGISTRY: RouteRegistryItem[] = [
  {
    path: "/",
    name: "Home",
    category: "Home",
    status: "Production Ready",
    owner: "Developer A",
    dependencies: ["HeroSection", "FeatureCards", "ServicesSection", "AboutSection", "Industries"],
    apiRequirements: ["LeadCapture API"],
  },
  {
    path: "/about",
    name: "About Us",
    category: "About",
    status: "Production Ready",
    owner: "Developer B",
    dependencies: ["AboutHero", "AboutValues", "AboutStats", "WhyChooseUs", "BuildTogetherCta"],
    apiRequirements: ["LeadCapture API"],
  },
  {
    path: "/web-development",
    name: "Web Development",
    category: "Services",
    status: "Production Ready",
    owner: "Developer C",
    dependencies: ["CommonServicePage", "Industries"],
    apiRequirements: ["LeadCapture API"],
  },
  {
    path: "/mobile-app-development",
    name: "Mobile App Development",
    category: "Services",
    status: "Production Ready",
    owner: "Developer C",
    dependencies: ["CommonServicePage", "Industries"],
    apiRequirements: ["LeadCapture API"],
  },
  {
    path: "/digital-marketing",
    name: "Digital Marketing",
    category: "Services",
    status: "Production Ready",
    owner: "Developer C",
    dependencies: ["CommonServicePage", "Industries"],
    apiRequirements: ["LeadCapture API"],
  },
  {
    path: "/export-biz",
    name: "Export Biz",
    category: "Products",
    status: "Production Ready",
    owner: "Developer E",
    dependencies: ["Hero", "Workflow", "DocumentEcosystemV2", "CompareSection", "TrustSection", "PainSection", "FaqSection", "CtaBanner", "ExportBizDemoModal"],
    apiRequirements: ["LeadCapture API", "CampaignTracking API"],
  },
  {
    path: "/bizstock",
    name: "BizStock",
    category: "Products",
    status: "Production Ready",
    owner: "Developer E",
    dependencies: ["BizStockHero", "BizStockWorkflow", "BizStockFeatures", "BizStockDashboardPreview", "BizStockCompare", "BizStockFaq", "BizStockCta"],
    apiRequirements: ["LeadCapture API"],
  },
  {
    path: "/ease-marketing",
    name: "EASE Marketing",
    category: "Products",
    status: "Production Ready",
    owner: "Developer D",
    dependencies: ["EaseMarketingHero", "EaseMarketingFeatures", "EaseMarketingPipeline", "EaseMarketingGrowthPartner", "EaseMarketingMetricsStrip", "EaseMarketingTestimonials", "EaseMarketingCtaBanner"],
    apiRequirements: ["LeadCapture API"],
  },
  {
    path: "/grow-together",
    name: "Grow Together",
    category: "Products",
    status: "Coming Soon",
    owner: "Developer D",
    dependencies: ["ComingSoonPage"],
    apiRequirements: ["LeadCapture API"],
  },
  {
    path: "/blogs",
    name: "Blog",
    category: "Blog",
    status: "Production Ready",
    owner: "Developer F",
    dependencies: ["BlogListPage", "BlogDetailPage", "BlogHero", "BlogCard", "BlogSidebar"],
    apiRequirements: ["Blog API"],
  },
  {
    path: "/contacts",
    name: "Contact Us",
    category: "Contact",
    status: "Production Ready",
    owner: "Developer G",
    dependencies: ["ContactPage", "LeadCaptureModal"],
    apiRequirements: ["LeadCapture API"],
  },
];
