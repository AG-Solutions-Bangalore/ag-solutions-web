import React from "react";
import { useLeadModal } from "@/context/LeadModalContext";
import {
  FileText,
  FileSpreadsheet,
  Package,
  CreditCard,
  CalendarCheck,
  BarChart3,
  ArrowRight,
  Download,
} from "lucide-react";

export const DocumentEcosystemV2: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  const handleOpenLeadModal = (context: string) => {
    openLeadModal(`Export Biz - ${context}`);
  };

  return (
    <section className="bg-background py-8 sm:py-12 border-t border-border transition-colors duration-200" id="documents-v2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* HERO CARD (Left Column) */}
          <div className="lg:col-span-7 xl:col-span-7 relative min-h-[340px] sm:min-h-[380px] lg:min-h-[400px] overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10 text-white bg-[#008f8c] shadow-lg flex flex-col justify-between">
            {/* Ambient Background Glow & Shapes */}
            <div className="pointer-events-none absolute -right-6 -top-6 w-60 h-60 rounded-full bg-white/10 blur-2xl" />

            {/* Left Content Side */}
            <div className="relative z-20 max-w-[280px] sm:max-w-[340px] lg:max-w-[340px] xl:max-w-[390px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-[#2563eb] mb-5 sm:mb-6 shrink-0 shadow-md">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.2]" />
              </div>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight font-extrabold mb-3">
                Export Documentation
              </h2>

              <p className="text-white/90 font-medium text-xs sm:text-sm lg:text-[15px] leading-relaxed mb-6 sm:mb-8">
                Invoices, packing lists and shipment paperwork — generated straight from your order details.
              </p>

              <button
                type="button"
                onClick={() => handleOpenLeadModal("Export Documentation")}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-[#112347] text-xs sm:text-sm font-extrabold shadow-md hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all cursor-pointer border-none"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-[#112347] stroke-[2.5]" />
              </button>
            </div>

            {/* Document Artwork on Right Side */}
            <div className="hidden sm:block absolute right-4 xl:right-8 top-[60px] sm:top-[70px] lg:top-[50px] xl:top-[60px] w-[180px] sm:w-[220px] lg:w-[240px] xl:w-[260px] h-[280px] z-10 pointer-events-none">
              {/* Back Layer 1 */}
              <div className="absolute w-[140px] h-[170px] top-[0px] left-[15px] rounded-2xl bg-white/20 rotate-6" />

              {/* Middle Layer 2 */}
              <div className="absolute w-[140px] h-[170px] top-[60px] left-[0px] rounded-2xl bg-white/30 -rotate-3 p-4">
                <div className="h-1.5 rounded-full bg-white/60 mb-2.5 w-full" />
                <div className="h-1.5 rounded-full bg-white/60 mb-2.5 w-full" />
                <div className="h-1.5 rounded-full bg-white/60 mb-2.5 w-[60%]" />
              </div>

              {/* Front Main Document Card */}
              <div className="absolute w-[160px] h-[200px] top-[30px] left-[45px] rounded-2xl bg-white shadow-2xl px-5 py-6">
                <div className="h-1.5 rounded-full bg-[#cbd5e1] mb-2.5 w-full" />
                <div className="h-1.5 rounded-full bg-[#cbd5e1] mb-2.5 w-full" />
                <div className="h-1.5 rounded-full bg-[#cbd5e1] mb-2.5 w-full" />
                <div className="h-1.5 rounded-full bg-[#cbd5e1] mb-2.5 w-full" />
                <div className="h-1.5 rounded-full bg-[#cbd5e1] mb-2.5 w-[55%]" />

                {/* Floating Download Button */}
                <div className="absolute -right-3 -bottom-3 w-13 h-13 rounded-full flex items-center justify-center bg-[#2563eb] text-white shadow-xl">
                  <Download className="w-6 h-6 stroke-[2.2]" />
                </div>
              </div>
            </div>
          </div>

          {/* TOP RIGHT CARDS (Right Column) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-5 sm:gap-6">
            {/* Sales Contract */}
            <article 
              onClick={() => handleOpenLeadModal("Sales Contract & Costing")}
              className="relative min-h-[160px] sm:min-h-[180px] lg:min-h-[190px] p-6 sm:p-7 border border-border rounded-3xl bg-card shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="pr-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#e62e5c] text-white mb-3.5 shrink-0 shadow-2xs">
                  <FileSpreadsheet className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-dark text-lg sm:text-xl font-bold leading-snug tracking-tight mb-1.5">
                  Sales Contract &amp; Costing
                </h3>

                <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-sm">
                  Bring contract terms and costing together in one place.
                </p>
              </div>

              <span className="absolute right-6 top-6 text-teal group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5 stroke-[2.2]" />
              </span>
            </article>

            {/* Purchase Order */}
            <article 
              onClick={() => handleOpenLeadModal("Purchase Order & Stock Reports")}
              className="relative min-h-[160px] sm:min-h-[180px] lg:min-h-[190px] p-6 sm:p-7 border border-border rounded-3xl bg-card shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="pr-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#f59e0b] text-white mb-3.5 shrink-0 shadow-2xs">
                  <Package className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-dark text-lg sm:text-xl font-bold leading-snug tracking-tight mb-1.5">
                  Purchase Order &amp; Stock Reports
                </h3>

                <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-sm">
                  Track purchase orders alongside stock on hand.
                </p>
              </div>

              <span className="absolute right-6 top-6 text-teal group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5 stroke-[2.2]" />
              </span>
            </article>
          </div>

          {/* BOTTOM CARDS (Full Width Row of 3) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Payment & Claim Outstanding */}
            <article 
              onClick={() => handleOpenLeadModal("Payment & Claim Outstanding")}
              className="relative min-h-[170px] sm:min-h-[185px] p-6 sm:p-7 border border-border rounded-3xl bg-card shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="pr-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#008f8c] text-white mb-3.5 shrink-0 shadow-2xs">
                  <CreditCard className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-dark text-lg sm:text-xl font-bold leading-snug tracking-tight mb-1.5">
                  Payment &amp; Claim Outstanding
                </h3>

                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  See what's been paid and what's still pending.
                </p>
              </div>

              <span className="absolute right-6 top-6 text-teal group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5 stroke-[2.2]" />
              </span>
            </article>

            {/* Monthly Returns */}
            <article 
              onClick={() => handleOpenLeadModal("Monthly Returns")}
              className="relative min-h-[170px] sm:min-h-[185px] p-6 sm:p-7 border border-border rounded-3xl bg-card shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="pr-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#e62e5c] text-white mb-3.5 shrink-0 shadow-2xs">
                  <CalendarCheck className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-dark text-lg sm:text-xl font-bold leading-snug tracking-tight mb-1.5">
                  Monthly Returns
                </h3>

                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  Keep periodic filings organized and on time.
                </p>
              </div>

              <span className="absolute right-6 top-6 text-teal group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5 stroke-[2.2]" />
              </span>
            </article>

            {/* Custom Report & Mis */}
            <article 
              onClick={() => handleOpenLeadModal("Custom Report & Mis")}
              className="relative min-h-[170px] sm:min-h-[185px] p-6 sm:p-7 border border-border rounded-3xl bg-card shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="pr-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#f59e0b] text-white mb-3.5 shrink-0 shadow-2xs">
                  <BarChart3 className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-dark text-lg sm:text-xl font-bold leading-snug tracking-tight mb-1.5">
                  Custom Report &amp; MIS
                </h3>

                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  Generate export reports the way management wants to see them.
                </p>
              </div>

              <span className="absolute right-6 top-6 text-teal group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5 stroke-[2.2]" />
              </span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentEcosystemV2;
