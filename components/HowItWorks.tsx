import React from "react";
import { Store, Search, Calendar, ShoppingBag, TrendingUp, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "List Café Space",
      description: "Café owners list available shelves, counters, racks, refrigerated spaces, or display corners.",
      icon: Store,
    },
    {
      number: 2,
      title: "Browse Café Spaces",
      description: "Brands and entrepreneurs search available spaces by city, location, size, and display type.",
      icon: Search,
    },
    {
      number: 3,
      title: "Reserve a Space",
      description: "Choose a suitable café display location and agree on a daily, weekly, or monthly rental arrangement.",
      icon: Calendar,
    },
    {
      number: 4,
      title: "Display & Sell",
      description: "Products are displayed inside the café where customers can discover, interact with, and purchase them.",
      icon: ShoppingBag,
    },
    {
      number: 5,
      title: "Shared Success",
      description: "Café owners earn from unused space while brands gain valuable offline visibility and customer access.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFBCC]/30 border-y border-[#F0E2E4]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full bg-[#FFFDF5] px-4 py-1.5 text-sm font-bold text-[#650000] border border-[#F0E2E4]">
            5-Step Process
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#650000] md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Five simple steps to connect café owners with food brands, creators, and entrepreneurs looking for high-footfall retail display space.
          </p>
        </div>

        {/* 5 Step Cards with Desktop Arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col group">
                <div className="rounded-3xl border border-[#F0E2E4] bg-[#FFFDF5] p-4 sm:p-5 shadow-[0_12px_35px_rgba(101, 0, 0,0.06)] flex flex-col items-center text-center relative group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:border-[#650000]/50 group-hover:shadow-[0_20px_45px_rgba(101, 0, 0,0.12)] transition-all duration-300 h-full">
                  
                  {/* Step Number Circle */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#650000] font-black text-[#FFFBCC] mb-4 shadow-sm text-base border-2 border-[#FAFA33] group-hover:scale-110 group-hover:bg-[#FAFA33] group-hover:text-[#4A0000] group-hover:border-[#650000] transition-all duration-300">
                    {step.number}
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFFBCC] mb-3 text-[#650000] group-hover:bg-[#650000] group-hover:text-[#FFFBCC] transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-black text-[#650000] mb-2 group-hover:text-[#4A0000] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#5F5F5F] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Desktop Arrow */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#FAFA33] text-[#4A0000] shadow-sm border border-[#650000]/20 group-hover:translate-x-1 group-hover:bg-[#4A0000] group-hover:text-[#FAFA33] transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

