import React from "react";
import { motion } from "framer-motion";
import {
  Hourglass,
  MessageCircle,
  MonitorPlay,
  Handshake,
  Target,
} from "lucide-react";

interface StatusStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badgeBg: string;
  iconBorder: string;
  iconBg: string;
}

const statusSteps: StatusStep[] = [
  {
    number: "01",
    title: "Pending",
    description: "New leads & messages waiting for action.",
    icon: <Hourglass className="h-6 w-6 text-teal" />,
    badgeBg: "bg-teal text-white",
    iconBorder: "border-teal/30",
    iconBg: "bg-teal/10",
  },
  {
    number: "02",
    title: "Follow-up",
    description: "Follow up with interested leads & nurture them.",
    icon: <MessageCircle className="h-6 w-6 text-pink" />,
    badgeBg: "bg-pink text-white",
    iconBorder: "border-pink/30",
    iconBg: "bg-pink/10",
  },
  {
    number: "03",
    title: "Demo",
    description: "Schedule demos and share relevant details.",
    icon: <MonitorPlay className="h-6 w-6 text-amber-500" />,
    badgeBg: "bg-amber-500 text-white",
    iconBorder: "border-amber-500/30",
    iconBg: "bg-amber-500/10",
  },
  {
    number: "04",
    title: "Complete",
    description: "Mark as complete when converted or closed.",
    icon: <Handshake className="h-6 w-6 text-emerald-500" />,
    badgeBg: "bg-emerald-500 text-white",
    iconBorder: "border-emerald-500/30",
    iconBg: "bg-emerald-500/10",
  },
  {
    number: "05",
    title: "Win",
    description: "Turn conversations into loyal customers.",
    icon: <Target className="h-6 w-6 text-blue-600" />,
    badgeBg: "bg-blue-600 text-white",
    iconBorder: "border-blue-600/30",
    iconBg: "bg-blue-500/10",
  },
];

export const EaseMarketingPipeline: React.FC = () => {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-pink mb-3">
            CAMPAIGN STATUS TRACKER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Track Every Conversation, Close Every Opportunity
          </h2>
        </div>

        {/* 5-Step Pipeline Flow */}
        <div className="mt-14 sm:mt-18 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {statusSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Step Number Top Pill */}
                <div
                  className={`h-7 px-2.5 rounded-full ${step.badgeBg} text-xs font-bold flex items-center justify-center shadow-xs mb-3 z-10`}
                >
                  {step.number}
                </div>

                {/* Circular Main Icon Container with subtle ring */}
                <div
                  className={`relative h-20 w-20 rounded-full ${step.iconBg} border-2 ${step.iconBorder} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 mb-4`}
                >
                  {step.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-dark mb-1 group-hover:text-pink transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-muted leading-relaxed max-w-[190px]">
                  {step.description}
                </p>

                {/* Dashed connector line between steps for desktop */}
                {index < statusSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[52px] left-[calc(50%+45px)] w-[calc(100%-90px)] border-t-2 border-dashed border-slate-300 dark:border-slate-700 pointer-events-none z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EaseMarketingPipeline;
