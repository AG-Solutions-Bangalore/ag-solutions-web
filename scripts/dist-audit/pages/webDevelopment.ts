import path from "path";
import { DIST_DIR } from "../../lib/constants";
import type { TestPage } from "../types";

export const webDevelopmentPage: TestPage = {
  name: "Web Development",
  path: path.join(DIST_DIR, "web-development.html"),
  expectedReviews: 5,
};
