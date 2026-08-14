import React, { useState } from "react";
import { createTimeline, animate } from "animejs";
import AnimatedSection from "@/components/animation/AnimatedSection";

interface ModuleGroup {
  category: string;
  description: string;
  items: string[];
}

export const ExportBizModules: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [progressPercent, setProgressPercent] = useState(20); // Starts at 20% (Goal Gradient)

  const masterGroups: ModuleGroup[] = [
    {
      category: "Exporter & Buyer Masters",
      description: "Static seller profiles, buyer shipping names, bank details, default ports and currencies.",
      items: ["Exporter details", "Buyer profiles", "Consignees", "Notify parties"],
    },
    {
      category: "Product & Stock Masters",
      description: "Product identifiers, unit weights, pricing records, HSN codes, and live inventory rules.",
      items: ["Item names", "HSN directory", "Standard pricing", "Pack configuration"],
    },
    {
      category: "Statutory Reference Directory",
      description: "Custom port configurations, transport modes, scheme definitions, and bank routing parameters.",
      items: ["Customs locations", "Drawback codes", "FOB rules", "Bank accounts"],
    },
  ];

  const opsGroups: ModuleGroup[] = [
    {
      category: "Procurement & Stock",
      description: "Orchestrate raw material purchases, PO tracking, and stock levels.",
      items: ["Purchase Products", "Purchase Orders", "Purchase", "Stock Management"],
    },
    {
      category: "Manufacturing Ops",
      description: "Track processing, production stages, and warehouse dispatches.",
      items: ["Production", "Processing", "Dispatch"],
    },
    {
      category: "Commercial Billing",
      description: "Instantly compile sales contracts, invoices, and shipment costing sheets.",
      items: ["Contracts", "Invoices", "Costing"],
    },
    {
      category: "Statutory Incentives",
      description: "Manage duty drawback filings, payment collections, and pending dues.",
      items: ["Duty Drawback", "Payments", "Pending Receipts"],
    },
  ];

  const workflowNodes = [
    { id: 1, label: "Purchase Order", desc: "PO raised & matched", value: "₹24L Match" },
    { id: 2, label: "Factory Pack list", desc: "Items serialized & verified", value: "0 Errors" },
    { id: 3, label: "Customs SB", desc: "Shipping bill auto-filed", value: "RoDTEP Scroll" },
    { id: 4, label: "Drawback Scroll", desc: "Government scroll matching", value: "₹72K Credit" },
    { id: 5, label: "Bank Realization", desc: "BRC matched & closed", value: "FOB Settled" }
  ];

  const runSimulation = () => {
    setIsSimulating(true);
    setProgressPercent(20);

    // Reset styles manually first
    for (let i = 1; i <= 5; i++) {
      const node = document.querySelector(`.flow-node-${i}`);
      const badge = document.querySelector(`.flow-badge-${i}`);
      if (node) {
        node.setAttribute("style", "border-color: #e2e8f0; background-color: #ffffff; color: #1c3a54;");
      }
      if (badge) {
        badge.setAttribute("style", "opacity: 0.2; transform: translateY(0px); background-color: #f1f5f9; border-color: #e2e8f0; color: #7a8894;");
      }
      if (i < 5) {
        const line = document.querySelector(`.flow-line-${i}`);
        if (line) {
          line.setAttribute("style", "transform: scaleX(0);");
        }
      }
    }

    // Dynamic progress bar counter animation
    const counterObj = { val: 20 };
    animate(counterObj, {
      val: 100,
      round: 1,
      duration: 3400,
      easing: "linear",
      onUpdate: () => {
        setProgressPercent(Math.round(counterObj.val));
      }
    });

    const tl = createTimeline({
      onComplete: () => {
        setIsSimulating(false);
      }
    });

    // Build timeline transitions step-by-step
    tl.add(".flow-node-1", {
      scale: [1, 1.25, 1],
      borderColor: "#27c7cd",
      backgroundColor: "rgba(39, 199, 205, 0.12)",
      color: "#1289bc",
      duration: 500,
      easing: "easeOutQuad"
    })
    .add(".flow-badge-1", {
      opacity: [0.2, 1],
      translateY: [-6, 0],
      backgroundColor: "#27c7cd",
      borderColor: "#27c7cd",
      color: "#ffffff",
      duration: 350,
      easing: "easeOutBack"
    }, "-=250")
    .add(".flow-line-1", {
      scaleX: [0, 1],
      duration: 400,
      easing: "easeOutQuad"
    }, "-=150")

    .add(".flow-node-2", {
      scale: [1, 1.25, 1],
      borderColor: "#27c7cd",
      backgroundColor: "rgba(39, 199, 205, 0.12)",
      color: "#1289bc",
      duration: 500,
      easing: "easeOutQuad"
    })
    .add(".flow-badge-2", {
      opacity: [0.2, 1],
      translateY: [-6, 0],
      backgroundColor: "#27c7cd",
      borderColor: "#27c7cd",
      color: "#ffffff",
      duration: 350,
      easing: "easeOutBack"
    }, "-=250")
    .add(".flow-line-2", {
      scaleX: [0, 1],
      duration: 400,
      easing: "easeOutQuad"
    }, "-=150")

    .add(".flow-node-3", {
      scale: [1, 1.25, 1],
      borderColor: "#27c7cd",
      backgroundColor: "rgba(39, 199, 205, 0.12)",
      color: "#1289bc",
      duration: 500,
      easing: "easeOutQuad"
    })
    .add(".flow-badge-3", {
      opacity: [0.2, 1],
      translateY: [-6, 0],
      backgroundColor: "#27c7cd",
      borderColor: "#27c7cd",
      color: "#ffffff",
      duration: 350,
      easing: "easeOutBack"
    }, "-=250")
    .add(".flow-line-3", {
      scaleX: [0, 1],
      duration: 400,
      easing: "easeOutQuad"
    }, "-=150")

    .add(".flow-node-4", {
      scale: [1, 1.25, 1],
      borderColor: "#27c7cd",
      backgroundColor: "rgba(39, 199, 205, 0.12)",
      color: "#1289bc",
      duration: 500,
      easing: "easeOutQuad"
    })
    .add(".flow-badge-4", {
      opacity: [0.2, 1],
      translateY: [-6, 0],
      backgroundColor: "#27c7cd",
      borderColor: "#27c7cd",
      color: "#ffffff",
      duration: 350,
      easing: "easeOutBack"
    }, "-=250")
    .add(".flow-line-4", {
      scaleX: [0, 1],
      duration: 400,
      easing: "easeOutQuad"
    }, "-=150")

    .add(".flow-node-5", {
      scale: [1, 1.25, 1],
      borderColor: "#2fae73",
      backgroundColor: "rgba(47, 174, 115, 0.12)",
      color: "#2fae73",
      duration: 500,
      easing: "easeOutQuad"
    })
    .add(".flow-badge-5", {
      opacity: [0.2, 1],
      translateY: [-6, 0],
      backgroundColor: "#2fae73",
      borderColor: "#2fae73",
      color: "#ffffff",
      duration: 350,
      easing: "easeOutBack"
    }, "-=250");
  };

  return (
    <AnimatedSection
      className="bg-[#efede5]/60 py-20 box-border border-b border-[#e1ded2]/50 relative"
      ariaLabel="EXPORT BIZ features modules checklist"
    >
      {(isVisible) => (
        <div className="max-w-[1200px] mx-auto px-8 box-border">
          
          <div className={`max-w-[700px] mb-14 box-border home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
            <p className="text-[#63666c] text-[13px] leading-[25px] font-mono tracking-[2.5px] uppercase mt-3 mb-[10px] flex items-center gap-[10px] box-border">
              Ref: Modules
            </p>
            <h2 className="text-[34px] md:text-[40px] font-bold font-space-grotesk tracking-[-0.8px] leading-[1.15] m-0 box-border text-[#12141a]">
              Two core modules. Every step of the shipment.
            </h2>
            <p className="text-[#63666c] text-[16px] leading-[26px] mt-4 box-border max-w-[620px]">
              Set reference data once in Master Management, then run the shipment itself through Export Operations — from raw Purchase Order to Final Payment Collection.
            </p>
          </div>

          <div className="space-y-12 box-border">
            
            <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`} style={{ transitionDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2 w-2 rounded-full bg-[#1c3a54] block"></span>
                <h3 className="text-xl font-bold font-space-grotesk tracking-[-0.4px] text-[#12141a] m-0">
                  1. Master Management (Reference Data)
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 box-border">
                {masterGroups.map((group, idx) => (
                  <div
                    key={idx}
                    className={`bg-white border border-[#e1ded2] rounded-[16px] p-6 box-border shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between home-animated-item ${
                      isVisible ? "home-animated-item-visible" : ""
                    }`}
                    style={{ transitionDelay: `${150 + idx * 100}ms` }}
                  >
                    <div>
                      <h4 className="text-[15.5px] font-bold text-[#1c3a54] font-space-grotesk tracking-wide m-0 mb-2">
                        {group.category}
                      </h4>
                      <p className="text-[13px] leading-relaxed text-[#7a8894] m-0 mb-5">
                        {group.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-[11.5px] bg-[#efede5] border border-[#e1ded2] text-[#12141a] font-medium py-1.5 px-3 rounded-[8px] box-border transition-all duration-200 hover:bg-[#e1ded2] hover:scale-[1.02] cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2 w-2 rounded-full bg-[#27c7cd] block animate-pulse"></span>
                <h3 className="text-xl font-bold font-space-grotesk tracking-[-0.4px] text-[#12141a] m-0">
                  2. Export Operations (Transaction Engine)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 box-border">
                {opsGroups.map((group, idx) => (
                  <div
                    key={idx}
                    className={`bg-white border border-[#e1ded2] rounded-[16px] p-6 box-border shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between home-animated-item ${
                      isVisible ? "home-animated-item-visible" : ""
                    }`}
                    style={{ transitionDelay: `${250 + idx * 100}ms` }}
                  >
                    <div>
                      <h4 className="text-[15.5px] font-bold text-[#1c3a54] font-space-grotesk tracking-wide m-0 mb-2">
                        {group.category}
                      </h4>
                      <p className="text-[13px] leading-relaxed text-[#7a8894] m-0 mb-5">
                        {group.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-[11.5px] bg-[#efede5] border border-[#e1ded2] text-[#12141a] font-medium py-1.5 px-3 rounded-[8px] box-border transition-all duration-200 hover:bg-[#e1ded2] hover:scale-[1.02] cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Flow Simulator Card */}
            <div
              className={`mt-16 bg-white border border-[#e1ded2] rounded-[24px] p-6 md:p-10 shadow-xs relative overflow-hidden home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              
              {/* Dynamic Goal Gradient Progress Bar */}
              <div className="relative mb-8 pb-4 box-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-mono font-bold text-[#7a8894]">
                    COMPLIANCE FLOW SEQUENCE
                  </span>
                  <span className="text-[12px] font-mono font-bold text-[#1c3a54] bg-[#27c7cd]/10 py-0.5 px-2.5 rounded-full border border-[#27c7cd]/20">
                    MOMENTUM INDEX: {progressPercent}%
                  </span>
                </div>
                <div className="bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#27c7cd] to-[#2fae73] transition-all duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#efede5]">
                <div>
                  <span className="bg-[#27c7cd]/10 text-[#1289bc] font-mono text-[11px] tracking-[1.5px] py-1 px-3 rounded-full font-bold uppercase">
                    Interactive Simulator
                  </span>
                  <h3 className="text-2xl font-bold font-space-grotesk tracking-[-0.6px] text-[#1c3a54] m-0 mt-2">
                    Trace the Shipment Lifecycle
                  </h3>
                  <p className="text-[13.5px] text-[#7a8894] m-0 mt-1 max-w-[560px]">
                    Click run to simulate a live shipment order passing through the automated EXPORT BIZ transaction pipelines.
                  </p>
                </div>
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="self-start md:self-center bg-[#1c3a54] text-white flex items-center gap-2 font-space-grotesk font-bold text-[14px] py-3 px-6 rounded-full border border-transparent cursor-pointer hover:bg-[#254d6e] hover:scale-[1.03] transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSimulating ? "Running Simulation..." : "Simulate Cargo Flow ⚡"}
                </button>
              </div>

              {/* Stages Row */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 relative z-1">
                {workflowNodes.map((node, idx) => (
                  <div key={node.id} className="flex flex-col items-center text-center relative group">
                    {/* Connector Line (Desktop) */}
                    {idx < 4 && (
                      <div className="hidden lg:block absolute top-7 left-[60%] right-[-40%] h-[3px] bg-slate-100 z-0">
                        <div
                          className={`flow-line-${node.id} h-full bg-[#27c7cd] origin-left scale-x-0`}
                          style={{ transform: "scaleX(0)" }}
                        />
                      </div>
                    )}

                    {/* Circle Node */}
                    <div
                      className={`flow-node-${node.id} w-14 h-14 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center font-bold text-base text-[#1c3a54] z-10 transition-colors duration-300 shadow-xs`}
                    >
                      {node.id}
                    </div>

                    {/* Title & Desc */}
                    <h4 className="text-[15px] font-bold text-[#1c3a54] font-space-grotesk mt-4 mb-1">
                      {node.label}
                    </h4>
                    <p className="text-[12px] leading-relaxed text-[#7a8894] max-w-[150px] m-0">
                      {node.desc}
                    </p>

                    {/* Dynamic Badge */}
                    <div
                      className={`flow-badge-${node.id} mt-3 opacity-20 bg-slate-100 text-[#7a8894] font-mono text-[10px] font-bold py-1 px-2.5 rounded-full border border-slate-200`}
                    >
                      {node.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </AnimatedSection>
  );
};

export default ExportBizModules;
