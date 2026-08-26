import { m } from "framer-motion";
import { useLeadModal } from "@/context/LeadModalContext";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  SiSwift,
  SiKotlin,
  SiFlutter,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiLaravel,
} from "react-icons/si";
import { getImageUrl } from "@/utils/imageUrl";

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
                  <span className="text-xs font-bold text-foreground">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <m.div
          className="relative rounded-3xl bg-card border border-border p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Ambient Background Gradient Circles */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-pink/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Copy & CTA */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-light px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-pink">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Turn Ideas Into Products</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
                Have a Mobile App Idea in Mind?
              </h2>

              <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                From concept blueprints to high-performing iOS &amp; Android deployments, our mobile engineers and UI specialists bring your vision to life.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
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
                  src={getImageUrl("/images/MA.webp")}
                  alt="Mobile App Development Idea"
                  title="Mobile App Development by AG Solutions"
                  className="relative z-10 w-full max-h-[340px] sm:max-h-[380px] object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

export default MobileAppIdeaCta;
