import { Link } from "react-router-dom";
import { Rocket, Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ThemeCustomizer from "@/components/ui/ThemeCustomizer";
import FlipButton from "@/components/ui/FlipButton";

const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/contacts", label: "Contact Us" },
];

const serviceLinks = [
    { to: "/services/web-development", label: "Web Development" },
    { to: "/services/mobile-app-development", label: "Mobile App Development" },
    { to: "/services/web-development", label: "E-Commerce Solutions" },
    { to: "/desktop-applications", label: "Cloud Solutions" },
    { to: "/about", label: "IT Consulting" },
];

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/ag-solutions-104223427/",
        icon: FaLinkedinIn,
        label: "LinkedIn",
        className: "bg-[#0A66C2] text-white hover:bg-[#084e96] hover:shadow-[0_4px_12px_rgba(10,102,194,0.4)]",
    },
    {
        href: "https://www.facebook.com/profile.php?id=61591878191618",
        icon: FaFacebookF,
        label: "Facebook",
        className: "bg-[#1877F2] text-white hover:bg-[#135ab7] hover:shadow-[0_4px_12px_rgba(24,119,242,0.4)]",
    },
    {
        href: "https://twitter.com",
        icon: FaTwitter,
        label: "Twitter",
        className: "bg-[#1DA1F2] text-white hover:bg-[#0c85d0] hover:shadow-[0_4px_12px_rgba(29,161,242,0.4)]",
    },
    {
        href: "https://www.instagram.com/ag_solutions_official/",
        icon: FaInstagram,
        label: "Instagram",
        className: "bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#d6249f] text-white hover:opacity-90 hover:shadow-[0_4px_12px_rgba(214,36,159,0.4)]",
    },
];

export function FooterV2() {
    return (
        <footer className="mt-16 bg-slate-900 text-white">
            {/* Top 4 Multi-Color Connected Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/* Block 1: Teal */}
                <div className="bg-teal p-8 md:p-10 text-white flex flex-col justify-between">
                    <div>
                        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-xs">
                            <Rocket className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-white">
                            Ready to Start Your Project?
                        </h3>
                        <p className="mt-2.5 text-sm text-teal-50 leading-relaxed">
                            Let's work together to build something amazing.
                        </p>
                    </div>
                    <div className="mt-8">
                        <FlipButton to="/contacts" variant="white">
                            Get a Quote
                        </FlipButton>
                    </div>
                </div>

                {/* Block 2: Pink */}
                <div className="bg-pink p-8 md:p-10 text-white">
                    <h3 className="text-lg font-bold text-white mb-5">Quick Links</h3>
                    <ul className="space-y-3 text-sm font-medium text-pink-100 list-none p-0 m-0">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.to} className="hover:text-white transition-colors text-pink-100 no-underline">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Block 3: Yellow */}
                <div className="bg-yellow p-8 md:p-10 text-white">
                    <h3 className="text-lg font-bold text-white mb-5">Services</h3>
                    <ul className="space-y-3 text-sm font-medium text-amber-50 list-none p-0 m-0">
                        {serviceLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.to} className="hover:text-white transition-colors text-amber-50 no-underline">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Block 4: Lime Green */}
                <div className="bg-green p-8 md:p-10 text-white flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-5">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-lime-50 list-none p-0 m-0">
                            <li className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 shrink-0 text-white" />
                                <span>+91 120 456 2073</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 shrink-0 text-white" />
                                <span>info@ag-solutions.in</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <MapPin className="h-4 w-4 shrink-0 text-white mt-0.5" />
                                <span>B-109, Sector-63, Noida, UP - 201301</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 flex items-center gap-2.5">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className={`flex h-9 w-9 items-center justify-center rounded-full font-bold hover:scale-110 transition-all duration-300 shadow-sm ${social.className}`}
                                >
                                    <Icon className="h-4.5 w-4.5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Dark Strip */}
            <div className="bg-navy py-4 px-6 md:px-12 text-xs text-slate-400">
                <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-3">
                    <div>© 2025 AG Solutions. All Rights Reserved.</div>
                    <div className="flex items-center gap-4">
                        <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors no-underline">
                            Privacy Policy
                        </Link>
                        <span>|</span>
                        <Link to="/terms-and-conditions" className="text-slate-400 hover:text-white transition-colors no-underline">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>

            {/* Theme Customizer */}
            <ThemeCustomizer />
        </footer>
    );
}

export default FooterV2;
