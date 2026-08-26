import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation } from "framer-motion";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "@/utils/queryClient";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            {/*
              LazyMotion + domAnimation trims ~25 KiB from the framer-motion bundle
              by only loading the animation features actually used by `m` components.
              Combined with `m.X` (not `motion.X`) throughout, this gives us a tree-
              shaken motion library.
            */}
            <LazyMotion features={domAnimation} strict>
              <App />
            </LazyMotion>
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);


