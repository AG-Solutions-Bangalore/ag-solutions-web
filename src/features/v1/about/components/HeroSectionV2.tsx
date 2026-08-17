import React from "react";
import { Lightbulb, Code2, Handshake, TrendingUp } from "lucide-react";

import { getImageUrl } from "@/utils/imageUrl";

interface HeroSectionV2Props {
    imageSrc?: string;
}

export const HeroSectionV2: React.FC<HeroSectionV2Props> = ({
    imageSrc = getImageUrl("/images/about_us.webp"),
}) => {
    const features = [
        {
            icon: Lightbulb,
            title: "Innovative",
            subtitle: "Solutions",
            bgColor: "bg-[#E0F2FE]", // Light sky blue
            iconColor: "text-[#0284C7]",
        },
        {
            icon: Code2,
            title: "Expert",
            subtitle: "Team",
            bgColor: "bg-[#DCFCE7]", // Light emerald/mint green
            iconColor: "text-[#16A34A]",
        },
        {
            icon: Handshake,
            title: "Client",
            subtitle: "Focused",
            bgColor: "bg-[#F3E8FF]", // Light purple
            iconColor: "text-[#9333EA]",
        },
        {
            icon: TrendingUp,
            title: "Driving",
            subtitle: "Growth",
            bgColor: "bg-[#FEF3C7]", // Light amber/orange
            iconColor: "text-[#D97706]",
        },
    ];

    return (
        <section className="relative py-8 sm:py-12 lg:py-16">
            <div
                style={{ backgroundImage: `url(${imageSrc})` }}
                className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-contain bg-right bg-no-repeat min-h-[70vh] flex items-center"
            >
                {/* Left Column Content */}
                <div className="w-full max-w-xl lg:max-w-2xl py-6 bg-white/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-2xl p-4 sm:p-0">
                    {/* Tagline */}
                    <div className="mb-3 flex items-center gap-3">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#1463B9]">
                            ABOUT US
                        </span>
                        <span className="h-[2px] w-10 bg-[#1463B9]/40" />
                    </div>

                    {/* Main Title */}
                    <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                        Building Digital <br className="hidden sm:block" />
                        Solutions for a <br className="hidden sm:block" />
                        <span className="text-[#1463B9]">Better Tomorrow</span>
                    </h1>

                    {/* Description Paragraph */}
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-[#475569] sm:text-lg">
                        At <strong className="font-bold text-[#1463B9]">AG Solutions</strong>, we are passionate about technology and innovation. As a trusted IT company, we help businesses grow with smart, reliable and scalable digital solutions.
                    </p>

                    {/* Feature Badges */}
                    <div className="mt-8 flex items-center gap-6">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1 sm:items-start sm:text-left"
                                >
                                    <div
                                        className={`flex h-14 w-14 items-center justify-center rounded-full ${feature.bgColor} ${feature.iconColor} shadow-sm transition-shadow duration-200 group-hover:shadow-md`}
                                    >
                                        <IconComponent className="h-7 w-7 stroke-[2.2]" />
                                    </div>
                                    <div className="mt-2.5 text-xs font-bold leading-snug text-[#0F172A] sm:text-sm">
                                        <div>{feature.title}</div>
                                        <div>{feature.subtitle}</div>
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

export default HeroSectionV2;