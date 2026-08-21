"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 sm:right-5 z-40 flex items-center justify-center gap-2 bg-[#F4E409] hover:bg-[#3D0710] text-[#3D0710] hover:text-[#F4E409] p-3 sm:px-4 sm:py-3 rounded-full shadow-xl border border-[#6B0F1A]/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#F4E409]/50 cursor-pointer min-w-[44px] min-h-[44px]"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-current flex-shrink-0" />
      <span className="font-extrabold text-sm hidden sm:inline-block pr-1">
        Enquire on WhatsApp
      </span>
    </a>
  );
}
