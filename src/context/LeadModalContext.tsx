import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface LeadModalContextType {
  isOpen: boolean;
  pageContext: string;
  openLeadModal: (customPage?: string) => void;
  closeLeadModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function getPageContextFromPath(pathname: string): string {
  if (pathname === "/" || pathname === "/home") return "Home";
  if (pathname.includes("web-development")) return "Web Page";
  if (pathname.includes("mobile-app")) return "Mobile App Page";
  if (pathname.includes("digital-marketing")) return "Digital Marketing Page";
  if (pathname.includes("export-biz")) return "Export Biz";
  if (pathname.includes("biz-stock") || pathname.includes("bizstock")) return "BizStock";
  if (pathname.includes("ease-marketing") || pathname.includes("EASE-Marketing")) return "EASE Marketing";
  if (pathname.includes("grow-together")) return "Grow Together";
  if (pathname.includes("about")) return "About Us";
  if (pathname.includes("services")) return "Services";
  if (pathname.includes("blogs") || pathname.includes("blog")) return "Blog";
  if (pathname.includes("contacts") || pathname.includes("contactus")) return "Contact Us";
  return "Website";
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [customPage, setCustomPage] = useState<string | null>(null);
  const location = useLocation();

  const openLeadModal = useCallback((page?: string) => {
    if (page) {
      setCustomPage(page);
    } else {
      setCustomPage(null);
    }
    setIsOpen(true);
  }, []);

  const closeLeadModal = useCallback(() => {
    setIsOpen(false);
    setCustomPage(null);
  }, []);

  const currentPageContext = customPage || getPageContextFromPath(location.pathname);

  return (
    <LeadModalContext.Provider
      value={{
        isOpen,
        pageContext: currentPageContext,
        openLeadModal,
        closeLeadModal,
      }}
    >
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
