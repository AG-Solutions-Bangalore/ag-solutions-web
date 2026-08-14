
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import FlipButton from "@/components/ui/FlipButton";

function BuildTogetherCta() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-50/90 via-teal-50/60 to-emerald-50/80 p-8 md:p-14 border border-sky-100 shadow-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Ambient Glow Aura */}
                    <div className="absolute -inset-4 rounded-full bg-ag-teal/15 blur-2xl pointer-events-none z-0" />

                    <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                        {/* Left Column: Text & CTA Button */}
                        <div className="lg:col-span-6 z-10">
                            <h2 className="text-3xl font-extrabold tracking-tight text-ag-dark sm:text-4xl md:text-[42px] leading-tight">
                                Let's Build Something{" "}
                                <span className="block text-ag-pink mt-1">Amazing Together</span>
                            </h2>
                            <p className="mt-4 max-w-lg text-sm text-ag-muted md:text-base leading-relaxed">
                                Partner with AG Solutions and take your business to the next level
                                with our expert IT solutions.
                            </p>
                            <div className="mt-8">
                                <FlipButton
                                    to="/contacts"
                                    variant="pink"
                                    className="px-7 py-3.5 text-base apple-border-shine"
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
                                className="w-full max-w-lg h-auto object-contain drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
                            />

                            {/* ExportBiz Animated Floating Pink Map Pin Marker */}
                            <div className="absolute right-[12%] top-[10%] z-20 hidden sm:block animate-bounce [animation-duration:3s]">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ag-pink text-white shadow-xl ring-4 ring-white">
                                    <MapPin className="h-6 w-6 fill-white stroke-ag-pink" />
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

