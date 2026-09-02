import { homePage } from "./home";
import { aboutPage } from "./about";
import { portfolioPage } from "./portfolio";
import { contactsPage } from "./contacts";
import { exportBizPage } from "./exportBiz";
import { bizstockPage } from "./bizstock";
import { easeMarketingPage } from "./easeMarketing";
import { quoteBizPage } from "./quoteBiz";
import { webDevelopmentPage } from "./webDevelopment";
import { mobileAppDevelopmentPage } from "./mobileAppDevelopment";
import { digitalMarketingPage } from "./digitalMarketing";
import { blogDetailPage } from "./blogDetail";
import type { TestPage } from "../types";

/**
 * Combined list of all routes the audit walks. Order mirrors the
 * pre-refactor monolith so CLI output looks identical.
 */
export const ALL_TEST_PAGES: TestPage[] = [
  homePage,
  exportBizPage,
  bizstockPage,
  easeMarketingPage,
  webDevelopmentPage,
  mobileAppDevelopmentPage,
  digitalMarketingPage,
  aboutPage,
  portfolioPage,
  contactsPage,
  blogDetailPage,
  // quoteBiz is registered but has no prerendered HTML yet — include
  // it for future coverage.
  quoteBizPage,
];

export {
  homePage,
  aboutPage,
  portfolioPage,
  contactsPage,
  exportBizPage,
  bizstockPage,
  easeMarketingPage,
  quoteBizPage,
  webDevelopmentPage,
  mobileAppDevelopmentPage,
  digitalMarketingPage,
  blogDetailPage,
};
