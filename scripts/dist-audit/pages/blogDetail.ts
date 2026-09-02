import path from "path";
import { DIST_DIR } from "../../lib/constants";
import type { TestPage } from "../types";

export const blogDetailPage: TestPage = {
  name: "Blog Detail Page",
  path: path.join(DIST_DIR, "blogs/why-seo-starts-with-a-strong-website.html"),
  expectedReviews: 0,
  expectedBlogPosting: 1,
  expectedBreadcrumb: 1,
};
