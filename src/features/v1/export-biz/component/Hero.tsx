import React, { useState } from 'react';
import { ArrowRight, Globe, ShieldCheck, Handshake, TrendingUp } from 'lucide-react';
import { GetQuoteForm } from './GetQuoteForm';

export const Hero: React.FC = () => {
  // Modal visibility state
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-8">
            
            {/* Left Column: Text & Features */}
            <div className="lg:col-span-6 z-10">
              {/* Tag / Subheading */}
              <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
                EXPORT BUSINESS
              </span>

              {/* Main Headline */}
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#1A2035] sm:text-5xl lg:text-[52px] lg:leading-[1.15]">
                Expand Your Business <br />
                <span className="text-[#E91E63]">Beyond Borders</span>
              </h1>

              {/* Subtext */}
              <p className="mt-5 text-base text-gray-600 sm:text-lg max-w-xl font-normal leading-relaxed">
                AG Solutions helps you take your products to the global market
                with end-to-end export business solutions.
              </p>

              {/* CTA Button - Opens GetQuoteForm Modal */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#E91E63] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-[#D81B60] focus:outline-none focus:ring-2 focus:ring-[#E91E63] focus:ring-offset-2 cursor-pointer"
                >
                  Start Free Demo
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* 4 Feature Icons Row */}
              <div className="mt-12 grid grid-cols-4 gap-4 sm:gap-6 max-w-lg">
                {/* Feature 1 */}
                <div className="flex flex-col items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A8B5] text-white shadow-sm">
                    <Globe className="h-6 w-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1A2035] leading-snug">
                    Global<br />Reach
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E91E63] text-white shadow-sm">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1A2035] leading-snug">
                    Secure &<br />Compliant
                  </span>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFB300] text-white shadow-sm">
                    <Handshake className="h-6 w-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1A2035] leading-snug">
                    End-to-End<br />Support
                  </span>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7CB342] text-white shadow-sm">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1A2035] leading-snug">
                    Business<br />Growth
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image Container */}
            <div className="relative lg:col-span-6 mt-8 lg:mt-0 flex justify-center lg:justify-end">
              
              {/* Image Container with Curved Left side and Straight Right side */}
              <div className="relative w-full max-w-lg lg:max-w-none z-10">
                <img
                  src="/images/exportbiz/newship.png"
                  alt="Cargo Container Ship Exporting Goods"
                  className="h-[380px] sm:h-[450px] lg:h-[500px] w-full object-cover object-center rounded-tl-[120px] rounded-bl-[60px] rounded-tr-none rounded-br-none drop-shadow-xl"
                />
              </div>

              {/* Rotating Decorative Color Squares */}
              
              {/* Top Teal Box */}
              <div className="absolute -left-4 top-8 z-20 hidden sm:block">
                <div className="h-12 w-12 rounded-xl bg-[#00A8B5] shadow-lg animate-spin [animation-duration:12s]" />
              </div>

              {/* Middle Pink Box */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
                <div className="h-12 w-12 rounded-xl bg-[#E91E63] shadow-lg animate-[spin_10s_linear_infinite_reverse]" />
              </div>

              {/* Bottom Orange/Yellow Box */}
              <div className="absolute left-22 -bottom-0 z-20 hidden sm:block">
                <div className="h-14 w-14 rounded-2xl bg-[#FFB300] shadow-lg animate-spin [animation-duration:15s]" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Render GetQuoteForm Modal */}
      <GetQuoteForm
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
};

export default Hero;