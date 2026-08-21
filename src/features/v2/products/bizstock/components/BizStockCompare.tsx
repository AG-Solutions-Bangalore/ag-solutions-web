import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";

interface ComparisonRow {
  feature: string;
  traditional: string;
  bizstock: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Stock Level Visibility",
    traditional: "Delayed manual Excel updates, high risk of phantom stock",
    bizstock: "100% Real-time synchronization across all warehouses & stores",
  },
  {
    feature: "Reorder Management",
    traditional: "Reactive guessing, frequent stockouts or overstock dead capital",
    bizstock: "Predictive AI reordering with automatic supplier PO routing",
  },
  {
    feature: "Barcode & QR Scanning",
    traditional: "Manual paper data entry, 5-8% human transcription error",
    bizstock: "Universal mobile/scanner support with instant validation checks",
  },
  {
    feature: "Inventory Valuation",
    traditional: "Painful month-end calculations prone to tax audit adjustments",
    bizstock: "Automated FIFO, LIFO & WAC reports with landed cost tracking",
  },
  {
    feature: "Multi-Location Transfers",
    traditional: "Unreliable email/WhatsApp coordination and missing in-transit items",
    bizstock: "Structured transfer challans with digital gatepass and receiving scans",
  },
  {
    feature: "Traceability & Expiry",
    traditional: "Manual batch logs leading to accidental expired inventory dispatch",
    bizstock: "Automated FEFO enforcement, batch recall, and expiry alarms",
  },
];

export const BizStockCompare: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="bg-slate-50/60 dark:bg-slate-900/30 py-14 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal border border-teal-border/40 mb-3">
            <Zap className="h-3.5 w-3.5" />
            Clear Competitive Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Why High-Growth Companies Upgrade from Spreadsheets to BizStock
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
            Stop losing revenue to stockouts, expired inventory, and manual warehouse friction. See the difference modern inventory automation makes.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 bg-card rounded-3xl border border-border shadow-xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900 text-white p-4 sm:p-6 border-b border-slate-800 text-sm font-bold">
            <div className="md:col-span-4 text-slate-300 uppercase tracking-wider text-xs">
              Operational Dimension
            </div>
            <div className="md:col-span-4 text-rose-300 flex items-center gap-2 mt-2 md:mt-0">
              <XCircle className="h-4 w-4" /> Traditional / Excel Registers
            </div>
            <div className="md:col-span-4 text-teal flex items-center gap-2 mt-2 md:mt-0">
              <CheckCircle2 className="h-4 w-4" /> BizStock Cloud Platform
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-border text-xs sm:text-sm">
            {comparisonRows.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-3 md:gap-4 items-center transition-colors ${
                  index % 2 === 0 ? "bg-background/40" : "bg-card"
                }`}
              >
                <div className="md:col-span-4 font-bold text-dark">{row.feature}</div>
                <div className="md:col-span-4 text-rose-600 dark:text-rose-400 font-medium flex items-start gap-2">
                  <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
                <div className="md:col-span-4 text-emerald-600 dark:text-emerald-400 font-semibold flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-teal" />
                  <span>{row.bizstock}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA bar inside table */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900/60 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-bold text-dark">
                Ready to eliminate inventory errors forever?
              </h4>
              <p className="text-xs text-muted">
                Our supply chain specialists will help you migrate existing stock registers in under 48 hours.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openLeadModal("BizStock Migration Consultation")}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-pink dark:hover:bg-pink-hover text-white font-bold text-xs sm:text-sm px-6 py-2.5 shadow-md hover:bg-slate-800 transition-all cursor-pointer border-none whitespace-nowrap"
            >
              <span>Schedule Free Migration Call</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BizStockCompare;
