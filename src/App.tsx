import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./module/home/pages/HomePage";
import AboutPage from "./module/about/pages/AboutPage";
import ContactPage from "./module/contact-us/pages/ContactPage";
import PortfolioPage from "./module/portfolio/pages/PortfolioPage";
import WebDevelopmentPage from "./module/service/web-development/pages/WebDevelopmentPage";

function PageSpacer() {
  return <div className="h-[94px] bg-white" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<PageSpacer />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<PageSpacer />} />
          <Route path="services/web-development" element={<WebDevelopmentPage />} />
          <Route path="products" element={<PageSpacer />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="*" element={<PageSpacer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
