import React from 'react';
import {
  MessageSquare,
  FileText,
  ClipboardCheck,
  Truck,
  TrendingUp,
} from 'lucide-react';

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badgeBg: string;       // Step badge background
  iconColor: string;     // Color for main icon
  ringBorder: string;    // Orbital ring border color
  hoverGlow: string;     // Hover shadow glow color
  lineBg: string;        // Bottom accent line color
}

const steps: StepProps[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We understand your requirements and business goals.',
    icon: MessageSquare,
    badgeBg: 'bg-[#00A8B5]',
    iconColor: 'text-[#00A8B5]',
    ringBorder: 'border-[#00A8B5]/30',
    hoverGlow: 'group-hover:shadow-[#00A8B5]/20',
    lineBg: 'bg-[#00A8B5]',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'We create a customized export strategy for your business.',
    icon: FileText,
    badgeBg: 'bg-[#E91E63]',
    iconColor: 'text-[#E91E63]',
    ringBorder: 'border-[#E91E63]/30',
    hoverGlow: 'group-hover:shadow-[#E91E63]/20',
    lineBg: 'bg-[#E91E63]',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'We handle documentation, compliance, and logistics seamlessly.',
    icon: ClipboardCheck,
    badgeBg: 'bg-[#FFB300]',
    iconColor: 'text-[#FFB300]',
    ringBorder: 'border-[#FFB300]/30',
    hoverGlow: 'group-hover:shadow-[#FFB300]/20',
    lineBg: 'bg-[#FFB300]',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Your products are delivered safely to the global market.',
    icon: Truck,
    badgeBg: 'bg-[#7CB342]',
    iconColor: 'text-[#7CB342]',
    ringBorder: 'border-[#7CB342]/30',
    hoverGlow: 'group-hover:shadow-[#7CB342]/20',
    lineBg: 'bg-[#7CB342]',
  },
  {
    number: '05',
    title: 'Support',
    description: 'We provide ongoing support for long-term success.',
    icon: TrendingUp,
    badgeBg: 'bg-[#00A8B5]',
    iconColor: 'text-[#00A8B5]',
    ringBorder: 'border-[#00A8B5]/30',
    hoverGlow: 'group-hover:shadow-[#00A8B5]/20',
    lineBg: 'bg-[#00A8B5]',
  },
];

export const HowWeWork: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFC] py-14 md:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Container Box with Light Pink/Violet Tinted Soft Card */}
        <div className="rounded-3xl bg-[#FAF5F7]/60 p-8 md:p-12 border border-[#E91E63]/10 shadow-sm">
          
          {/* Section Header */}
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E91E63]">
              OUR PROCESS
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-[#1A2035] sm:text-3xl lg:text-4xl">
              How We Make Export Easy for You
            </h2>
          </div>

          {/* 5-Step Horizontal Process Grid */}
          <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-4">
            
            {/* Dashed Connecting Line (Desktop) */}
            <div className="absolute top-16 left-[10%] right-[10%] hidden md:block border-t-2 border-dashed border-gray-300 pointer-events-none z-0" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center z-10"
                >
                  {/* Circle Graphic Container with Orbit Rings */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* Number Badge at Top Center */}
                    <div
                      className={`absolute -top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full ${step.badgeBg} text-xs font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      {step.number}
                    </div>

                    {/* Outer Thin Decorative Orbit Circle */}
                    <div
                      className={`flex h-28 w-28 items-center justify-center rounded-full bg-white border ${step.ringBorder} shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lg ${step.hoverGlow}`}
                    >
                      {/* Inner Circular Icon Plate */}
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-50/50 transition-transform duration-300 group-hover:scale-105">
                        <Icon className={`h-9 w-9 ${step.iconColor} stroke-[1.75] transition-transform duration-300 group-hover:rotate-6`} />
                      </div>
                    </div>

                    {/* Decorative Orbit Accents */}
                    <div className="absolute top-2 right-1 h-1.5 w-1.5 rounded-full bg-gray-300 opacity-60" />
                    <div className="absolute bottom-2 left-1 h-1 w-1 rounded-full bg-gray-300 opacity-60" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-base font-bold text-[#1A2035]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-gray-500 font-normal leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>

                  {/* Bottom Colored Accent Line */}
                  <div className="mt-6 flex justify-center w-full">
                    <div
                      className={`h-0.5 w-7 rounded-full ${step.lineBg} transition-all duration-300 group-hover:w-12`}
                    />
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowWeWork;