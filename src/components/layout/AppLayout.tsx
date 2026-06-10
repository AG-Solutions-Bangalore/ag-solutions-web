import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function AppLayout() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about" || location.pathname === "/about/";
  const isContactsPage = location.pathname === "/contacts" || location.pathname === "/contacts/";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer bg={(isAboutPage || isContactsPage) ? "lime" : "teal"} />
    </div>
  );
}

export default AppLayout;
