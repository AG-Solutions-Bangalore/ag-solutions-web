import path from "path";
import { DIST_DIR } from "../../lib/constants";
import type { TestPage } from "../types";

export const mobileAppDevelopmentPage: TestPage = {
  name: "Mobile App Development",
  path: path.join(DIST_DIR, "mobile-app-development.html"),
  expectedReviews: 5,
};
