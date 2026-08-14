import { motion } from "framer-motion";
import { Code2, Smartphone, ShoppingCart, Cloud, Settings, BarChart3 } from "lucide-react";
import FlipButton from "@/components/ui/FlipButton";

const services = [
    {
        icon: Code2,
        title: "Web Development",
        description:
            "We build progressive, scalable and high-performance websites tailored to your business goals.",
        link: "/services/web-development",
        linkTitle: "Web Development Services – AG Solutions",
        variant: "link-teal" as const,
        iconClass: "bg-accent-teal shadow-accent-teal/20",
        barBg: "bg-accent-teal",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
            "We create intuitive and feature-rich mobile apps for iOS and Android platforms.",
        link: "/services/mobile-app",
        linkTitle: "Mobile App Development Services – AG Solutions",
        variant: "link-teal" as const,
        iconClass: "bg-accent-teal shadow-accent-teal/20",
        barBg: "bg-accent-teal",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description:
            "We develop secure and scalable e-commerce platforms to grow your online business.",
        link: "/services/web-development",
        linkTitle: "Web Development Services – AG Solutions",
        variant: "link-green" as const,
        iconClass: "bg-accent-green shadow-accent-green/20",
        barBg: "bg-accent-green",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description:
            "We help you leverage the cloud for scalability, flexibility and operational efficiency.",
        link: "/desktop-applications",
        linkTitle: "Desktop Application Development",
        variant: "link-pink" as const,
        iconClass: "bg-accent-pink shadow-accent-pink/20",
        barBg: "bg-accent-pink",
    },
    {
        icon: Settings,
        title: "IT Consulting",
        description:
            "We provide expert guidance to help you make the right technology decisions.",
        link: "/about",
        linkTitle: "About AG Solutions",
        variant: "link-yellow" as const,
        iconClass: "bg-accent-yellow shadow-accent-yellow/20",
        barBg: "bg-accent-yellow",
    },
    {
        icon: BarChart3,
        title: "Digital Marketing",
        description:
            "We help you build your brand, reach your audience and grow your business online.",
        link: "/services/digital-marketing",
        linkTitle: "Digital Marketing Services – AG Solutions",
        variant: "link-green" as const,
        iconClass: "bg-accent-green shadow-accent-green/20",
        barBg: "bg-accent-green",
    },
];

function ServicesSection() {
    return (
        <section className="bg-section-alt py-12 sm:py-16 md:py-24 border-t border-border transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink">
                        <span>· · ·</span>
                        <span>OUR SERVICES</span>
                        <span>· · ·</span>
                    </div>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-dark sm:text-3xl md:text-4xl">
                        Services We Offer
                    </h2>
                    {/* 4-Color Underline Accent */}
                    <div className="mt-3 flex items-center justify-center gap-1">
                        <span className="h-1 w-6 rounded-full bg-teal" />
                        <span className="h-1 w-6 rounded-full bg-pink" />
                        <span className="h-1 w-6 rounded-full bg-yellow" />
                        <span className="h-1 w-6 rounded-full bg-green" />
                    </div>
                </motion.div>

                <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative overflow-hidden flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-pink/30"
                            >
                                <div>
                                    <div className={`apple-border-shine mb-5 inline-flex rounded-2xl p-3.5 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${service.iconClass}`}>
                                        <Icon className="h-6 w-6 stroke-[1.75]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark transition-colors duration-200 group-hover:text-pink">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted font-normal">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <FlipButton to={service.link} title={service.linkTitle} variant={service.variant}>
                                        Learn More
                                    </FlipButton>
                                    <div className={`h-1 w-6 rounded-full ${service.barBg} transition-all duration-300 group-hover:w-12`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;