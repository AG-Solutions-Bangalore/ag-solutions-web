import { m } from "framer-motion";
import { Gem, ShieldCheck, Award, Users } from "lucide-react";

const values = [
    {
        title: "Innovation",
        description:
            "We embrace cutting-edge technologies to engineer scalable, forward-thinking digital products.",
        icon: Gem,
        iconContainer: "bg-teal-light text-teal border border-teal-border/40",
        barColor: "bg-teal",
    },
    {
        title: "Integrity",
        description:
            "Transparent workflows, robust data security, and uncompromising commitment to long-term trust.",
        icon: ShieldCheck,
        iconContainer: "bg-pink-light text-pink border border-pink-border/40",
        barColor: "bg-pink",
    },
    {
        title: "Quality",
        description:
            "Pixel-perfect craftsmanship and battle-tested code built to meet international standards.",
        icon: Award,
        iconContainer: "bg-yellow-light text-yellow border border-yellow-border/40",
        barColor: "bg-yellow",
    },
    {
        title: "Customer Focus",
        description:
            "Your business goals guide our solution architecture. We measure our success solely by your growth.",
        icon: Users,
        iconContainer: "bg-green-light text-green border border-green-border/40",
        barColor: "bg-green",
    },
];

function AboutValues() {
    return (
        <section className="py-8 sm:py-12 relative overflow-hidden bg-background transition-colors duration-200">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-pink/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <m.div
                    className="text-center"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink">
                        <span>· · ·</span>
                        <span>OUR VALUES</span>
                        <span>· · ·</span>
                    </div>
                    <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-dark sm:text-3xl md:text-4xl">
                        The Principles That Drive Us
                    </h2>
                    {/* Decorative 4-Color Underline */}
                    <div className="mt-2.5 flex items-center justify-center gap-1">
                        <span className="h-1 w-6 rounded-full bg-teal" />
                        <span className="h-1 w-6 rounded-full bg-pink" />
                        <span className="h-1 w-6 rounded-full bg-yellow" />
                        <span className="h-1 w-6 rounded-full bg-green" />
                    </div>
                    <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted">
                        Our core ethos centers on empowering businesses through unyielding quality, absolute transparency, and continuous innovation.
                    </p>
                </m.div>

                {/* Cards Grid */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((val, idx) => {
                        const Icon = val.icon;
                        return (
                            <m.div
                                key={val.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className="group relative overflow-hidden flex flex-col items-center justify-between rounded-2xl border border-border bg-card p-5 sm:p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-pink/30"
                            >
                                <div className="flex flex-col items-center w-full">
                                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${val.iconContainer}`}>
                                        <Icon className="h-7 w-7 stroke-[1.8]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-dark transition-colors duration-200 group-hover:text-pink">
                                        {val.title}
                                    </h3>
                                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted font-normal">
                                        {val.description}
                                    </p>
                                </div>
                                <div className="mt-5 flex justify-center w-full">
                                    <div className={`h-1 w-8 rounded-full ${val.barColor} transition-all duration-300 group-hover:w-16`} />
                                </div>
                            </m.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default AboutValues;
