"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Building, ShoppingBag } from "lucide-react";
import { CTAConfig } from "@/data/howItWorksData";

interface HowItWorksCTAProps {
  data: CTAConfig;
}

export default function HowItWorksCTA({ data }: HowItWorksCTAProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-[#650000] via-[#650000] to-[#4A0000] rounded-[2.5rem] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden border-2 border-[#FAFA33]/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAFA33]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAFA33] px-4 py-1 text-xs font-extrabold text-[#650000] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#650000]" />
            {data.badge}
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            {data.title}
          </h2>

          <p className="text-[#FFFBCC] text-sm sm:text-lg mb-8 max-w-2xl mx-auto font-medium">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FAFA33] px-7 py-3.5 text-sm sm:text-base font-black text-[#650000] shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
            >
              <Building className="w-5 h-5 text-[#650000]" />
              <span>{data.ownerButton}</span>
            </Link>

            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border-2 border-white/20 px-7 py-3.5 text-sm sm:text-base font-black text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5 text-[#FFFBCC]" />
              <span>{data.brandButton}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
