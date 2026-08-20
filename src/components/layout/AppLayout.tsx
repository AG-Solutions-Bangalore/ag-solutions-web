import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageContainer from "./PageContainer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo";

function AppLayout() {
  const location = useLocation();
  const normalizedPath =
    location.pathname.length > 1 && location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1)
      : location.pathname;

  const usesLimeFooter = [
    "/about",
    "/contacts",
    "/portfolio",
    "/web-development",
    "/mobile-app-development",
    "/desktop-applications",
  ].includes(normalizedPath);

  return (
    <div className="min-h-screen bg-white">
      <OrganizationSchema />
      <WebSiteSchema />
      <Navbar />
      <PageContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PageContainer>
      <Footer
        bg={usesLimeFooter ? "pattern-bg-lime.jpg" : "pattern-bg-breez.jpg"}
      />
    </div>
  );
}

export default AppLayout;
