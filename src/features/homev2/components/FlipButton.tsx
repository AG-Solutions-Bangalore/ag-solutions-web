import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface FlipButtonProps {
    to: string;
    children: string;
    variant?: "pink" | "teal" | "white" | "link-teal" | "link-pink" | "link-yellow" | "link-green";
    className?: string;
    icon?: LucideIcon;
    onClick?: () => void;
}

export function FlipButton({
    to,
    children,
    variant = "pink",
    className = "",
    icon: Icon = ArrowRight,
    onClick,
}: FlipButtonProps) {
    let variantStyles = "";

    switch (variant) {
        case "pink":
            variantStyles =
                "bg-ag-pink text-white shadow-md hover:bg-ag-pink-hover hover:shadow-lg rounded-lg px-6 py-3 text-sm font-bold";
            break;
        case "teal":
            variantStyles =
                "bg-ag-teal text-white shadow-md hover:bg-ag-teal-hover hover:shadow-lg rounded-lg px-6 py-3 text-sm font-bold";
            break;
        case "white":
            variantStyles =
                "bg-white text-ag-teal shadow-xs hover:bg-teal-50 hover:shadow-md rounded-full px-6 py-2.5 text-sm font-bold";
            break;
        case "link-teal":
            variantStyles = "text-ag-teal font-bold text-sm hover:text-ag-teal-hover";
            break;
        case "link-pink":
            variantStyles = "text-ag-pink font-bold text-sm hover:text-ag-pink-hover";
            break;
        case "link-yellow":
            variantStyles = "text-ag-yellow font-bold text-sm hover:text-ag-yellow-hover";
            break;
        case "link-green":
            variantStyles = "text-ag-green font-bold text-sm hover:text-ag-green-hover";
            break;
    }

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`group relative inline-flex items-center gap-2 overflow-hidden transition-all duration-300 no-underline ${variantStyles} ${className}`}
        >
            {/* Vertical Text Flip Container */}
            <span className="relative inline-block overflow-hidden h-[1.3em] leading-[1.3em]">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {children}
                </span>
                <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                    {children}
                </span>
            </span>

            {/* 35 degree / 45 degree Arrow Rotation */}
            <Icon className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-[35deg]" />
        </Link>
    );
}

export default FlipButton;
