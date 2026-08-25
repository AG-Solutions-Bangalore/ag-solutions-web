import React from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Target, Headphones } from "lucide-react";

interface MetricItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const metrics: MetricItem[] = [
  {
    value: "70+",
    label: "Happy Customers",
    icon: <Globe className="h-6 w-6 text-teal" />,
  },
  {
    value: "1M+",
    label: "Messages Sent",
    icon: <ShieldCheck className="h-6 w-6 text-teal" />,
  },
  {
    value: "98%",
    label: "Delivery Rate",
    icon: <Target className="h-6 w-6 text-pink" />,
  },
  {
    value: "24/7",
    label: "Customer Support",
    icon: <Headphones className="h-6 w-6 text-pink" />,
  },
];

export const EaseMarketingMetricsStrip: React.FC = () => {
  return (
    <section className="bg-[#09152b] py-10 sm:py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center justify-center gap-4 text-center sm:text-left"
            >
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                {item.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">{item.value}</div>
                <div className="text-xs text-blue-200/80 font-medium mt-0.5">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EaseMarketingMetricsStrip;
