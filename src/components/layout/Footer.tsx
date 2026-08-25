import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Rocket } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import NewsletterSection from "@/components/common/NewsletterSection";
import { useLeadModal } from "@/context/LeadModalContext";
import { FlipButton } from "@/components/ui/FlipButton";

const quickLinks = [
    { to: "/", label: "Home", title: "AG Solutions – Web & Mobile App Development" },
    { to: "/about", label: "About Us", title: "About AG Solutions" },
    { to: "/web-development", label: "Services", title: "Web Development Services – AG Solutions" },
    { to: "/blogs", label: "Blog", title: "AG Solutions Blogs – Technology & Digital Marketing" },
    { to: "/contacts", label: "Contact Us", title: "Contact AG Solutions" },
];

const serviceLinks = [
    { to: "/web-development", label: "Web Development", title: "Web Development Services – AG Solutions" },
    { to: "/mobile-app-development", label: "Mobile App Development", title: "Mobile App Development Services – AG Solutions" },
    { to: "/digital-marketing", label: "Digital Marketing", title: "Digital Marketing Services – AG Solutions" },
    { to: "/export-biz", label: "Export Biz Software", title: "Export Biz – Export Documentation Software" },
    { to: "/about", label: "IT Consulting", title: "About AG Solutions" },
];

const productLinks = [
    { to: "/export-biz", label: "Export Biz", title: "Export Biz – Export Documentation Software" },
    { to: "/bizstock", label: "BizStock", title: "BizStock – Business Management Software" },
    { to: "/ease-marketing", label: "Ease Marketing", title: "Ease Marketing – AG Solutions" },
];

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/ag-solutions-104223427/",
        icon: FaLinkedinIn,
        label: "LinkedIn",
        title: "AG Solutions on LinkedIn",
        className: "bg-[#0A66C2] text-white hover:bg-[#084e96]",
    },
    {
        href: "https://www.facebook.com/profile.php?id=61591878191618",
        icon: FaFacebookF,
        label: "Facebook",
        title: "AG Solutions on Facebook",
        className: "bg-[#1877F2] text-white hover:bg-[#135ab7]",
    },
    {
        href: "https://twitter.com",
        icon: FaTwitter,
        label: "Twitter",
        title: "AG Solutions on X",
        className: "bg-[#1DA1F2] text-white hover:bg-[#0c85d0]",
    },
    {
        href: "https://www.instagram.com/ag_solutions_official/",
        icon: FaInstagram,
        label: "Instagram",
        title: "AG Solutions on Instagram",
        className: "bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#d6249f] text-white hover:opacity-90",
    },
];

function FooterFlipLink({
    to,
    title,
    hoverColor = "hover:text-pink",
    children,
}: {
    to: string;
    title: string;
    hoverColor?: string;
    children: string;
}) {
    return (
        <Link
            to={to}
            title={title}
            className={`group relative inline-flex items-center text-slate-400 ${hoverColor} transition-colors no-underline overflow-hidden py-0.5`}
        >
            <span className="relative inline-block overflow-hidden h-[1.35em] leading-[1.35em]">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {children}
                </span>
                <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                    {children}
                </span>
            </span>
        </Link>
    );
}

export function FooterV2() {
    const { openLeadModal } = useLeadModal();

    return (
        <div className="w-full">
            {/* Newsletter Section */}
            <NewsletterSection />

            {/* Top Multi-Color Brand Accent Bar */}
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
                        {/* Col 1: Brand CTA & Rocket Card */}
                        <div className="sm:col-span-2 lg:col-span-4">
                            {/* Rocket Icon Badge */}
                            <div className="w-13 h-13 rounded-full bg-teal/20 text-teal flex items-center justify-center mb-5 shadow-inner border border-teal/30">
                                <Rocket className="w-6 h-6 text-teal" />
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-2">
                                Ready to Start Your Project?
                            </h2>

                            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-sm mb-6">
                                Let's work together to build something amazing.
                            </p>

                            <div className="mb-8">
                                <FlipButton
                                    to="#"
                                    onClick={() => openLeadModal("Footer CTA")}
                                    variant="pink"
                                    title="Get Free Consultation"
                                    className="!rounded-full !px-6 !py-3 !text-sm font-bold shadow-md hover:shadow-xl"
                                >
                                    Get Free Consultation
                                </FlipButton>
                            </div>

                            {/* Social Media Links (Elevated placement) */}
                            <div className="mt-6">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
                                    Follow Us
                                </span>
                                <div className="flex items-center gap-3">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                title={social.title}
                                                aria-label={social.label}
                                                className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 shadow-sm ${social.className}`}
                                            >
                                                <Icon className="h-4 w-4" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Col 2: Quick Links */}
                        <div className="lg:col-span-2">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2.5 text-sm text-slate-300 list-none p-0 m-0">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <FooterFlipLink
                                            to={link.to}
                                            title={link.title}
                                            hoverColor="hover:text-pink"
                                        >
                                            {link.label}
                                        </FooterFlipLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Services */}
                        <div className="lg:col-span-3">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                                Core Services
                            </h3>
                            <ul className="space-y-2.5 text-sm text-slate-300 list-none p-0 m-0">
                                {serviceLinks.map((link) => (
                                    <li key={link.label}>
                                        <FooterFlipLink
                                            to={link.to}
                                            title={link.title}
                                            hoverColor="hover:text-teal"
                                        >
                                            {link.label}
                                        </FooterFlipLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 4: Products & Contact */}
                        <div className="lg:col-span-3">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                                Products
                            </h3>
                            <ul className="space-y-2.5 text-sm text-slate-300 list-none p-0 m-0 mb-6">
                                {productLinks.map((link) => (
                                    <li key={link.label}>
                                        <FooterFlipLink
                                            to={link.to}
                                            title={link.title}
                                            hoverColor="hover:text-yellow"
                                        >
                                            {link.label}
                                        </FooterFlipLink>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                                Contact
                            </h3>
                            <ul className="space-y-2 text-xs text-slate-300 list-none p-0 m-0">
                                <li>
                                    <a
                                        href="tel:+918867171060"
                                        title="Call AG Solutions: +91 8867171060"
                                        className="group inline-flex items-center gap-2 text-slate-300 hover:text-green transition-colors no-underline py-0.5"
                                    >
                                        <Phone className="h-3.5 w-3.5 text-green shrink-0 transition-transform duration-200 group-hover:scale-110" />
                                        <span className="relative inline-block overflow-hidden h-[1.35em] leading-[1.35em]">
                                            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                                +91 8867171060
                                            </span>
                                            <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 text-green">
                                                +91 8867171060
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:info@ag-solutions.in"
                                        title="Email AG Solutions: info@ag-solutions.in"
                                        className="group inline-flex items-center gap-2 text-slate-300 hover:text-pink transition-colors no-underline py-0.5"
                                    >
                                        <Mail className="h-3.5 w-3.5 text-pink shrink-0 transition-transform duration-200 group-hover:scale-110" />
                                        <span className="relative inline-block overflow-hidden h-[1.35em] leading-[1.35em]">
                                            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                                info@ag-solutions.in
                                            </span>
                                            <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 text-pink">
                                                info@ag-solutions.in
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com/maps/place/AG+Solutions/@12.9207136,77.5923704,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae150995555555:0x440eaf1d21e4db01!8m2!3d12.9207136!4d77.5923704!16s%2Fg%2F11p67397gv?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D&utm_source=chatgpt.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="View AG Solutions on Google Maps"
                                        className="group inline-flex items-start gap-2 text-slate-300 hover:text-teal transition-colors no-underline py-0.5"
                                    >
                                        <MapPin className="h-3.5 w-3.5 text-teal shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
                                        <span className="relative inline-block overflow-hidden h-[1.35em] leading-[1.35em]">
                                            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                                Jayanagara 9th Block, Bengaluru, 560069
                                            </span>
                                            <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 text-teal">
                                                Jayanagara 9th Block, Bengaluru, 560069
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Strip */}
                    <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-300">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1">
                            <span>© {new Date().getFullYear()} AG Solutions. All Rights Reserved.</span>
                            <FooterFlipLink to="/about" title="AG Solutions Privacy Policy" hoverColor="hover:text-slate-200">
                                Privacy Policy
                            </FooterFlipLink>
                            <FooterFlipLink to="/about" title="Terms and Conditions – AG Solutions" hoverColor="hover:text-slate-200">
                                Terms &amp; Conditions
                            </FooterFlipLink>
                        </div>
                        <div className="text-slate-300">
                            Single Click Solution for Modern Businesses
                        </div>
                    </div>
                </div>


            </footer>
        </div>
    );
}

export default FooterV2;
