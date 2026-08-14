import { ChevronDown, Menu, X } from "lucide-react";
import FlipButton from "@/components/ui/FlipButton";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface HeaderV2Props {
    activeNav?: "home" | "about" | "services" | "products" | "contact";
}

export function HeaderV2({ activeNav }: HeaderV2Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const location = useLocation();

    // Determine current active tab automatically if not explicitly passed
    const isProductsPath =
        location.pathname === "/export-biz" ||
        location.pathname === "/export-biz-new" ||
        location.pathname === "/ease-marketing" ||
        location.pathname === "/grow-together" ||
        location.pathname === "/products";

    const isServicesPath =
        location.pathname === "/service-v2" ||
        location.pathname === "/services-v2" ||
        location.pathname === "/web-development-v2" ||
        location.pathname === "/mobile-app-v2" ||
        location.pathname === "/mobile-app-development-v2" ||
        location.pathname === "/digital-marketing-v2" ||
        location.pathname === "/ease-marketing-v2";

    const currentTab =
        activeNav ||
        (location.pathname === "/about-v2"
            ? "about"
            : isServicesPath
                ? "services"
                : isProductsPath
                    ? "products"
                    : location.pathname === "/contacts"
                        ? "contact"
                        : "home");

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Brand Logo - Using Old Logo Asset */}
                    <Link to="/home-v2" className="flex items-center gap-3 no-underline">
                        <img
                            src="/images/logo.png"
                            alt="AG Solutions Logo"
                            className="h-11 sm:h-12 w-auto object-contain"
                        />
                        <div className="flex flex-col leading-none">
                            <span className="text-[22px] font-normal tracking-tight text-dark">
                                <span className="font-black">AG</span>Solutions
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-muted mt-1">
                                Single Click Solution
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to="/home-v2"
                            className={`relative text-sm font-bold transition-colors no-underline py-1 ${currentTab === "home"
                                ? "text-pink"
                                : "text-dark hover:text-pink"
                                }`}
                        >
                            Home
                            {currentTab === "home" && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink rounded-full" />
                            )}
                        </Link>

                        <Link
                            to="/about-v2"
                            className={`relative text-sm font-bold transition-colors no-underline py-1 ${currentTab === "about"
                                ? "text-pink"
                                : "text-dark hover:text-pink"
                                }`}
                        >
                            About Us
                            {currentTab === "about" && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink rounded-full" />
                            )}
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                onMouseEnter={() => setServicesDropdownOpen(true)}
                                className={`flex items-center gap-1 text-sm font-semibold transition-colors bg-transparent border-none cursor-pointer py-1 ${currentTab === "services"
                                    ? "text-pink"
                                    : "text-dark hover:text-pink"
                                    }`}
                            >
                                <span>Services</span>
                                <ChevronDown className="h-4 w-4 text-muted transition-transform group-hover:rotate-180" />
                            </button>

                            <div className="absolute left-0 top-full hidden group-hover:block w-56 pt-2 z-50">
                                <div className="rounded-2xl bg-white p-2 shadow-xl border border-slate-100">
                                    <Link
                                        to="/service-v2"
                                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-pink-light hover:text-pink rounded-xl transition-colors no-underline"
                                    >
                                        Web Development
                                    </Link>
                                    <Link
                                        to="/mobile-app-v2"
                                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-teal-light hover:text-teal rounded-xl transition-colors no-underline"
                                    >
                                        Mobile App Development
                                    </Link>
                                    <Link
                                        to="/digital-marketing-v2"
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
                                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                                onMouseEnter={() => setProductsDropdownOpen(true)}
                                className={`flex items-center gap-1 text-sm font-semibold transition-colors bg-transparent border-none cursor-pointer py-1 ${currentTab === "products"
                                    ? "text-pink"
                                    : "text-dark hover:text-pink"
                                    }`}
                            >
                                <span>Products</span>
                                <ChevronDown className="h-4 w-4 text-muted transition-transform group-hover:rotate-180" />
                            </button>

                            <div className="absolute left-0 top-full hidden group-hover:block w-56 pt-2 z-50">
                                <div className="rounded-2xl bg-white p-2 shadow-xl border border-slate-100">
                                    <Link
                                        to="/export-biz-new"
                                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-pink-light hover:text-pink rounded-xl transition-colors no-underline"
                                    >
                                        ExportBiz
                                    </Link>
                                    <Link
                                        to="/ease-marketing"
                                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-teal-light hover:text-teal rounded-xl transition-colors no-underline"
                                    >
                                        Ease Marketing
                                    </Link>
                                    <Link
                                        to="/grow-together"
                                        className="block px-4 py-2.5 text-sm font-medium text-dark hover:bg-yellow-light hover:text-yellow rounded-xl transition-colors no-underline"
                                    >
                                        Grow Together
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/contacts"
                            className={`relative text-sm font-semibold transition-colors no-underline py-1 ${currentTab === "contact"
                                ? "text-pink"
                                : "text-dark hover:text-pink"
                                }`}
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Right CTA Button */}
                    <div className="hidden md:flex items-center">
                        <FlipButton to="/contacts" variant="pink" className="apple-border-shine">
                            Get a Quote
                        </FlipButton>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-dark hover:text-pink bg-transparent border-none cursor-pointer"
                        aria-label="Toggle Navigation"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3">
                    <Link
                        to="/home-v2"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 text-base font-bold rounded-lg no-underline ${currentTab === "home"
                            ? "text-pink bg-pink-light"
                            : "text-dark hover:text-pink"
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about-v2"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 text-base font-semibold rounded-lg no-underline ${currentTab === "about"
                            ? "text-pink bg-pink-light"
                            : "text-dark hover:text-pink"
                            }`}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/service-v2"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-semibold text-dark hover:text-pink no-underline"
                    >
                        Services
                    </Link>
                    <Link
                        to="/export-biz-new"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 text-base font-semibold rounded-lg no-underline ${currentTab === "products"
                            ? "text-pink bg-pink-light"
                            : "text-dark hover:text-pink"
                            }`}
                    >
                        Products (ExportBiz)
                    </Link>
                    <Link
                        to="/contacts"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-semibold text-dark hover:text-pink no-underline"
                    >
                        Contact Us
                    </Link>
                    <div className="pt-2">
                        <FlipButton
                            to="/contacts"
                            variant="pink"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full justify-center py-3 text-base apple-border-shine"
                        >
                            Get a Quote
                        </FlipButton>
                    </div>
                </div>
            )}
        </header>
    );
}

export default HeaderV2;
