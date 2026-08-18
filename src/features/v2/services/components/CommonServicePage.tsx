import type { ReactNode, ComponentType } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/seo/SEO";
import Industries from "@/features/v2/home/components/Industries";
import { useLeadModal } from "@/context/LeadModalContext";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/animation/AnimatedCounter";

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

    // Hero Props
    heroBadge: string;
    heroTitle: string;
    heroTitleHighlight: string;
    heroDescription: string;
    heroCtaText?: string;
    heroCtaLink?: string;
    onHeroCtaClick?: () => void;
    heroFeatures?: HeroFeature[];
    heroImage?: string;
    heroImageAlt?: string;
    heroImageTitle?: string;

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

    // Hero
    heroBadge,
    heroTitle,
    heroTitleHighlight,
    heroDescription,
    heroCtaText = "Get a Quote",
    onHeroCtaClick,
    heroFeatures = [],
    heroImage = "/images/laptop.png",
    heroImageAlt,
    heroImageTitle,

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
    const { openLeadModal } = useLeadModal();

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

            <div className="bg-background font-sans text-foreground antialiased transition-colors duration-200">

                {/* ==========================================
                    1. HERO SECTION (TIGHTENED SPACING)
                ========================================== */}
                <section className="relative overflow-hidden bg-background pt-6 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10">
                    {/* Ambient Background Glows */}
                    <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[300px] sm:h-[450px] w-[300px] sm:w-[450px] rounded-full bg-pink-light/60 blur-3xl animate-pulse" />
                    <div className="pointer-events-none absolute left-1/3 top-10 -z-10 h-[250px] sm:h-[350px] w-[250px] sm:w-[350px] rounded-full bg-teal-light/70 blur-3xl" />

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
                            <motion.div
                                className="lg:col-span-6 z-10 text-center lg:text-left"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal shadow-2xs backdrop-blur-xs">
                                    <span className="h-2 w-2 rounded-full bg-teal shrink-0" />
                                    <span className="truncate">{heroBadge}</span>
                                </div>

                                <h1 className="mt-3.5 sm:mt-4 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-[46px] lg:leading-[1.15]">
                                    {heroTitle}{" "}
                                    <span className="block text-pink mt-1">{heroTitleHighlight}</span>
                                </h1>

                                <p className="mt-3 max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm md:text-base text-muted leading-relaxed">
                                    {heroDescription}
                                </p>

                                {/* 4 Feature Pills Row */}
                                {heroFeatures.length > 0 && (
                                    <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4">
                                        {heroFeatures.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <div key={item.label} className="flex flex-col items-center text-center group cursor-pointer p-1.5">
                                                    <div
                                                        className={`mb-2 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-2xl ${item.bgColor} text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md`}
                                                    >
                                                        <Icon size={20} />
                                                    </div>
                                                    <span className="text-[11px] sm:text-xs font-bold text-dark leading-tight transition-colors duration-200 group-hover:text-pink">
                                                        {item.label}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* CTA Button connected to Lead popup */}
                                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (onHeroCtaClick) {
                                                onHeroCtaClick();
                                            } else {
                                                openLeadModal(heroBadge || heroTitle);
                                            }
                                        }}
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-pink-hover text-white font-bold text-sm sm:text-base px-7 py-3 sm:px-8 sm:py-3.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none w-full sm:w-auto"
                                    >
                                        <span>{heroCtaText}</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Right Image Visual with Floating Square Dots (PDF Page 11) */}
                            <motion.div
                                className="relative flex justify-center lg:col-span-6"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                <div className="relative w-full max-w-lg lg:max-w-xl flex items-center justify-center py-2 sm:py-4">
                                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-teal/20 via-yellow/20 to-pink/20 blur-2xl opacity-80 animate-pulse pointer-events-none" />



                                    {/* Main Hero Image */}
                                    <img
                                        src={heroImage}
                                        alt={heroImageAlt || heroTitle}
                                        title={heroImageTitle || heroTitle}
                                        className="relative z-10 w-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ==========================================
                    2. WHAT WE OFFER (5-CARD HORIZONTAL / BALANCED GRID)
                ========================================== */}
                {offerItems.length > 0 && (
                    <section className="bg-section-alt py-8 sm:py-12 border-t border-border">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            {/* Section Header */}
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-xs font-bold uppercase tracking-widest text-pink">
                                    {offerTag}
                                </div>
                                <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-dark sm:text-3xl md:text-4xl">
                                    {offerTitle}
                                </h2>
                                {/* 4-Color Pill Underline */}
                                <div className="mt-2.5 flex items-center justify-center gap-1">
                                    <span className="h-1 w-6 rounded-full bg-teal" />
                                    <span className="h-1 w-6 rounded-full bg-pink" />
                                    <span className="h-1 w-6 rounded-full bg-yellow" />
                                    <span className="h-1 w-6 rounded-full bg-green" />
                                </div>
                            </motion.div>

                            {/* Service Cards: Adaptive grid (3 & 3 for 6 cards, 5 in a row for 5 cards) */}
                            <div className={`mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 ${offerItems.length === 6
                                    ? "lg:grid-cols-3 gap-5 sm:gap-6"
                                    : offerItems.length === 5
                                        ? "md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4.5"
                                        : offerItems.length === 4
                                            ? "lg:grid-cols-4 gap-4"
                                            : "lg:grid-cols-3 gap-5"
                                }`}>
                                {offerItems.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                                            className="group relative overflow-hidden flex flex-col items-center justify-between rounded-2xl border border-border bg-card p-4 sm:p-5 pb-5 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-pink/30 w-full"
                                        >
                                            <div className="flex flex-col items-center w-full">
                                                {/* Icon Plate */}
                                                <div
                                                    className={`mb-4 flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${item.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                                                >
                                                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.75]" />
                                                </div>

                                                <h3 className="text-sm sm:text-base font-bold text-dark transition-colors duration-200 group-hover:text-pink">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-2 text-xs leading-relaxed text-muted font-normal">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Bottom Dynamic Accent Bar */}
                                            <div className="mt-4 flex justify-center w-full">
                                                <div
                                                    className={`h-1 w-6 rounded-full ${item.bgColor} transition-all duration-300 group-hover:w-12`}
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
                    3. WHY CHOOSE US SECTION (CONTAINER CARD)
                ========================================== */}
                {whyFeatures.length > 0 && (
                    <section className="bg-background py-8 sm:py-12">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="relative rounded-3xl bg-card dark:bg-slate-900/90 border border-border p-5 sm:p-7 md:p-10 shadow-2xs"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Ambient Animated Light Aura */}
                                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-teal/20 via-green/15 to-pink/20 blur-2xl opacity-75 animate-pulse pointer-events-none z-0" />

                                <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
                                    {/* Left Side */}
                                    <div className="lg:col-span-4 lg:border-r lg:border-border lg:pr-6 text-center lg:text-left">
                                        <div className="text-xs font-bold uppercase tracking-widest text-teal">
                                            {whyTag}
                                        </div>
                                        <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-dark leading-tight">
                                            {whyTitleMain}{" "}
                                            <span className="block text-pink mt-1">{whyTitleHighlight}</span>
                                        </h2>
                                        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted max-w-md mx-auto lg:mx-0">
                                            {whyDescription}
                                        </p>
                                        <div className="mt-5">
                                            <button
                                                type="button"
                                                onClick={() => openLeadModal(whyTitleMain)}
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-pink text-white font-bold text-xs sm:text-sm px-6 py-2.5 shadow-md hover:bg-pink-hover transition-all hover:scale-105 active:scale-95 cursor-pointer border-none w-full sm:w-auto"
                                            >
                                                <span>{whyCtaText}</span>
                                                <ArrowRight className="h-3.5 w-3.5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right Side Feature Columns */}
                                    <div className="lg:col-span-8">
                                        <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${whyFeatures.length === 5
                                            ? "lg:grid-cols-5"
                                            : whyFeatures.length === 4
                                                ? "lg:grid-cols-4"
                                                : whyFeatures.length === 3
                                                    ? "lg:grid-cols-3"
                                                    : "lg:grid-cols-2"
                                            }`}>
                                            {whyFeatures.map((feat, idx) => {
                                                const Icon = feat.icon;
                                                return (
                                                    <div
                                                        key={feat.title}
                                                        className={`group flex flex-col items-center text-center p-3 rounded-xl transition-all duration-200 hover:bg-muted/5 ${idx < whyFeatures.length - 1 && whyFeatures.length <= 4
                                                            ? "lg:border-r lg:border-border/60"
                                                            : ""
                                                            }`}
                                                    >
                                                        <div
                                                            className={`mb-3 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${feat.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                                                        >
                                                            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                                                        </div>
                                                        <h3 className="text-xs sm:text-sm font-bold text-dark transition-colors duration-200 group-hover:text-teal">
                                                            {feat.title}
                                                        </h3>
                                                        <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-muted">
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
                    4. OUR PROCESS SECTION (COMPACT & CLEAN)
                ========================================== */}
                {processSteps.length > 0 && (
                    <section className="bg-section-alt py-8 sm:py-12 border-t border-border">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-xs font-bold uppercase tracking-widest text-pink">
                                    {processTag}
                                </div>
                                <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-dark sm:text-3xl md:text-4xl">
                                    {processTitle}
                                </h2>
                                {/* 4-Color Pill Underline */}
                                <div className="mt-2.5 flex items-center justify-center gap-1">
                                    <span className="h-1 w-6 rounded-full bg-teal" />
                                    <span className="h-1 w-6 rounded-full bg-pink" />
                                    <span className="h-1 w-6 rounded-full bg-yellow" />
                                    <span className="h-1 w-6 rounded-full bg-green" />
                                </div>
                            </motion.div>

                            <div className="relative mt-8 sm:mt-10">
                                {/* Dotted Line Connector */}
                                <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-border z-0" />

                                <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 relative z-10 ${processSteps.length === 5
                                    ? "lg:grid-cols-5"
                                    : processSteps.length === 4
                                        ? "lg:grid-cols-4"
                                        : "lg:grid-cols-3"
                                    }`}>
                                    {processSteps.map((stepItem, idx) => {
                                        const Icon = stepItem.icon;
                                        return (
                                            <motion.div
                                                key={stepItem.step}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                                className="flex flex-col items-center text-center group cursor-pointer px-2"
                                            >
                                                {/* Orbital Icon Plate with Step Badge */}
                                                <div className="relative flex items-center justify-center mb-2">
                                                    <div
                                                        className={`absolute -top-2 z-20 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full ${stepItem.bgColor} text-xs font-black text-white shadow-md transition-transform duration-300 group-hover:scale-110 border-2 border-card`}
                                                    >
                                                        {stepItem.step}
                                                    </div>

                                                    <div
                                                        className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full ${stepItem.bgColor} text-white shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:scale-105`}
                                                    >
                                                        <Icon className="h-7 w-7 sm:h-9 sm:w-9 transition-transform duration-300 group-hover:rotate-6" />
                                                    </div>
                                                </div>

                                                <h3 className="mt-3 text-sm sm:text-base font-bold text-dark transition-colors duration-200 group-hover:text-pink">
                                                    {stepItem.title}
                                                </h3>

                                                <p className="mt-1.5 text-xs leading-relaxed text-muted max-w-[200px]">
                                                    {stepItem.description}
                                                </p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ==========================================
                    5. STATS BANNER SECTION (WITH ANIMATED COUNTERS)
                ========================================== */}
                {stats.length > 0 && (
                    <section className="bg-background py-8 sm:py-10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="relative overflow-hidden rounded-3xl bg-card dark:bg-slate-900/90 p-5 sm:p-7 md:p-9 border border-border shadow-xs"
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Background Ambient Glow */}
                                <div className="absolute -inset-4 rounded-full bg-pink/10 blur-2xl pointer-events-none z-0" />

                                <div className="relative z-10 grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12">
                                    {/* Left Title */}
                                    <div className="lg:col-span-4 lg:border-r lg:border-border lg:pr-6 text-center lg:text-left">
                                        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-dark md:text-3xl leading-tight">
                                            {statsTitleMain}{" "}
                                            <span className="block text-pink mt-1">
                                                {statsTitleHighlight}
                                            </span>
                                        </h2>
                                    </div>

                                    {/* Right Stats Columns with Animated Counters */}
                                    <div className="lg:col-span-8">
                                        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3 text-center items-center">
                                            {stats.map((statItem, idx) => {
                                                const Icon = statItem.icon;
                                                return (
                                                    <div
                                                        key={statItem.label}
                                                        className={`group flex flex-col items-center justify-center p-3 transition-transform duration-300 hover:scale-105 ${idx < stats.length - 1
                                                            ? "sm:border-r sm:border-border/60"
                                                            : ""
                                                            }`}
                                                    >
                                                        {Icon && (
                                                            <div className="mb-2 text-dark transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                                                <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${statItem.textColor || "text-teal"}`} />
                                                            </div>
                                                        )}
                                                        <div className={`text-2xl sm:text-3xl font-black ${statItem.textColor || "text-teal"}`}>
                                                            <AnimatedCounter value={statItem.number} />
                                                        </div>
                                                        <div className="mt-1 text-xs font-bold text-dark">
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
            </div>
        </>
    );
}

export default CommonServicePage;
