import type { ReactNode, ComponentType } from "react";
import SEO from "@/components/seo/SEO";
import HeaderV2 from "@/components/layout/v2/HeaderV2";
import FooterV2 from "@/components/layout/v2/FooterV2";
import FlipButton from "@/features/homev2/components/FlipButton";
import Industries from "@/features/home/pages/New/Industries";

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

            <div className="min-h-screen bg-white font-sans text-ag-dark antialiased">
                {/* Shared Header V2 */}
                <HeaderV2 activeNav={activeNav} />

                {/* ==========================================
                    1. HERO SECTION (Matching Real Mockup Layout)
                ========================================== */}
                <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white py-10 md:py-16">
                    {/* Ambient Background Glows */}
                    <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-ag-pink-light/60 blur-3xl" />
                    <div className="pointer-events-none absolute left-1/3 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-ag-teal-light/70 blur-3xl" />

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                            {/* Left Column: Hero Text, 4 Feature Badges (Above CTA), & CTA Button */}
                            <div className="lg:col-span-6">
                                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ag-teal shadow-2xs backdrop-blur-xs">
                                    <span className="h-2 w-2 rounded-full bg-ag-teal" />
                                    <span>{heroBadge}</span>
                                </div>

                                <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ag-dark sm:text-5xl lg:text-[50px] lg:leading-[1.15]">
                                    {heroTitle}{" "}
                                    <span className="block text-ag-pink mt-1">{heroTitleHighlight}</span>
                                </h1>

                                <p className="mt-4 max-w-xl text-base text-ag-muted sm:text-lg sm:leading-relaxed">
                                    {heroDescription}
                                </p>

                                {/* 4 Feature Pills Row - PLACED ABOVE CTA BUTTON AS IN MOCKUP */}
                                {heroFeatures.length > 0 && (
                                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                                        {heroFeatures.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <div key={item.label} className="flex flex-col items-center text-center group">
                                                    <div
                                                        className={`mb-2.5 flex h-14 w-h-14 p-4 items-center justify-center rounded-md ${item.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                                                    >
                                                        <Icon size={40} />
                                                    </div>
                                                    <span className="text-xs font-bold text-ag-dark leading-snug">
                                                        {item.label}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* CTA Button - PLACED BELOW FEATURE PILLS AS IN MOCKUP */}
                                <div className="mt-8">
                                    <FlipButton
                                        to={heroCtaLink}
                                        variant="pink"
                                        className="px-7 py-3.5 text-base apple-border-shine"
                                    >
                                        {heroCtaText}
                                    </FlipButton>
                                </div>
                            </div>

                            {/* Right Image Visual */}
                            <div className="relative flex justify-center lg:col-span-6">
                                <div className="relative w-full max-w-xl flex items-center justify-center py-6">
                                    <img
                                        src={heroImage}
                                        alt={heroTitle}
                                        className="relative z-10 w-full object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==========================================
                    2. WHAT WE OFFER (SERVICES GRID WITH BOTTOM ACCENT BAR)
                ========================================== */}
                {offerItems.length > 0 && (
                    <section className="bg-white py-16 md:py-24 border-t border-slate-100">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            {/* Section Header */}
                            <div className="text-center">
                                <div className="text-xs font-bold uppercase tracking-widest text-ag-pink">
                                    {offerTag}
                                </div>
                                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ag-dark md:text-4xl">
                                    {offerTitle}
                                </h2>
                                {/* 4-Color Pill Underline */}
                                <div className="mt-3 flex items-center justify-center gap-1">
                                    <span className="h-1 w-6 rounded-full bg-ag-teal" />
                                    <span className="h-1 w-6 rounded-full bg-ag-pink" />
                                    <span className="h-1 w-6 rounded-full bg-ag-yellow" />
                                    <span className="h-1 w-6 rounded-full bg-ag-green" />
                                </div>
                            </div>

                            {/* Service Cards - Supports 3, 4, or 5 cards in 1 row */}
                            <div
                                className={`mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 ${offerItems.length === 5
                                    ? "lg:grid-cols-5"
                                    : offerItems.length === 4
                                        ? "lg:grid-cols-4"
                                        : "lg:grid-cols-3"
                                    }`}
                            >
                                {offerItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.title}
                                            className="relative overflow-hidden group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-7 pb-9 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                        >
                                            <div
                                                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${item.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                                            >
                                                <Icon className="h-8 w-8" />
                                            </div>
                                            <h3 className="text-base font-bold text-ag-dark">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 text-xs leading-relaxed text-ag-muted">
                                                {item.description}
                                            </p>
                                            {/* Bottom Theme Color Accent Bar (Exact Match with Image Mockup) */}
                                            <div
                                                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-16 rounded-t-full ${item.bgColor}`}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* ==========================================
                    3. WHY CHOOSE US SECTION (CONTAINER CARD WITH VERTICAL DIVIDERS)
                ========================================== */}
                {whyFeatures.length > 0 && (
                    <section className="bg-white py-12 md:py-16">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="rounded-3xl bg-sky-50/50 border border-sky-100/80 p-8 md:p-12 shadow-2xs">
                                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                                    {/* Left Side: Sub-tag, Big Title, Subtitle & Button */}
                                    <div className="lg:col-span-4 lg:border-r lg:border-slate-200/80 lg:pr-8">
                                        <div className="text-xs font-bold uppercase tracking-widest text-ag-teal">
                                            {whyTag}
                                        </div>
                                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ag-dark md:text-4xl leading-tight">
                                            {whyTitleMain}{" "}
                                            <span className="block text-ag-pink mt-1">{whyTitleHighlight}</span>
                                        </h2>
                                        <p className="mt-4 text-xs leading-relaxed text-ag-muted">
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
                                                        className={`flex flex-col items-center text-center px-3 ${idx < whyFeatures.length - 1
                                                            ? "lg:border-r lg:border-slate-200/70"
                                                            : ""
                                                            }`}
                                                    >
                                                        <div
                                                            className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${feat.bgColor} text-white shadow-md transition-transform duration-300 hover:scale-110`}
                                                        >
                                                            <Icon className="h-7 w-7" />
                                                        </div>
                                                        <h3 className="text-sm font-bold text-ag-dark">
                                                            {feat.title}
                                                        </h3>
                                                        <p className="mt-2 text-[11px] leading-relaxed text-ag-muted">
                                                            {feat.description}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ==========================================
                    4. OUR PROCESS SECTION (HORIZONTAL CONNECTED TIMELINE)
                ========================================== */}
                {processSteps.length > 0 && (
                    <section className="bg-white py-16 md:py-24 border-t border-slate-100">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <div className="text-xs font-bold uppercase tracking-widest text-ag-pink">
                                    {processTag}
                                </div>
                                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ag-dark md:text-4xl">
                                    {processTitle}
                                </h2>
                                {/* 4-Color Pill Underline */}
                                <div className="mt-3 flex items-center justify-center gap-1">
                                    <span className="h-1 w-6 rounded-full bg-ag-teal" />
                                    <span className="h-1 w-6 rounded-full bg-ag-pink" />
                                    <span className="h-1 w-6 rounded-full bg-ag-yellow" />
                                    <span className="h-1 w-6 rounded-full bg-ag-green" />
                                </div>
                            </div>

                            <div className="relative mt-16">
                                {/* Dotted Line Connector */}
                                <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-200 z-0" />

                                <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 relative z-10 ${processSteps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"}`}>
                                    {processSteps.map((stepItem) => {
                                        const Icon = stepItem.icon;
                                        return (
                                            <div
                                                key={stepItem.step}
                                                className="flex flex-col items-center text-center group"
                                            >
                                                <div
                                                    className={`relative flex h-20 w-20 items-center justify-center rounded-full ${stepItem.bgColor} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                                                >
                                                    <Icon className="h-9 w-9" />
                                                </div>

                                                <span
                                                    className={`mt-4 text-sm font-extrabold tracking-wider ${stepItem.textColor}`}
                                                >
                                                    {stepItem.step}
                                                </span>

                                                <h3 className="mt-1 text-base font-bold text-ag-dark">
                                                    {stepItem.title}
                                                </h3>

                                                <p className="mt-2 text-xs leading-relaxed text-ag-muted">
                                                    {stepItem.description}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ==========================================
                    5. STATS BANNER SECTION (PINK CONTAINER CARD WITH VERTICAL DIVIDERS)
                ========================================== */}
                {stats.length > 0 && (
                    <section className="bg-white py-12 md:py-16">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="relative overflow-hidden rounded-3xl bg-pink-50/60 p-8 md:p-12 border border-pink-100 shadow-2xs">
                                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                                    {/* Left Title */}
                                    <div className="lg:col-span-4 lg:border-r lg:border-pink-200/80 lg:pr-8">
                                        <h2 className="text-2xl font-extrabold tracking-tight text-ag-dark sm:text-3xl leading-tight">
                                            {statsTitleMain}{" "}
                                            <span className="block text-ag-pink mt-1">
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
                                                        className={`flex flex-col items-center justify-center p-4 ${idx < stats.length - 1
                                                            ? "sm:border-r sm:border-pink-200/70"
                                                            : ""
                                                            }`}
                                                    >
                                                        {Icon && (
                                                            <div className="mb-3 text-ag-dark">
                                                                <Icon className={`h-10 w-10 ${statItem.textColor || "text-ag-teal"}`} />
                                                            </div>
                                                        )}
                                                        <div className={`text-4xl font-black ${statItem.textColor || "text-ag-teal"}`}>
                                                            {statItem.number}
                                                        </div>
                                                        <div className="mt-1.5 text-xs font-bold text-ag-dark">
                                                            {statItem.label}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
