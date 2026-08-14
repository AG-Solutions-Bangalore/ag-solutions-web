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
    iconBg: "bg-gradient-to-br from-teal to-teal-hover text-white",
    cardGradient: "bg-gradient-to-br from-teal-light/40 via-white to-white hover:border-teal/40",
    glowColor: "group-hover:shadow-teal/10",
  },
  {
    title: "Garment Manufacturers",
    icon: Shirt,
    iconBg: "bg-gradient-to-br from-green to-green-hover text-white",
    cardGradient: "bg-gradient-to-br from-green-light/40 via-white to-white hover:border-green/40",
    glowColor: "group-hover:shadow-green/10",
  },
  {
    title: "Transport & Fleet Management",
    icon: Truck,
    iconBg: "bg-gradient-to-br from-pink to-pink-hover text-white",
    cardGradient: "bg-gradient-to-br from-pink-light/40 via-white to-white hover:border-pink/40",
    glowColor: "group-hover:shadow-pink/10",
  },
  {
    title: "Granite & Tiles Wholesalers",
    icon: Gem,
    iconBg: "bg-gradient-to-br from-yellow to-yellow-hover text-white",
    cardGradient: "bg-gradient-to-br from-yellow-light/40 via-white to-white hover:border-yellow/40",
    glowColor: "group-hover:shadow-yellow/10",
  },
  {
    title: "Large Hardware Retailers",
    icon: ShoppingCart,
    iconBg: "bg-gradient-to-br from-teal to-teal-hover text-white",
    cardGradient: "bg-gradient-to-br from-teal-light/40 via-white to-white hover:border-teal/40",
    glowColor: "group-hover:shadow-teal/10",
  },
  {
    title: "Exporters & Trading Businesses",
    icon: Package,
    iconBg: "bg-gradient-to-br from-green to-green-hover text-white",
    cardGradient: "bg-gradient-to-br from-green-light/40 via-white to-white hover:border-green/40",
    glowColor: "group-hover:shadow-green/10",
  },
  {
    title: "Manufacturing Companies",
    icon: Cog,
    iconBg: "bg-gradient-to-br from-pink to-pink-hover text-white",
    cardGradient: "bg-gradient-to-br from-pink-light/40 via-white to-white hover:border-pink/40",
    glowColor: "group-hover:shadow-pink/10",
  },
  {
    title: "Home Services & Automation",
    icon: Home,
    iconBg: "bg-gradient-to-br from-yellow to-yellow-hover text-white",
    cardGradient: "bg-gradient-to-br from-yellow-light/40 via-white to-white hover:border-yellow/40",
    glowColor: "group-hover:shadow-yellow/10",
  },
  {
    title: "NGOs & Foundations",
    icon: HeartHandshake,
    iconBg: "bg-gradient-to-br from-teal to-teal-hover text-white",
    cardGradient: "bg-gradient-to-br from-teal-light/40 via-white to-white hover:border-teal/40",
    glowColor: "group-hover:shadow-teal/10",
  },
  {
    title: "Communities & Associations",
    icon: Users,
    iconBg: "bg-gradient-to-br from-green to-green-hover text-white",
    cardGradient: "bg-gradient-to-br from-green-light/40 via-white to-white hover:border-green/40",
    glowColor: "group-hover:shadow-green/10",
  },
  {
    title: "Education & Training",
    icon: GraduationCap,
    iconBg: "bg-gradient-to-br from-pink to-pink-hover text-white",
    cardGradient: "bg-gradient-to-br from-pink-light/40 via-white to-white hover:border-pink/40",
    glowColor: "group-hover:shadow-pink/10",
  },
  {
    title: "Business Networking",
    icon: Briefcase,
    iconBg: "bg-gradient-to-br from-yellow to-yellow-hover text-white",
    cardGradient: "bg-gradient-to-br from-yellow-light/40 via-white to-white hover:border-yellow/40",
    glowColor: "group-hover:shadow-yellow/10",
  },
  {
    title: "Matrimonial Platforms",
    icon: Heart,
    iconBg: "bg-gradient-to-br from-pink to-pink-hover text-white",
    cardGradient: "bg-gradient-to-br from-pink-light/40 via-white to-white hover:border-pink/40",
    glowColor: "group-hover:shadow-pink/10",
  },
  {
    title: "Financial Platforms",
    icon: TrendingUp,
    iconBg: "bg-gradient-to-br from-teal to-teal-hover text-white",
    cardGradient: "bg-gradient-to-br from-teal-light/40 via-white to-white hover:border-teal/40",
    glowColor: "group-hover:shadow-teal/10",
  },
  {
    title: "Custom Business Solutions",
    icon: Ellipsis,
    iconBg: "bg-gradient-to-br from-green to-green-hover text-white",
    cardGradient: "bg-gradient-to-br from-green-light/40 via-white to-white hover:border-green/40",
    glowColor: "group-hover:shadow-green/10",
  },
] as const;

export default function Industries() {
  return (
    <AnimatedSection
      className="py-16 text-foreground max-[760px]:py-12 bg-slate-50/50 border-t border-slate-100"
      ariaLabel="Industries we serve"
    >
      {(isVisible) => (
        <div className={layoutContainerClass}>
          <div
            className={`home-animated-item ${
              isVisible ? "home-animated-item-visible" : ""
            }`}
          >
            {/* Pill Badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-border bg-teal-light/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-teal" />
                <span>WHO WE SERVE</span>
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-4 text-center font-heading text-2xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              Industries We Empower
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm sm:text-base leading-relaxed text-muted">
              Delivering scalable digital solutions for businesses across multiple industries
              with innovation, reliability, and measurable growth.
            </p>

            {/* Cards Grid with Brand Gradients */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 sm:gap-4">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`group relative flex items-center gap-3.5 rounded-2xl border border-slate-200/80 p-4 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${item.cardGradient} ${item.glowColor}`}
                    style={{ transitionDelay: `${index * 20}ms` }}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconBg} shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="h-6 w-6 stroke-[2]" />
                    </div>
                    <span className="text-sm font-bold leading-snug text-dark transition-colors group-hover:text-pink">
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
