import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";
import { NotFoundSEO } from "../seo";
import FlipButton from "@/components/ui/FlipButton";
import { useLeadModal } from "@/context/LeadModalContext";
import {
  ArrowLeft,
  Search,
  Globe,
  Smartphone,
  TrendingUp,
  Package,
  Users,
  MessageSquare,
  Compass,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

interface QuickLink {
  title: string;
  description: string;
  path: string;
  category: "Services" | "Products" | "Company";
  icon: typeof Globe;
  accent: "pink" | "teal" | "yellow" | "blue" | "green";
}

const QUICK_LINKS: QuickLink[] = [
  {
    title: "Web Development",
    description: "Custom scalable web applications, SPAs, and enterprise cloud solutions.",
    path: "/web-development",
    category: "Services",
    icon: Globe,
    accent: "teal",
  },
  {
    title: "Mobile App Development",
    description: "High-performance iOS, Android, and cross-platform mobile experiences.",
    path: "/mobile-app-development",
    category: "Services",
    icon: Smartphone,
    accent: "pink",
  },
  {
    title: "Digital Marketing & SEO",
    description: "Data-driven marketing, brand visibility, SEO, and lead generation.",
    path: "/digital-marketing",
    category: "Services",
    icon: TrendingUp,
    accent: "yellow",
  },
  {
    title: "ExportBiz ERP",
    description: "Intelligent software for export-import management and trade workflows.",
    path: "/export-biz",
    category: "Products",
    icon: Package,
    accent: "blue",
  },
  {
    title: "About AG Solutions",
    description: "Discover our journey, leadership, engineering philosophy, and values.",
    path: "/about",
    category: "Company",
    icon: Users,
    accent: "green",
  },
  {
    title: "Contact & Consultation",
    description: "Get in touch with our tech architects for project estimates and queries.",
    path: "/contact",
    category: "Company",
    icon: MessageSquare,
    accent: "teal",
  },
];

const ACCENT_STYLES = {
  pink: {
    bg: "bg-pink-light",
    text: "text-pink",
    border: "border-pink-border",
    hoverBorder: "hover:border-pink",
    badge: "bg-pink/10 text-pink",
  },
  teal: {
    bg: "bg-teal-light",
    text: "text-teal",
    border: "border-teal-border",
    hoverBorder: "hover:border-teal",
    badge: "bg-teal/10 text-teal",
  },
  yellow: {
    bg: "bg-yellow-light",
    text: "text-yellow",
    border: "border-yellow-border",
    hoverBorder: "hover:border-yellow",
    badge: "bg-yellow/10 text-yellow",
  },
  blue: {
    bg: "bg-blue-light",
    text: "text-blue",
    border: "border-blue-border",
    hoverBorder: "hover:border-blue",
    badge: "bg-blue/10 text-blue",
  },
  green: {
    bg: "bg-green-light",
    text: "text-green",
    border: "border-green-border",
    hoverBorder: "hover:border-green",
    badge: "bg-green/10 text-green",
  },
};

export default function NotFoundPageV2() {
  const navigate = useNavigate();
  const { openLeadModal } = useLeadModal();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLinks = useMemo(() => {
    if (!searchQuery.trim()) return QUICK_LINKS;
    const q = searchQuery.toLowerCase();
    return QUICK_LINKS.filter(
      (link) =>
        link.title.toLowerCase().includes(q) ||
        link.description.toLowerCase().includes(q) ||
        link.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <>
      <NotFoundSEO />

      <div className="relative min-h-[85vh] overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8 transition-colors duration-200">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-light/60 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 right-10 -z-10 h-[400px] w-[400px] rounded-full bg-pink-light/50 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute bottom-10 left-10 -z-10 h-[350px] w-[350px] rounded-full bg-yellow-light/40 blur-3xl" />

        <div className="mx-auto max-w-5xl">
          {/* Main 404 Hero Container */}
          <m.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-border bg-pink-light/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-pink shadow-2xs backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink" />
              </span>
              <span>Error 404 • Lost in Cyberspace</span>
            </div>

            {/* Stylized Floating 404 Display */}
            <div className="relative mt-6 flex items-center justify-center">
              <m.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative select-none"
              >
                <span className="font-heading text-8xl font-black tracking-tighter text-dark/10 sm:text-[140px] md:text-[180px] lg:text-[210px] leading-none block drop-shadow-xs">
                  404
                </span>
                <span className="absolute inset-0 flex items-center justify-center font-heading text-7xl font-black tracking-tighter bg-gradient-to-r from-pink via-teal to-blue bg-clip-text text-transparent sm:text-[120px] md:text-[160px] lg:text-[190px] leading-none pointer-events-none">
                  404
                </span>
              </m.div>

              {/* Floating Floating Icon Badges */}
              <m.div
                animate={{ y: [-6, 6, -6], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 left-1/4 hidden sm:flex items-center gap-1.5 rounded-xl border border-teal-border bg-white/90 px-3 py-2 text-xs font-semibold text-teal shadow-md backdrop-blur-md"
              >
                <Compass className="h-4 w-4" />
                <span>Off Route</span>
              </m.div>

              <m.div
                animate={{ y: [6, -6, 6], rotate: [0, -4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-2 right-1/4 hidden sm:flex items-center gap-1.5 rounded-xl border border-pink-border bg-white/90 px-3 py-2 text-xs font-semibold text-pink shadow-md backdrop-blur-md"
              >
                <Sparkles className="h-4 w-4" />
                <span>Let's Reconnect</span>
              </m.div>
            </div>

            {/* Heading & Empathy Copy */}
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-5xl">
              Oops! We couldn't find that page
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg sm:leading-relaxed">
              The link you clicked might be broken, outdated, or moved to another coordinates.
              Don't worry—let's navigate you back to safety.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <FlipButton to="/" variant="teal" className="px-6 py-3.5 shadow-md text-sm sm:text-base">
                Back to Homepage
              </FlipButton>

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-bold text-dark shadow-2xs transition-all hover:bg-slate-50 hover:border-slate-300 hover:shadow-xs cursor-pointer active:scale-95 w-full sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Go Back</span>
              </button>

              <button
                type="button"
                onClick={() => openLeadModal("404 Help Button")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-pink/10 border border-pink-border px-5 py-3 text-sm font-bold text-pink transition-all hover:bg-pink hover:text-white cursor-pointer active:scale-95 shadow-2xs w-full sm:w-auto"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Request Help</span>
              </button>
            </div>
          </m.div>

          {/* Quick Search & Explore Section */}
          <m.div
            className="mt-12 sm:mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Search Input Bar */}
            <div className="mx-auto max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-muted pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search popular pages, services, or products..."
                  className="w-full rounded-2xl border border-border bg-white/90 py-3.5 pl-12 pr-4 text-base sm:text-sm text-dark placeholder:text-muted/70 shadow-xs backdrop-blur-xs transition-all focus:border-teal focus:bg-white focus:outline-none focus:ring-3 focus:ring-teal/20"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 text-xs font-semibold text-muted hover:text-dark px-2 py-1 rounded bg-slate-100 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Popular Destinations Grid */}
            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-muted">
                  {searchQuery ? `Search Results (${filteredLinks.length})` : "Popular Destinations"}
                </h2>
                <span className="text-xs text-muted">Click to jump directly</span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                  {filteredLinks.length > 0 ? (
                    filteredLinks.map((item, idx) => {
                      const Icon = item.icon;
                      const style = ACCENT_STYLES[item.accent];

                      return (
                        <m.div
                          key={item.path}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                        >
                          <Link
                            to={item.path}
                            className={`group relative flex h-full flex-col justify-between rounded-2xl border bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md no-underline ${style.border} ${style.hoverBorder}`}
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <div
                                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${style.bg} ${style.text}`}
                                >
                                  <Icon className="h-5 w-5" />
                                </div>
                                <span
                                  className={`rounded-md px-2 py-0.5 text-[11px] font-bold tracking-wide uppercase ${style.badge}`}
                                >
                                  {item.category}
                                </span>
                              </div>

                              <h3 className="mt-4 text-base font-bold text-dark group-hover:text-teal transition-colors">
                                {item.title}
                              </h3>
                              <p className="mt-1.5 text-xs leading-relaxed text-muted line-clamp-2">
                                {item.description}
                              </p>
                            </div>

                            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-teal pt-2 border-t border-slate-100">
                              <span>Explore</span>
                              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </Link>
                        </m.div>
                      );
                    })
                  ) : (
                    <div className="col-span-full py-10 text-center rounded-2xl border border-dashed border-border bg-white/50 p-8">
                      <p className="text-sm font-semibold text-dark">
                        No pages match "{searchQuery}"
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        Try a different term or explore our full services menu.
                      </p>
                      <button
                        onClick={() => setSearchQuery("")}
                        className="mt-4 inline-flex items-center text-xs font-bold text-teal hover:underline cursor-pointer"
                      >
                        Reset search
                      </button>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </m.div>

          {/* Quick Support Assistance Callout */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 rounded-2xl border border-teal-border/70 bg-gradient-to-r from-teal-light/40 via-white to-pink-light/30 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6"
          >
            <div>
              <h3 className="text-base font-bold text-dark">
                Need help finding something specific?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                Our technology consultants are available to guide you to the right solution.
              </p>
            </div>
            <div className="flex w-full sm:w-auto shrink-0 items-center justify-center sm:justify-end gap-3">
              <button
                type="button"
                onClick={() => openLeadModal("404 Support Callout")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition-all hover:bg-teal-hover hover:shadow-md cursor-pointer active:scale-95 w-full sm:w-auto"
              >
                <span>Talk to Consultant</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}
