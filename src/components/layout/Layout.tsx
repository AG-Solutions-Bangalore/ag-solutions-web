import { lazy, Suspense, type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import HeaderV2 from "./Header";
import { LeadModalProvider, useLeadModal } from "@/context/LeadModalContext";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { OrganizationSchema, WebSiteSchema } from "@/shared/seo";

const LeadCaptureModal = lazy(() => import("@/components/modal/LeadCaptureModal"));
// Footer is below-the-fold on every page. Lazy-load it so its react-icons/fa
// and NewsletterSection code don't ship in the initial bundle.
const FooterV2 = lazy(() => import("./Footer"));

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
                <Suspense fallback={null}>
                    <FooterV2 />
                </Suspense>
                <OnDemandLeadModal />
                <WhatsAppButton />
            </div>
        </LeadModalProvider>
    );
}

export default LayoutV2;
