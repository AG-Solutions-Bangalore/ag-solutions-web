import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import NewsletterSection from "@/components/common/NewsletterSection";
import ThemeCustomizer from "@/components/ui/ThemeCustomizer";
import { useLeadModal } from "@/context/LeadModalContext";

const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services/web-development", label: "Services" },
    { to: "/blogs", label: "Blog" },
    { to: "/contacts", label: "Contact Us" },
];

const serviceLinks = [
    { to: "/services/web-development", label: "Web Development" },
    { to: "/services/mobile-app", label: "Mobile App Development" },
    { to: "/services/digital-marketing", label: "Digital Marketing" },
    { to: "/products/export-biz", label: "Export Biz Software" },
    { to: "/about", label: "IT Consulting" },
];

const productLinks = [
    { to: "/products/export-biz", label: "Export Biz" },
    { to: "/products/ss-marketing", label: "SS Marketing" },
    { to: "/products/grow-together", label: "Grow Together" },
];

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/ag-solutions-104223427/",
        icon: FaLinkedinIn,
        label: "LinkedIn",
        className: "bg-[#0A66C2] text-white hover:bg-[#084e96]",
    },
    {
        href: "https://www.facebook.com/profile.php?id=61591878191618",
        icon: FaFacebookF,
        label: "Facebook",
        className: "bg-[#1877F2] text-white hover:bg-[#135ab7]",
    },
    {
        href: "https://twitter.com",
        icon: FaTwitter,
        label: "Twitter",
        className: "bg-[#1DA1F2] text-white hover:bg-[#0c85d0]",
    },
    {
        href: "https://www.instagram.com/ag_solutions_official/",
        icon: FaInstagram,
        label: "Instagram",
        className: "bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#d6249f] text-white hover:opacity-90",
    },
];

export function FooterV2() {
    const { openLeadModal } = useLeadModal();

    return (
        <div className="w-full">
            {/* Newsletter Section */}
            <NewsletterSection />

            {/* 10-20px Multi-Color Brand Strip (Full Width) */}
            <div className="h-3.5 w-full grid grid-cols-4 shadow-xs">
                <div className="bg-teal h-full w-full" />
                <div className="bg-pink h-full w-full" />
                <div className="bg-yellow h-full w-full" />
                <div className="bg-green h-full w-full" />
            </div>

            {/* Single-Color Solid Footer */}
            <footer className="bg-slate-950 text-white pt-12 sm:pt-14 pb-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
                        {/* Col 1: Brand Info & CTA */}
                        <div className="sm:col-span-2 lg:col-span-4">
                            <Link to="/" className="inline-flex items-center gap-2 sm:gap-2.5 no-underline" aria-label="AG Solutions Home">
                                <img
                                    src="/images/logo.png"
                                    alt="AG Solutions Logo"
                                    className="h-9 sm:h-[46px] w-auto object-contain"
                                />
                                <span className="leading-none text-white">
                                    <span className="block text-[20px] sm:text-[24px] font-normal tracking-tight">
                                        <span className="font-black text-white">AG</span>Solutions
                                    </span>
                                    <span className="mt-0.5 block text-[8px] sm:text-[9px] font-semibold tracking-wider uppercase text-slate-400">
                                        Single Click Solution
                                    </span>
                                </span>
                            </Link>
                            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
                                AG Solutions delivers scalable, high-performance IT, software, and digital marketing solutions that transform modern businesses.
                            </p>
                            <div className="mt-6">
                                <button
                                    type="button"
                                    onClick={() => openLeadModal("Footer CTA")}
                                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink to-pink-hover text-white font-bold text-sm px-6 py-2.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none w-full sm:w-auto"
                                >
                                    Get Free Consultation
                                </button>
                            </div>
                        </div>

                        {/* Col 2: Quick Links */}
                        <div className="lg:col-span-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-2.5 text-sm text-slate-400 list-none p-0 m-0">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.to}
                                            className="hover:text-pink transition-colors text-slate-400 no-underline"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Services */}
                        <div className="lg:col-span-3">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                                Core Services
                            </h4>
                            <ul className="space-y-2.5 text-sm text-slate-400 list-none p-0 m-0">
                                {serviceLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.to}
                                            className="hover:text-teal transition-colors text-slate-400 no-underline"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 4: Products & Contact */}
                        <div className="lg:col-span-3">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                                Products
                            </h4>
                            <ul className="space-y-2.5 text-sm text-slate-400 list-none p-0 m-0 mb-6">
                                {productLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.to}
                                            className="hover:text-yellow transition-colors text-slate-400 no-underline"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                                Contact
                            </h4>
                            <ul className="space-y-2 text-xs text-slate-400 list-none p-0 m-0">
                                <li className="flex items-center gap-2">
                                    <Phone className="h-3.5 w-3.5 text-green shrink-0" />
                                    <span>+91 120 456 2073</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Mail className="h-3.5 w-3.5 text-pink shrink-0" />
                                    <span>info@ag-solutions.in</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <MapPin className="h-3.5 w-3.5 text-teal shrink-0 mt-0.5" />
                                    <span>B-109, Sector-63, Noida, UP - 201301</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Strip */}
                    <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <div>
                            © {new Date().getFullYear()} AG Solutions. All Rights Reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 shadow-xs ${social.className}`}
                                    >
                                        <Icon className="h-3.5 w-3.5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Theme Customizer Panel */}
                <ThemeCustomizer />
            </footer>
        </div>
    );
}

export default FooterV2;
