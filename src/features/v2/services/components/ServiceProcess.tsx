import { MessageSquare, FileEdit, Code2, ClipboardCheck, Rocket } from "lucide-react";

const processSteps = [
    {
        step: "01",
        title: "Requirement Analysis",
        description:
            "We understand your business goals and gather all the necessary requirements.",
        icon: MessageSquare,
        bgColor: "bg-ag-teal",
        textColor: "text-ag-teal",
    },
    {
        step: "02",
        title: "Planning & Design",
        description:
            "We plan the structure and design a user-friendly and engaging interface.",
        icon: FileEdit,
        bgColor: "bg-ag-pink",
        textColor: "text-ag-pink",
    },
    {
        step: "03",
        title: "Development",
        description:
            "Our developers build clean, secure and high-performance web solutions.",
        icon: Code2,
        bgColor: "bg-ag-yellow",
        textColor: "text-ag-yellow",
    },
    {
        step: "04",
        title: "Testing & Quality Check",
        description:
            "We test thoroughly to ensure functionality, responsiveness and cross-browser compatibility.",
        icon: ClipboardCheck,
        bgColor: "bg-ag-green",
        textColor: "text-ag-green",
    },
    {
        step: "05",
        title: "Deployment & Support",
        description:
            "We deploy your website and provide ongoing support for smooth performance.",
        icon: Rocket,
        bgColor: "bg-ag-teal",
        textColor: "text-ag-teal",
    },
];

function ServiceProcess() {
    return (
        <section className="bg-white py-16 md:py-24 border-t border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ag-pink">
                        <span>· · ·</span>
                        <span>OUR PROCESS</span>
                        <span>· · ·</span>
                    </div>
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ag-dark md:text-4xl">
                        Our Web Development Process
                    </h2>
                </div>

                {/* 5 Step Connected Timeline Container */}
                <div className="relative mt-16">
                    {/* Horizontal Dotted Line Connector for Desktop */}
                    <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-200 z-0" />

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
                        {processSteps.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.step}
                                    className="flex flex-col items-center text-center group"
                                >
                                    {/* Icon Badge */}
                                    <div
                                        className={`relative flex h-20 w-20 items-center justify-center rounded-full ${item.bgColor} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <Icon className="h-9 w-9" />
                                    </div>

                                    {/* Step Number */}
                                    <span
                                        className={`mt-4 text-sm font-extrabold tracking-wider ${item.textColor}`}
                                    >
                                        {item.step}
                                    </span>

                                    {/* Step Title */}
                                    <h3 className="mt-1 text-base font-bold text-ag-dark">
                                        {item.title}
                                    </h3>

                                    {/* Step Description */}
                                    <p className="mt-2 text-xs leading-relaxed text-ag-muted">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceProcess;
