import FlipButton from "./FlipButton";

function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white py-10 md:pt-16">
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-ag-pink-light/60 blur-3xl" />
            <div className="pointer-events-none absolute left-1/3 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-ag-teal-light/70 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-6">
                        <div className="inline-flex items-center gap-2.5 rounded-full bg-slate-100/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ag-dark shadow-2xs backdrop-blur-xs">
                            <span className="h-2 w-2 rounded-full bg-ag-pink" />
                            <span>Digital Solutions That Drive Growth</span>
                        </div>

                        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ag-dark sm:text-5xl lg:text-[54px] lg:leading-[1.15]">
                            AG Solutions is a{" "}
                            <span className="text-ag-teal">Solution</span>{" "}
                            <span className="text-ag-pink">Provider</span>{" "}
                            for New Age Businesses
                        </h1>

                        <p className="mt-5 max-w-xl text-base text-ag-muted sm:text-lg sm:leading-relaxed">
                            We help businesses transform ideas into scalable, secure and
                            future-ready digital solutions.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <FlipButton
                                to="/contacts"
                                variant="pink"
                                className="px-7 py-3.5 text-base"
                            >
                                Get a Quote
                            </FlipButton>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:col-span-6">
                        <div className="relative w-full max-w-xl flex items-center justify-center py-6">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#F4F9FC] border border-none z-0 pointer-events-none" />

                            <div className="absolute -top-10 -right-6 sm:-top-16 sm:-right-10 lg:-top-14 lg:-right-16 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full bg-ag-pink/5 border border-none z-0 pointer-events-none" />

                            <img
                                src="/images/laptop.png"
                                alt="AG Solutions Digital Dashboard Laptop"
                                className="relative z-10 w-full object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
