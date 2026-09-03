import React, { Suspense } from "react";
import type { Metadata } from "next";
import HowItWorksPage from "@/components/how-it-works/HowItWorksPage";
import { cafeHowItWorksData } from "@/data/howItWorksData";

export const metadata: Metadata = {
  title: "How It Works | Step-by-Step Retail Display Guide | Racks on Rent",
  description:
    "Learn how Racks on Rent connects space owners with retail brands and entrepreneurs for high-earning retail display opportunities.",
};

export default function HowItWorksRoute() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FFFDF5] flex items-center justify-center p-8">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#650000] border-t-transparent mb-4"></div>
          <p className="text-[#650000] font-extrabold text-sm">Loading How It Works...</p>
        </div>
      </div>
    }>
      <HowItWorksPage data={cafeHowItWorksData} />
    </Suspense>
  );
}
