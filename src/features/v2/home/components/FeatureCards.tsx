import { motion } from "framer-motion";
import { Users, Lightbulb, ShieldCheck, Headphones } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Experienced Team",
        description:
            "Skilled professionals with deep domain knowledge and technical expertise.",
        classes: {
            icon: "bg-accent-teal shadow-accent-teal/25",
            bar: "bg-accent-teal",
        },
    },
    {
        icon: Lightbulb,
        title: "Innovative Solutions",
        description:
            "We deliver creative, scalable and future-ready solutions tailored to your needs.",
        classes: {
            icon: "bg-accent-pink shadow-accent-pink/25",
            bar: "bg-accent-pink",
        },
    },
    {
        icon: ShieldCheck,
        title: "Quality & Security",
        description:
            "Committed to delivering secure, reliable and high-quality solutions.",
        classes: {
            icon: "bg-accent-green shadow-accent-green/25",
            bar: "bg-accent-green",
        },
    },
    {
        icon: Headphones,
        title: "Dedicated Support",
        description:
            "We provide continuous support to ensure your business runs smoothly.",
        classes: {
            icon: "bg-accent-yellow shadow-accent-yellow/25",
            bar: "bg-accent-yellow",
        },
    },
];

function FeatureCards() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative overflow-hidden flex flex-col items-center justify-between rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-200"
                            >
                                <div className="flex flex-col items-center w-full">
                                    <div className={`apple-border-shine mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${feature.classes.icon}`}>
                                        <Icon className="h-8 w-8 stroke-[1.75]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-accent-dark transition-colors duration-200 group-hover:text-accent-pink">{feature.title}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-accent-muted font-normal">
                                        {feature.description}
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-center w-full">
                                    <div className={`h-1 w-8 rounded-full ${feature.classes.bar} transition-all duration-300 group-hover:w-16`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FeatureCards;