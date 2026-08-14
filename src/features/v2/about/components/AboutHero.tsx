import { motion } from "framer-motion";
import FlipButton from "@/components/ui/FlipButton";

function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-white py-12 md:py-16">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-ag-pink-light/50 blur-3xl animate-pulse" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Left Column: Text & CTA */}
                    <motion.div
                        className="lg:col-span-6 z-10"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-ag-teal">
                            ABOUT US
                        </span>
                        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ag-dark sm:text-4xl md:text-5xl lg:leading-tight">
                            We Are <span className="text-ag-pink">AG Solutions</span>
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-ag-muted md:text-lg">
                            AG Solutions is a leading IT solutions company dedicated to
                            helping businesses navigate the digital landscape. With a focus
                            on innovation, quality and customer satisfaction, we deliver
                            solutions that drive growth and success.
                        </p>
                        <div className="mt-8">
                            <FlipButton
                                to="/contacts"
                                variant="pink"
                                className="px-7 py-3.5 text-base apple-border-shine"
                            >
                                Know More About Us
                            </FlipButton>
                        </div>
                    </motion.div>

                    {/* Right Column: Office Photo & Color Tiles Composition */}
                    <motion.div
                        className="relative lg:col-span-6"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            {/* Main Reception Photo */}
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                                <img
                                    src="/images/ag-sl-desk.png"
                                    alt="AG Solutions Reception Office"
                                    className="h-auto w-full object-cover"
                                />
                            </div>

                            {/* ExportBiz Animated Floating & Spinning Color Accent Tiles */}
                            {/* Top-Left Teal Spinning Tile */}
                            <div className="absolute -left-4 -top-4 h-12 w-12 rounded-2xl bg-ag-teal shadow-md animate-spin [animation-duration:12s] transition-transform duration-300 hover:scale-110 z-20" />
                            {/* Bottom-Left Pink Reverse Spinning Tile */}
                            <div className="absolute -bottom-5 -left-4 h-14 w-14 rounded-2xl bg-ag-pink shadow-md animate-[spin_10s_linear_infinite_reverse] transition-transform duration-300 hover:scale-110 z-20" />
                            {/* Top-Right Yellow Bounce Tile */}
                            <div className="absolute -top-4 -right-4 h-12 w-12 rounded-2xl bg-ag-yellow shadow-md animate-bounce [animation-duration:4s] transition-transform duration-300 hover:scale-110 z-20" />
                            {/* Bottom-Right Green Spinning Tile */}
                            <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-2xl bg-ag-green shadow-md animate-spin [animation-duration:15s] transition-transform duration-300 hover:scale-110 z-20" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutHero;

