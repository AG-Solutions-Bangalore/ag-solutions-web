import { motion } from "framer-motion";
import { useLeadModal } from "@/context/LeadModalContext";
import { ArrowRight } from "lucide-react";
import TypewriterText from "@/components/animation/TypewriterText";

function HeroSection() {
    const { openLeadModal } = useLeadModal();

    return (
        <section className="relative overflow-hidden bg-background pt-6 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10 transition-colors duration-200">
            {/* Soft Ambient Background Glows */}
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
                        <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-dark shadow-2xs backdrop-blur-xs">
                            <span className="h-2 w-2 rounded-full bg-pink shrink-0" />
                            <span className="truncate">Digital Solutions That Drive Growth</span>
                        </div>

                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.15]">
                            AG Solutions is a{" "}
                            <span className="text-teal">Solution</span>{" "}
                            <span className="text-pink">Provider</span>{" "}
                            for New Age Businesses
                        </h1>

                        <p className="mt-3.5 max-w-xl mx-auto lg:mx-0 text-sm text-muted sm:text-base md:text-lg sm:leading-relaxed">
                            We help businesses transform ideas into scalable, secure and
                            future-ready digital solutions with cutting-edge engineering.
                        </p>

                        {/* Typewriter text: static 'We provide' with rotating looping services */}
                        <div className="mt-3 min-h-[30px] text-sm sm:text-base md:text-lg font-bold text-teal flex items-center justify-center lg:justify-start">
                            <TypewriterText
                                prefix="We provide"
                                words={[
                                    "web development",
                                    "mobile app",
                                    "digital marketing",
                                    "custom software"
                                ]}
                                speed={45}
                                deleteSpeed={25}
                                pauseTime={1500}
                                delay={300}
                            />
                        </div>

                        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button
                                type="button"
                                onClick={() => openLeadModal("Home Hero")}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-pink-hover text-white font-bold text-sm sm:text-base px-7 py-3 sm:px-8 sm:py-3.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none w-full sm:w-auto"
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
                        <div className="relative w-full max-w-lg lg:max-w-xl flex items-center justify-center py-2 sm:py-4">
                            <img
                                src="/images/laptop.png"
                                alt="AG Solutions Digital Dashboard Laptop"
                                title="AG Solutions Digital Dashboard"
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
