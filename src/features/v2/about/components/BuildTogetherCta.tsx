
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import FlipButton from "@/components/ui/FlipButton";

function BuildTogetherCta() {
    return (
        <section className="bg-background py-12 sm:py-16 transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="relative overflow-hidden rounded-3xl bg-card dark:bg-slate-900/90 p-6 sm:p-10 md:p-14 border border-border shadow-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Ambient Glow Aura */}
                    <div className="absolute -inset-4 rounded-full bg-ag-teal/15 blur-2xl pointer-events-none z-0" />

                    <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                        {/* Left Column: Text & CTA Button */}
                        <div className="lg:col-span-6 z-10">
                            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-extrabold tracking-tight text-dark leading-tight">
                                Let's Build Something{" "}
                                <span className="block text-pink mt-1">Amazing Together</span>
                            </h2>
                            <p className="mt-4 max-w-lg text-sm text-muted md:text-base leading-relaxed">
                                Partner with AG Solutions and take your business to the next level
                                with our expert IT solutions.
                            </p>
                            <div className="mt-6 sm:mt-8">
                                <FlipButton
                                    to="/contacts"
                                    title="Contact AG Solutions"
                                    variant="pink"
                                    className="px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base apple-border-shine"
                                >
                                    Get a Quote
                                </FlipButton>
                            </div>
                        </div>

                        {/* Right Column: Team Collaboration Image with Floating Bounce Map Pin */}
                        <div className="relative lg:col-span-6 flex justify-center items-center z-10">
                            <img
                                src="/images/group-image-03.png"
                                alt="Let's Build Something Amazing Together Team"
                                title="AG Solutions Team"
                                className="w-full max-w-lg object-contain drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
                            />

                            {/* ExportBiz Animated Floating Pink Map Pin Marker */}
                            <div className="absolute right-0 top-0 z-20 hidden sm:block animate-bounce [animation-duration:3s]">
                                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-pink text-white shadow-xl ring-4 ring-card">
                                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 fill-white stroke-pink" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default BuildTogetherCta;

