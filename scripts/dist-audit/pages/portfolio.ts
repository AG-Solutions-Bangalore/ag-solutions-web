import path from "path";
import { DIST_DIR } from "../../lib/constants";
import type { TestPage } from "../types";

export const portfolioPage: TestPage = {
  name: "Portfolio Page",
  path: path.join(DIST_DIR, "portfolio.html"),
  expectedReviews: 0,
};
