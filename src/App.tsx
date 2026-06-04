import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./module/home/pages/HomePage";

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
          <Route path="about" element={<PageSpacer />} />
          <Route path="services" element={<PageSpacer />} />
          <Route path="products" element={<PageSpacer />} />
          <Route path="portfolio" element={<PageSpacer />} />
          <Route path="contacts" element={<PageSpacer />} />
          <Route path="*" element={<PageSpacer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
