import { motion } from "framer-motion";
import {Factory,Shirt,Truck,Gem,Store,Package,Cog,Home,HeartHandshake,Users,GraduationCap,Briefcase,Heart,TrendingUp,Building2,Ellipsis,} from "lucide-react";

const industries = [
  {
    title: "Plastic Industries & Manufacturers",
    icon: Factory,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Garment Manufacturers",
    icon: Shirt,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Transport & Fleet Management",
    icon: Truck,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Granite & Tiles Wholesalers",
    icon: Gem,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Large Hardware Retailers",
    icon: Store,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Exporters & Trading Businesses",
    icon: Package,
    color: "from-rose-500 to-orange-500",
  },
  {
    title: "Manufacturing Companies",
    icon: Cog,
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    title: "Home Services & Automation",
    icon: Home,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "NGOs & Foundations",
    icon: HeartHandshake,
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "Communities & Associations",
    icon: Users,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Education & Training",
    icon: GraduationCap,
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "Business Networking",
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Matrimonial Platforms",
    icon: Heart,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Financial Platforms",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Service Businesses & SMEs",
    icon: Building2,
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Custom Business Solutions",
    icon: Ellipsis,
    color: "from-emerald-500 to-lime-500",
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.08),_transparent_40%),linear-gradient(180deg,_#f8fbff_0%,_#f5f9ff_100%)] py-16 sm:py-20">
      <div className="absolute left-[-8%] top-[-8%] h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute bottom-[-6%] right-[-4%] h-80 w-80 rounded-full bg-violet-200/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-sky-700 shadow-sm backdrop-blur">
            WHO WE SERVE
          </span>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Industries We Empower
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Delivering scalable digital solutions for businesses across multiple
            industries with innovation, reliability, and measurable growth.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[1.05rem] border border-slate-200/80 bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fbff_100%)] p-4 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.35)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_14px_32px_-18px_rgba(15,23,42,0.45)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent transition-all duration-300 group-hover:from-sky-400 group-hover:via-cyan-400 group-hover:to-violet-400" />

                <div className="flex items-start gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} shadow-sm`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300 transition-all duration-300 group-hover:bg-slate-500" />
                </div>

                <h3 className="mt-3 text-[0.95rem] font-semibold leading-6 text-slate-900">
                  {item.title}
                </h3>

                <div className="mt-3 h-0.5 w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-slate-400" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}