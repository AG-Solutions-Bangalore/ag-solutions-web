import React from "react";
import { m } from "framer-motion";
import {
  MessageSquare,
  Contact2,
  FileText,
  BarChart3,
  Users,
  Cog,
} from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  accentColor: string;
}

const featureList: FeatureCard[] = [
  {
    title: "Bulk Messaging",
    description: "Send personalized messages to thousands of contacts instantly.",
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    iconBg: "bg-teal shadow-teal/30",
    accentColor: "bg-teal",
  },
  {
    title: "Contact Management",
    description: "Organize, segment, and manage your contacts with ease.",
    icon: <Contact2 className="h-6 w-6 text-white" />,
    iconBg: "bg-pink shadow-pink/30",
    accentColor: "bg-pink",
  },
  {
    title: "Message Templates",
    description: "Create, save, and reuse templates to save time and stay consistent.",
    icon: <FileText className="h-6 w-6 text-white" />,
    iconBg: "bg-amber-500 shadow-amber-500/30",
    accentColor: "bg-amber-500",
  },
  {
    title: "Real-time Analytics",
    description: "Track delivery, reads, replies, and performance in real-time.",
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    iconBg: "bg-emerald-500 shadow-emerald-500/30",
    accentColor: "bg-emerald-500",
  },
  {
    title: "Team Collaboration",
    description: "Add team members, assign roles, and collaborate seamlessly.",
    icon: <Users className="h-6 w-6 text-white" />,
    iconBg: "bg-blue-600 shadow-blue-500/30",
    accentColor: "bg-blue-600",
  },
  {
    title: "Automation Tools",
    description: "Automate follow-ups, reminders, and broadcasts effortlessly.",
    icon: <Cog className="h-6 w-6 text-white" />,
    iconBg: "bg-rose-500 shadow-rose-500/30",
    accentColor: "bg-rose-500",
  },
];

export const EaseMarketingFeatures: React.FC = () => {
  return (
    <section className="bg-slate-50/70 dark:bg-slate-900/30 py-16 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal mb-3">
            WHAT YOU CAN DO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Powerful Features for WhatsApp Marketing
          </h2>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {featureList.map((card, index) => (
            <m.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card rounded-3xl p-6 sm:p-7 border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              {/* Top Colored Square Icon */}
              <div
                className={`h-14 w-14 rounded-2xl ${card.iconBg} shadow-md flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
              >
                {card.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-dark mb-2 group-hover:text-pink transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-muted leading-relaxed flex-1">
                {card.description}
              </p>

              {/* Bottom Decorative Accent Dash Line */}
              <div className="mt-5 w-8 h-1 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <div className={`w-full h-full ${card.accentColor}`} />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EaseMarketingFeatures;
