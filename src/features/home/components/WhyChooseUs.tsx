import { motion } from "framer-motion";

const features = [
  {
    title: "Process-First Customization",
    description:
      "We design around how your business actually works — never a fixed, one-size-fits-all template.",
    color: "from-teal to-teal-hover",
    accent: "text-teal",
  },
  {
    title: "Business Understanding First",
    description:
      "We study your operations and real requirements before writing a single line of code.",
    color: "from-pink to-pink-hover",
    accent: "text-pink",
  },
  {
    title: "Cross-Industry Experience",
    description:
      "Proven delivery across manufacturing, trade, NGOs, associations, education and more.",
    color: "from-yellow to-yellow-hover",
    accent: "text-yellow-dark",
  },
  {
    title: "End-to-End, One-Stop Capability",
    description:
      "Software, web, mobile, marketing, events and support — all under one roof.",
    color: "from-green to-green-hover",
    accent: "text-green",
  },
  {
    title: "Affordable & Practical Delivery",
    description:
      "Solutions built for real-world budgets, without compromising reliability.",
    color: "from-teal to-teal-hover",
    accent: "text-teal",
  },
  {
    title: "Responsive, Long-Term Support",
    description:
      "Quick turnaround and relationships built to last well beyond go-live.",
    color: "from-pink to-pink-hover",
    accent: "text-pink",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* 50% Inside & 50% Outside Green Accent Floating Indicator */}
      <div className="pointer-events-none absolute -left-6 top-1/3 z-20 hidden md:block">
        <div className="h-12 w-12 rounded-full bg-green/30 blur-xs flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-green shadow-lg" />
        </div>
      </div>
      <div className="pointer-events-none absolute -right-6 bottom-1/4 z-20 hidden md:block">
        <div className="h-12 w-12 rounded-full bg-teal/30 blur-xs flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-teal shadow-lg" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-light px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-pink shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-pink" />
            WHY AG SOLUTIONS
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Built Around Your Business,
            <br className="hidden sm:block" />
            Not the Other Way Around
          </h2>

          <div className="mt-3 flex items-center justify-center gap-1.5">
            <span className="h-1 w-8 rounded-full bg-teal" />
            <span className="h-1 w-8 rounded-full bg-pink" />
            <span className="h-1 w-8 rounded-full bg-yellow" />
            <span className="h-1 w-8 rounded-full bg-green" />
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-slate-300"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.color}`} />

              <div className="mb-4 flex items-center gap-3">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-sm font-black text-white shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={`text-base sm:text-lg font-bold leading-tight ${item.accent}`}>
                  {item.title}
                </h3>
              </div>
              <div className="mb-4 h-px w-full bg-slate-100" />

              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}