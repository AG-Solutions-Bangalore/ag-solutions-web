import { motion } from "framer-motion";
import { useLeadModal } from "@/context/LeadModalContext";
import { ArrowRight } from "lucide-react";
import { getImageUrl } from "@/utils/imageUrl";

function AboutHero() {
    const { openLeadModal } = useLeadModal();

    return (
        <section className="relative overflow-hidden bg-background pt-6 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10 transition-colors duration-200">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[300px] sm:h-[450px] w-[300px] sm:w-[450px] rounded-full bg-pink-light/50 blur-3xl animate-pulse" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
                    {/* Left Column: Text & CTA */}
                    <motion.div
                        className="lg:col-span-6 z-10 text-center lg:text-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal bg-teal-light px-3.5 py-1 rounded-full border border-teal-border/40">
                            ABOUT US
                        </span>
                        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl md:text-5xl lg:leading-tight">
                            We Are <span className="text-pink">AG Solutions</span>
                        </h1>
                        <p className="mt-3.5 text-sm sm:text-base md:text-lg leading-relaxed text-muted max-w-xl mx-auto lg:mx-0">
                            AG Solutions is a leading IT solutions provider dedicated to
                            helping modern businesses navigate the digital landscape. With a relentless focus
                            on innovation, robust architecture, and client satisfaction, we deliver
                            turnkey solutions that scale seamlessly.
                        </p>
                        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button
                                type="button"
                                onClick={() => openLeadModal("About Us")}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-pink-hover text-white font-bold text-sm sm:text-base px-7 py-3 sm:px-8 sm:py-3.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none w-full sm:w-auto"
                            >
                                <span>Get a Free Consultation</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Reception Photo with Exact Floating Square Accents */}
                    <motion.div
                        className="relative lg:col-span-6 flex justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative w-full max-w-lg">
                            {/* Dot Matrix Pattern */}
                            <div className="absolute -left-6 -bottom-4 hidden sm:grid grid-cols-4 gap-1.5 opacity-30 z-10 pointer-events-none">
                                {Array.from({ length: 16 }).map((_, i) => (
                                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-teal" />
                                ))}
                            </div>

                            {/* Soft Pill Accent (Top-Left) */}
                            <div className="absolute -left-4 top-8 z-10 hidden sm:block h-6 w-14 rounded-full bg-teal/20 backdrop-blur-xs" />

                            {/* Floating Teal Square (Left Middle) */}
                            <div className="absolute -left-4 sm:-left-6 top-1/3 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-md bg-teal shadow-xl transition-transform duration-300 hover:scale-110" />

                            {/* Main Reception Photo with Cut-out Geometry */}
                            <div className="relative z-10 overflow-hidden rounded-tl-[50px] sm:rounded-tl-[70px] rounded-br-[50px] sm:rounded-br-[70px] rounded-tr-[24px] rounded-bl-[24px] shadow-2xl transition-transform duration-500 hover:scale-[1.01] aspect-[16/11] sm:aspect-[4/3] bg-slate-100 border border-border">
                                <img
                                    src={getImageUrl("/images/ag-sl-desk.png")}
                                    alt="AG Solutions Reception Office"
                                    title="AG Solutions Office and Reception"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Floating Pink Square (Top Right) */}
                            <div className="absolute -right-4 sm:-right-6 top-6 sm:top-10 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-md bg-pink shadow-xl transition-transform duration-300 hover:scale-110" />

                            {/* Floating Yellow Square (Bottom Right) */}
                            <div className="absolute -right-4 sm:-right-6 bottom-6 sm:bottom-10 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-md bg-yellow shadow-xl transition-transform duration-300 hover:scale-110" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutHero;
