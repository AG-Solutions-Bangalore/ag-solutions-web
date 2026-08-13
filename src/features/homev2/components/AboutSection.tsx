import FlipButton from "./FlipButton";

function AboutSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl bg-gradient-to-r from-ag-teal-light/60 via-ag-teal-light/20 to-white p-8 md:p-14 border border-ag-teal-border/40">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-6">
                            <span className="text-xs font-bold uppercase tracking-wider text-ag-teal">
                                ABOUT US
                            </span>
                            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ag-dark md:text-4xl">
                                We Are <span className="text-ag-pink">AG Solutions</span>
                            </h2>
                            <p className="mt-5 text-base leading-relaxed text-ag-muted">
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
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                    <img
                                        src="/images/ag-sl-desk.png"
                                        alt="AG Solutions Reception Office"
                                        className="h-auto w-full object-cover"
                                    />
                                </div>

                                <div className="absolute -left-3 -top-3 h-10 w-10 rounded-xl bg-ag-teal shadow-none md:-left-4 md:-top-4 md:h-12 md:w-12" />
                                <div className="absolute -bottom-4 -left-3 h-11 w-11 rounded-xl bg-ag-pink shadow-none md:-bottom-5 md:-left-4 md:h-14 md:w-14" />
                                <div className="absolute -bottom-3 -right-3 h-10 w-10 rounded-xl bg-ag-yellow shadow-none md:-bottom-4 md:-right-4 md:h-12 md:w-12" />
                                <div className="absolute -right-3 -top-3 h-10 w-10 rounded-xl bg-ag-pink shadow-none md:-right-4 md:h-12 md:w-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
