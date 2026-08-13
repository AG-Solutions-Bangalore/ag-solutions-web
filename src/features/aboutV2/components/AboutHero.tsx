import FlipButton from "@/features/homev2/components/FlipButton";

function AboutHero() {
    return (
        <section className="bg-white py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Left Column: Text & CTA */}
                    <div className="lg:col-span-6">
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
                    </div>

                    {/* Right Column: Office Photo & Color Tiles Composition */}
                    <div className="relative lg:col-span-6">
                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            {/* Main Reception Photo */}
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="/images/ag-sl-desk.png"
                                    alt="AG Solutions Reception Office"
                                    className="h-auto w-full object-cover"
                                />
                            </div>

                            {/* Floating Decorative Color Accent Tiles */}
                            {/* Top-Left Teal Tile */}
                            <div className="absolute -left-4 -top-4 h-12 w-12 rounded-2xl bg-ag-teal shadow-md" />
                            {/* Bottom-Left Pink Tile */}
                            <div className="absolute -bottom-5 -left-4 h-14 w-14 rounded-2xl bg-ag-pink shadow-md" />
                            {/* Top-Right Yellow Tile */}
                            <div className="absolute -top-4 -right-4 h-12 w-12 rounded-2xl bg-ag-yellow shadow-md" />
                            {/* Bottom-Right Green Tile */}
                            <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-2xl bg-ag-green shadow-md" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHero;
