import { motion } from "framer-motion";
import { useLeadModal } from "@/context/LeadModalContext";
import { ArrowRight } from "lucide-react";

function AboutHero() {
    const { openLeadModal } = useLeadModal();

    return (
        <section className="relative overflow-hidden bg-background py-10 sm:py-14 md:py-20 transition-colors duration-200">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[300px] sm:h-[450px] w-[300px] sm:w-[450px] rounded-full bg-pink-light/50 blur-3xl animate-pulse" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
                    {/* Left Column: Text & CTA */}
                    <motion.div
                        className="lg:col-span-6 z-10"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal bg-teal-light px-3.5 py-1 rounded-full border border-teal-border/40">
                            ABOUT US
                        </span>
                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl md:text-5xl lg:leading-tight">
                            We Are <span className="text-pink">AG Solutions</span>
                        </h1>
                        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-muted">
                            AG Solutions is a leading IT solutions provider dedicated to
                            helping modern businesses navigate the digital landscape. With a relentless focus
                            on innovation, robust architecture, and client satisfaction, we deliver
                            turnkey solutions that scale seamlessly.
                        </p>
                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <button
                                type="button"
                                onClick={() => openLeadModal("About Us")}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-pink-hover text-white font-bold text-base px-8 py-3.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none w-full sm:w-auto"
                            >
                                <span>Get a Free Consultation</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Vertically Balanced Photo & Repositioned Corner Dots */}
                    <motion.div
                        className="relative lg:col-span-6 flex justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative w-full max-w-md">
                            {/* Main Reception Photo */}
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] aspect-[4/3] sm:aspect-[4/3.5] bg-slate-100">
                                <img
                                    src="/images/ag-sl-desk.png"
                                    alt="AG Solutions Reception Office"
                                    title="AG Solutions Office and Reception"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Repositioned Decorative Floating Dots */}
                            <div className="absolute -left-2 -top-2 sm:-left-3 sm:-top-3 h-6 w-6 sm:h-10 sm:w-10 rounded-full bg-teal shadow-md transition-transform duration-300 hover:scale-125 z-20 border-2 border-card" />
                            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 h-7 w-7 sm:h-11 sm:w-11 rounded-full bg-pink shadow-md transition-transform duration-300 hover:scale-125 z-20 border-2 border-card" />
                            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 h-6 w-6 sm:h-10 sm:w-10 rounded-full bg-yellow shadow-md transition-transform duration-300 hover:scale-125 z-20 border-2 border-card" />
                            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 h-7 w-7 sm:h-11 sm:w-11 rounded-full bg-green shadow-md transition-transform duration-300 hover:scale-125 z-20 border-2 border-card" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutHero;
