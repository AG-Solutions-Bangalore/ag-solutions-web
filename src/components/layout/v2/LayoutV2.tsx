import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import HeaderV2 from "./HeaderV2";
import FooterV2 from "./FooterV2";

interface LayoutV2Props {
    children?: ReactNode;
    activeNav?: "home" | "about" | "services" | "career" | "contact";
}

export function LayoutV2({ children, activeNav }: LayoutV2Props) {
    return (
        <div className="min-h-screen bg-white font-sans text-ag-dark antialiased">
            <HeaderV2 activeNav={activeNav} />
            <main>{children || <Outlet />}</main>
            <FooterV2 />
        </div>
    );
}

export default LayoutV2;
