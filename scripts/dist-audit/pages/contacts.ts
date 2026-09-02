import path from "path";
import { DIST_DIR } from "../../lib/constants";
import type { TestPage } from "../types";

export const contactsPage: TestPage = {
  name: "Contacts Page",
  path: path.join(DIST_DIR, "contacts.html"),
  expectedReviews: 0,
};
