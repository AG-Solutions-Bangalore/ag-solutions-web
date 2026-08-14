import React from 'react';
import {
  FileSearch,
  ClipboardList,
  ShieldCheck,
  PackageCheck,
  BarChart3,
  Headphones,
} from 'lucide-react';

interface OfferCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;       // Background color for icon square
  hoverBorder: string;   // Border hover color match
  bottomLineColor: string; // Color of bottom accent line
}

const offers: OfferCardProps[] = [
  {
    icon: FileSearch,
    title: 'Export Consultation',
    description:
      'We provide expert guidance to help you understand export procedures and opportunities.',
    bgColor: 'bg-[#00A8B5]',
    hoverBorder: 'group-hover:border-[#00A8B5]/40',
    bottomLineColor: 'bg-[#00A8B5]',
  },
  {
    icon: ClipboardList,
    title: 'Documentation Support',
    description:
      'We manage all the necessary documentation to ensure smooth and hassle-free export operations.',
    bgColor: 'bg-[#E91E63]',
    hoverBorder: 'group-hover:border-[#E91E63]/40',
    bottomLineColor: 'bg-[#E91E63]',
  },
  {
    icon: ShieldCheck,
    title: 'Customs Clearance',
    description:
      'Our team ensures quick and efficient customs clearance, minimizing delays and compliance issues.',
    bgColor: 'bg-[#FFB300]',
    hoverBorder: 'group-hover:border-[#FFB300]/40',
    bottomLineColor: 'bg-[#FFB300]',
  },
  {
    icon: PackageCheck,
    title: 'Shipping & Logistics',
    description:
      'We handle reliable shipping and logistics to deliver your goods safely and on time worldwide.',
    bgColor: 'bg-[#7CB342]',
    hoverBorder: 'group-hover:border-[#7CB342]/40',
    bottomLineColor: 'bg-[#7CB342]',
  },
  {
    icon: BarChart3,
    title: 'Market Research',
    description:
      'We help you identify the right markets and opportunities for your products to grow internationally.',
    bgColor: 'bg-[#00A8B5]',
    hoverBorder: 'group-hover:border-[#00A8B5]/40',
    bottomLineColor: 'bg-[#00A8B5]',
  },
  {
    icon: Headphones,
    title: 'Post-Export Support',
    description:
      'We provide continuous support even after delivery to build long-term global business relationships.',
    bgColor: 'bg-[#E91E63]',
    hoverBorder: 'group-hover:border-[#E91E63]/40',
    bottomLineColor: 'bg-[#E91E63]',
  },
];

export const WhatWeOffer: React.FC = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-12 md:py-16">
      {/* Increased overall max-width to allow the 6 cards to stretch wider */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E91E63]">
            WHAT WE OFFER
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-[#1A2035] sm:text-3xl lg:text-4xl">
            Comprehensive Export Solutions
          </h2>
        </div>

        {/* 6-Column Card Grid with reduced gap */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={index}
                className={`group relative flex flex-col items-center justify-between rounded-xl bg-white px-3.5 py-5 text-center shadow-sm border border-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg ${offer.hoverBorder}`}
              >
                {/* Top Section: Compact Icon & Content */}
                <div className="flex flex-col items-center w-full">
                  {/* Smaller Icon Container */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${offer.bgColor} text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="h-6 w-6 stroke-[1.75]" />
                  </div>

                  {/* Compact Card Title */}
                  <h3 className="mt-4 text-sm font-bold text-[#1A2035] leading-snug">
                    {offer.title}
                  </h3>

                  {/* Compact Description Text */}
                  <p className="mt-2.5 text-[12px] text-gray-500 font-normal leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                {/* Bottom Colored Accent Line */}
                <div className="mt-5 flex justify-center w-full">
                  <div
                    className={`h-0.5 w-6 rounded-full ${offer.bottomLineColor} transition-all duration-300 group-hover:w-10`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;