import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import HeaderV2 from "./Header";
import FooterV2 from "./Footer";
import { LeadModalProvider } from "@/context/LeadModalContext";
import LeadCaptureModal from "@/components/modal/LeadCaptureModal";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo";

interface LayoutV2Props {
    children?: ReactNode;
    activeNav?: "home" | "about" | "services" | "products" | "contact";
}

export function LayoutV2({ children, activeNav }: LayoutV2Props) {
    return (
        <LeadModalProvider>
            <OrganizationSchema />
            <WebSiteSchema />
            <div className="min-h-screen bg-background font-sans text-foreground antialiased transition-colors duration-200">
                <HeaderV2 activeNav={activeNav} />
                <main>{children || <Outlet />}</main>
                <FooterV2 />
                <LeadCaptureModal />
                <WhatsAppButton />
            </div>
        </LeadModalProvider>
    );
}

export default LayoutV2;

