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
    <section className="relative overflow-hidden bg-[#f8fbff] py-24">
      {/* Background */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            WHO WE SERVE
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Industries We Empower
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Delivering scalable digital solutions for businesses across multiple
            industries with innovation, reliability, and measurable growth.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-2xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} shadow-lg`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-lg font-semibold leading-7 text-slate-900">
                  {item.title}
                </h3>

                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-full`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}