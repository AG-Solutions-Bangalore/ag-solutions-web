import { m } from "framer-motion";
import { getImageUrl } from "@/utils/imageUrl";

const culture = [
  {
    title: "Business-First Approach",
    description:
      "We begin every project by understanding your business goals, workflows, and challenges before writing any code.",
    image: getImageUrl("/images/whychoose/business.png"),
  },
  {
    title: "Agile Development",
    description:
      "Our team follows an agile process with continuous feedback, faster iterations, and transparent communication.",
    image: getImageUrl("/images/whychoose/process.png"),
  },
  {
    title: "Long-Term Partnership",
    description:
      "We stay with our clients beyond project delivery by providing maintenance, upgrades, and ongoing support.",
    image: getImageUrl("/images/whychoose/support.png"),
  },
];

export default function WorkCulture() {
  return (
    <section className="bg-[#F7F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full border border-blue-200 bg-white px-6 py-2 text-sm font-semibold uppercase tracking-[3px] text-blue-700">
            Our Work Culture
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-bold text-slate-900">
            Building Technology Through
            <span className="block text-blue-600">
              Collaboration, Innovation & Trust
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Our culture is driven by teamwork, creativity, and a commitment to
            delivering reliable digital solutions that help businesses grow.
          </p>
        </div>

        {/* Content */}

        <div className="mt-24 grid gap-10 lg:grid-cols-5 items-start">
          {culture.map((item, index) => (
            <>
              <m.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <m.img
                  src={item.image}
                  alt={item.title}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="mx-auto h-48 w-48 object-contain"
                />

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {item.description}
                </p>
              </m.div>

              {index !== culture.length - 1 && (
                <div className="hidden lg:flex items-center justify-center pt-20">
                  <svg
                    width="180"
                    height="60"
                    viewBox="0 0 180 60"
                    fill="none"
                  >
                    <path
                      d="M10 30 C50 0,130 60,170 30"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="8 8"
                    />
                    <path
                      d="M160 22 L170 30 L160 38"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}