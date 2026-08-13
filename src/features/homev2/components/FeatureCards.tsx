import { Users, Lightbulb, ShieldCheck, Headphones } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Experienced Team",
        description:
            "Skilled professionals with deep domain knowledge and technical expertise.",
        classes: {
            icon: "bg-ag-teal shadow-ag-teal/25",
            bar: "bg-ag-teal/20 group-hover:bg-ag-teal",
        },
    },
    {
        icon: Lightbulb,
        title: "Innovative Solutions",
        description:
            "We deliver creative, scalable and future-ready solutions tailored to your needs.",
        classes: {
            icon: "bg-ag-pink shadow-ag-pink/25",
            bar: "bg-ag-pink/20 group-hover:bg-ag-pink",
        },
    },
    {
        icon: ShieldCheck,
        title: "Quality & Security",
        description:
            "Committed to delivering secure, reliable and high-quality solutions.",
        classes: {
            icon: "bg-ag-green shadow-ag-green/25",
            bar: "bg-ag-green/20 group-hover:bg-ag-green",
        },
    },
    {
        icon: Headphones,
        title: "Dedicated Support",
        description:
            "We provide continuous support to ensure your business runs smoothly.",
        classes: {
            icon: "bg-ag-yellow shadow-ag-yellow/25",
            bar: "bg-ag-yellow/20 group-hover:bg-ag-yellow",
        },
    },
];

function FeatureCards() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className={`apple-border-shine mb-5 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-md transition-transform duration-300 group-hover:scale-110 ${feature.classes.icon}`}>
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-bold text-ag-dark">{feature.title}</h3>
                                <p className="mt-2.5 text-sm leading-relaxed text-ag-muted">
                                    {feature.description}
                                </p>
                                <div className={`mt-6 h-1 w-12 rounded-full transition-colors ${feature.classes.bar}`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FeatureCards;