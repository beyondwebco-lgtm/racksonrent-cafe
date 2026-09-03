"use client";

import React from "react";
import { Zap, Users, Building, Shield, TrendingUp, Sparkles, Award } from "lucide-react";
import { FeatureItem } from "@/data/howItWorksData";

interface FeatureHighlightsProps {
  features: FeatureItem[];
}

const renderLucideIcon = (iconName: string) => {
  const normalized = iconName.toLowerCase().replace(/[^a-z0-9]/g, "");
  switch (normalized) {
    case "zap":
    case "fast":
    case "bolt":
      return <Zap className="w-6 h-6 text-[#650000]" />;
    case "users":
    case "user":
    case "people":
    case "footfall":
      return <Users className="w-6 h-6 text-[#650000]" />;
    case "building":
    case "store":
    case "shop":
    case "space":
      return <Building className="w-6 h-6 text-[#650000]" />;
    case "shield":
    case "security":
    case "lowrisk":
    case "risk":
      return <Shield className="w-6 h-6 text-[#650000]" />;
    case "trendingup":
    case "growth":
      return <TrendingUp className="w-6 h-6 text-[#650000]" />;
    case "award":
      return <Award className="w-6 h-6 text-[#650000]" />;
    default:
      return <Sparkles className="w-6 h-6 text-[#650000]" />;
  }
};

export default function FeatureHighlights({ features }: FeatureHighlightsProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-[#F0E2E4] shadow-xs hover:shadow-md hover:border-[#FAFA33]/60 transition-all duration-300"
          >
            <div className="p-2.5 rounded-xl bg-[#FFFBCC]/60 inline-block mb-3">
              {renderLucideIcon(feature.icon)}
            </div>
            <h3 className="text-base font-extrabold text-[#650000] mb-1">
              {feature.title}
            </h3>
            <p className="text-xs text-[#5F5F5F] leading-relaxed font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
