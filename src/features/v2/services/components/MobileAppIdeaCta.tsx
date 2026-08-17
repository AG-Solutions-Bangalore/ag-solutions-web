import { motion } from "framer-motion";
import { useLeadModal } from "@/context/LeadModalContext";
import { ArrowRight } from "lucide-react";
import {
  SiSwift,
  SiKotlin,
  SiFlutter,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiLaravel,
} from "react-icons/si";

const techStack = [
  { name: "Swift", icon: SiSwift, color: "text-[#F05138]" },
  { name: "Kotlin", icon: SiKotlin, color: "text-[#7F52FF]" },
  { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
  { name: "React Native", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
];

export function MobileAppIdeaCta() {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="bg-background py-8 sm:py-12 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Technologies We Use Header */}
        <div className="text-center mb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
            TECHNOLOGIES WE USE
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-full bg-card border border-border px-3.5 py-1.5 shadow-2xs hover:shadow-sm hover:scale-105 transition-all"
                >
                  <Icon className={`h-4 w-4 ${tech.color}`} />
                  <span className="text-xs font-bold text-dark">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main CTA Card */}
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-card dark:bg-slate-900/90 p-6 sm:p-8 md:p-10 border border-border shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-4 rounded-full bg-pink/10 blur-2xl pointer-events-none z-0" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left Column */}
            <div className="lg:col-span-6 z-10 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-dark leading-tight">
                Have an App Idea?{" "}
                <span className="block text-pink mt-1">Let's Build It Together!</span>
              </h2>
              <p className="mt-3 max-w-md mx-auto lg:mx-0 text-xs sm:text-sm text-muted md:text-base leading-relaxed">
                Transform your idea into a powerful, scalable, and intuitive mobile app tailored to your audience.
              </p>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  onClick={() => openLeadModal("Mobile App Idea")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-pink-hover text-white font-bold text-xs sm:text-sm px-6 py-3 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none w-full sm:w-auto"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Image Asset (/images/MA.webp) */}
            <div className="relative lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-lg flex items-center justify-center py-2">
                <img
                  src="/images/MA.webp"
                  alt="Mobile App Development Idea"
                  title="Mobile App Development by AG Solutions"
                  className="relative z-10 w-full max-h-[340px] sm:max-h-[380px] object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MobileAppIdeaCta;
