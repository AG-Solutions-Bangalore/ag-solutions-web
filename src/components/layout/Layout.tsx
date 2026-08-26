import { lazy, Suspense, type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import HeaderV2 from "./Header";
import FooterV2 from "./Footer";
import { LeadModalProvider, useLeadModal } from "@/context/LeadModalContext";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo";

const LeadCaptureModal = lazy(() => import("@/components/modal/LeadCaptureModal"));

interface LayoutV2Props {
    children?: ReactNode;
    activeNav?: "home" | "about" | "services" | "products" | "contact";
}

function OnDemandLeadModal() {
    const { isOpen } = useLeadModal();

    return isOpen ? (
        <Suspense fallback={null}>
            <LeadCaptureModal />
        </Suspense>
    ) : null;
}

export function LayoutV2({ children, activeNav }: LayoutV2Props) {
    return (
        <LeadModalProvider>
            <OrganizationSchema />
            <WebSiteSchema />
            <div className="min-h-screen bg-background font-sans text-foreground antialiased transition-colors duration-200">
                <HeaderV2 activeNav={activeNav} />
                <main id="main-content" tabIndex={-1} className="outline-none">
                    {children || <Outlet />}
                </main>
                <FooterV2 />
                <OnDemandLeadModal />
                <WhatsAppButton />
            </div>
        </LeadModalProvider>
    );
}

export default LayoutV2;
