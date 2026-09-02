import type { ReactNode, ComponentType } from "react";

/**
 * Shared type definitions for the Service page surface.
 *
 * Every Service page (Web Development, Mobile App Development, Digital
 * Marketing, Export Biz) renders through `CommonServicePage` and shares
 * the same props shape. These types live in their own per-perspective
 * module so CommonServicePage, the page components, and any future
 * Service-themed component can import from a single place.
 */

// ───────────────────────────────────────────────────────────────────
// Generic icon type compatible with both react-icons and lucide-react
// ───────────────────────────────────────────────────────────────────
export type ServiceIcon = ComponentType<{ className?: string; size?: number }>;

// ───────────────────────────────────────────────────────────────────
// Hero section
// ───────────────────────────────────────────────────────────────────
export interface HeroFeature {
  label: string;
  icon: ServiceIcon;
  bgColor: string; // e.g. "bg-ag-teal", "bg-ag-pink", "bg-ag-yellow", "bg-ag-green"
}

// ───────────────────────────────────────────────────────────────────
// "What We Offer" section
// ───────────────────────────────────────────────────────────────────
export interface ServiceOfferingItem {
  title: string;
  description: string;
  icon: ServiceIcon;
  bgColor: string;
  accentColor?: string;
}

// ───────────────────────────────────────────────────────────────────
// "Why Choose Us" section
// ───────────────────────────────────────────────────────────────────
export interface WhyChooseFeature {
  title: string;
  description: string;
  icon: ServiceIcon;
  bgColor: string;
}

// ───────────────────────────────────────────────────────────────────
// "Our Process" section
// ───────────────────────────────────────────────────────────────────
export interface ProcessStep {
  step: string; // e.g. "01"
  title: string;
  description: string;
  icon: ServiceIcon;
  bgColor: string;
  textColor: string;
}

// ───────────────────────────────────────────────────────────────────
// Stats banner
// ───────────────────────────────────────────────────────────────────
export interface StatItem {
  number: string; // e.g. "120+"
  label: string;
  icon?: ServiceIcon;
  bgColor?: string;
  textColor?: string;
}

// ───────────────────────────────────────────────────────────────────
// CommonServicePage full props shape
// ───────────────────────────────────────────────────────────────────
export interface CommonServicePageProps {
  // SEO
  seoTitle?: string;
  seoDescription?: string;

  // Hero
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDescription: string;
  heroCtaText?: string;
  heroCtaLink?: string;
  onHeroCtaClick?: () => void;
  heroFeatures?: HeroFeature[];
  heroImage?: string;
  heroImageAlt?: string;
  heroImageTitle?: string;

  // "What We Offer"
  offerTag?: string;
  offerTitle: string;
  offerItems: ServiceOfferingItem[];

  // "Why Choose Us"
  whyTag?: string;
  whyTitleMain: string;
  whyTitleHighlight: string;
  whyDescription: string;
  whyCtaText?: string;
  whyCtaLink?: string;
  whyFeatures: WhyChooseFeature[];

  // "Our Process"
  processTag?: string;
  processTitle: string;
  processSteps: ProcessStep[];

  // Stats Banner
  statsTitleMain: string;
  statsTitleHighlight: string;
  stats: StatItem[];

  // Optional additional content
  children?: ReactNode;
}
