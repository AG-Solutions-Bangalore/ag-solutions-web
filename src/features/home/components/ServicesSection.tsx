import { m } from "framer-motion";
import { Code2, Smartphone, ShoppingCart, Cloud, Settings, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: Code2,
        title: "Web Development",
        description:
            "We build progressive, scalable and high-performance websites tailored to your business goals.",
        link: "/web-development",
        linkTitle: "Web Development Services – AG Solutions",
        iconClass: "bg-teal text-white shadow-teal/20",
        hoverTextColor: "group-hover:text-teal",
        linkColor: "text-teal",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
            "We create intuitive and feature-rich mobile apps for iOS and Android platforms.",
        link: "/mobile-app-development",
        linkTitle: "Mobile App Development Services – AG Solutions",
        iconClass: "bg-[#0ea5e9] text-white shadow-sky-500/20",
        hoverTextColor: "group-hover:text-[#0ea5e9]",
        linkColor: "text-[#0ea5e9]",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description:
            "We develop secure and scalable e-commerce platforms to grow your online business.",
        link: "/web-development",
        linkTitle: "E-Commerce Solutions – AG Solutions",
        iconClass: "bg-[#84cc16] text-white shadow-lime-500/20",
        hoverTextColor: "group-hover:text-[#84cc16]",
        linkColor: "text-[#84cc16]",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description:
            "We help you leverage the cloud for scalability, flexibility and operational efficiency.",
        link: "/about",
        linkTitle: "Cloud Solutions – AG Solutions",
        iconClass: "bg-pink text-white shadow-pink/20",
        hoverTextColor: "group-hover:text-pink",
        linkColor: "text-pink",
    },
    {
        icon: Settings,
        title: "IT Consulting",
        description:
            "We provide expert guidance to help you make the right technology decisions.",
        link: "/about",
        linkTitle: "IT Consulting – AG Solutions",
        iconClass: "bg-yellow text-white shadow-yellow/20",
        hoverTextColor: "group-hover:text-yellow",
        linkColor: "text-yellow",
    },
    {
        icon: BarChart3,
        title: "Digital Marketing",
        description:
            "We help you build your brand, reach your audience and grow your business online.",
        link: "/digital-marketing",
        linkTitle: "Digital Marketing Services – AG Solutions",
        iconClass: "bg-green text-white shadow-green/20",
        hoverTextColor: "group-hover:text-green",
        linkColor: "text-green",
    },
];

function ServicesSection() {
    return (
        <section className="bg-section-alt py-10 sm:py-14 border-t border-border transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <m.div
                    className="text-center"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink">
                        <span>· · ·</span>
                        <span>OUR SERVICES</span>
                        <span>· · ·</span>
                    </div>
                    <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-dark sm:text-3xl md:text-4xl">
                        Services We Offer
                    </h2>
                    {/* 4-Color Underline Accent */}
                    <div className="mt-2.5 flex items-center justify-center gap-1">
                        <span className="h-1 w-6 rounded-full bg-teal" />
                        <span className="h-1 w-6 rounded-full bg-pink" />
                        <span className="h-1 w-6 rounded-full bg-yellow" />
                        <span className="h-1 w-6 rounded-full bg-green" />
                    </div>
                </m.div>

                {/* Horizontal Service Cards (Icons beside content as per PDF Page 3) */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <m.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-pink/30 flex items-start gap-4"
                            >
                                {/* Left Side Icon Plate */}
                                <div
                                    className={`shrink-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${service.iconClass} shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3`}
                                >
                                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2]" />
                                </div>

                                {/* Right Side Content */}
                                <div className="flex-1 flex flex-col justify-between min-h-[110px]">
                                    <div>
                                        <h3 className={`text-base sm:text-lg font-bold text-dark transition-colors duration-200 ${service.hoverTextColor}`}>
                                            {service.title}
                                        </h3>
                                        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted font-normal">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="mt-3.5">
                                        <Link
                                            to={service.link}
                                            title={service.linkTitle}
                                            aria-label={`Learn more about ${service.title}`}
                                            className={`inline-flex items-center gap-1.5 text-xs font-bold ${service.linkColor} hover:opacity-80 transition-opacity no-underline`}
                                        >
                                            <span>Learn More</span>
                                            <span className="sr-only"> about {service.title}</span>
                                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </m.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;