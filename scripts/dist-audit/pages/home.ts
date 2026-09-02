import path from "path";
import { DIST_DIR } from "../../lib/constants";
import type { TestPage } from "../types";

export const homePage: TestPage = {
  name: "Home Page",
  path: path.join(DIST_DIR, "index.html"),
  expectedReviews: 34,
};
