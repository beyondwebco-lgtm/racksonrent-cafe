"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HowItWorksData, defaultHowItWorksData } from "@/data/howItWorksData";
import HowItWorksHero from "./HowItWorksHero";
import FeatureHighlights from "./FeatureHighlights";
import JourneySelector from "./JourneySelector";
import JourneyInfographic from "./JourneyInfographic";
import ImageLightbox from "./ImageLightbox";
import HowItWorksCTA from "./HowItWorksCTA";

interface HowItWorksPageProps {
  data?: HowItWorksData;
}

export default function HowItWorksPage({
  data = defaultHowItWorksData,
}: HowItWorksPageProps) {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const [userSelectedRole, setUserSelectedRole] = useState<"owner" | "brand" | null>(null);
  const activeRole: "owner" | "brand" =
    userSelectedRole ?? (roleParam === "brand" ? "brand" : "owner");
  const setActiveRole = (role: "owner" | "brand") => setUserSelectedRole(role);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (roleParam) {
      const timer = setTimeout(() => {
        const element = document.getElementById("explore-journey");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [roleParam]);

  const currentRoleData =
    activeRole === "owner" ? data.spaceOwner : data.brand;

  return (
    <div className="bg-[#FFFDF5] min-h-screen pt-8 sm:pt-14 pb-20">
      {/* Hero Section */}
      <HowItWorksHero data={data.hero} />

      {/* Feature Highlights Banner */}
      <FeatureHighlights features={data.features} />

      {/* Interactive Infographic Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <JourneySelector
          activeRole={activeRole}
          spaceOwner={data.spaceOwner}
          brand={data.brand}
          onRoleChange={setActiveRole}
        />

        <JourneyInfographic
          roleData={currentRoleData}
          onOpenLightbox={() => setIsLightboxOpen(true)}
        />
      </section>

      {/* Final CTA Section */}
      <HowItWorksCTA data={data.cta} />

      {/* Fullscreen Lightbox Modal */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        image={currentRoleData.image}
        alt={currentRoleData.alt}
        downloadName={currentRoleData.downloadName}
        onClose={() => setIsLightboxOpen(false)}
      />
    </div>
  );
}
