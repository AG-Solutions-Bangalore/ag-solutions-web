import { lazy, Suspense, type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import HeaderV2 from "./Header";
import FooterV2 from "./Footer";
import { LeadModalProvider, useLeadModal } from "@/context/LeadModalContext";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { OrganizationSchema, WebSiteSchema } from "@/shared/seo";

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
                {/*
                  Footer (with Newsletter) ships in the initial bundle. The
                  previous lazy-load was a measurable CLS regression because
                  the Newsletter panel would mount after hydration and shift
                  the page down. Footer/Newsletter is small enough (~16 KiB)
                  and below-the-fold, but it must be in the initial HTML for
                  layout stability and prerender correctness.
                */}
                <FooterV2 />
                <OnDemandLeadModal />
                <WhatsAppButton />
            </div>
        </LeadModalProvider>
    );
}

export default LayoutV2;
