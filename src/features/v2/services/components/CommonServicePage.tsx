import type { ReactNode, ComponentType } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/seo/SEO";
import HeaderV2 from "@/components/layout/v2/Header";
import FooterV2 from "@/components/layout/v2/Footer";
import FlipButton from "@/components/ui/FlipButton";
import Industries from "@/features/v1/home/pages/New/Industries";

// Generic Icon type compatible with both react-icons and lucide-react
export type ServiceIcon = ComponentType<{ className?: string; size?: number }>;

export interface HeroFeature {
    label: string;
    icon: ServiceIcon;
    bgColor: string; // e.g. "bg-ag-teal", "bg-ag-pink", "bg-ag-yellow", "bg-ag-green"
}

export interface ServiceOfferingItem {
    title: string;
    description: string;
    icon: ServiceIcon;
    bgColor: string;
    accentColor?: string;
}

export interface WhyChooseFeature {
    title: string;
    description: string;
    icon: ServiceIcon;
    bgColor: string;
}

export interface ProcessStep {
    step: string; // e.g. "01"
    title: string;
    description: string;
    icon: ServiceIcon;
    bgColor: string;
    textColor: string;
}

export interface StatItem {
    number: string; // e.g. "120+"
    label: string;
    icon?: ServiceIcon;
    bgColor?: string;
    textColor?: string;
}

export interface CommonServicePageProps {
    seoTitle?: string;
    seoDescription?: string;
    activeNav?: "home" | "about" | "services" | "products" | "contact";

    // Hero Props
    heroBadge: string;
    heroTitle: string;
    heroTitleHighlight: string;
    heroDescription: string;
    heroCtaText?: string;
    heroCtaLink?: string;
    heroFeatures?: HeroFeature[];
    heroImage?: string;

    // Offerings Props
    offerTag?: string;
    offerTitle: string;
    offerItems: ServiceOfferingItem[];

    // Why Choose Us Props
    whyTag?: string;
    whyTitleMain: string;
    whyTitleHighlight: string;
    whyDescription: string;
    whyCtaText?: string;
    whyCtaLink?: string;
    whyFeatures: WhyChooseFeature[];

    // Process Props
    processTag?: string;
    processTitle: string;
    processSteps: ProcessStep[];

    // Stats Banner Props
    statsTitleMain: string;
    statsTitleHighlight: string;
    stats: StatItem[];

    // Optional Additional Content
    children?: ReactNode;
}

export function CommonServicePage({
    seoTitle,
    seoDescription,
    activeNav = "services",

    // Hero
    heroBadge,
    heroTitle,
    heroTitleHighlight,
    heroDescription,
    heroCtaText = "Get a Quote",
    heroCtaLink = "/contacts",
    heroFeatures = [],
    heroImage = "/images/laptop.png",

    // Offerings
    offerTag = "OUR SERVICES",
    offerTitle,
    offerItems = [],

    // Why Choose
    whyTag = "WHY CHOOSE US",
    whyTitleMain,
    whyTitleHighlight,
    whyDescription,
    whyCtaText = "Get Started",
    whyCtaLink = "/contacts",
    whyFeatures = [],

    // Process
    processTag = "OUR PROCESS",
    processTitle,
    processSteps = [],

    // Stats
    statsTitleMain,
    statsTitleHighlight,
    stats = [],

    children,
}: CommonServicePageProps) {
    return (
        <>
            {seoTitle && (
                <SEO
                    title={seoTitle}
                    description={
                        seoDescription ||
                        "AG Solutions delivers scalable, high-performance IT and digital solutions."
                    }
                />
            )}

            <div className="min-h-screen bg-white font-sans text-accent-dark antialiased">
                {/* Shared Header V2 */}
                <HeaderV2 activeNav={activeNav} />

                {/* ==========================================
                    1. HERO SECTION (With ExportBiz Animations & Decorative Shapes)
                ========================================== */}
                <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white py-10 md:py-16">
                    {/* Ambient Background Glows */}
                    <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent-pink-light/60 blur-3xl animate-pulse" />
                    <div className="pointer-events-none absolute left-1/3 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-accent-teal-light/70 blur-3xl" />

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                            {/* Left Column: Hero Text, 4 Feature Badges (Above CTA), & CTA Button */}
                            <motion.div
                                className="lg:col-span-6 z-10"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-accent-teal shadow-2xs backdrop-blur-xs">
                                    <span className="h-2 w-2 rounded-full bg-accent-teal" />
                                    <span>{heroBadge}</span>
                                </div>

                                <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-accent-dark sm:text-5xl lg:text-[50px] lg:leading-[1.15]">
                                    {heroTitle}{" "}
                                    <span className="block text-accent-pink mt-1">{heroTitleHighlight}</span>
                                </h1>

                                <p className="mt-4 max-w-xl text-base text-accent-muted sm:text-lg sm:leading-relaxed">
                                    {heroDescription}
                                </p>

                                {/* 4 Feature Pills Row - Micro-interactions matching ExportBiz */}
                                {heroFeatures.length > 0 && (
                                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                                        {heroFeatures.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <div key={item.label} className="flex flex-col items-center text-center group cursor-pointer">
                                                    <div
                                                        className={`mb-2.5 flex h-14 w-14 p-3.5 items-center justify-center rounded-xl ${item.bgColor} text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}
                                                    >
                                                        <Icon size={28} />
                                                    </div>
                                                    <span className="text-xs font-bold text-accent-dark leading-snug transition-colors duration-200 group-hover:text-accent-pink">
                                                        {item.label}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* CTA Button */}
                                <div className="mt-8">
                                    <FlipButton
                                        to={heroCtaLink}
                                        variant="pink"
                                        className="px-7 py-3.5 text-base apple-border-shine"
                                    >
                                        {heroCtaText}
                                    </FlipButton>
                                </div>
                            </motion.div>

                            {/* Right Image Visual with Rotating Decorative Color Boxes (ExportBiz Style) */}
                            <motion.div
                                className="relative flex justify-center lg:col-span-6"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                <div className="relative w-full max-w-xl flex items-center justify-center py-6">
                                    {/* Ambient Glow Aura */}
                                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent-teal/20 via-accent-yellow/20 to-accent-pink/20 blur-2xl opacity-80 animate-pulse pointer-events-none" />

                                    {/* Main Hero Image */}
                                    <img
                                        src={heroImage}
                                        alt={heroTitle}
                                        className="relative z-10 w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ==========================================
                    2. WHAT WE OFFER (SERVICES GRID WITH EXPORTBIZ CARD HOVER & ACCENT LINE)
                ========================================== */}
                {offerItems.length > 0 && (
                    <section className="bg-white py-16 md:py-24 border-t border-slate-100">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            {/* Section Header */}
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-xs font-bold uppercase tracking-widest text-accent-pink">
                                    {offerTag}
                                </div>
                                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-accent-dark md:text-4xl">
                                    {offerTitle}
                                </h2>
                                {/* 4-Color Pill Underline */}
                                <div className="mt-3 flex items-center justify-center gap-1">
                                    <span className="h-1 w-6 rounded-full bg-accent-teal" />
                                    <span className="h-1 w-6 rounded-full bg-accent-pink" />
                                    <span className="h-1 w-6 rounded-full bg-accent-yellow" />
                                    <span className="h-1 w-6 rounded-full bg-accent-green" />
                                </div>
                            </motion.div>

                            {/* Service Cards with ExportBiz Lift, Icon Scale/Rotate, & Bottom Expanding Accent Line */}
                            <div
                                className={`mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 ${offerItems.length === 5
                                    ? "lg:grid-cols-5"
                                    : offerItems.length === 4
                                        ? "lg:grid-cols-4"
                                        : "lg:grid-cols-3"
                                    }`}
                            >
                                {offerItems.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className="group relative overflow-hidden flex flex-col items-center justify-between rounded-2xl border border-slate-100 bg-white p-7 pb-9 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-200"
                                        >
                                            <div className="flex flex-col items-center w-full">
                                                {/* Icon Plate with Rotate & Scale on Hover */}
                                                <div
                                                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                                                >
                                                    <Icon className="h-8 w-8 stroke-[1.75]" />
                                                </div>

                                                <h3 className="text-base font-bold text-accent-dark transition-colors duration-200 group-hover:text-accent-pink">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-3 text-xs leading-relaxed text-accent-muted font-normal">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Bottom Dynamic Expanding Theme Accent Bar */}
                                            <div className="mt-6 flex justify-center w-full">
                                                <div
                                                    className={`h-1 w-8 rounded-full ${item.bgColor} transition-all duration-300 group-hover:w-16`}
                                                />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* ==========================================
                    3. WHY CHOOSE US SECTION (CONTAINER CARD WITH FLOATING DECORATIONS & DOT GRID)
                ========================================== */}
                {whyFeatures.length > 0 && (
                    <section className="bg-white py-12 md:py-16">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="relative overflow-hidden rounded-3xl bg-sky-50/50 border border-sky-100/80 p-8 md:p-12 shadow-2xs"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Ambient Animated Light Aura */}
                                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-accent-teal/20 via-accent-green/15 to-accent-pink/20 blur-2xl opacity-75 animate-pulse pointer-events-none z-0" />

                                {/* Floating Spin Shapes */}
                                <div className="absolute -left-3 top-8 z-10 hidden sm:block animate-bounce [animation-duration:4s]">
                                    <div className="h-10 w-10 rounded-xl bg-accent-green shadow-md animate-spin [animation-duration:14s]" />
                                </div>
                                <div className="absolute right-4 bottom-4 z-10 hidden sm:block animate-bounce [animation-duration:5s]">
                                    <div className="h-9 w-9 rounded-lg bg-accent-pink shadow-md animate-[spin_10s_linear_infinite_reverse]" />
                                </div>

                                <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                                    {/* Left Side: Sub-tag, Big Title, Subtitle & Button */}
                                    <div className="lg:col-span-4 lg:border-r lg:border-slate-200/80 lg:pr-8">
                                        <div className="text-xs font-bold uppercase tracking-widest text-accent-teal">
                                            {whyTag}
                                        </div>
                                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-accent-dark md:text-4xl leading-tight">
                                            {whyTitleMain}{" "}
                                            <span className="block text-accent-pink mt-1">{whyTitleHighlight}</span>
                                        </h2>
                                        <p className="mt-4 text-xs leading-relaxed text-accent-muted">
                                            {whyDescription}
                                        </p>
                                        <div className="mt-6">
                                            <FlipButton
                                                to={whyCtaLink}
                                                variant="pink"
                                                className="px-6 py-2.5 text-xs apple-border-shine"
                                            >
                                                {whyCtaText}
                                            </FlipButton>
                                        </div>
                                    </div>

                                    {/* Right Side: 4 Vertical Feature Columns with Vertical Dividers */}
                                    <div className="lg:col-span-8">
                                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                            {whyFeatures.map((feat, idx) => {
                                                const Icon = feat.icon;
                                                return (
                                                    <div
                                                        key={feat.title}
                                                        className={`group flex flex-col items-center text-center px-3 transition-transform duration-200 hover:translate-y-[-2px] ${idx < whyFeatures.length - 1
                                                            ? "lg:border-r lg:border-slate-200/70"
                                                            : ""
                                                            }`}
                                                    >
                                                        <div
                                                            className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${feat.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                                                        >
                                                            <Icon className="h-7 w-7" />
                                                        </div>
                                                        <h3 className="text-sm font-bold text-accent-dark transition-colors duration-200 group-hover:text-accent-teal">
                                                            {feat.title}
                                                        </h3>
                                                        <p className="mt-2 text-[11px] leading-relaxed text-accent-muted">
                                                            {feat.description}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* ==========================================
                    4. OUR PROCESS SECTION (ORBITAL CARDS & EXPANDING ACCENT)
                ========================================== */}
                {processSteps.length > 0 && (
                    <section className="bg-white py-16 md:py-24 border-t border-slate-100">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-xs font-bold uppercase tracking-widest text-accent-pink">
                                    {processTag}
                                </div>
                                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-accent-dark md:text-4xl">
                                    {processTitle}
                                </h2>
                                {/* 4-Color Pill Underline */}
                                <div className="mt-3 flex items-center justify-center gap-1">
                                    <span className="h-1 w-6 rounded-full bg-accent-teal" />
                                    <span className="h-1 w-6 rounded-full bg-accent-pink" />
                                    <span className="h-1 w-6 rounded-full bg-accent-yellow" />
                                    <span className="h-1 w-6 rounded-full bg-accent-green" />
                                </div>
                            </motion.div>

                            <div className="relative mt-16">
                                {/* Dotted Line Connector */}
                                <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-200 z-0" />

                                <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 relative z-10 ${processSteps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"}`}>
                                    {processSteps.map((stepItem, idx) => {
                                        const Icon = stepItem.icon;
                                        return (
                                            <motion.div
                                                key={stepItem.step}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                className="flex flex-col items-center text-center group cursor-pointer"
                                            >
                                                {/* Orbital Icon Plate with Step Badge */}
                                                <div className="relative flex items-center justify-center">
                                                    <div
                                                        className={`absolute -top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full ${stepItem.bgColor} text-xs font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                                                    >
                                                        {stepItem.step}
                                                    </div>

                                                    <div
                                                        className={`flex h-20 w-20 items-center justify-center rounded-full ${stepItem.bgColor} text-white shadow-lg transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:scale-105`}
                                                    >
                                                        <Icon className="h-9 w-9 transition-transform duration-300 group-hover:rotate-6" />
                                                    </div>
                                                </div>

                                                <h3 className="mt-4 text-base font-bold text-accent-dark transition-colors duration-200 group-hover:text-accent-pink">
                                                    {stepItem.title}
                                                </h3>

                                                <p className="mt-2 text-xs leading-relaxed text-accent-muted max-w-[200px]">
                                                    {stepItem.description}
                                                </p>

                                                {/* Bottom Expanding Line */}
                                                <div className="mt-4 flex justify-center w-full">
                                                    <div
                                                        className={`h-0.5 w-6 rounded-full ${stepItem.bgColor} transition-all duration-300 group-hover:w-12`}
                                                    />
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ==========================================
                    5. STATS BANNER SECTION (WITH FLOATING ACCENTS & GLOW)
                ========================================== */}
                {stats.length > 0 && (
                    <section className="bg-white py-12 md:py-16">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="relative overflow-hidden rounded-3xl bg-pink-50/60 p-8 md:p-12 border border-pink-100 shadow-2xs"
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Background Ambient Glow */}
                                <div className="absolute -inset-4 rounded-full bg-accent-pink/10 blur-2xl pointer-events-none z-0" />

                                <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                                    {/* Left Title */}
                                    <div className="lg:col-span-4 lg:border-r lg:border-pink-200/80 lg:pr-8">
                                        <h2 className="text-2xl font-extrabold tracking-tight text-accent-dark sm:text-3xl leading-tight">
                                            {statsTitleMain}{" "}
                                            <span className="block text-accent-pink mt-1">
                                                {statsTitleHighlight}
                                            </span>
                                        </h2>
                                    </div>

                                    {/* Right Stats Columns */}
                                    <div className="lg:col-span-8">
                                        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-${Math.min(stats.length, 3)} text-center items-center`}>
                                            {stats.map((statItem, idx) => {
                                                const Icon = statItem.icon;
                                                return (
                                                    <div
                                                        key={statItem.label}
                                                        className={`group flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-105 ${idx < stats.length - 1
                                                            ? "sm:border-r sm:border-pink-200/70"
                                                            : ""
                                                            }`}
                                                    >
                                                        {Icon && (
                                                            <div className="mb-3 text-accent-dark transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                                                <Icon className={`h-10 w-10 ${statItem.textColor || "text-accent-teal"}`} />
                                                            </div>
                                                        )}
                                                        <div className={`text-4xl font-black ${statItem.textColor || "text-accent-teal"}`}>
                                                            {statItem.number}
                                                        </div>
                                                        <div className="mt-1.5 text-xs font-bold text-accent-dark">
                                                            {statItem.label}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* Additional Children / Industries */}
                {children || <Industries />}

                {/* Shared Footer V2 */}
                <FooterV2 />
            </div>
        </>
    );
}

export default CommonServicePage;

