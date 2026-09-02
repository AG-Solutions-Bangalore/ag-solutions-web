import { m } from "framer-motion";
import FlipButton from "@/components/ui/FlipButton";
import { CheckCircle2 } from "lucide-react";
import { getImageUrl } from "@/utils/imageUrl";

function AboutSection() {
    return (
        <section className="bg-background py-6 sm:py-8 transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-4">
                <m.div
                    className="relative overflow-hidden rounded-3xl bg-card dark:bg-slate-900/90 p-6 border border-teal-border/40 shadow-2xs"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Background Ambient Pulsing Aura */}
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-teal/15 via-green/10 to-pink/15 blur-2xl opacity-70 animate-pulse pointer-events-none z-0" />

                    <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                        {/* Left Column: Expanded & Balanced Typography */}
                        <div className="lg:col-span-6 text-center lg:text-left flex flex-col justify-between space-y-4">
                            <div>
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal bg-card/80 px-3.5 py-1.5 rounded-full border border-teal-border/50 shadow-2xs">
                                    ABOUT US
                                </span>
                            </div>

                            <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
                                We Are <span className="text-pink">AG Solutions</span>
                            </h2>

                            <p className="text-sm sm:text-base lg:text-[17px] leading-relaxed text-muted">
                                AG Solutions is a leading IT and digital transformation company dedicated to
                                helping businesses navigate the digital landscape. With a focus
                                on innovation, quality and customer satisfaction, we deliver
                                scalable solutions that drive measurable growth.
                            </p>

                            {/* Core Highlights to balance vertical height */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
                                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-dark">
                                    <CheckCircle2 className="h-4 w-4 text-teal shrink-0" />
                                    <span>15+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-dark">
                                    <CheckCircle2 className="h-4 w-4 text-pink shrink-0" />
                                    <span>150+ Projects Delivered</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-dark">
                                    <CheckCircle2 className="h-4 w-4 text-green shrink-0" />
                                    <span>Dedicated 24/7 Support</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-dark">
                                    <CheckCircle2 className="h-4 w-4 text-yellow shrink-0" />
                                    <span>Future-Ready Engineering</span>
                                </div>
                            </div>

                            <div className="pt-2">
                                <FlipButton
                                    to="/about"
                                    title="About AG Solutions"
                                    variant="teal"
                                    className="px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold shadow-md"
                                >
                                    Know More About Us
                                </FlipButton>
                            </div>
                        </div>

                        {/* Right Column: Office Showcase with Exact Floating Square Accents (PDF & Reference Screenshot) */}
                        <div className="relative lg:col-span-6 flex justify-center items-center">
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
                                <div className="absolute -left-4 sm:-left-6 top-1/3 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-sm bg-teal shadow-xl transition-transform duration-300 hover:scale-110" />

                                {/* Main Reception Photo with Cut-out Geometry */}
                                <div className="relative z-10 overflow-hidden rounded-tl-[50px] sm:rounded-tl-[70px] rounded-br-[50px] sm:rounded-br-[70px] rounded-tr-[24px] rounded-bl-[24px] shadow-2xl transition-transform duration-500 hover:scale-[1.01] aspect-[16/11] sm:aspect-[4/3] bg-slate-100 border border-border">
                                    <img
                                        src={getImageUrl("/images/ag-sl-desk.webp")}
                                        alt="AG Solutions Reception Office"
                                        title="AG Solutions Office and Reception"
                                        width={600}
                                        height={450}
                                        loading="lazy"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Floating Pink Square (Top Right) */}
                                <div className="absolute -right-4 sm:-right-6 top-6 sm:top-10 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-sm bg-pink shadow-xl transition-transform duration-300 hover:scale-110" />

                                {/* Floating Yellow Square (Bottom Right) */}
                                <div className="absolute -right-4 sm:-right-6 bottom-6 sm:bottom-10 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-sm bg-yellow shadow-xl transition-transform duration-300 hover:scale-110" />
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

export default AboutSection;
