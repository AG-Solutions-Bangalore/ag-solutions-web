import { motion } from "framer-motion";
import SEO from "@/components/seo/SEO";
import { Sparkles, ArrowRight, Home, Clock, Layers, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useLeadModal } from "@/context/LeadModalContext";

interface ComingSoonPageProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function ComingSoonPage({
  title,
  subtitle = "We are crafting something extraordinary.",
  description = "This platform is currently under active engineering and will be launching shortly. Get in touch with our team for early access previews and partnership inquiries.",
}: ComingSoonPageProps) {
  const { openLeadModal } = useLeadModal();

  return (
    <>
      <SEO
        title={`${title} - Coming Soon | AG Solutions`}
        description={description}
      />
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
        {/* Background Ambient Glows & Grids */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-pink-light/60 dark:bg-pink/15 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-teal-light/60 dark:bg-teal/15 blur-3xl animate-pulse [animation-delay:1.5s]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-yellow/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-light dark:bg-pink/15 border border-pink-border/50 dark:border-pink/30 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-pink shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-yellow" />
              <span>UNDER ACTIVE DEVELOPMENT</span>
              <Sparkles className="h-3.5 w-3.5 text-yellow" />
            </div>

            {/* Page Title */}
            <h1 className="mt-5 sm:mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              {title}
            </h1>

            {/* 4-Color Brand Accent Bar */}
            <div className="mt-3.5 sm:mt-4 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-8 rounded-full bg-teal" />
              <span className="h-1.5 w-8 rounded-full bg-pink" />
              <span className="h-1.5 w-8 rounded-full bg-yellow" />
              <span className="h-1.5 w-8 rounded-full bg-green" />
            </div>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-teal">
              {subtitle}
            </p>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base md:text-lg text-muted max-w-xl mx-auto leading-relaxed">
              {description}
            </p>

            {/* Feature Teasers Card Group */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto text-left">
              <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-2xs">
                <div className="h-8 w-8 rounded-lg bg-teal/15 text-teal flex items-center justify-center mb-2.5">
                  <Rocket className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold text-foreground">Fast &amp; Scalable</h4>
                <p className="text-[11px] text-muted mt-1 leading-snug">Engineered for enterprise performance.</p>
              </div>

              <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-2xs">
                <div className="h-8 w-8 rounded-lg bg-pink/15 text-pink flex items-center justify-center mb-2.5">
                  <Layers className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold text-foreground">Modular Architecture</h4>
                <p className="text-[11px] text-muted mt-1 leading-snug">Designed for seamless tool integrations.</p>
              </div>

              <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-2xs">
                <div className="h-8 w-8 rounded-lg bg-yellow/15 text-yellow flex items-center justify-center mb-2.5">
                  <Clock className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold text-foreground">Launching Soon</h4>
                <p className="text-[11px] text-muted mt-1 leading-snug">Final sprint &amp; beta testing underway.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={() => openLeadModal(title)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-pink-hover text-white px-7 py-3.5 text-sm sm:text-base font-bold shadow-md hover:shadow-lg hover:shadow-pink/25 hover:scale-105 active:scale-95 transition-all cursor-pointer border-none w-full sm:w-auto"
              >
                <span>Notify Me / Inquire Early</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-card border border-border text-foreground hover:border-teal hover:text-teal px-7 py-3.5 text-sm sm:text-base font-bold shadow-2xs hover:shadow-md transition-all w-full sm:w-auto no-underline"
              >
                <Home className="h-4 w-4 text-teal" />
                <span>Back to Homepage</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ComingSoonPage;
