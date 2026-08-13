import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import FlipButton from "@/features/homev2/components/FlipButton";

interface HeaderV2Props {
    activeNav?: "home" | "about" | "services" | "career" | "contact";
}

export function HeaderV2({ activeNav }: HeaderV2Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const location = useLocation();

    // Determine current active tab automatically if not explicitly passed
    const currentTab =
        activeNav ||
        (location.pathname === "/about-v2"
            ? "about"
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
                            <span className="text-[22px] font-normal tracking-tight text-ag-dark">
                                <span className="font-black">AG</span>Solutions
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-ag-muted mt-1">
                                Single Click Solution
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to="/home-v2"
                            className={`relative text-sm font-bold transition-colors no-underline py-1 ${
                                currentTab === "home"
                                    ? "text-ag-pink"
                                    : "text-ag-dark hover:text-ag-pink"
                            }`}
                        >
                            Home
                            {currentTab === "home" && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ag-pink rounded-full" />
                            )}
                        </Link>

                        <Link
                            to="/about-v2"
                            className={`relative text-sm font-bold transition-colors no-underline py-1 ${
                                currentTab === "about"
                                    ? "text-ag-pink"
                                    : "text-ag-dark hover:text-ag-pink"
                            }`}
                        >
                            About Us
                            {currentTab === "about" && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ag-pink rounded-full" />
                            )}
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                onMouseEnter={() => setServicesDropdownOpen(true)}
                                className={`flex items-center gap-1 text-sm font-semibold transition-colors bg-transparent border-none cursor-pointer py-1 ${
                                    currentTab === "services"
                                        ? "text-ag-pink"
                                        : "text-ag-dark hover:text-ag-pink"
                                }`}
                            >
                                <span>Services</span>
                                <ChevronDown className="h-4 w-4 text-ag-muted transition-transform group-hover:rotate-180" />
                            </button>

                            <div className="absolute left-0 top-full hidden group-hover:block w-56 pt-2 z-50">
                                <div className="rounded-2xl bg-white p-2 shadow-xl border border-slate-100">
                                    <Link
                                        to="/web-development"
                                        className="block px-4 py-2.5 text-sm font-medium text-ag-dark hover:bg-ag-pink-light hover:text-ag-pink rounded-xl transition-colors no-underline"
                                    >
                                        Web Development
                                    </Link>
                                    <Link
                                        to="/mobile-app-development"
                                        className="block px-4 py-2.5 text-sm font-medium text-ag-dark hover:bg-ag-teal-light hover:text-ag-teal rounded-xl transition-colors no-underline"
                                    >
                                        Mobile App Development
                                    </Link>
                                    <Link
                                        to="/desktop-applications"
                                        className="block px-4 py-2.5 text-sm font-medium text-ag-dark hover:bg-ag-yellow-light hover:text-ag-yellow rounded-xl transition-colors no-underline"
                                    >
                                        Desktop Applications
                                    </Link>
                                    <Link
                                        to="/ease-marketing"
                                        className="block px-4 py-2.5 text-sm font-medium text-ag-dark hover:bg-ag-green-light hover:text-ag-green rounded-xl transition-colors no-underline"
                                    >
                                        Digital Marketing
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/about-v2"
                            className={`relative text-sm font-semibold transition-colors no-underline py-1 ${
                                currentTab === "career"
                                    ? "text-ag-pink"
                                    : "text-ag-dark hover:text-ag-pink"
                            }`}
                        >
                            Career
                        </Link>

                        <Link
                            to="/contacts"
                            className={`relative text-sm font-semibold transition-colors no-underline py-1 ${
                                currentTab === "contact"
                                    ? "text-ag-pink"
                                    : "text-ag-dark hover:text-ag-pink"
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
                        className="md:hidden p-2 text-ag-dark hover:text-ag-pink bg-transparent border-none cursor-pointer"
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
                        className={`block px-3 py-2 text-base font-bold rounded-lg no-underline ${
                            currentTab === "home"
                                ? "text-ag-pink bg-ag-pink-light"
                                : "text-ag-dark hover:text-ag-pink"
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about-v2"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 text-base font-semibold rounded-lg no-underline ${
                            currentTab === "about"
                                ? "text-ag-pink bg-ag-pink-light"
                                : "text-ag-dark hover:text-ag-pink"
                        }`}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/web-development"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-semibold text-ag-dark hover:text-ag-pink no-underline"
                    >
                        Services
                    </Link>
                    <Link
                        to="/about-v2"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-semibold text-ag-dark hover:text-ag-pink no-underline"
                    >
                        Career
                    </Link>
                    <Link
                        to="/contacts"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-semibold text-ag-dark hover:text-ag-pink no-underline"
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
