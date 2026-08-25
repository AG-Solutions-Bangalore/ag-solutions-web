import FlipButton from "@/components/ui/FlipButton";

function BuildNextBigThingCta() {
    return (
        <section className="bg-background py-16 transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-14 shadow-sm">
                    {/* Ambient Glow */}
                    <div className="absolute -inset-4 rounded-full bg-pink/10 blur-2xl pointer-events-none z-0" />

                    <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                        {/* Left Column: Text & CTA Button */}
                        <div className="lg:col-span-6 z-10">
                            <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl md:text-[42px] leading-tight">
                                Ready to Build Your Next{" "}
                                <span className="block text-pink mt-1">Big Thing?</span>
                            </h2>
                            <p className="mt-4 max-w-lg text-sm text-muted md:text-base leading-relaxed">
                                Let's create a powerful website that drives growth for your business.
                            </p>
                            <div className="mt-8">
                                <FlipButton
                                    to="/contacts"
                                    title="Contact AG Solutions"
                                    variant="pink"
                                    className="px-7 py-3.5 text-base apple-border-shine"
                                >
                                    Get a Quote
                                </FlipButton>
                            </div>
                        </div>

                        {/* Right Column: Code & Analytics UI Composition */}
                        <div className="relative lg:col-span-6 flex justify-center z-10">
                            <div className="relative w-full max-w-md bg-card dark:bg-slate-900 rounded-2xl p-4 shadow-xl border border-border">
                                {/* Browser Window Top Header */}
                                <div className="flex items-center gap-2 border-b border-border pb-3 mb-4">
                                    <span className="h-3 w-3 rounded-full bg-red-400" />
                                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                                    <div className="ml-4 h-5 w-48 rounded-full bg-section-alt text-[10px] flex items-center px-3 text-muted font-mono">
                                        https://your-website.com
                                    </div>
                                </div>

                                {/* Mock UI Layout */}
                                <div className="space-y-3">
                                    <div className="h-8 w-3/4 rounded-lg bg-section-alt" />
                                    <div className="h-4 w-1/2 rounded-md bg-section-alt" />

                                    <div className="grid grid-cols-3 gap-2 pt-2">
                                        <div className="h-16 rounded-xl bg-teal-light border border-teal-border/40 p-2 flex flex-col justify-between">
                                            <span className="text-[10px] font-bold text-teal">Sales</span>
                                            <span className="text-xs font-black text-dark">+148%</span>
                                        </div>
                                        <div className="h-16 rounded-xl bg-pink-light border border-pink-border/40 p-2 flex flex-col justify-between">
                                            <span className="text-[10px] font-bold text-pink">Speed</span>
                                            <span className="text-xs font-black text-dark">99/100</span>
                                        </div>
                                        <div className="h-16 rounded-xl bg-green-light border border-green-border/40 p-2 flex flex-col justify-between">
                                            <span className="text-[10px] font-bold text-green">Uptime</span>
                                            <span className="text-xs font-black text-dark">100%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Code Badge Tile */}
                                <div className="absolute -left-4 -bottom-4 h-12 w-12 rounded-2xl bg-teal text-white flex items-center justify-center font-bold text-sm shadow-lg">
                                    &lt;/&gt;
                                </div>

                                {/* Floating Analytics Tile */}
                                <div className="absolute -right-4 -bottom-4 h-12 w-14 rounded-2xl bg-pink text-white flex items-center justify-center shadow-lg">
                                    <div className="flex items-end gap-1 h-5">
                                        <span className="w-1 bg-white h-2 rounded-xs" />
                                        <span className="w-1 bg-white h-4 rounded-xs" />
                                        <span className="w-1 bg-white h-3 rounded-xs" />
                                        <span className="w-1 bg-white h-5 rounded-xs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BuildNextBigThingCta;
