import React from "react";
import { Users, ShieldCheck, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function TopBar() {
  return (
    <div className="bg-[#650000] text-white text-[10px] md:text-[12px] border-b border-[#4A0000] py-2 px-4 sm:px-6 lg:px-8 font-semibold relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Content: Yellow Icon + Soft Lemon Text */}
        <div className="flex items-center gap-1.5 text-[#FFFBCC] min-w-0">
          <Users className="w-3.5 h-3.5 text-[#FAFA33] flex-shrink-0" />
          <span className="truncate leading-tight font-medium sm:font-semibold">
            {SITE_CONFIG.topBarTextLeft}
          </span>
        </div>

        {/* Center Content (Desktop): Verification/Trust Badge with Shield Icon + White Text */}
        <div className="hidden md:flex items-center gap-1.5 text-white/95 font-medium flex-shrink-0">
          <ShieldCheck className="w-4 h-4 text-[#FAFA33] flex-shrink-0" />
          <span>{SITE_CONFIG.topBarTextCenter}</span>
        </div>

        {/* Right Content: Phone & Mail Links with Hover Transition to #FAFA33 */}
        <div className="flex items-center gap-2.5 sm:gap-4 flex-shrink-0">
          <a
            href={SITE_CONFIG.telLink}
            className="flex items-center gap-1 text-white hover:text-[#FAFA33] transition-colors py-0.5 px-1 rounded active:scale-95"
            aria-label={`Call ${SITE_CONFIG.phoneFormatted}`}
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FAFA33] flex-shrink-0" />
            <span className="whitespace-nowrap font-semibold">{SITE_CONFIG.phoneFormatted}</span>
          </a>

          <span className="text-[#FAFA33]/40 hidden sm:inline">•</span>

          <a
            href={SITE_CONFIG.mailtoLink}
            className="hidden sm:flex items-center gap-1 text-white hover:text-[#FAFA33] transition-colors py-0.5 px-1 rounded active:scale-95"
            aria-label={`Email ${SITE_CONFIG.email}`}
          >
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FAFA33] flex-shrink-0" />
            <span className="whitespace-nowrap font-semibold">{SITE_CONFIG.email}</span>
          </a>
        </div>

      </div>
    </div>
  );
}

