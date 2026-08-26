"use client";

import React, { useState } from "react";
import { Store, Utensils, HelpCircle, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import SectionHeader from "@/components/ui/SectionHeader";

type RoleType = "gym-owner" | "wellness" | "general";

interface EnquiryFormProps {
  selectedRole?: RoleType;
  initialSearchValues?: {
    location?: string;
    spaceType?: string;
    rackSize?: string;
    category?: string;
  };
  onRoleChange?: (role: RoleType) => void;
}

export default function EnquiryForm({ selectedRole = "gym-owner", initialSearchValues, onRoleChange }: EnquiryFormProps) {
  const [internalRole, setInternalRole] = useState<RoleType | null>(null);

  const role = internalRole ?? selectedRole;

  const [formData, setFormData] = useState({
    fullName: "",
    bakeryName: "",
    brandName: "",
    phone: "",
    city: initialSearchValues?.location || "",
    availableSpace: initialSearchValues?.spaceType || "Café Counter Display",
    requiredSpace: initialSearchValues?.spaceType || "Café Counter Display",
    rackSize: initialSearchValues?.rackSize || "Small Display",
    category: initialSearchValues?.category || "Packaged Snacks & Gourmet Foods",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleRoleSelect = (newRole: RoleType) => {
    setInternalRole(newRole);
    if (onRoleChange) {
      onRoleChange(newRole);
    }
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (role === "gym-owner" && !formData.bakeryName.trim()) newErrors.bakeryName = "Café Name is required";
    if (role === "wellness" && !formData.brandName.trim()) newErrors.brandName = "Brand Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.city.trim() && !initialSearchValues?.location) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const activeCity = formData.city || initialSearchValues?.location || "";
    const activeSpaceType = formData.availableSpace || initialSearchValues?.spaceType || "Café Counter Display";
    const activeRequiredSpace = formData.requiredSpace || initialSearchValues?.spaceType || "Café Counter Display";
    const activeRackSize = formData.rackSize || initialSearchValues?.rackSize || "Small Display";
    const activeCategory = formData.category || initialSearchValues?.category || "Packaged Snacks & Gourmet Munchies";

    let roleText = "Café Owner";
    let detailsText = "";

    if (role === "gym-owner") {
      roleText = "Café Owner";
      detailsText = `Name: ${formData.fullName}\nCafé Name: ${formData.bakeryName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nAvailable Space: ${activeSpaceType}\nDisplay Space Size: ${activeRackSize}\nMessage: ${formData.message || "N/A"}`;
    } else if (role === "wellness") {
      roleText = "Food Brand / Entrepreneur";
      detailsText = `Name: ${formData.fullName}\nBrand Name: ${formData.brandName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nProduct Category: ${activeCategory}\nRequired Space: ${activeRequiredSpace}\nPreferred Space Size: ${activeRackSize}\nMessage: ${formData.message || "N/A"}`;
    } else {
      roleText = "General Enquiry";
      detailsText = `Name: ${formData.fullName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nMessage: ${formData.message || "N/A"}`;
    }

    const messageText = `Hello Racks on Rent,

I am interested in café display space opportunities.

Role: ${roleText}
${detailsText}`;

    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 300);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeader
          badge="GET IN TOUCH"
          title="Tell Us What You Are Looking For"
          subtitle="Choose your role, enter your café or product details, and continue directly on WhatsApp."
        />

        <div className="max-w-3xl mx-auto">
          {/* Role Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center p-1 sm:p-1.5 bg-[#FFFBCC]/30 rounded-2xl mb-6 sm:mb-8 gap-1 sm:gap-1.5 border border-[#F0E2E4] shadow-xs">
            <button
              type="button"
              onClick={() => handleRoleSelect("gym-owner")}
              className={`flex-1 min-w-[120px] xs:min-w-[140px] flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer min-h-[44px] ${
                role === "gym-owner"
                  ? "bg-[#650000] text-[#FFFBCC] shadow-xs"
                  : "text-[#650000] hover:bg-[#FFFBCC]"
              }`}
            >
              <Store className="w-4 h-4 flex-shrink-0" />
              <span>Café Owner</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("wellness")}
              className={`flex-1 min-w-[120px] xs:min-w-[140px] flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer min-h-[44px] ${
                role === "wellness"
                  ? "bg-[#650000] text-[#FFFBCC] shadow-xs"
                  : "text-[#650000] hover:bg-[#FFFBCC]"
              }`}
            >
              <Utensils className="w-4 h-4 flex-shrink-0" />
              <span>Food Entrepreneur</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("general")}
              className={`flex-1 min-w-[120px] xs:min-w-[140px] flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer min-h-[44px] ${
                role === "general"
                  ? "bg-[#650000] text-[#FFFBCC] shadow-xs"
                  : "text-[#650000] hover:bg-[#FFFBCC]"
              }`}
            >
              <HelpCircle className="w-4 h-4 flex-shrink-0" />
              <span>General Enquiry</span>
            </button>
          </div>

          {/* Form Box */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5 rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-4 xs:p-6 sm:p-10 shadow-[0_12px_35px_rgba(101, 0, 0,0.06)]"
          >
            {submitted && (
              <div className="bg-[#FFFBCC] border border-[#650000]/30 text-[#650000] p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 text-xs sm:text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#650000] flex-shrink-0" />
                <span>Opening WhatsApp with your enquiry details...</span>
              </div>
            )}

            {/* Common Field: Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#650000] uppercase tracking-wider mb-1.5" htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[#C29000] outline-none transition placeholder:text-[#C29000]/60 focus:border-[#650000] focus:ring-4 focus:ring-[#FFFBCC] text-xs sm:text-sm min-h-[44px] ${
                  errors.fullName ? "border-red-500 bg-red-50/30" : ""
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.fullName}</p>}
            </div>

            {/* Café Owner specific field */}
            {role === "gym-owner" && (
              <div>
                <label className="block text-xs font-bold text-[#650000] uppercase tracking-wider mb-1.5" htmlFor="bakeryName">
                  Café Name *
                </label>
                <input
                  id="bakeryName"
                  name="bakeryName"
                  type="text"
                  value={formData.bakeryName}
                  onChange={handleChange}
                  placeholder="e.g. Brew House Café"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[#C29000] outline-none transition placeholder:text-[#C29000]/60 focus:border-[#650000] focus:ring-4 focus:ring-[#FFFBCC] text-xs sm:text-sm min-h-[44px] ${
                    errors.bakeryName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.bakeryName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.bakeryName}</p>}
              </div>
            )}

            {/* Food Entrepreneur specific field */}
            {role === "wellness" && (
              <div>
                <label className="block text-xs font-bold text-[#650000] uppercase tracking-wider mb-1.5" htmlFor="brandName">
                  Brand or Food Business Name *
                </label>
                <input
                  id="brandName"
                  name="brandName"
                  type="text"
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="e.g. Heavenly Cookies & Bakes"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[#C29000] outline-none transition placeholder:text-[#C29000]/60 focus:border-[#650000] focus:ring-4 focus:ring-[#FFFBCC] text-xs sm:text-sm min-h-[44px] ${
                    errors.brandName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.brandName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.brandName}</p>}
              </div>
            )}

            {/* Phone & City Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#650000] uppercase tracking-wider mb-1.5" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="7995424477"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[#C29000] outline-none transition placeholder:text-[#C29000]/60 focus:border-[#650000] focus:ring-4 focus:ring-[#FFFBCC] text-xs sm:text-sm min-h-[44px] ${
                    errors.phone ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#650000] uppercase tracking-wider mb-1.5" htmlFor="city">
                  City *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city || initialSearchValues?.location || ""}
                  onChange={handleChange}
                  placeholder="e.g. Hyderabad"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[#C29000] outline-none transition placeholder:text-[#C29000]/60 focus:border-[#650000] focus:ring-4 focus:ring-[#FFFBCC] text-xs sm:text-sm min-h-[44px] ${
                    errors.city ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.city && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.city}</p>}
              </div>
            </div>

            {/* Café Owner Space & Size Fields */}
            {role === "gym-owner" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#650000] uppercase tracking-wider mb-1.5" htmlFor="availableSpace">
                    Available Space Type
                  </label>
                  <select
                    id="availableSpace"
                    name="availableSpace"
                    value={formData.availableSpace || initialSearchValues?.spaceType || "Café Counter Display"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[#C29000] outline-none transition focus:border-[#650000] focus:ring-4 focus:ring-[#FFFBCC] text-xs sm:text-sm min-h-[44px]"
                  >
                    <option value="Café Counter Display">Café Counter Display</option>
                    <option value="Eye-Level Shelf">Eye-Level Shelf</option>
                    <option value="Checkout Counter Space">Checkout Counter Space</option>
                    <option value="Refrigerated Display">Refrigerated Display</option>
                    <option value="Grab-and-Go Rack">Grab-and-Go Rack</option>
                    <option value="Wall Display">Wall Display</option>
                    <option value="Tabletop Display">Tabletop Display</option>
                    <option value="Entrance Display">Entrance Display</option>
                    <option value="Custom Space">Custom Space</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#650000] uppercase tracking-wider mb-1.5" htmlFor="rackSize">
                    Display Space Size
                  </label>
                  <select
                    id="rackSize"
                    name="rackSize"
                    value={formData.rackSize || initialSearchValues?.rackSize || "Small — Up to 2×1 ft"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[#C29000] outline-none transition focus:border-[#650000] focus:ring-4 focus:ring-[#FFFBCC] text-xs sm:text-sm min-h-[44px]"
                  >
                    <option value="Small — Up to 2×1 ft">Small — Up to 2×1 ft</option>
                    <option value="Medium — Up to 3×2 ft">Medium — Up to 3×2 ft</option>
                    <option value="Large — Up to 5×2 ft">Large — Up to 5×2 ft</option>
                    <option value="Countertop">Countertop</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>
            )}

            {/* Food Entrepreneur Category, Space & Size Fields */}
            {role === "wellness" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#650000] uppercase tracking-wider mb-1.5" htmlFor="category">
                      Product Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category || initialSearchValues?.category || "Packaged Snacks & Gourmet Foods"}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[#C29000] outline-none transition focus:border-[#650000] focus:ring-4 focus:ring-[#FFFBCC] text-xs sm:text-sm min-h-[44px]"
                    >
                      <option value="Packaged Snacks & Gourmet Munchies">Packaged Snacks & Gourmet Munchies</option>
                      <option value="Desserts & Artisanal Chocolates">Desserts & Artisanal Chocolates</option>
                      <option value="Healthy Foods & Wellness Corner">Healthy Foods & Wellness Corner</option>
                      <option value="Cold Brews, Kombucha & Beverage Chiller">Cold Brews, Kombucha & Beverage Chiller</option>
                      <option value="Artisanal Pantry & Specialty Spreads">Artisanal Pantry & Specialty Spreads</option>
                      <option value="Coffee Merchandise & Lifestyle Corner">Coffee Merchandise & Lifestyle Corner</option>
                      <option value="Ready-to-Eat Gourmet Foods">Ready-to-Eat Gourmet Foods</option>
                      <option value="Organic & Natural Products">Organic & Natural Products</option>
                      <option value="Protein & Fitness Snacks">Protein & Fitness Snacks</option>
                      <option value="Gourmet Gift Hampers">Gourmet Gift Hampers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#650000] uppercase tracking-wider mb-1.5" htmlFor="requiredSpace">
                      Required Space Type
                    </label>
                    <select
                      id="requiredSpace"
                      name="requiredSpace"
                      value={formData.requiredSpace || initialSearchValues?.spaceType || "Café Counter Display"}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[#C29000] outline-none transition focus:border-[#650000] focus:ring-4 focus:ring-[#FFFBCC] text-xs sm:text-sm min-h-[44px]"
                    >
                      <option value="Café Counter Display">Café Counter Display</option>
                      <option value="Eye-Level Shelf">Eye-Level Shelf</option>
                      <option value="Checkout Counter Space">Checkout Counter Space</option>
                      <option value="Refrigerated Display">Refrigerated Display</option>
                      <option value="Grab-and-Go Rack">Grab-and-Go Rack</option>
                      <option value="Wall Display">Wall Display</option>
                      <option value="Tabletop Display">Tabletop Display</option>
                      <option value="Entrance Display">Entrance Display</option>
                      <option value="Custom Space">Custom Space</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#650000] uppercase tracking-wider mb-1.5" htmlFor="rackSize">
                    Preferred Space Size
                  </label>
                  <select
                    id="rackSize"
                    name="rackSize"
                    value={formData.rackSize || initialSearchValues?.rackSize || "Small — Up to 2×1 ft"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[#C29000] outline-none transition focus:border-[#650000] focus:ring-4 focus:ring-[#FFFBCC] text-xs sm:text-sm min-h-[44px]"
                  >
                    <option value="Small — Up to 2×1 ft">Small — Up to 2×1 ft</option>
                    <option value="Medium — Up to 3×2 ft">Medium — Up to 3×2 ft</option>
                    <option value="Large — Up to 5×2 ft">Large — Up to 5×2 ft</option>
                    <option value="Countertop">Countertop</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>
            )}

            {/* Message Field */}
            <div>
              <label className="block text-xs font-bold text-[#650000] uppercase tracking-wider mb-1.5" htmlFor="message">
                Short Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your available café space, product category, rental preference, or any additional requirements..."
                className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[#C29000] outline-none transition placeholder:text-[#C29000]/60 focus:border-[#650000] focus:ring-4 focus:ring-[#FFFBCC] text-xs sm:text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FAFA33] hover:bg-[#4A0000] text-[#4A0000] hover:text-[#FAFA33] border border-[#650000]/20 py-3.5 px-5 sm:px-6 font-extrabold text-sm sm:text-base shadow-xs transition-all cursor-pointer min-h-[50px] active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current flex-shrink-0" />
                <span className="text-center">Submit & Continue on WhatsApp</span>
              </button>

              <p className="text-xs text-[#650000]/85 text-center mt-3 flex items-center justify-center gap-1 font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-[#650000] flex-shrink-0" />
                <span>Your information is used only to respond to your café space enquiry.</span>
              </p>
            </div>
          </form>
        </div>


      </div>
    </section>
  );
}

