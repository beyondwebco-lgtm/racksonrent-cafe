"use client";

import React from "react";
import { Layers, Store, TrendingUp } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function HeroStats() {
  const statsList = [
    {
      id: "spaces",
      targetNumber: 500,
      prefix: "",
      suffix: "+",
      label: "Café Spaces Listed",
      icon: <Layers className="w-6 h-6 text-[#FAFA33] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      id: "brands",
      targetNumber: 1000,
      prefix: "",
      suffix: "+",
      label: "Food Brands Connected",
      icon: <Store className="w-6 h-6 text-[#FAFA33] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      id: "earnings",
      targetNumber: 5,
      prefix: "₹ ",
      suffix: " Lakhs+",
      label: "Extra Income Generated",
      icon: <TrendingUp className="w-6 h-6 text-[#FAFA33] group-hover:scale-110 transition-transform duration-300" />,
    },
  ];

  return (
    <div className="bg-[#650000] text-white py-5 sm:py-6 border-y border-[#4A0000] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#4A0000]/80">
          {statsList.map((stat) => (
            <div
              key={stat.id}
              className="pt-3.5 sm:pt-0 flex flex-col items-center justify-center space-y-1 p-2 sm:p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#4A0000]/40 group cursor-default"
            >
              <div className="p-2 sm:p-2.5 rounded-2xl bg-[#4A0000]/50 mb-0.5 group-hover:bg-[#4A0000] transition-colors">
                {stat.icon}
              </div>
              <span className="text-2.5xl xs:text-3xl sm:text-4xl font-black text-[#FAFA33] tracking-tight">
                <AnimatedCounter
                  targetNumber={stat.targetNumber}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  durationMs={1200}
                />
              </span>
              <span className="text-[11px] xs:text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

