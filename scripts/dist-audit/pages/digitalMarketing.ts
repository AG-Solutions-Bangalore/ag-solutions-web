import path from "path";
import { DIST_DIR } from "../../lib/constants";
import type { TestPage } from "../types";

export const digitalMarketingPage: TestPage = {
  name: "Digital Marketing",
  path: path.join(DIST_DIR, "digital-marketing.html"),
  expectedReviews: 5,
};
