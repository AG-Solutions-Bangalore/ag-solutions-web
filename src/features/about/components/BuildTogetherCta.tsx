import { m } from "framer-motion";
import { MapPin } from "lucide-react";
import FlipButton from "@/components/ui/FlipButton";
import { getImageUrl } from "@/utils/imageUrl";

function BuildTogetherCta() {
    return (
        <section className="bg-background py-6 sm:py-10 transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <m.div
                    className="relative overflow-hidden rounded-3xl bg-card dark:bg-slate-900/90 p-6 sm:p-8 md:p-10 lg:p-12 border border-border shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Ambient Glow Aura */}
                    <div className="absolute -inset-4 rounded-full bg-teal/15 blur-2xl pointer-events-none z-0" />

                    <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
                        {/* Left Column: Text & CTA Button */}
                        <div className="lg:col-span-5 z-10 text-center lg:text-left">
                            <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
                                Let's Build Something{" "}
                                <span className="block text-pink mt-1">Amazing Together</span>
                            </h2>
                            <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base lg:text-[17px] text-muted leading-relaxed">
                                Partner with AG Solutions and take your business to the next level
                                with our high-impact, custom-crafted digital solutions.
                            </p>
                            <div className="mt-6 sm:mt-8">
                                <FlipButton
                                    to="/contacts"
                                    title="Contact AG Solutions"
                                    variant="pink"
                                    className="px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold apple-border-shine shadow-md"
                                >
                                    Get a Quote
                                </FlipButton>
                            </div>
                        </div>

                        {/* Right Column: Expanded Team Collaboration Image */}
                        <div className="relative lg:col-span-7 flex justify-center items-center z-10">
                            <div className="relative w-full max-w-xl flex justify-center items-center">
                                <img
                                    src={getImageUrl("/images/group-image-03.png")}
                                    alt="Let's Build Something Amazing Together Team"
                                    title="AG Solutions Team"
                                    className="w-full h-auto max-h-[300px] sm:max-h-[360px] lg:max-h-[400px] object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.03]"
                                />

                                {/* Animated Floating Pink Map Pin Marker */}
                                <div className="absolute -right-2 top-2 z-20 hidden sm:block animate-bounce [animation-duration:3s]">
                                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-pink text-white shadow-xl ring-4 ring-card">
                                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 fill-white stroke-pink" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

export default BuildTogetherCta;
