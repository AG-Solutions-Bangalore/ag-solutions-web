import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    'Expert team with in-depth export knowledge',
    'Strong network of international partners',
    'Transparent processes and clear communication',
    'Customized solutions for your business needs',
  ];

  return (
    <section className="relative w-full bg-white py-12 md:py-16 overflow-hidden">
      {/* SVG Path Definition */}
      <svg className="absolute opacity-0 pointer-events-none h-0 w-0" aria-hidden="true">
        <defs>
          <clipPath id="topWaveClip" clipPathUnits="objectBoundingBox">
            <path  d="M0.10,0 H0.93 C0.98,0 1,0.05 1,0.12 V0.88 C1,0.96 0.96,1 0.90,1 H0.28 C0.22,1 0.18,0.96 0.15,0.90 L0.02,0.34 C0.00,0.26 0.03,0.18 0.08,0.12 C0.12,0.08 0.13,0.05 0.13,0 Z"
/>
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Content & Checkpoints */}
          <div className="lg:col-span-5 z-10">
            {/* Tag / Subheading */}
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
              WHY CHOOSE AG SOLUTIONS
            </span>

            {/* Main Headline */}
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1A2035] sm:text-3xl lg:text-[38px] lg:leading-[1.15]">
              Your Trusted Partner <br />
              in Global Trade
            </h2>

            {/* Paragraph Text */}
            <p className="mt-4 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
              With our expertise and strong global network, we simplify the
              complexities of export business and help you focus on what you do
              best – growing your business.
            </p>

            {/* Bullet List with Checkmarks */}
            <div className="mt-6 space-y-3">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-2.5 transition-transform duration-200 hover:translate-x-1"
                >
                  <div className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#00A8B5] fill-[#00A8B5]/10 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1A2035] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative lg:col-span-7 flex justify-center lg:justify-end">
            
            {/* Outer Container */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Dynamic Animated Ambient Light Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#00A8B5]/30 via-[#7CB342]/20 to-[#E91E63]/30 blur-2xl opacity-75 animate-pulse pointer-events-none z-0" />

              {/* Main Image Container */}
              <div 
                className="relative z-10 h-[280px] sm:h-[320px] lg:h-[360px] w-full overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                style={{ clipPath: 'url(#topWaveClip)' }}
              >
                {/* 
                  scale-[1.3] and origin-center forces the photo to zoom past 
                  the baked-in white borders inside the PNG file 
                */}
                <img
                  src="/images/exportbiz/Shipping Yard.png"
                  alt="Global Freight Logistics Shipping Yard"
                  className="h-full w-full object-cover object-center scale-[1.3] origin-center"
                />
              </div>

              {/* Rotating + Gently Floating Green Box */}
              <div className="absolute -left-5 top-[34%] -translate-y-1/2 z-20 hidden sm:block animate-bounce [animation-duration:4s]">
                <div className="h-14 w-14 rounded-2xl bg-[#7CB342] shadow-xl animate-spin [animation-duration:14s] transition-transform duration-300 hover:scale-110" />
              </div>

              {/* Rotating + Gently Floating Pink Box */}
              <div className="absolute -right-5 top-8 z-20 hidden sm:block animate-bounce [animation-duration:5s]">
                <div className="h-12 w-12 rounded-xl bg-[#E91E63] shadow-xl animate-[spin_10s_linear_infinite_reverse] transition-transform duration-300 hover:scale-110" />
              </div>

              {/* Right Side Teal Dot Matrix Grid */}
              <div className="absolute -left-3 bottom-10 z-0 hidden lg:grid grid-cols-4 gap-2 opacity-60">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="h-2 w-2 rounded-full bg-[#00A8B5] transition-all duration-300 hover:bg-[#E91E63]" />
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;