import { m } from "framer-motion";
import { Users, Briefcase, Award, Headphones } from "lucide-react";
import AnimatedCounter from "@/components/animation/AnimatedCounter";

const stats = [
  {
    number: "400+",
    label: "Happy Clients",
    icon: Users,
    bgColor: "bg-teal",
    iconBg: "bg-teal/15 text-teal border border-teal/30",
  },
  {
    number: "450+",
    label: "Projects Completed",
    icon: Briefcase,
    bgColor: "bg-pink",
    iconBg: "bg-pink/15 text-pink border border-pink/30",
  },
  {
    number: "15+",
    label: "Years of Experience",
    icon: Award,
    bgColor: "bg-yellow",
    iconBg: "bg-yellow/15 text-yellow border border-yellow/30",
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: Headphones,
    bgColor: "bg-green",
    iconBg: "bg-green/15 text-green border border-green/30",
  },
];

export function HomeStatsStrip() {
  return (
    <section className="bg-background py-4 sm:py-6 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-xs"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-4 rounded-full bg-teal/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 items-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <m.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 sm:gap-4 p-2 rounded-xl transition-all duration-300 hover:bg-muted/5 cursor-default"
                >
                  <div
                    className={`flex h-11 w-11 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-2xl ${stat.iconBg} shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-dark md:text-3xl tracking-tight transition-colors duration-200 group-hover:text-pink">
                      <AnimatedCounter value={stat.number} />
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </m.div>
      </div>
    </section>
  );
}

export default HomeStatsStrip;
