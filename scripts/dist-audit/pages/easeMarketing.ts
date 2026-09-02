import path from "path";
import { DIST_DIR } from "../../lib/constants";
import type { TestPage } from "../types";

export const easeMarketingPage: TestPage = {
  name: "Ease Marketing",
  path: path.join(DIST_DIR, "ease-marketing.html"),
  expectedReviews: 2,
  productPage: true,
};
