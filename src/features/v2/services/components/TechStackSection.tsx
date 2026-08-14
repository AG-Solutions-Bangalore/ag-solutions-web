const technologies = [
    {
        name: "HTML5",
        badgeBg: "bg-orange-50 border-orange-200 text-orange-600",
        iconText: "HTML",
        iconNum: "5",
        iconColor: "bg-orange-500 text-white",
    },
    {
        name: "CSS3",
        badgeBg: "bg-blue-50 border-blue-200 text-blue-600",
        iconText: "CSS",
        iconNum: "3",
        iconColor: "bg-blue-500 text-white",
    },
    {
        name: "JavaScript",
        badgeBg: "bg-amber-50 border-amber-200 text-amber-600",
        iconText: "JS",
        iconColor: "bg-amber-400 text-slate-900 font-extrabold",
    },
    {
        name: "React",
        badgeBg: "bg-cyan-50 border-cyan-200 text-cyan-600",
        iconText: "⚛",
        iconColor: "bg-cyan-500 text-white text-lg",
    },
    {
        name: "Next.js",
        badgeBg: "bg-slate-100 border-slate-300 text-slate-900",
        iconText: "N",
        iconColor: "bg-black text-white font-extrabold",
    },
    {
        name: "PHP",
        badgeBg: "bg-indigo-50 border-indigo-200 text-indigo-700",
        iconText: "php",
        iconColor: "bg-indigo-600 text-white lowercase font-bold",
    },
    {
        name: "WordPress",
        badgeBg: "bg-sky-50 border-sky-200 text-sky-700",
        iconText: "W",
        iconColor: "bg-sky-700 text-white font-serif font-bold",
    },
    {
        name: "Shopify",
        badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
        iconText: "S",
        iconColor: "bg-emerald-600 text-white font-bold",
    },
    {
        name: "Laravel",
        badgeBg: "bg-red-50 border-red-200 text-red-600",
        iconText: "L",
        iconColor: "bg-red-500 text-white font-black",
    },
];

function TechStackSection() {
    return (
        <section className="bg-slate-50/50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ag-teal">
                        <span>· · ·</span>
                        <span>TECHNOLOGIES WE USE</span>
                        <span>· · ·</span>
                    </div>
                </div>

                {/* Badges Flex Grid */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className={`flex items-center gap-3 rounded-2xl border px-5 py-3 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${tech.badgeBg}`}
                        >
                            <div
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs shadow-xs ${tech.iconColor}`}
                            >
                                <span>{tech.iconText}</span>
                                {tech.iconNum && (
                                    <span className="text-[10px] font-bold">{tech.iconNum}</span>
                                )}
                            </div>
                            <span className="text-sm font-bold">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStackSection;
