import React from "react";
import { m } from "framer-motion";
import {
  Laptop,
  Users,
  Megaphone,
  Factory,
  Building2,
  GraduationCap,
} from "lucide-react";

interface IndustryItem {
  title: string;
  icon: React.ReactNode;
  iconBg: string;
}

const industryList: IndustryItem[] = [
  {
    title: "IT Services",
    icon: <Laptop className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    iconBg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Consulting",
    icon: <Users className="h-6 w-6 text-amber-500" />,
    iconBg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Marketing",
    icon: <Megaphone className="h-6 w-6 text-emerald-500" />,
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Manufacturing",
    icon: <Factory className="h-6 w-6 text-indigo-500" />,
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Construction",
    icon: <Building2 className="h-6 w-6 text-teal" />,
    iconBg: "bg-teal/10 border-teal/20",
  },
  {
    title: "Education",
    icon: <GraduationCap className="h-6 w-6 text-purple-500" />,
    iconBg: "bg-purple-500/10 border-purple-500/20",
  },
];

export const QuoteBizIndustries: React.FC = () => {
  return (
    <section className="bg-slate-50/70 dark:bg-slate-900/30 py-16 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-500 dark:text-sky-400 mb-3">
            BUILT FOR EVERY INDUSTRY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Trusted by Businesses Across Industries
          </h2>
        </div>

        {/* 6 Industry Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {industryList.map((item, index) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-card rounded-3xl p-6 border border-border shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center group hover:-translate-y-1"
            >
              {/* Circular / Squircle Icon Container */}
              <div
                className={`h-14 w-14 rounded-2xl ${item.iconBg} border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-xs`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm font-bold text-dark group-hover:text-pink transition-colors">
                {item.title}
              </h3>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteBizIndustries;
