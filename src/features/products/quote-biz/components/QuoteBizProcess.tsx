import React from "react";
import { m } from "framer-motion";
import {
  FileEdit,
  Send,
  Eye,
  CheckCircle2,
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badgeBg: string;
  iconBorder: string;
  iconBg: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Create Quote",
    description: "Add items, pricing & terms in minutes",
    icon: <FileEdit className="h-7 w-7 text-teal" />,
    badgeBg: "bg-teal text-white",
    iconBorder: "border-teal/30",
    iconBg: "bg-teal/10",
  },
  {
    number: "02",
    title: "Send Quote",
    description: "Send to customer via email or link",
    icon: <Send className="h-7 w-7 text-pink" />,
    badgeBg: "bg-pink text-white",
    iconBorder: "border-pink/30",
    iconBg: "bg-pink/10",
  },
  {
    number: "03",
    title: "Track & Follow Up",
    description: "Track views & follow up at the right time",
    icon: <Eye className="h-7 w-7 text-amber-500" />,
    badgeBg: "bg-amber-500 text-white",
    iconBorder: "border-amber-500/30",
    iconBg: "bg-amber-500/10",
  },
  {
    number: "04",
    title: "Close Deal",
    description: "Get accepted & convert to invoice instantly",
    icon: <CheckCircle2 className="h-7 w-7 text-emerald-500" />,
    badgeBg: "bg-emerald-500 text-white",
    iconBorder: "border-emerald-500/30",
    iconBg: "bg-emerald-500/10",
  },
];

export const QuoteBizProcess: React.FC = () => {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-500 dark:text-sky-400 mb-3">
            A SIMPLE 4-STEP PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            From Quote to Deal – It&apos;s That Simple
          </h2>
        </div>

        {/* 4-Step Process Flow */}
        <div className="mt-14 sm:mt-18 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {processSteps.map((step, index) => (
              <m.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Step Number Top Pill */}
                <div
                  className={`h-7 px-3 rounded-full ${step.badgeBg} text-xs font-bold flex items-center justify-center shadow-xs mb-3 z-10`}
                >
                  {step.number}
                </div>

                {/* Circular Main Icon Container */}
                <div
                  className={`relative h-20 w-20 rounded-full ${step.iconBg} border-2 ${step.iconBorder} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300 mb-4`}
                >
                  {step.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg font-bold text-dark mb-1 group-hover:text-pink transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-[210px]">
                  {step.description}
                </p>

                {/* Dashed connector line between steps for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[52px] left-[calc(50%+45px)] w-[calc(100%-90px)] border-t-2 border-dashed border-slate-300 dark:border-slate-700 pointer-events-none z-0" />
                )}
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBizProcess;
