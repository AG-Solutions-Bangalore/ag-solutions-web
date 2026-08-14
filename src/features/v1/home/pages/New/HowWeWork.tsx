import { motion } from "framer-motion";
import {
  ArrowUp,
  BadgeCheck,
  Clipboard,
  Cloud,
  Database,
  GraduationCap,
  Headphones,
  Laptop,
  Rocket,
  Search,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type TimelineStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  accent: string;
};

type SupportCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
};

const timelineSteps: TimelineStep[] = [
  {
    step: "STEP 01",
    title: "Understand",
    description:
      "Study the business, users, existing process, pain points and desired outcome.",
    icon: Search,
    gradient: "from-sky-500 via-cyan-500 to-blue-600",
    accent: "text-sky-600",
  },
  {
    step: "STEP 02",
    title: "Define",
    description:
      "Translate the requirements into a practical scope, workflow and implementation plan.",
    icon: Clipboard,
    gradient: "from-rose-500 via-red-500 to-orange-500",
    accent: "text-rose-600",
  },
  {
    step: "STEP 03",
    title: "Design & Develop",
    description:
      "Build the interface, application, integrations and required business logic.",
    icon: Laptop,
    gradient: "from-violet-500 via-fuchsia-500 to-purple-600",
    accent: "text-violet-600",
  },
  {
    step: "STEP 04",
    title: "Test & Deploy",
    description:
      "Validate the solution, deploy it and support users through adoption.",
    icon: BadgeCheck,
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    accent: "text-emerald-600",
  },
];

const supportCards: SupportCard[] = [
  {
    title: "Application Maintenance & AMC",
    description: "Ongoing upkeep and annual maintenance contracts.",
    icon: Wrench,
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Hosting & Cloud Management",
    description: "Reliable infrastructure management.",
    icon: Cloud,
    gradient: "from-rose-500 to-red-600",
  },
  {
    title: "Backups",
    description: "Regular backups to prevent data loss.",
    icon: Database,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Upgrades",
    description: "Continuous improvements as your business evolves.",
    icon: ArrowUp,
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    title: "User Training",
    description: "Hands-on training for your team.",
    icon: GraduationCap,
    gradient: "from-sky-500 to-cyan-600",
  },
  {
    title: "Troubleshooting & Support",
    description: "Responsive technical support whenever required.",
    icon: Headphones,
    gradient: "from-rose-500 to-orange-500",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#fcfdff_0%,_#f7fafc_100%)] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute right-[-6%] top-[18%] h-80 w-80 rounded-full bg-violet-100/70 blur-3xl" />
        <div className="absolute bottom-10 left-[20%] h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-sm backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            HOW WE WORK
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            From Idea to Long-Term Partnership
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            We follow a structured process from understanding your business to delivering reliable software and providing long-term support after launch.
          </p>
        </motion.div>

        <div className="mt-14 lg:mt-16">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                Our Process
              </p>
              <h3 className="mt-1.5 text-xl font-semibold text-slate-900 sm:text-2xl">
                A calm, deliberate delivery journey
              </h3>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent md:block" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute left-0 right-0 top-12 hidden h-[2px] origin-left rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 lg:block"
            />
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute left-1/2 top-0 hidden h-full w-[2px] origin-top rounded-full bg-gradient-to-b from-sky-400 via-violet-400 to-emerald-400 md:block lg:hidden"
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {timelineSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="relative overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fbff_100%)] p-6 shadow-[0_18px_45px_-26px_rgba(15,23,42,0.45)] backdrop-blur-xl"
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex shrink-0 rounded-2xl bg-gradient-to-br ${item.gradient} p-3 text-white shadow-lg`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${item.accent}`}>
                          {item.step}
                        </p>
                        <h4 className="text-lg font-bold text-slate-900 leading-tight">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-8 py-8 text-center text-white shadow-[0_30px_90px_-24px_rgba(2,6,23,0.7)] sm:px-10 lg:px-14"
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, -3, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-inner sm:h-18 sm:w-18"
          >
            <Rocket className="h-8 w-8 text-sky-300 sm:h-9 sm:w-9" />
          </motion.div>

          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
            PROJECT GOES LIVE
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Your software is now deployed and ready for your business.
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            A smooth launch marks the beginning of a stronger digital experience built to scale with your team.
          </p>
        </motion.div>

        <div className="mt-16 lg:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              After Go-Live Support
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              After Go-Live Support
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Our partnership doesn&apos;t end after deployment. We continue supporting, improving and scaling your software.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {supportCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-[1.2rem] border border-slate-200/80 bg-[linear-gradient(135deg,_#ffffff_0%,_#fafbff_100%)] p-5 shadow-[0_12px_32px_-20px_rgba(15,23,42,0.42)] backdrop-blur-xl"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.gradient}`} />
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex shrink-0 rounded-2xl bg-gradient-to-br ${card.gradient} p-2.5 text-white shadow-lg transition duration-300 group-hover:rotate-6`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {card.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.description}
                  </p>
                  <div className={`absolute -bottom-8 right-0 h-24 w-24 rounded-full bg-gradient-to-br ${card.gradient} opacity-0 blur-3xl transition duration-500 group-hover:opacity-30`} />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}