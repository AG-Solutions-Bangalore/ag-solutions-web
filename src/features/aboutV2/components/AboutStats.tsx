import { Users, Briefcase, Award, Headphones } from "lucide-react";

const stats = [
    {
        number: "100+",
        label: "Happy Clients",
        icon: Users,
        bgColor: "bg-ag-teal",
    },
    {
        number: "150+",
        label: "Projects Completed",
        icon: Briefcase,
        bgColor: "bg-ag-pink",
    },
    {
        number: "10+",
        label: "Years of Experience",
        icon: Award,
        bgColor: "bg-ag-yellow",
    },
    {
        number: "24/7",
        label: "Support Available",
        icon: Headphones,
        bgColor: "bg-ag-green",
    },
];

function AboutStats() {
    return (
        <section className="bg-white py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div key={stat.label} className="flex items-center gap-4">
                                    <div
                                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${stat.bgColor} text-white shadow-md`}
                                    >
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-ag-dark md:text-3xl">
                                            {stat.number}
                                        </div>
                                        <div className="text-xs font-semibold text-ag-muted mt-0.5">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutStats;
