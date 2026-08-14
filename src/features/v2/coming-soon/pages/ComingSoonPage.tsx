import { motion } from "framer-motion";
import SEO from "@/components/seo/SEO";
import FlipButton from "@/components/ui/FlipButton";
import { Sparkles, ArrowRight } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";

interface ComingSoonPageProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function ComingSoonPage({
  title,
  subtitle = "We are working on it.",
  description = "This service is currently under active development and will be launching very soon. Stay tuned or get in touch with our team for early inquiries.",
}: ComingSoonPageProps) {
  const { openLeadModal } = useLeadModal();

  return (
    <>
      <SEO
        title={`${title} - Coming Soon | AG Solutions`}
        description={description}
      />
      <div className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-pink/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-light px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-pink shadow-2xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Coming Soon</span>
            </div>

            {/* Title */}
            <h1 className="mt-4 sm:mt-5 text-3xl font-extrabold tracking-tight text-dark sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {/* 4-Color Pill Underline */}
            <div className="mt-3 sm:mt-4 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-8 rounded-full bg-teal" />
              <span className="h-1.5 w-8 rounded-full bg-pink" />
              <span className="h-1.5 w-8 rounded-full bg-yellow" />
              <span className="h-1.5 w-8 rounded-full bg-green" />
            </div>

            <p className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-teal">
              {subtitle}
            </p>

            <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-muted max-w-lg mx-auto leading-relaxed">
              {description}
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={() => openLeadModal(title)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pink text-white px-7 py-3.5 text-sm sm:text-base font-bold shadow-md hover:bg-pink-hover hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none w-full sm:w-auto"
              >
                <span>Notify Me / Inquire Early</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <FlipButton to="/" variant="teal" className="px-7 py-3.5 text-sm sm:text-base">
                Back to Homepage
              </FlipButton>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ComingSoonPage;
