import { motion } from "framer-motion";
import FlipButton from "@/components/ui/FlipButton";

function AboutSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-teal-light/60 via-accent-teal-light/20 to-white p-8 md:p-14 border border-accent-teal-border/40 shadow-2xs"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background Ambient Pulsing Aura */}
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent-teal/15 via-accent-green/10 to-accent-pink/15 blur-2xl opacity-70 animate-pulse pointer-events-none z-0" />

                    <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-6">
                            <span className="text-xs font-bold uppercase tracking-wider text-accent-teal">
                                ABOUT US
                            </span>
                            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-accent-dark md:text-4xl">
                                We Are <span className="text-accent-pink">AG Solutions</span>
                            </h2>
                            <p className="mt-5 text-base leading-relaxed text-accent-muted">
                                AG Solutions is a leading IT solutions company dedicated to
                                helping businesses navigate the digital landscape. With a focus
                                on innovation, quality and customer satisfaction, we deliver
                                solutions that drive growth and success.
                            </p>
                            <div className="mt-8">
                                <FlipButton to="/about" variant="teal" className="px-6 py-3.5">
                                    Know More About Us
                                </FlipButton>
                            </div>
                        </div>

                        <div className="relative lg:col-span-6">
                            <div className="relative mx-auto max-w-md lg:max-w-none">
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                                    <img
                                        src="/images/ag-sl-desk.png"
                                        alt="AG Solutions Reception Office"
                                        className="h-auto w-full object-cover"
                                    />
                                </div>

                                {/* ExportBiz Animated Floating & Spinning Corner Accent Boxes */}
                                <div className="absolute -left-3 -top-3 h-10 w-10 rounded-xl bg-accent-teal shadow-md animate-spin [animation-duration:12s] transition-transform duration-300 hover:scale-110 md:-left-4 md:-top-4 md:h-12 md:w-12 z-20" />

                                <div className="absolute -bottom-4 -left-3 h-11 w-11 rounded-xl bg-accent-pink shadow-md animate-[spin_10s_linear_infinite_reverse] transition-transform duration-300 hover:scale-110 md:-bottom-5 md:-left-4 md:h-14 md:w-14 z-20" />

                                <div className="absolute -bottom-3 -right-3 h-10 w-10 rounded-2xl bg-accent-yellow shadow-md animate-spin [animation-duration:15s] transition-transform duration-300 hover:scale-110 md:-bottom-4 md:-right-4 md:h-12 md:w-12 z-20" />

                                <div className="absolute -right-3 -top-3 h-10 w-10 rounded-xl bg-accent-green shadow-md animate-bounce [animation-duration:4s] transition-transform duration-300 hover:scale-110 md:-right-4 md:h-12 md:w-12 z-20" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutSection;

