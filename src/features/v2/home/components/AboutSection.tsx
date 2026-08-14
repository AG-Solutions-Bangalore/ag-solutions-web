import { motion } from "framer-motion";
import FlipButton from "@/components/ui/FlipButton";

function AboutSection() {
    return (
        <section className="bg-background py-16 sm:py-20 transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="relative overflow-hidden rounded-3xl bg-card dark:bg-slate-900/90 p-6 sm:p-10 md:p-14 border border-teal-border/40 shadow-2xs"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background Ambient Pulsing Aura */}
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-teal/15 via-green/10 to-pink/15 blur-2xl opacity-70 animate-pulse pointer-events-none z-0" />

                    <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
                        <div className="lg:col-span-6">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal bg-card/80 px-3.5 py-1 rounded-full border border-teal-border/50">
                                ABOUT US
                            </span>
                            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-dark sm:text-4xl md:text-5xl">
                                We Are <span className="text-pink">AG Solutions</span>
                            </h2>
                            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-muted">
                                AG Solutions is a leading IT and digital transformation company dedicated to
                                helping businesses navigate the digital landscape. With a focus
                                on innovation, quality and customer satisfaction, we deliver
                                scalable solutions that drive measurable growth.
                            </p>
                            <div className="mt-6 sm:mt-8">
                                <FlipButton to="/about" title="About AG Solutions" variant="teal" className="px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base">
                                    Know More About Us
                                </FlipButton>
                            </div>
                        </div>

                        {/* Right Taller Vertically-Balanced Composition with Repositioned Corner Dots */}
                        <div className="relative lg:col-span-6 flex justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] aspect-[4/3] sm:aspect-[4/3.5] bg-slate-100">
                                    <img
                                        src="/images/ag-sl-desk.png"
                                        alt="AG Solutions Reception Office"
                                        title="AG Solutions Office and Reception"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Repositioned Decorative Corner Dots */}
                                <div className="absolute -left-2 -top-2 sm:-left-3 sm:-top-3 h-6 w-6 sm:h-10 sm:w-10 rounded-full bg-teal shadow-md transition-transform duration-300 hover:scale-125 z-20 border-2 border-card" />
                                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 h-7 w-7 sm:h-11 sm:w-11 rounded-full bg-pink shadow-md transition-transform duration-300 hover:scale-125 z-20 border-2 border-card" />
                                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 h-6 w-6 sm:h-10 sm:w-10 rounded-full bg-yellow shadow-md transition-transform duration-300 hover:scale-125 z-20 border-2 border-card" />
                                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 h-7 w-7 sm:h-11 sm:w-11 rounded-full bg-green shadow-md transition-transform duration-300 hover:scale-125 z-20 border-2 border-card" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutSection;
