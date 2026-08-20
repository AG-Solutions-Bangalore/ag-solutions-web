import React from "react";
import { motion } from "framer-motion";
import {
  QrCode,
  Warehouse,
  PackageCheck,
  RefreshCw,
  Zap,
  CheckCircle2,
} from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  icon: React.ReactNode;
  bulletPoints: string[];
}

const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Goods Inward & Barcode Receiving",
    badge: "INWARD SCAN",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    description:
      "Instantly scan inbound shipments using smartphones or rugged handheld scanners. Automatically match items against vendor Purchase Orders and generate Goods Receipt Notes (GRN).",
    icon: <QrCode className="h-6 w-6 text-blue-500" />,
    bulletPoints: [
      "1D/2D Barcode & QR Code validation",
      "Lot, batch & expiry date recording",
      "Instant discrepancy & damaged goods alert",
    ],
  },
  {
    step: "02",
    title: "Multi-Bin & Warehouse Placement",
    badge: "LOCATION ALLOCATION",
    badgeColor: "bg-teal/10 text-teal border-teal/30",
    description:
      "BizStock recommends optimal bin, rack, and aisle storage locations based on turnover velocity and storage conditions. Move stock seamlessly across multiple physical or virtual depots.",
    icon: <Warehouse className="h-6 w-6 text-teal" />,
    bulletPoints: [
      "Dynamic bin mapping & zone rules",
      "Inter-warehouse stock transfer slips",
      "FIFO, LIFO & FEFO allocation tracking",
    ],
  },
  {
    step: "03",
    title: "Error-Proof Picking & Dispatch",
    badge: "FAST FULFILLMENT",
    badgeColor: "bg-pink/10 text-pink border-pink/30",
    description:
      "Empower picking teams with mobile pick paths that reduce warehouse transit time by up to 60%. Validate every scanned item to guarantee 100% order accuracy before shipping.",
    icon: <PackageCheck className="h-6 w-6 text-pink" />,
    bulletPoints: [
      "Optimized wave & batch picking routes",
      "Double-scan packing verification",
      "Automated shipping labels & manifest generation",
    ],
  },
  {
    step: "04",
    title: "Predictive Reorder & Supplier Sync",
    badge: "AUTO REPLENISH",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    description:
      "When stock dips below calculated safety thresholds, BizStock automatically prepares and routes Purchase Orders to preferred suppliers, avoiding costly stockouts.",
    icon: <RefreshCw className="h-6 w-6 text-emerald-500" />,
    bulletPoints: [
      "AI-driven dynamic safety stock formulas",
      "One-click supplier PO email & EDI dispatch",
      "Lead time & vendor fulfillment tracking",
    ],
  },
];

export const BizStockWorkflow: React.FC = () => {
  return (
    <section className="bg-background py-14 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal border border-teal-border/40 mb-3">
            <Zap className="h-3.5 w-3.5" />
            End-to-End Stock Lifecycle
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            How BizStock Automates Your Entire Inventory Workflow
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
            From the moment raw materials or finished goods arrive at your loading dock to the final customer dispatch, BizStock maintains a real-time, error-free audit trail.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-3xl p-6 sm:p-7 border border-border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              {/* Step indicator watermark */}
              <div className="absolute top-4 right-4 text-4xl font-black text-slate-200 dark:text-slate-800 pointer-events-none select-none group-hover:text-blue-500/15 transition-colors">
                {step.step}
              </div>

              {/* Icon & Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-background border border-border flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              <span
                className={`inline-block w-fit px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border mb-3 ${step.badgeColor}`}
              >
                {step.badge}
              </span>

              {/* Title & Description */}
              <h3 className="text-base sm:text-lg font-bold text-dark group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {step.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Bullet Points */}
              <div className="mt-5 pt-4 border-t border-border space-y-2">
                {step.bulletPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-xs text-muted">
                    <CheckCircle2 className="h-3.5 w-3.5 text-teal shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BizStockWorkflow;
