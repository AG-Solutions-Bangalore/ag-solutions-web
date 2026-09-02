import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { LazyMotion } from "framer-motion";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "@/utils/queryClient";

const loadMotionFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            {/*
              LazyMotion with asynchronous feature loading avoids executing animation
              logic during critical initial render & hydration on mobile.
            */}
            <LazyMotion features={loadMotionFeatures} strict>
              <App />
            </LazyMotion>
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);


