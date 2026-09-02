import path from "path";
import { DIST_DIR } from "../../lib/constants";
import type { TestPage } from "../types";

export const exportBizPage: TestPage = {
  name: "Export Biz",
  path: path.join(DIST_DIR, "export-biz.html"),
  expectedReviews: 10,
};
