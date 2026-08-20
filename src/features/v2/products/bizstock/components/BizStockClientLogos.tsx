import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Radio,
  Share2,
  Building,
  Cpu,
  Zap,
} from "lucide-react";

interface ClientBrand {
  name: string;
  sub: string;
  icon: React.ReactNode;
  iconColor: string;
}

const clientBrands: ClientBrand[] = [
  {
    name: "TechCorp",
    sub: "Solutions",
    icon: <Globe className="h-5 w-5" />,
    iconColor: "text-blue-500",
  },
  {
    name: "DigitalValley",
    sub: "Empowering Growth",
    icon: <Radio className="h-5 w-5" />,
    iconColor: "text-cyan-500",
  },
  {
    name: "MarketPlus",
    sub: "Grow Your Brand",
    icon: <Share2 className="h-5 w-5" />,
    iconColor: "text-rose-500",
  },
  {
    name: "Brandify",
    sub: "Think. Create. Grow",
    icon: <Building className="h-5 w-5" />,
    iconColor: "text-indigo-500",
  },
  {
    name: "WebCraft",
    sub: "Digital Solutions",
    icon: <Cpu className="h-5 w-5" />,
    iconColor: "text-blue-600",
  },
  {
    name: "BizBoost",
    sub: "Accelerate Growth",
    icon: <Zap className="h-5 w-5" />,
    iconColor: "text-teal",
  },
];

export const BizStockClientLogos: React.FC = () => {
  return (
    <section className="bg-background py-10 sm:py-14 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-muted mb-8">
          TRUSTED BY BUSINESSES
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center">
          {clientBrands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center justify-center gap-2 text-dark font-bold opacity-75 hover:opacity-100 transition-opacity"
            >
              <div className={brand.iconColor}>{brand.icon}</div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-extrabold leading-none">{brand.name}</div>
                <div className="text-[9px] text-muted font-normal leading-tight mt-0.5">{brand.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BizStockClientLogos;
