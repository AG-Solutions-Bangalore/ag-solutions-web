import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { GetQuoteForm } from './GetQuoteForm';

export const GetQuote: React.FC = () => {
  // Modal visibility state
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section id="quote" className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Soft Teal Light Tinted Banner Container */}
          <div className="relative overflow-hidden rounded-3xl bg-[#F0F9FA] px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14 shadow-sm border border-[#00A8B5]/10">
            
            <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-8">
              
              {/* Left Content Column */}
              <div className="lg:col-span-5 z-10">
                {/* Headline */}
                <h2 className="text-3xl font-extrabold tracking-tight text-[#1A2035] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
                  Ready to Take Your Business <br />
                  <span className="text-[#E91E63]">Global?</span>
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                  Let AG Solutions be your gateway to international success.
                </p>

                {/* CTA Button - Triggers Modal */}
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#E91E63] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#D81B60] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#E91E63] focus:ring-offset-2 cursor-pointer"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right Visual Graphic Column */}
              <div className="relative lg:col-span-7 flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
                
                {/* Graphic Container */}
                <div className="relative w-full max-w-xl lg:max-w-2xl flex items-center justify-center">
                  
                  {/* Embedded Image */}
                  <img
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop"
                    alt="Global Freight Export Cargo Ship & Globe Illustration"
                    className="w-full h-[220px] sm:h-[260px] lg:h-[280px] object-cover rounded-2xl drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* Animated Floating Pink Map Pin Marker */}
                  <div className="absolute right-[28%] top-[15%] z-20 hidden sm:block animate-bounce [animation-duration:3s]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E91E63] text-white shadow-xl ring-4 ring-white">
                      <MapPin className="h-6 w-6 fill-white stroke-[#E91E63]" />
                    </div>
                  </div>

                  {/* Subtle Teal Light Background Glow */}
                  <div className="absolute -inset-4 rounded-full bg-[#00A8B5]/15 blur-2xl pointer-events-none z-0" />

                </div>

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

export default GetQuote;