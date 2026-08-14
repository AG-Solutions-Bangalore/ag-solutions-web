import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import FlipButton from "@/components/ui/FlipButton";

interface HeaderProps {
    activeNav?: "home" | "about" | "services" | "career" | "contact";
}

function Header({ activeNav = "home" }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <Link to="/home-v2" className="flex items-center gap-3 no-underline">
                        <div className="flex items-center text-3xl font-black tracking-tighter leading-none">
                            <span className="text-ag-teal">A</span>
                            <span className="text-ag-pink">G</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-extrabold text-ag-dark leading-none tracking-tight">
                                AG Solutions
                            </span>
                            <span className="text-[11px] font-medium text-ag-muted tracking-tight mt-0.5">
                                We make it happen!
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to="/home-v2"
                            className={`relative text-sm font-bold transition-colors no-underline py-1 ${
                                activeNav === "home"
                                    ? "text-ag-pink"
                                    : "text-ag-dark hover:text-ag-pink"
                            }`}
                        >
                            Home
                            {activeNav === "home" && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ag-pink rounded-full" />
                            )}
                        </Link>

                        <Link
                            to="/about-v2"
                            className={`relative text-sm font-bold transition-colors no-underline py-1 ${
                                activeNav === "about"
                                    ? "text-ag-pink"
                                    : "text-ag-dark hover:text-ag-pink"
                            }`}
                        >
                            About Us
                            {activeNav === "about" && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ag-pink rounded-full" />
                            )}
                        </Link>

                        <div className="relative group">
                            <button
                                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                onMouseEnter={() => setServicesDropdownOpen(true)}
                                className="flex items-center gap-1 text-sm font-semibold text-ag-dark hover:text-ag-pink transition-colors bg-transparent border-none cursor-pointer py-1"
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
                            to="/about"
                            className="text-sm font-semibold text-ag-dark hover:text-ag-pink transition-colors no-underline"
                        >
                            Career
                        </Link>

                        <Link
                            to="/contacts"
                            className="text-sm font-semibold text-ag-dark hover:text-ag-pink transition-colors no-underline"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center">
                        <FlipButton to="/contacts" variant="pink">
                            Get a Quote
                        </FlipButton>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-ag-dark hover:text-ag-pink bg-transparent border-none cursor-pointer"
                        aria-label="Toggle Navigation"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3">
                    <Link
                        to="/home-v2"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-bold text-ag-pink bg-ag-pink-light rounded-lg no-underline"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-semibold text-ag-dark hover:text-ag-pink no-underline"
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
                        to="/about"
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
                            className="w-full justify-center py-3 text-base"
                        >
                            Get a Quote
                        </FlipButton>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
