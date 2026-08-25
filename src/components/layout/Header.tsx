import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLeadModal } from "@/context/LeadModalContext";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { AGSLogo } from "@/components/brand/AGSLogo";
import { FlipButton } from "@/components/ui/FlipButton";
import { preloadRoute } from "@/routes/lazyRoutes";

interface HeaderV2Props {
    activeNav?: "home" | "about" | "services" | "products" | "blog" | "contact";
}

export function Header({ activeNav }: HeaderV2Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<"services" | "products" | null>(null);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const location = useLocation();
    const { openLeadModal } = useLeadModal();

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    // Close menus on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        setMobileProductsOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    // Close desktop dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Determine current active tab automatically if not explicitly passed
    const isProductsPath =
        location.pathname.startsWith("/products") ||
        location.pathname === "/export-biz" ||
        location.pathname === "/export-biz-new" ||
        location.pathname === "/bizstock" ||
        location.pathname === "/biz-stock" ||
        location.pathname === "/ease-marketing" ||
        location.pathname === "/EASE-Marketing";

    const isServicesPath =
        location.pathname === "/services" ||
        location.pathname.startsWith("/services/") ||
        location.pathname === "/web-development" ||
        location.pathname === "/web-development-v2" ||
        location.pathname === "/mobile-app" ||
        location.pathname === "/mobile-app-development" ||
        location.pathname === "/mobile-app-v2" ||
        location.pathname === "/digital-marketing" ||
        location.pathname === "/digital-marketing-v2";

    const isBlogPath =
        location.pathname === "/blogs" ||
        location.pathname.startsWith("/blogs/") ||
        location.pathname === "/blog" ||
        location.pathname.startsWith("/blog/");

    const currentTab =
        activeNav ||
        (location.pathname === "/about"
            ? "about"
            : isServicesPath
                ? "services"
                : isProductsPath
                    ? "products"
                    : isBlogPath
                        ? "blog"
                        : location.pathname === "/contacts"
                            ? "contact"
                            : "home");

    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-2xs transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
                <div className="flex h-16 sm:h-20 items-center justify-between">
                    {/* Brand Logo */}
                    <Link
                        to="/"
                        title="AG Solutions – Web & Mobile App Development"
                        className="flex items-center no-underline shrink-0 transition-transform duration-300 hover:scale-105"
                        aria-label="AG Solutions Home"
                    >
                        <AGSLogo className="h-8 sm:h-10 md:h-11 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav ref={navRef} className="hidden md:flex items-center gap-6 lg:gap-8">
                        <Link
                            to="/"
                            title="AG Solutions – Web & Mobile App Development"
                            onMouseEnter={() => preloadRoute("/")}
                            onFocus={() => preloadRoute("/")}
                            className={`relative text-sm font-semibold transition-colors no-underline py-1 ${currentTab === "home"
                                ? "text-pink"
                                : "text-foreground hover:text-pink"
                                }`}
                        >
                            Home
                            {currentTab === "home" && (
                                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-pink" />
                            )}
                        </Link>

                        <Link
                            to="/about"
                            title="About AG Solutions"
                            onMouseEnter={() => preloadRoute("/about")}
                            onFocus={() => preloadRoute("/about")}
                            className={`relative text-sm font-semibold transition-colors no-underline py-1 ${currentTab === "about"
                                ? "text-pink"
                                : "text-foreground hover:text-pink"
                                }`}
                        >
                            About Us
                            {currentTab === "about" && (
                                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-pink" />
                            )}
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => {
                                setActiveDropdown("services");
                                preloadRoute("/web-development");
                                preloadRoute("/mobile-app-development");
                                preloadRoute("/digital-marketing");
                            }}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                type="button"
                                title="AG Solutions Services"
                                onClick={() => setActiveDropdown((prev) => prev === "services" ? null : "services")}
                                className={`flex items-center gap-1 text-sm font-semibold transition-colors bg-transparent border-none cursor-pointer py-1 ${currentTab === "services" || activeDropdown === "services"
                                    ? "text-pink"
                                    : "text-foreground hover:text-pink"
                                    }`}
                            >
                                <span>Services</span>
                                <ChevronDown className={`h-4 w-4 text-muted transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-pink" : ""}`} />
                            </button>

                            {activeDropdown === "services" && (
                                <div className="absolute left-0 top-full w-60 pt-2 z-50 animate-fadeIn">
                                    <div className="rounded-2xl bg-card p-2 shadow-xl border border-border">
                                        <Link
                                            to="/web-development"
                                            title="Web Development Services – AG Solutions"
                                            onMouseEnter={() => preloadRoute("/web-development")}
                                            onClick={() => setActiveDropdown(null)}
                                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-pink-light hover:text-pink rounded-xl transition-colors no-underline"
                                        >
                                            Web Development
                                        </Link>
                                        <Link
                                            to="/mobile-app-development"
                                            title="Mobile App Development Services – AG Solutions"
                                            onMouseEnter={() => preloadRoute("/mobile-app-development")}
                                            onClick={() => setActiveDropdown(null)}
                                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-teal-light hover:text-teal rounded-xl transition-colors no-underline"
                                        >
                                            Mobile App Development
                                        </Link>
                                        <Link
                                            to="/digital-marketing"
                                            title="Digital Marketing Services – AG Solutions"
                                            onMouseEnter={() => preloadRoute("/digital-marketing")}
                                            onClick={() => setActiveDropdown(null)}
                                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-green-light hover:text-green rounded-xl transition-colors no-underline"
                                        >
                                            Digital Marketing
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => {
                                setActiveDropdown("products");
                                preloadRoute("/export-biz");
                                preloadRoute("/bizstock");
                                preloadRoute("/ease-marketing");
                            }}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                type="button"
                                title="AG Solutions Products"
                                onClick={() => setActiveDropdown((prev) => prev === "products" ? null : "products")}
                                className={`flex items-center gap-1 text-sm font-semibold transition-colors bg-transparent border-none cursor-pointer py-1 ${currentTab === "products" || activeDropdown === "products"
                                    ? "text-pink"
                                    : "text-foreground hover:text-pink"
                                    }`}
                            >
                                <span>Products</span>
                                <ChevronDown className={`h-4 w-4 text-muted transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180 text-pink" : ""}`} />
                            </button>

                            {activeDropdown === "products" && (
                                <div className="absolute left-0 top-full w-64 pt-2 z-50 animate-fadeIn">
                                    <div className="rounded-2xl bg-card p-2 shadow-xl border border-border">
                                        <Link
                                            to="/export-biz"
                                            title="Export Biz – Export Documentation Software"
                                            onMouseEnter={() => preloadRoute("/export-biz")}
                                            onClick={() => setActiveDropdown(null)}
                                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-pink-light hover:text-pink rounded-xl transition-colors no-underline"
                                        >
                                            Export Biz Software
                                        </Link>
                                        <Link
                                            to="/bizstock"
                                            title="BizStock – Business Management Software"
                                            onMouseEnter={() => preloadRoute("/bizstock")}
                                            onClick={() => setActiveDropdown(null)}
                                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-teal-light hover:text-teal rounded-xl transition-colors no-underline"
                                        >
                                            BizStock
                                        </Link>
                                        <Link
                                            to="/ease-marketing"
                                            title="Ease Marketing – Marketing & Automation"
                                            onMouseEnter={() => preloadRoute("/ease-marketing")}
                                            onClick={() => setActiveDropdown(null)}
                                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-pink-light hover:text-pink rounded-xl transition-colors no-underline"
                                        >
                                            Ease Marketing
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Blog Navigation Link */}
                        <Link
                            to="/blogs"
                            title="AG Solutions Blogs – Technology & Digital Marketing"
                            onMouseEnter={() => preloadRoute("/blogs")}
                            onFocus={() => preloadRoute("/blogs")}
                            className={`relative text-sm font-semibold transition-colors no-underline py-1 ${currentTab === "blog"
                                ? "text-pink"
                                : "text-foreground hover:text-pink"
                                }`}
                        >
                            Blog
                            {currentTab === "blog" && (
                                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-pink" />
                            )}
                        </Link>

                        <Link
                            to="/contacts"
                            title="Contact AG Solutions"
                            onMouseEnter={() => preloadRoute("/contacts")}
                            onFocus={() => preloadRoute("/contacts")}
                            className={`relative text-sm font-semibold transition-colors no-underline py-1 ${currentTab === "contact"
                                ? "text-pink"
                                : "text-foreground hover:text-pink"
                                }`}
                        >
                            Contact Us
                            {currentTab === "contact" && (
                                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-pink" />
                            )}
                        </Link>
                    </nav>

                    {/* Right CTA Button & Theme Toggle */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <FlipButton
                            to="#"
                            onClick={() => openLeadModal()}
                            variant="pink"
                            title="Get a Quote"
                            className="!rounded-full !px-5 !py-2.5 !text-sm font-bold shadow-md hover:shadow-lg"
                        >
                            Get a Quote
                        </FlipButton>
                    </div>

                    {/* Mobile Controls (Theme Toggle + Menu Button) */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-foreground hover:text-pink bg-transparent border-none cursor-pointer rounded-lg active:bg-muted/10 transition-colors"
                            aria-label="Toggle Navigation"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <>
                    {/* Semi-transparent Backdrop */}
                    <div
                        className="md:hidden fixed inset-0 top-16 sm:top-20 bg-slate-950/50 z-40 backdrop-blur-xs"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Drawer Content */}
                    <div className="md:hidden absolute left-0 top-full w-full bg-card z-50 border-t border-border shadow-2xl max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto px-4 pt-3 pb-8 space-y-2">
                        <Link
                            to="/"
                            title="AG Solutions – Web & Mobile App Development"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 text-base font-bold rounded-xl no-underline transition-colors ${currentTab === "home"
                                ? "text-pink bg-pink-light"
                                : "text-foreground hover:text-pink hover:bg-muted/10"
                                }`}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            title="About AG Solutions"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 text-base font-semibold rounded-xl no-underline transition-colors ${currentTab === "about"
                                ? "text-pink bg-pink-light"
                                : "text-foreground hover:text-pink hover:bg-muted/10"
                                }`}
                        >
                            About Us
                        </Link>

                        {/* Services Accordion on Mobile */}
                        <div className="rounded-xl border border-border overflow-hidden bg-card">
                            <button
                                type="button"
                                title="AG Solutions Services"
                                onClick={() => {
                                    setMobileServicesOpen((prev) => !prev);
                                    setMobileProductsOpen(false);
                                    preloadRoute("/web-development");
                                    preloadRoute("/mobile-app-development");
                                    preloadRoute("/digital-marketing");
                                }}
                                className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-colors bg-transparent border-none cursor-pointer ${isServicesPath ? "text-pink bg-pink-light/40" : "text-foreground hover:bg-muted/10"
                                    }`}
                            >
                                <span>Services</span>
                                <ChevronDown
                                    className={`h-4 w-4 text-muted transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-pink" : ""
                                        }`}
                                />
                            </button>
                            {mobileServicesOpen && (
                                <div className="bg-muted/5 px-3 py-2 space-y-1 border-t border-border">
                                    <Link
                                        to="/web-development"
                                        title="Web Development Services – AG Solutions"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-pink hover:bg-card rounded-lg no-underline transition-colors"
                                    >
                                        Web Development
                                    </Link>
                                    <Link
                                        to="/mobile-app-development"
                                        title="Mobile App Development Services – AG Solutions"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-teal hover:bg-card rounded-lg no-underline transition-colors"
                                    >
                                        Mobile App Development
                                    </Link>
                                    <Link
                                        to="/digital-marketing"
                                        title="Digital Marketing Services – AG Solutions"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-green hover:bg-card rounded-lg no-underline transition-colors"
                                    >
                                        Digital Marketing
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Products Accordion on Mobile */}
                        <div className="rounded-xl border border-border overflow-hidden bg-card">
                            <button
                                type="button"
                                title="AG Solutions Products"
                                onClick={() => {
                                    setMobileProductsOpen((prev) => !prev);
                                    setMobileServicesOpen(false);
                                    preloadRoute("/export-biz");
                                    preloadRoute("/bizstock");
                                    preloadRoute("/ease-marketing");
                                }}
                                className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-colors bg-transparent border-none cursor-pointer ${isProductsPath ? "text-pink bg-pink-light/40" : "text-foreground hover:bg-muted/10"
                                    }`}
                            >
                                <span>Products</span>
                                <ChevronDown
                                    className={`h-4 w-4 text-muted transition-transform duration-200 ${mobileProductsOpen ? "rotate-180 text-pink" : ""
                                        }`}
                                />
                            </button>
                            {mobileProductsOpen && (
                                <div className="bg-muted/5 px-3 py-2 space-y-1 border-t border-border">
                                    <Link
                                        to="/export-biz"
                                        title="Export Biz – Export Documentation Software"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-pink hover:bg-card rounded-lg no-underline transition-colors"
                                    >
                                        Export Biz
                                    </Link>
                                    <Link
                                        to="/bizstock"
                                        title="BizStock – Business Management Software"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-teal hover:bg-card rounded-lg no-underline transition-colors"
                                    >
                                        BizStock
                                    </Link>
                                    <Link
                                        to="/ease-marketing"
                                        title="Ease Marketing – Marketing & Automation"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-pink hover:bg-card rounded-lg no-underline transition-colors"
                                    >
                                        Ease Marketing
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/blogs"
                            title="AG Solutions Blogs – Technology & Digital Marketing"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 text-base font-semibold rounded-xl no-underline transition-colors ${currentTab === "blog"
                                ? "text-pink bg-pink-light"
                                : "text-foreground hover:text-pink hover:bg-muted/10"
                                }`}
                        >
                            Blog
                        </Link>

                        <Link
                            to="/contacts"
                            title="Contact AG Solutions"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 text-base font-semibold rounded-xl no-underline transition-colors ${currentTab === "contact"
                                ? "text-pink bg-pink-light"
                                : "text-foreground hover:text-pink hover:bg-muted/10"
                                }`}
                        >
                            Contact Us
                        </Link>

                        <div className="pt-3 px-1">
                            <FlipButton
                                to="#"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    openLeadModal();
                                }}
                                variant="pink"
                                title="Get a Quote"
                                className="w-full !rounded-full !py-3.5 !text-base font-bold shadow-md justify-center"
                            >
                                Get a Quote
                            </FlipButton>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}

export default Header;

