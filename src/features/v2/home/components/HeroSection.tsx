import { motion } from "framer-motion";
import { useLeadModal } from "@/context/LeadModalContext";
import { ArrowRight } from "lucide-react";

function HeroSection() {
    const { openLeadModal } = useLeadModal();

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white py-10 sm:py-12 md:pt-16 md:pb-20">
            {/* Soft Ambient Background Glows */}
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-pink-light/60 blur-3xl animate-pulse" />
            <div className="pointer-events-none absolute left-1/3 top-20 -z-10 h-[250px] sm:h-[400px] w-[250px] sm:w-[400px] rounded-full bg-teal-light/70 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
                    <motion.div
                        className="lg:col-span-6 z-10"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-dark shadow-2xs backdrop-blur-xs">
                            <span className="h-2 w-2 rounded-full bg-pink shrink-0" />
                            <span className="truncate">Digital Solutions That Drive Growth</span>
                        </div>

                        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.15]">
                            AG Solutions is a{" "}
                            <span className="text-teal">Solution</span>{" "}
                            <span className="text-pink">Provider</span>{" "}
                            for New Age Businesses
                        </h1>

                        <p className="mt-4 max-w-xl text-base text-muted sm:text-lg sm:leading-relaxed">
                            We help businesses transform ideas into scalable, secure and
                            future-ready digital solutions with cutting-edge engineering.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <button
                                type="button"
                                onClick={() => openLeadModal("Home Hero")}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-pink-hover text-white font-bold text-base px-8 py-3.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none w-full sm:w-auto"
                            >
                                <span>Get a Quote</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative flex justify-center lg:col-span-6"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative w-full max-w-xl flex items-center justify-center py-4 sm:py-6">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[460px] sm:h-[460px] lg:w-[580px] lg:h-[580px] rounded-full bg-[#F4F9FC] border border-none z-0 pointer-events-none" />

                            <img
                                src="/images/laptop.png"
                                alt="AG Solutions Digital Dashboard Laptop"
                                className="relative z-10 w-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
