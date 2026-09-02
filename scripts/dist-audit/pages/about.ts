import path from "path";
import { DIST_DIR } from "../../lib/constants";
import type { TestPage } from "../types";

export const aboutPage: TestPage = {
  name: "About Page",
  path: path.join(DIST_DIR, "about.html"),
  expectedReviews: 0,
};
