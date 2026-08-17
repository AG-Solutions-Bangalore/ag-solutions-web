import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import {
  Factory,
  Shirt,
  Truck,
  Gem,
  ShoppingCart,
  Package,
  Cog,
  Home,
  HeartHandshake,
  Users,
  GraduationCap,
  Briefcase,
  Heart,
  TrendingUp,
  Ellipsis,
} from "lucide-react";

const industries = [
  {
    title: "Plastic Industries & Manufacturers",
    icon: Factory,
    color: "from-[#3b82f6] to-[#06b6d4]",
  },
  {
    title: "Garment Manufacturers",
    icon: Shirt,
    color: "from-[#ec4899] to-[#f43f5e]",
  },
  {
    title: "Transport & Fleet Management",
    icon: Truck,
    color: "from-[#8b5cf6] to-[#6366f1]",
  },
  {
    title: "Granite & Tiles Wholesalers",
    icon: Gem,
    color: "from-[#10b981] to-[#14b8a6]",
  },
  {
    title: "Large Hardware Retailers",
    icon: ShoppingCart,
    color: "from-[#2563eb] to-[#4f46e5]",
  },
  {
    title: "Exporters & Trading Businesses",
    icon: Package,
    color: "from-[#f97316] to-[#ef4444]",
  },
  {
    title: "Manufacturing Companies",
    icon: Cog,
    color: "from-[#a855f7] to-[#d946ef]",
  },
  {
    title: "Home Services & Automation",
    icon: Home,
    color: "from-[#10b981] to-[#059669]",
  },
  {
    title: "NGOs & Foundations",
    icon: HeartHandshake,
    color: "from-[#0284c7] to-[#2563eb]",
  },
  {
    title: "Communities & Associations",
    icon: Users,
    color: "from-[#e11d48] to-[#f43f5e]",
  },
  {
    title: "Education & Training",
    icon: GraduationCap,
    color: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    title: "Business Networking",
    icon: Briefcase,
    color: "from-[#14b8a6] to-[#06b6d4]",
  },
  {
    title: "Matrimonial Platforms",
    icon: Heart,
    color: "from-[#f43f5e] to-[#e11d48]",
  },
  {
    title: "Financial Platforms",
    icon: TrendingUp,
    color: "from-[#f97316] to-[#ea580c]",
  },
  {
    title: "Custom Business Solutions",
    icon: Ellipsis,
    color: "from-[#84cc16] to-[#10b981]",
  },
] as const;

export default function Industries() {
  return (
    <AnimatedSection
      className="bg-[#f8fafc] py-16 text-[#1b2c38] max-[760px]:py-12"
      ariaLabel="Industries we serve"
    >
      {(isVisible) => (
        <div className={layoutContainerClass}>
          <div
            className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""
              }`}
          >
            {/* Pill Badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284c7] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                WHO WE SERVE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-4 text-center text-3xl font-extrabold text-[#0f172a] sm:text-4xl lg:text-5xl">
              Industries We Empower
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm sm:text-base leading-relaxed text-[#64748b]">
              Delivering scalable digital solutions for businesses across multiple industries
              with innovation, reliability, and measurable growth.
            </p>

            {/* Cards Grid - 5 columns */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 sm:gap-4">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-3.5 rounded-2xl border border-slate-200/70 bg-white p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                    style={{ transitionDelay: `${index * 25}ms` }}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xs transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon className="h-5 w-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[13.5px] font-bold leading-snug text-[#1e293b]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}

