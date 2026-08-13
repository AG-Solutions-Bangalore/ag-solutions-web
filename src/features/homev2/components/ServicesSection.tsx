import { Code2, Smartphone, ShoppingCart, Cloud, Settings, BarChart3 } from "lucide-react";
import FlipButton from "./FlipButton";

const services = [
    {
        icon: Code2,
        title: "Web Development",
        description:
            "We build progressive, scalable and high-performance websites tailored to your business goals.",
        link: "/web-development",
        variant: "link-teal" as const,
        iconClass: "bg-ag-teal shadow-ag-teal/20",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
            "We create intuitive and feature-rich mobile apps for iOS and Android platforms.",
        link: "/mobile-app-development",
        variant: "link-teal" as const,
        iconClass: "bg-ag-teal shadow-ag-teal/20",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description:
            "We develop secure and scalable e-commerce platforms to grow your online business.",
        link: "/web-development",
        variant: "link-green" as const,
        iconClass: "bg-ag-green shadow-ag-green/20",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description:
            "We help you leverage the cloud for scalability, flexibility and operational efficiency.",
        link: "/desktop-applications",
        variant: "link-pink" as const,
        iconClass: "bg-ag-pink shadow-ag-pink/20",
    },
    {
        icon: Settings,
        title: "IT Consulting",
        description:
            "We provide expert guidance to help you make the right technology decisions.",
        link: "/about",
        variant: "link-yellow" as const,
        iconClass: "bg-ag-yellow shadow-ag-yellow/20",
    },
    {
        icon: BarChart3,
        title: "Digital Marketing",
        description:
            "We help you build your brand, reach your audience and grow your business online.",
        link: "/ease-marketing",
        variant: "link-green" as const,
        iconClass: "bg-ag-green shadow-ag-green/20",
    },
];

function ServicesSection() {
    return (
        <section className="bg-slate-50/40 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ag-pink">
                        <span>· · ·</span>
                        <span>OUR SERVICES</span>
                        <span>· · ·</span>
                    </div>
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ag-dark md:text-4xl">
                        Services We Offer
                    </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className={`apple-border-shine mb-5 inline-flex rounded-full p-3.5 text-white shadow-md ${service.iconClass}`}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-ag-dark">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-ag-muted">
                                    {service.description}
                                </p>
                                <div className="mt-5">
                                    <FlipButton to={service.link} variant={service.variant}>
                                        Learn More
                                    </FlipButton>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;