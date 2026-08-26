import React, { useState } from "react";
import { m } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export const BizStockDashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"velocity" | "capacity" | "suppliers" | "audit">("velocity");

  return (
    <section className="bg-background py-14 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-light text-pink border border-pink-border/40 mb-3">
            <Activity className="h-3.5 w-3.5" />
            Live Intelligence &amp; Analytics
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Data-Driven Stock Visibility in Real Time
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
            Gain immediate insights into inventory aging, warehouse space utilization, fast-moving items, and vendor fulfillment reliability.
          </p>
        </div>

        {/* 3 Key Benefit Stat Cards */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-6 border border-border shadow-xs flex items-center gap-4"
          >
            <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <TrendingUp className="h-7 w-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black text-dark">
                +42.8%
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md flex items-center">
                  <ArrowUpRight className="h-3 w-3" /> Faster
                </span>
              </div>
              <p className="text-xs text-muted mt-1 font-medium">Inventory Turnover Rate</p>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-3xl p-6 border border-border shadow-xs flex items-center gap-4"
          >
            <div className="h-14 w-14 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black text-dark">
                -96.4%
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md flex items-center">
                  <ArrowDownRight className="h-3 w-3" /> Reduced
                </span>
              </div>
              <p className="text-xs text-muted mt-1 font-medium">Stock Discrepancy &amp; Shrinkage</p>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-3xl p-6 border border-border shadow-xs flex items-center gap-4"
          >
            <div className="h-14 w-14 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Clock className="h-7 w-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black text-dark">
                &lt; 14 Mins
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md flex items-center">
                  <Zap className="h-3 w-3" /> Average
                </span>
              </div>
              <p className="text-xs text-muted mt-1 font-medium">Order Pick &amp; Pack Turnaround</p>
            </div>
          </m.div>
        </div>

        {/* Tabbed Interactive Mock Dashboard Box */}
        <m.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 bg-card rounded-3xl border border-border shadow-xl overflow-hidden"
        >
          {/* Tabs bar */}
          <div className="flex flex-wrap items-center gap-2 p-3 sm:p-4 bg-slate-50 dark:bg-slate-900/60 border-b border-border">
            <button
              type="button"
              onClick={() => setActiveTab("velocity")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "velocity"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-muted hover:text-dark hover:bg-background"
              }`}
            >
              Stock Velocity &amp; Demand
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("capacity")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "capacity"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-muted hover:text-dark hover:bg-background"
              }`}
            >
              Warehouse Space &amp; Bins
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("suppliers")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "suppliers"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-muted hover:text-dark hover:bg-background"
              }`}
            >
              Supplier Reliability &amp; POs
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("audit")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "audit"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-muted hover:text-dark hover:bg-background"
              }`}
            >
              Audit Trail &amp; Adjustments
            </button>
          </div>

          {/* Tab 1 Content: Stock Velocity */}
          {activeTab === "velocity" && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-base font-bold text-dark">Category Movement &amp; Fast-Movers</h4>
                  <p className="text-xs text-muted">Real-time daily consumption velocity across all 18,420 SKUs</p>
                </div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full w-fit">
                  ⚡ 98.2% In-Stock Service Level
                </span>
              </div>

              {/* Mock Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-medium text-dark mb-1">
                    <span>Industrial Fasteners &amp; Valves (Turnover: 8.4x / yr)</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">92% Optimal</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "92%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-dark mb-1">
                    <span>Smart Micro-Controllers &amp; Sensors (Turnover: 12.1x / yr)</span>
                    <span className="font-bold text-teal">85% Optimal</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-teal rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-dark mb-1">
                    <span>Energy Storage &amp; Batteries (Turnover: 6.2x / yr)</span>
                    <span className="font-bold text-pink">74% (Auto-reorder scheduled)</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-pink rounded-full" style={{ width: "74%" }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2 Content: Warehouse Space */}
          {activeTab === "capacity" && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-base font-bold text-dark">Location Capacity &amp; Rack Utilization</h4>
                  <p className="text-xs text-muted">Aisle, pallet, and bin allocation status across active warehouses</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-background border border-border">
                  <div className="text-xs text-muted font-medium">Mumbai Central Hub</div>
                  <div className="text-xl font-bold text-dark mt-1">78% Occupied</div>
                  <p className="text-[11px] text-teal mt-0.5">1,420 / 1,800 Bins Allocated</p>
                  <div className="mt-3 w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                    <div className="h-full bg-teal rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-background border border-border">
                  <div className="text-xs text-muted font-medium">Bangalore Tech Depot</div>
                  <div className="text-xl font-bold text-dark mt-1">62% Occupied</div>
                  <p className="text-[11px] text-blue-500 mt-0.5">620 / 1,000 Bins Allocated</p>
                  <div className="mt-3 w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "62%" }} />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-background border border-border">
                  <div className="text-xs text-muted font-medium">Delhi NCR Logistics Hub</div>
                  <div className="text-xl font-bold text-dark mt-1">89% Occupied</div>
                  <p className="text-[11px] text-amber-500 mt-0.5">890 / 1,000 Bins Allocated</p>
                  <div className="mt-3 w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "89%" }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3 Content: Supplier Performance */}
          {activeTab === "suppliers" && (
            <div className="p-6 sm:p-8 space-y-4">
              <h4 className="text-base font-bold text-dark">Supplier Fulfillment Scorecard</h4>
              <p className="text-xs text-muted">Automated on-time delivery &amp; quality acceptance ratings</p>

              <div className="divide-y divide-border text-xs">
                <div className="py-3 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-dark">Apex Industrial Components Ltd.</span>
                    <div className="text-[11px] text-muted">Primary Hydraulic &amp; Valves Vendor</div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">99.2% On-Time</span>
                    <div className="text-[11px] text-muted">Avg Lead Time: 2.4 days</div>
                  </div>
                </div>

                <div className="py-3 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-dark">Nexus Semiconductor Solutions</span>
                    <div className="text-[11px] text-muted">Microcontroller &amp; Sensor Provider</div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">97.8% On-Time</span>
                    <div className="text-[11px] text-muted">Avg Lead Time: 3.8 days</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4 Content: Audit Trail */}
          {activeTab === "audit" && (
            <div className="p-6 sm:p-8 space-y-3">
              <h4 className="text-base font-bold text-dark">Automated Audit &amp; Event Log</h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-background border border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    <span>Inward scan GRN-4890 completed by Operator #24</span>
                  </div>
                  <span className="text-muted font-mono">10:42 AM</span>
                </div>
                <div className="p-3 rounded-xl bg-background border border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    <span>Stock transfer TR-102 dispatched to Bangalore Depot</span>
                  </div>
                  <span className="text-muted font-mono">09:15 AM</span>
                </div>
              </div>
            </div>
          )}
        </m.div>
      </div>
    </section>
  );
};

export default BizStockDashboardPreview;
