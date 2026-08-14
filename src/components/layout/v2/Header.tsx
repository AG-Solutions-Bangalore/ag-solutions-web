import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLeadModal } from "@/context/LeadModalContext";

interface HeaderV2Props {
    activeNav?: "home" | "about" | "services" | "products" | "blog" | "contact";
}

export function HeaderV2({ activeNav }: HeaderV2Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
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

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        setMobileProductsOpen(false);
    }, [location.pathname]);

    // Determine current active tab automatically if not explicitly passed
    const isProductsPath =
        location.pathname.startsWith("/products") ||
        location.pathname === "/export-biz" ||
        location.pathname === "/export-biz-new";

    const isServicesPath =
        location.pathname === "/services" ||
        location.pathname.startsWith("/services/");

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
        <header className="sticky top-0 z-50 bg-white/95 border-b border-slate-100 shadow-2xs">
            <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
                <div className="flex h-16 sm:h-20 items-center justify-between">
                    {/* Brand Logo */}
                    <Link to="/" className="flex items-center gap-2 sm:gap-2.5 no-underline shrink-0" aria-label="AG Solutions Home">
                        <img
                            src="/images/logo.png"
                            alt="AG Solutions Logo"
                            className="h-9 sm:h-[46px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                        />
                        <span className="leading-none text-dark">
                            <span className="block text-[20px] sm:text-[24px] font-normal tracking-tight">
                                <span className="font-black text-dark">AG</span>Solutions
                            </span>
                            <span className="mt-0.5 block text-[8px] sm:text-[9px] font-semibold tracking-wider uppercase text-muted">
                                Single Click Solution
                            </span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        <Link
                            to="/"
                            className={`relative text-sm font-semibold transition-colors no-underline py-1 ${currentTab === "home"
                                ? "text-pink"
                                : "text-dark hover:text-pink"
                                }`}
                        >
                            Home
                            {currentTab === "home" && (
                                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-pink" />
                            )}
                        </Link>

                        <Link
                            to="/about"
                            className={`relative text-sm font-semibold transition-colors no-underline py-1 ${currentTab === "about"
                                ? "text-pink"
                                : "text-dark hover:text-pink"
                                }`}
                        >
                            About Us
                            {currentTab === "about" && (
                                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-pink" />
                            )}
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button
                                type="button"
                                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                onMouseEnter={() => setServicesDropdownOpen(true)}
                                className={`flex items-center gap-1 text-sm font-semibold transition-colors bg-transparent border-none cursor-pointer py-1 ${currentTab === "services"
                                    ? "text-pink"
                                    : "text-dark hover:text-pink"
                                    }`}
                            >
                                <span>Services</span>
                                <ChevronDown className={`h-4 w-4 text-muted transition-transform group-hover:rotate-180 ${servicesDropdownOpen ? "rotate-180 text-pink" : ""}`} />
                            </button>

                            <div 
                                onMouseLeave={() => setServicesDropdownOpen(false)}
                                className={`absolute left-0 top-full ${servicesDropdownOpen ? "block" : "hidden group-hover:block"} w-60 pt-2 z-50`}
                            >
                                <div className="rounded-2xl bg-white p-2 shadow-xl border border-slate-100">
                                    <Link
                                        to="/services/web-development"
                                        onClick={() => setServicesDropdownOpen(false)}
                                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-pink-light hover:text-pink rounded-xl transition-colors no-underline"
                                    >
                                        Web Development
                                    </Link>
                                    <Link
                                        to="/services/mobile-app"
                                        onClick={() => setServicesDropdownOpen(false)}
                                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-teal-light hover:text-teal rounded-xl transition-colors no-underline"
                                    >
                                        Mobile App Development
                                    </Link>
                                    <Link
                                        to="/services/digital-marketing"
                                        onClick={() => setServicesDropdownOpen(false)}
                                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-green-light hover:text-green rounded-xl transition-colors no-underline"
                                    >
                                        Digital Marketing
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Products Dropdown */}
                        <div className="relative group">
                            <button
                                type="button"
                                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                                onMouseEnter={() => setProductsDropdownOpen(true)}
                                className={`flex items-center gap-1 text-sm font-semibold transition-colors bg-transparent border-none cursor-pointer py-1 ${currentTab === "products"
                                    ? "text-pink"
                                    : "text-dark hover:text-pink"
                                    }`}
                            >
                                <span>Products</span>
                                <ChevronDown className={`h-4 w-4 text-muted transition-transform group-hover:rotate-180 ${productsDropdownOpen ? "rotate-180 text-pink" : ""}`} />
                            </button>

                            <div 
                                onMouseLeave={() => setProductsDropdownOpen(false)}
                                className={`absolute left-0 top-full ${productsDropdownOpen ? "block" : "hidden group-hover:block"} w-60 pt-2 z-50`}
                            >
                                <div className="rounded-2xl bg-white p-2 shadow-xl border border-slate-100">
                                    <Link
                                        to="/products/export-biz"
                                        onClick={() => setProductsDropdownOpen(false)}
                                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-pink-light hover:text-pink rounded-xl transition-colors no-underline"
                                    >
                                        Export Biz
                                    </Link>
                                    <Link
                                        to="/products/ss-marketing"
                                        onClick={() => setProductsDropdownOpen(false)}
                                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-teal-light hover:text-teal rounded-xl transition-colors no-underline"
                                    >
                                        SS Marketing
                                    </Link>
                                    <Link
                                        to="/products/grow-together"
                                        onClick={() => setProductsDropdownOpen(false)}
                                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-yellow-light hover:text-yellow rounded-xl transition-colors no-underline"
                                    >
                                        Grow Together
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Blog Navigation Link */}
                        <Link
                            to="/blogs"
                            className={`relative text-sm font-semibold transition-colors no-underline py-1 ${currentTab === "blog"
                                ? "text-pink"
                                : "text-dark hover:text-pink"
                                }`}
                        >
                            Blog
                            {currentTab === "blog" && (
                                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-pink" />
                            )}
                        </Link>

                        <Link
                            to="/contacts"
                            className={`relative text-sm font-semibold transition-colors no-underline py-1 ${currentTab === "contact"
                                ? "text-pink"
                                : "text-dark hover:text-pink"
                                }`}
                        >
                            Contact Us
                            {currentTab === "contact" && (
                                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-pink" />
                            )}
                        </Link>
                    </nav>

                    {/* Right CTA Button */}
                    <div className="hidden md:flex items-center">
                        <button
                            type="button"
                            onClick={() => openLeadModal()}
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink to-pink-hover text-white font-bold text-sm px-6 py-2.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none"
                        >
                            Get a Quote
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2.5 -mr-1 text-dark hover:text-pink bg-transparent border-none cursor-pointer rounded-lg active:bg-slate-100 transition-colors"
                        aria-label="Toggle Navigation"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <>
                    {/* Semi-transparent Backdrop */}
                    <div
                        className="md:hidden fixed inset-0 top-16 sm:top-20 bg-slate-950/40 z-40 backdrop-blur-xs"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Drawer Content */}
                    <div className="md:hidden absolute left-0 top-full w-full bg-white z-50 border-t border-slate-100 shadow-2xl max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto px-4 pt-3 pb-8 space-y-2">
                        <Link
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 text-base font-bold rounded-xl no-underline transition-colors ${currentTab === "home"
                                ? "text-pink bg-pink-light"
                                : "text-dark hover:text-pink hover:bg-slate-50"
                                }`}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 text-base font-semibold rounded-xl no-underline transition-colors ${currentTab === "about"
                                ? "text-pink bg-pink-light"
                                : "text-dark hover:text-pink hover:bg-slate-50"
                                }`}
                        >
                            About Us
                        </Link>

                        {/* Services Accordion on Mobile */}
                        <div className="rounded-xl border border-slate-100 overflow-hidden bg-white">
                            <button
                                type="button"
                                onClick={() => setMobileServicesOpen((prev) => !prev)}
                                className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-colors bg-transparent border-none cursor-pointer ${isServicesPath ? "text-pink bg-pink-light/40" : "text-dark hover:bg-slate-50"
                                    }`}
                            >
                                <span>Services</span>
                                <ChevronDown
                                    className={`h-4 w-4 text-muted transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-pink" : ""
                                        }`}
                                />
                            </button>
                            {mobileServicesOpen && (
                                <div className="bg-slate-50/80 px-3 py-2 space-y-1 border-t border-slate-100">
                                    <Link
                                        to="/services/web-development"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-dark hover:text-pink hover:bg-white rounded-lg no-underline transition-colors"
                                    >
                                        Web Development
                                    </Link>
                                    <Link
                                        to="/services/mobile-app"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-dark hover:text-teal hover:bg-white rounded-lg no-underline transition-colors"
                                    >
                                        Mobile App Development
                                    </Link>
                                    <Link
                                        to="/services/digital-marketing"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-dark hover:text-green hover:bg-white rounded-lg no-underline transition-colors"
                                    >
                                        Digital Marketing
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Products Accordion on Mobile */}
                        <div className="rounded-xl border border-slate-100 overflow-hidden bg-white">
                            <button
                                type="button"
                                onClick={() => setMobileProductsOpen((prev) => !prev)}
                                className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-colors bg-transparent border-none cursor-pointer ${isProductsPath ? "text-pink bg-pink-light/40" : "text-dark hover:bg-slate-50"
                                    }`}
                            >
                                <span>Products</span>
                                <ChevronDown
                                    className={`h-4 w-4 text-muted transition-transform duration-200 ${mobileProductsOpen ? "rotate-180 text-pink" : ""
                                        }`}
                                />
                            </button>
                            {mobileProductsOpen && (
                                <div className="bg-slate-50/80 px-3 py-2 space-y-1 border-t border-slate-100">
                                    <Link
                                        to="/products/export-biz"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-dark hover:text-pink hover:bg-white rounded-lg no-underline transition-colors"
                                    >
                                        Export Biz
                                    </Link>
                                    <Link
                                        to="/products/ss-marketing"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-dark hover:text-teal hover:bg-white rounded-lg no-underline transition-colors"
                                    >
                                        SS Marketing
                                    </Link>
                                    <Link
                                        to="/products/grow-together"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2.5 text-sm font-medium text-dark hover:text-yellow hover:bg-white rounded-lg no-underline transition-colors"
                                    >
                                        Grow Together
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/blogs"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 text-base font-semibold rounded-xl no-underline transition-colors ${currentTab === "blog"
                                ? "text-pink bg-pink-light"
                                : "text-dark hover:text-pink hover:bg-slate-50"
                                }`}
                        >
                            Blog
                        </Link>

                        <Link
                            to="/contacts"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 text-base font-semibold rounded-xl no-underline transition-colors ${currentTab === "contact"
                                ? "text-pink bg-pink-light"
                                : "text-dark hover:text-pink hover:bg-slate-50"
                                }`}
                        >
                            Contact Us
                        </Link>

                        <div className="pt-3 px-1">
                            <button
                                type="button"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    openLeadModal();
                                }}
                                className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink to-pink-hover text-white font-bold text-base py-3.5 shadow-md active:scale-98 transition-all cursor-pointer border-none"
                            >
                                Get a Quote
                            </button>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}

export default HeaderV2;

