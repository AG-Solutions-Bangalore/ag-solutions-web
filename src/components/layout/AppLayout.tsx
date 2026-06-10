import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function AppLayout() {
  const location = useLocation();
  const isAboutPage =
    location.pathname === "/about" || location.pathname === "/about/";
  const isContactsPage =
    location.pathname === "/contacts" || location.pathname === "/contacts/";

  const isPortfolioPage =
    location.pathname === "/portfolio" || location.pathname === "/portfolio/";

  const isServicesPage =
    location.pathname === "/services/web-development" ||
    location.pathname === "/services/web-development/" ||
    location.pathname === "/services/desktop-applications" ||
    location.pathname === "/services/desktop-applications/";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer
        bg={
          isAboutPage || isContactsPage || isPortfolioPage || isServicesPage
            ? "pattern-bg-lime.jpg"
            : "pattern-bg-teal.jpg"
        }
      />
    </div>
  );
}

export default AppLayout;
