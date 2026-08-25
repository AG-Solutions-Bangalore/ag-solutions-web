import { motion } from "framer-motion";
import { Users, Lightbulb, ShieldCheck, Headphones, TrendingUp, Handshake } from "lucide-react";

const features = [
    {
        title: "Experienced Team",
        description:
            "Our skilled professionals bring deep domain knowledge and technical expertise to deliver the best results.",
        icon: Users,
        bgColor: "bg-ag-teal",
    },
    {
        title: "Innovative Solutions",
        description:
            "We use the latest technologies and innovative approaches to solve complex business challenges.",
        icon: Lightbulb,
        bgColor: "bg-ag-pink",
    },
    {
        title: "Reliable & Secure",
        description:
            "We prioritize security and reliability in every solution we build to protect your business.",
        icon: ShieldCheck,
        bgColor: "bg-ag-yellow",
    },
    {
        title: "Dedicated Support",
        description:
            "Our support team is always ready to assist you and ensure your business runs smoothly.",
        icon: Headphones,
        bgColor: "bg-ag-green",
    },
    {
        title: "Result-Oriented",
        description:
            "We focus on delivering measurable results that drive growth and maximize your ROI.",
        icon: TrendingUp,
        bgColor: "bg-ag-teal",
    },
    {
        title: "Long-Term Partnership",
        description:
            "We build long-term relationships with our clients based on trust, value and mutual growth.",
        icon: Handshake,
        bgColor: "bg-ag-pink",
    },
];

function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden bg-section-alt py-12 sm:py-16 md:py-20 border-t border-border transition-colors duration-200">
            {/* Ambient Backdrop Aura */}
            <div className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-teal/10 blur-3xl animate-pulse" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal">
                        <span>· · ·</span>
                        <span>WHY CHOOSE US</span>
                        <span>· · ·</span>
                    </div>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
                        Why Businesses Trust AG Solutions?
                    </h2>
                    {/* Decorative Underline */}
                    <div className="mt-3 flex items-center justify-center gap-1">
                        <span className="h-1 w-6 rounded-full bg-teal" />
                        <span className="h-1 w-6 rounded-full bg-pink" />
                        <span className="h-1 w-6 rounded-full bg-yellow" />
                        <span className="h-1 w-6 rounded-full bg-green" />
                    </div>
                </motion.div>

                {/* 6 Feature Cards Grid */}
                <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feat, idx) => {
                        const Icon = feat.icon;
                        return (
                            <motion.div
                                key={feat.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal/30"
                            >
                                <div
                                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${feat.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                                >
                                    <Icon className="h-6 w-6 stroke-[1.75]" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-dark transition-colors duration-200 group-hover:text-teal">
                                        {feat.title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-muted font-normal">
                                        {feat.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;

