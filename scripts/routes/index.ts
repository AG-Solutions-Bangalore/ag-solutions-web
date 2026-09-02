/**
 * Combined `BASE_ROUTES_CONFIG` — every static route the prerender script
 * will produce an HTML file for. Each entry is a per-perspective module
 * in `scripts/routes/` (one file per page).
 */
import type { RouteSEO } from "../lib/htmlBuilder";

import { homeRoute } from "./home";
import { aboutRoute } from "./about";
import { portfolioRoute } from "./portfolio";
import { contactsRoute } from "./contacts";
import { servicesRoute, productsRoute, blogsRoute } from "./listings";

import { exportBizRoute, exportBizNewRoute } from "./exportBiz";
import { bizstockRoute, bizstockAliasRoute } from "./bizstock";
import { easeMarketingRoute, easeMarketingAliasRoute } from "./easeMarketing";
import { quoteBizRoute } from "./quoteBiz";

import { webDevelopmentRoute } from "./webDevelopment";
import { mobileAppRoute } from "./mobileAppDevelopment";
import { digitalMarketingRoute } from "./digitalMarketing";

export const BASE_ROUTES_CONFIG: Record<string, RouteSEO> = {
  "/": homeRoute,
  "/export-biz": exportBizRoute,
  "/export-biz-new": exportBizNewRoute,
  "/bizstock": bizstockRoute,
  "/biz-stock": bizstockAliasRoute,
  "/ease-marketing": easeMarketingRoute,
  "/EASE-Marketing": easeMarketingAliasRoute,
  "/quote-biz": quoteBizRoute,
  "/web-development": webDevelopmentRoute,
  "/mobile-app-development": mobileAppRoute,
  "/digital-marketing": digitalMarketingRoute,
  "/about": aboutRoute,
  "/portfolio": portfolioRoute,
  "/services": servicesRoute,
  "/products": productsRoute,
  "/blogs": blogsRoute,
  "/contacts": contactsRoute,
};
