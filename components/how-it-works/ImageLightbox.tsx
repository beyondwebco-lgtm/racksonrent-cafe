"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Download } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  image: string;
  alt: string;
  downloadName: string;
  onClose: () => void;
}

export default function ImageLightbox({
  isOpen,
  image,
  alt,
  downloadName,
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Lock background scroll
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
      onClick={onClose}
    >
      {/* Top Header Controls */}
      <div
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={image}
          download={downloadName}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAFA33] text-[#650000] text-xs font-black hover:bg-white transition shadow-lg"
        >
          <Download className="w-4 h-4 text-[#650000]" />
          <span>Download High Res</span>
        </a>
        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#650000] transition-all cursor-pointer shadow-lg"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Image Preview Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-2xl p-2 bg-[#FFFDF5]/10 border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image}
          alt={alt}
          width={1600}
          height={1000}
          className="w-full h-auto object-contain rounded-xl shadow-2xl mx-auto"
        />
      </div>
    </div>
  );
}
