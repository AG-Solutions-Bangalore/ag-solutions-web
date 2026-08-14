import { motion } from "framer-motion";
import { Users, Briefcase, Award, Headphones } from "lucide-react";

const stats = [
    {
        number: "100+",
        label: "Happy Clients",
        icon: Users,
        bgColor: "bg-ag-teal",
    },
    {
        number: "150+",
        label: "Projects Completed",
        icon: Briefcase,
        bgColor: "bg-ag-pink",
    },
    {
        number: "10+",
        label: "Years of Experience",
        icon: Award,
        bgColor: "bg-ag-yellow",
    },
    {
        number: "24/7",
        label: "Support Available",
        icon: Headphones,
        bgColor: "bg-ag-green",
    },
];

function AboutStats() {
    return (
        <section className="bg-white py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Background Ambient Glow */}
                    <div className="absolute -inset-4 rounded-full bg-ag-teal/5 blur-2xl pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="group flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 sm:gap-4 cursor-pointer transition-transform duration-300 hover:scale-105"
                                >
                                    <div
                                        className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl ${stat.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                                    >
                                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-black text-ag-dark md:text-3xl transition-colors duration-200 group-hover:text-ag-pink">
                                            {stat.number}
                                        </div>
                                        <div className="text-[11px] sm:text-xs font-semibold text-ag-muted mt-0.5">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutStats;

