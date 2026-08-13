import FlipButton from "@/features/homev2/components/FlipButton";
import { Laptop, Gauge, ShieldCheck, TrendingUp } from "lucide-react";

const heroFeatures = [
    {
        label: "Responsive Design",
        icon: Laptop,
        bgColor: "bg-ag-teal",
    },
    {
        label: "High Performance",
        icon: Gauge,
        bgColor: "bg-ag-pink",
    },
    {
        label: "Secure & Reliable",
        icon: ShieldCheck,
        bgColor: "bg-ag-yellow",
    },
    {
        label: "SEO Friendly",
        icon: TrendingUp,
        bgColor: "bg-ag-green",
    },
];

function ServiceHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white py-10 md:py-16">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-ag-pink-light/60 blur-3xl" />
            <div className="pointer-events-none absolute left-1/3 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-ag-teal-light/70 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Left Column: Hero Text, CTA & Feature Pills */}
                    <div className="lg:col-span-6">
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ag-teal shadow-2xs backdrop-blur-xs">
                            <span className="h-2 w-2 rounded-full bg-ag-teal" />
                            <span>WEB DEVELOPMENT SERVICES</span>
                        </div>

                        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ag-dark sm:text-5xl lg:text-[54px] lg:leading-[1.15]">
                            Powerful Websites.{" "}
                            <span className="block text-ag-pink mt-1">Built for Success.</span>
                        </h1>

                        <p className="mt-5 max-w-xl text-base text-ag-muted sm:text-lg sm:leading-relaxed">
                            We build responsive, fast and secure websites that not only look
                            great but also deliver exceptional performance and drive real business
                            results.
                        </p>

                        <div className="mt-8">
                            <FlipButton
                                to="/contacts"
                                variant="pink"
                                className="px-7 py-3.5 text-base apple-border-shine"
                            >
                                Get a Quote
                            </FlipButton>
                        </div>

                        {/* 4 Feature Pills Row */}
                        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-4 border-t border-slate-100">
                            {heroFeatures.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label} className="flex flex-col items-center text-center group">
                                        <div
                                            className={`mb-2.5 flex h-12 w-12 items-center justify-center rounded-2xl ${item.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <span className="text-xs font-bold text-ag-dark leading-snug">
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Hero Laptop Visual Composition */}
                    <div className="relative flex justify-center lg:col-span-6">
                        <div className="relative w-full max-w-xl flex items-center justify-center py-6">


                            {/* Main Laptop / Desktop Image Asset */}
                            <img
                                src="/images/laptop.png"
                                alt="Powerful Web Development Services"
                                className="relative z-10 w-full object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceHero;
