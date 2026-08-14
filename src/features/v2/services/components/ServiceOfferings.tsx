import { Globe, ShoppingCart, Smartphone, Settings, Headphones, Rocket } from "lucide-react";

const servicesList = [
    {
        title: "Custom Website Development",
        description:
            "Custom websites that reflect your brand and help you achieve your business goals.",
        icon: Globe,
        bgColor: "bg-teal",
        hoverBorder: "hover:border-teal/30",
    },
    {
        title: "E-Commerce Development",
        description:
            "Secure, scalable and feature-rich e-commerce solutions that drive more sales.",
        icon: ShoppingCart,
        bgColor: "bg-pink",
        hoverBorder: "hover:border-pink/30",
    },
    {
        title: "Responsive Web Design",
        description:
            "Mobile-first designs that work perfectly on all devices and screen sizes.",
        icon: Smartphone,
        bgColor: "bg-yellow",
        hoverBorder: "hover:border-yellow/30",
    },
    {
        title: "CMS Development",
        description:
            "Easy to manage websites using WordPress, Joomla, Shopify and more.",
        icon: Settings,
        bgColor: "bg-green",
        hoverBorder: "hover:border-green/30",
    },
    {
        title: "Website Maintenance & Support",
        description:
            "Reliable maintenance and support to keep your website running smoothly.",
        icon: Headphones,
        bgColor: "bg-teal",
        hoverBorder: "hover:border-teal/30",
    },
    {
        title: "Website Speed Optimization",
        description:
            "We optimize your website for speed to improve performance and user experience.",
        icon: Rocket,
        bgColor: "bg-pink",
        hoverBorder: "hover:border-pink/30",
    },
];

function ServiceOfferings() {
    return (
        <section className="bg-background py-16 md:py-24 border-t border-border transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink">
                        <span>· · ·</span>
                        <span>WHAT WE OFFER</span>
                        <span>· · ·</span>
                    </div>
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
                        Our Web Development Services
                    </h2>
                    {/* Decorative 4-Color Underline */}
                    <div className="mt-3 flex items-center justify-center gap-1">
                        <span className="h-1 w-6 rounded-full bg-teal" />
                        <span className="h-1 w-6 rounded-full bg-pink" />
                        <span className="h-1 w-6 rounded-full bg-yellow" />
                        <span className="h-1 w-6 rounded-full bg-green" />
                    </div>
                </div>

                {/* 6 Cards Grid */}
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {servicesList.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className={`group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.hoverBorder}`}
                            >
                                <div
                                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${item.bgColor} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                                >
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-bold text-dark">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted">
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

export default ServiceOfferings;
