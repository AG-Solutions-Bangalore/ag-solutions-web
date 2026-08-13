import { Users, Lightbulb, ShieldCheck, Headphones, TrendingUp, Handshake } from "lucide-react";

const features = [
    {
        title: "Experienced Team",
        description:
            "Our skilled professionals bring deep domain knowledge and technical expertise to deliver the best results.",
        icon: Users,
        bgColor: "bg-ag-teal",
    },
    {
        title: "Innovative Solutions",
        description:
            "We use the latest technologies and innovative approaches to solve complex business challenges.",
        icon: Lightbulb,
        bgColor: "bg-ag-pink",
    },
    {
        title: "Reliable & Secure",
        description:
            "We prioritize security and reliability in every solution we build to protect your business.",
        icon: ShieldCheck,
        bgColor: "bg-ag-yellow",
    },
    {
        title: "Dedicated Support",
        description:
            "Our support team is always ready to assist you and ensure your business runs smoothly.",
        icon: Headphones,
        bgColor: "bg-ag-green",
    },
    {
        title: "Result-Oriented",
        description:
            "We focus on delivering measurable results that drive growth and maximize your ROI.",
        icon: TrendingUp,
        bgColor: "bg-ag-teal",
    },
    {
        title: "Long-Term Partnership",
        description:
            "We build long-term relationships with our clients based on trust, value and mutual growth.",
        icon: Handshake,
        bgColor: "bg-ag-pink",
    },
];

function WhyChooseUs() {
    return (
        <section className="bg-slate-50/50 py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ag-teal">
                        <span>· · ·</span>
                        <span>WHY CHOOSE US</span>
                        <span>· · ·</span>
                    </div>
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ag-dark md:text-4xl">
                        Why Businesses Trust AG Solutions?
                    </h2>
                </div>

                {/* 6 Feature Cards Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feat) => {
                        const Icon = feat.icon;
                        return (
                            <div
                                key={feat.title}
                                className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div
                                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${feat.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                                >
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-ag-dark">
                                        {feat.title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-ag-muted">
                                        {feat.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
