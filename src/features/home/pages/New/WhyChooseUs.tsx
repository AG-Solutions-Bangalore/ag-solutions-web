import { motion } from "framer-motion";

const features = [
  {
    title: "Process-First Customization",
    description:
      "We design around how your business actually works — never a fixed, one-size-fits-all template.",
    color: "from-blue-500 to-cyan-500",
    accent: "text-blue-600",
  },
  {
    title: "Business Understanding First",
    description:
      "We study your operations and real requirements before writing a single line of code.",
    color: "from-rose-500 to-red-500",
    accent: "text-red-500",
  },
  {
    title: "Cross-Industry Experience",
    description:
      "Proven delivery across manufacturing, trade, NGOs, associations, education and more.",
    color: "from-violet-500 to-fuchsia-500",
    accent: "text-violet-600",
  },
  {
    title: "End-to-End, One-Stop Capability",
    description:
      "Software, web, mobile, marketing, events and support — all under one roof.",
    color: "from-emerald-500 to-teal-500",
    accent: "text-emerald-600",
  },
  {
    title: "Affordable & Practical Delivery",
    description:
      "Solutions built for real-world budgets, without compromising reliability.",
    color: "from-sky-500 to-blue-600",
    accent: "text-sky-600",
  },
  {
    title: "Responsive, Long-Term Support",
    description:
      "Quick turnaround and relationships built to last well beyond go-live.",
    color: "from-orange-500 to-amber-500",
    accent: "text-orange-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-800">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
            WHY AG SOLUTIONS
          </span>

          <h2 className="mt-4 text-2.5xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Built Around Your Business,
            <br className="hidden sm:block" />
            Not the Other Way Around
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[1.3rem] border border-slate-200/70 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_100%)] p-6 shadow-[0_12px_34px_-20px_rgba(15,23,42,0.35)] transition-all duration-300 hover:shadow-[0_18px_42px_-20px_rgba(15,23,42,0.45)]"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${item.color}`} />
              <div className={`absolute inset-y-0 left-0 w-1 bg-linear-to-b ${item.color}`} />

              <div className="mb-4 flex items-center gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-2xl bg-linear-to-r ${item.color} text-sm font-semibold text-white`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <h3 className={`mb-3 text-lg font-semibold leading-7 ${item.accent}`}>
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}