import { Users, Code2, Clock, ThumbsUp, DollarSign, Headphones } from "lucide-react";

const reasons = [
    {
        title: "Experienced Team",
        description:
            "Skilled professionals with years of experience delivering successful web solutions.",
        icon: Users,
        bgColor: "bg-teal",
    },
    {
        title: "Clean & Scalable Code",
        description:
            "We follow best coding standards to build secure, scalable and future-ready websites.",
        icon: Code2,
        bgColor: "bg-pink",
    },
    {
        title: "On-Time Delivery",
        description:
            "We value your time and ensure timely delivery without compromising on quality.",
        icon: Clock,
        bgColor: "bg-yellow",
    },
    {
        title: "Client Focused",
        description:
            "We understand your goals and deliver solutions that exceed your expectations.",
        icon: ThumbsUp,
        bgColor: "bg-green",
    },
    {
        title: "Affordable Pricing",
        description:
            "High quality web solutions at competitive prices that fit your budget.",
        icon: DollarSign,
        bgColor: "bg-teal",
    },
    {
        title: "Dedicated Support",
        description:
            "Our support team is always ready to assist you even after your website is live.",
        icon: Headphones,
        bgColor: "bg-pink",
    },
];

function WhyChooseService() {
    return (
        <section className="bg-section-alt py-16 md:py-24 border-t border-border transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal">
                        <span>· · ·</span>
                        <span>WHY CHOOSE AG SOLUTIONS</span>
                        <span>· · ·</span>
                    </div>
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
                        Why Businesses Choose Us for Web Development?
                    </h2>
                </div>

                {/* 6 Feature Cards Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="group flex flex-col items-center rounded-2xl border border-border bg-card p-7 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div
                                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${item.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                                >
                                    <Icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-base font-bold text-dark">
                                    {item.title}
                                </h3>
                                <p className="mt-2.5 text-xs leading-relaxed text-muted">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseService;
