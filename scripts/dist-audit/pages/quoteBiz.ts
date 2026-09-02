import path from "path";
import { DIST_DIR } from "../../lib/constants";
import type { TestPage } from "../types";

export const quoteBizPage: TestPage = {
  name: "Quote Biz",
  path: path.join(DIST_DIR, "quote-biz.html"),
  expectedReviews: 5,
  productPage: true,
};
