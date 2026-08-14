import { motion } from "framer-motion";
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
        <section className="py-12 sm:py-18 md:py-24 relative overflow-hidden bg-white">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-pink/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink">
                        <span>· · ·</span>
                        <span>OUR VALUES</span>
                        <span>· · ·</span>
                    </div>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-dark sm:text-3xl md:text-5xl">
                        The Principles That Drive Us
                    </h2>
                    {/* Decorative 4-Color Underline */}
                    <div className="mt-3 flex items-center justify-center gap-1.5">
                        <span className="h-1 w-8 rounded-full bg-teal" />
                        <span className="h-1 w-8 rounded-full bg-pink" />
                        <span className="h-1 w-8 rounded-full bg-yellow" />
                        <span className="h-1 w-8 rounded-full bg-green" />
                    </div>
                    <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted">
                        Our core ethos centers on empowering businesses through unyielding quality, absolute transparency, and continuous innovation.
                    </p>
                </motion.div>

                {/* Cards Grid Matching Home Page Cards */}
                <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((val, idx) => {
                        const Icon = val.icon;
                        return (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative overflow-hidden flex flex-col items-center justify-between rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 text-center shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-slate-200"
                            >
                                <div className="flex flex-col items-center w-full">
                                    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${val.iconContainer}`}>
                                        <Icon className="h-8 w-8 stroke-[2]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark transition-colors duration-200 group-hover:text-pink">
                                        {val.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted font-normal">
                                        {val.description}
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-center w-full">
                                    <div className={`h-1 w-10 rounded-full ${val.barColor} transition-all duration-300 group-hover:w-20`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default AboutValues;
