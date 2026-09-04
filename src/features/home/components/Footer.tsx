import { Link } from "react-router-dom";
import { Rocket, Phone, Mail, MapPin } from "lucide-react";
import FlipButton from "@/components/ui/FlipButton";

const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/web-development", label: "Services" },
    { to: "/about", label: "Career" },
    { to: "/contacts", label: "Contact Us" },
];

const serviceLinks = [
    { to: "/web-development", label: "Web Development" },
    { to: "/mobile-app-development", label: "Mobile App Development" },
    { to: "/digital-marketing", label: "Digital Marketing" },
    { to: "/export-biz", label: "Export Biz Software" },
    { to: "/about", label: "IT Consulting" },
];

const socialLinks = [
    { href: "https://www.linkedin.com/in/ag-solutions-2b1b50422/", label: "in", name: "LinkedIn" },
    { href: "https://www.facebook.com/profile.php?id=61591878191618", label: "fb", name: "Facebook" },
    { href: "https://twitter.com", label: "tw", name: "Twitter" },
    { href: "https://www.instagram.com/ag_solutions_official/", label: "ig", name: "Instagram" },
];

function Footer() {
    return (
        <footer className="mt-16 bg-slate-900 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-ag-teal p-8 md:p-10 text-white flex flex-col justify-between">
                    <div>
                        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-xs">
                            <Rocket className="h-7 w-7 text-white" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-white">
                            Ready to Start Your Project?
                        </h2>
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

                <div className="bg-ag-pink p-8 md:p-10 text-white">
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

                <div className="bg-ag-yellow p-8 md:p-10 text-white">
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

                <div className="bg-ag-green p-8 md:p-10 text-white flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-5">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-lime-50 list-none p-0 m-0">
                            <li>
                                <a href="tel:+918867171060" title="Call AG Solutions: +91 8867171060" className="inline-flex items-center gap-2.5 text-lime-50 hover:text-white transition-colors no-underline">
                                    <Phone className="h-4 w-4 shrink-0 text-white" />
                                    <span>+91 8867171060</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@ag-solutions.in" title="Email AG Solutions: info@ag-solutions.in" className="inline-flex items-center gap-2.5 text-lime-50 hover:text-white transition-colors no-underline">
                                    <Mail className="h-4 w-4 shrink-0 text-white" />
                                    <span>info@ag-solutions.in</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://maps.google.com/?q=Jayanagara+9th+Block,+Bengaluru,+560069"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="View AG Solutions on Google Maps"
                                    className="inline-flex items-start gap-2.5 text-lime-50 hover:text-white transition-colors no-underline"
                                >
                                    <MapPin className="h-4 w-4 shrink-0 text-white mt-0.5" />
                                    <span>Jayanagara 9th Block, Bengaluru, 560069</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 flex items-center gap-2.5">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Follow AG Solutions on ${social.name}`}
                                title={`Follow AG Solutions on ${social.name}`}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ag-green font-bold text-xs hover:bg-lime-100 transition-colors"
                            >
                                {social.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-ag-navy py-4 px-6 md:px-12 text-xs text-slate-300">
                <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-3">
                    <div>© 2025 AG Solutions. All Rights Reserved.</div>
                    <div className="flex items-center gap-4">
                        <Link to="/privacy-policy" className="text-slate-300 hover:text-white transition-colors no-underline">
                            Privacy Policy
                        </Link>
                        <span>|</span>
                        <Link to="/terms-and-conditions" className="text-slate-300 hover:text-white transition-colors no-underline">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
