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
    color: "bg-teal text-white",
  },
  {
    title: "Garment Manufacturers",
    icon: Shirt,
    color: "bg-green text-white",
  },
  {
    title: "Transport & Fleet Management",
    icon: Truck,
    color: "bg-pink text-white",
  },
  {
    title: "Granite & Tiles Wholesalers",
    icon: Gem,
    color: "bg-yellow text-dark",
  },
  {
    title: "Large Hardware Retailers",
    icon: ShoppingCart,
    color: "bg-teal text-white",
  },
  {
    title: "Exporters & Trading Businesses",
    icon: Package,
    color: "bg-green text-white",
  },
  {
    title: "Manufacturing Companies",
    icon: Cog,
    color: "bg-pink text-white",
  },
  {
    title: "Home Services & Automation",
    icon: Home,
    color: "bg-yellow text-dark",
  },
  {
    title: "NGOs & Foundations",
    icon: HeartHandshake,
    color: "bg-teal text-white",
  },
  {
    title: "Communities & Associations",
    icon: Users,
    color: "bg-green text-white",
  },
  {
    title: "Education & Training",
    icon: GraduationCap,
    color: "bg-pink text-white",
  },
  {
    title: "Business Networking",
    icon: Briefcase,
    color: "bg-yellow text-dark",
  },
  {
    title: "Matrimonial Platforms",
    icon: Heart,
    color: "bg-pink text-white",
  },
  {
    title: "Financial Platforms",
    icon: TrendingUp,
    color: "bg-teal text-white",
  },
  {
    title: "Custom Business Solutions",
    icon: Ellipsis,
    color: "bg-green text-white",
  },
] as const;

export default function Industries() {
  return (
    <AnimatedSection
      className="py-16 text-foreground max-[760px]:py-12"
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
              <span className="inline-flex items-center rounded-full border border-teal-border  px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal shadow-xs">
                WHO WE SERVE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-4 text-center font-heading text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              Industries We Empower
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm sm:text-base leading-relaxed text-muted-foreground">
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
                    className="group flex items-center gap-3.5 rounded-2xl border border-border/70 bg-card p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-md"
                    style={{ transitionDelay: `${index * 25}ms` }}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.color} shadow-xs transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon className="h-5 w-5 stroke-[2.2]" />
                    </div>
                    <span className="text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-teal">
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

