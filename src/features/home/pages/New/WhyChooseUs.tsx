import { motion } from "framer-motion";

const features = [
  {
    title: "Process-First Customization",
    description:
      "We design around how your business actually works — never a fixed, one-size-fits-all template.",
    image: "/images/whychoose/process.png",
    color: "border-blue-600",
  },
  {
    title: "Business Understanding First",
    description:
      "We study your operations and real requirements before writing a single line of code.",
    image: "/images/whychoose/business.png",
    color: "border-red-400",
  },
  {
    title: "Cross-Industry Experience",
    description:
      "Proven delivery across manufacturing, trade, NGOs, associations, education and more.",
    image: "/images/whychoose/industry.png",
    color: "border-violet-500",
  },
  {
    title: "End-to-End, One-Stop Capability",
    description:
      "Software, web, mobile, marketing, events and support — all under one roof.",
    image: "/images/whychoose/endtoend.png",
    color: "border-emerald-500",
  },
  {
    title: "Affordable & Practical Delivery",
    description:
      "Solutions built for real-world budgets, without compromising reliability.",
    image: "/images/whychoose/affordable.png",
    color: "border-blue-600",
  },
  {
    title: "Responsive, Long-Term Support",
    description:
      "Quick turnaround and relationships built to last well beyond go-live.",
    image: "/images/whychoose/support.png",
    color: "border-red-400",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-slate-800">
            <span className="h-3 w-3 rounded bg-red-500"></span>
            WHY AG SOLUTIONS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            Built Around Your Business,
            <br />
            Not the Other Way Around
          </h2>
        </motion.div>

        {/* Sections */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`group rounded-2xl border-t-4 ${item.color}
      bg-white p-8 shadow-md transition-all duration-300
      hover:shadow-2xl`}
            >
              <div className="mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="leading-8 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}