import { motion } from "framer-motion";
import { Gem, ShieldCheck, Award, Users } from "lucide-react";

const values = [
    {
        title: "Innovation",
        description:
            "We embrace new ideas and technologies to deliver smart and future-ready solutions.",
        icon: Gem,
        cardBg: "bg-ag-teal-light",
        iconColor: "text-ag-teal",
        barColor: "bg-ag-teal",
        borderColor: "border-ag-teal-border/50",
    },
    {
        title: "Integrity",
        description:
            "We believe in transparency, honesty and building trust with our clients and partners.",
        icon: ShieldCheck,
        cardBg: "bg-ag-pink-light",
        iconColor: "text-ag-pink",
        barColor: "bg-ag-pink",
        borderColor: "border-ag-pink-border/50",
    },
    {
        title: "Quality",
        description:
            "We are committed to delivering high-quality solutions that ensure long-term success.",
        icon: Award,
        cardBg: "bg-ag-yellow-light",
        iconColor: "text-ag-yellow",
        barColor: "bg-ag-yellow",
        borderColor: "border-ag-yellow-border/50",
    },
    {
        title: "Customer Focus",
        description:
            "Our clients are at the heart of everything we do. Their success is our success.",
        icon: Users,
        cardBg: "bg-ag-green-light",
        iconColor: "text-ag-green",
        barColor: "bg-ag-green",
        borderColor: "border-ag-green-border/50",
    },
];

function AboutValues() {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ag-pink">
                        <span>· · ·</span>
                        <span>OUR VALUES</span>
                        <span>· · ·</span>
                    </div>
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ag-dark md:text-4xl">
                        The Principles That Drive Us
                    </h2>
                    {/* Decorative 4-Color Underline */}
                    <div className="mt-3 flex items-center justify-center gap-1">
                        <span className="h-1 w-6 rounded-full bg-ag-teal" />
                        <span className="h-1 w-6 rounded-full bg-ag-pink" />
                        <span className="h-1 w-6 rounded-full bg-ag-yellow" />
                        <span className="h-1 w-6 rounded-full bg-ag-green" />
                    </div>
                </motion.div>

                {/* 4 Cards Grid with ExportBiz Card Lift, Rotate Icon & Expanding Line */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((val, idx) => {
                        const Icon = val.icon;
                        return (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`group relative overflow-hidden flex flex-col items-center justify-between rounded-2xl p-8 text-center border ${val.cardBg} ${val.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
                            >
                                <div className="flex flex-col items-center w-full">
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        <Icon className={`h-8 w-8 ${val.iconColor} stroke-[1.75]`} />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-ag-dark transition-colors duration-200 group-hover:text-ag-pink">
                                        {val.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-ag-muted font-normal">
                                        {val.description}
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-center w-full">
                                    <div className={`h-1 w-8 rounded-full ${val.barColor} transition-all duration-300 group-hover:w-16`} />
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

