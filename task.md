# Task List - Racks on Rent Café Vertical Conversion

- [x] **1. Data Layer Conversion (`data/`)**
  - [x] `data/config.ts`: Updated top bar text ("For Café Owners & Food Entrepreneurs", "Verified Café Spaces. Trusted Partners.") & tagline
  - [x] `data/navigation.ts`: Updated nav links, footer links, WhatsApp message template for Café vertical
  - [x] `data/stats.ts`: Updated "Café Spaces Listed", "Growing Café Partner Network", "Pan India Café Network", "Verified Café Display Spaces"
  - [x] `data/spaceTypes.ts`: Updated café display spaces (Café Counter Display, Eye-Level Café Shelf, Refrigerated Display Space, etc.) & space sizes
  - [x] `data/categories.ts`: Updated popular café product categories (Packaged Snacks, Desserts & Chocolates, Healthy Foods, Beverages, Artisanal Products, Lifestyle, etc.)
  - [x] `data/showcase.ts`: Updated 6 showcase categories (including Category 03 Healthy & Wellness Products exact copy) & trust items
  - [x] `data/benefits.ts`: Updated benefits comparison, role cards ("I Own a Café", "I Am a Food Brand / Entrepreneur"), and why choose us
  - [x] `data/whyChooseUs.ts`: Updated 10 reasons & trust banner for Café display space rental
  - [x] `data/journey.ts`: Updated 7-step process to café display space sharing
  - [x] `data/faqs.ts`: Replaced all 8 FAQs with exact required café Q&As
  - [x] `data/opportunities.ts`: Updated sample café display opportunities
  - [x] `data/services.ts`: Updated café display services
  - [x] `data/testimonials.ts`: Updated testimonials for café owners and food brands
  - [x] `data/pricing.ts`: Updated pricing tier descriptions ("Café Space Listing", "Display Space Placement")

- [x] **2. Component Layer Updates (`components/`)**
  - [x] `components/TopBar.tsx`: Uses updated SITE_CONFIG announcement texts
  - [x] `components/Header.tsx`: Updated CTA to "List Your Café Space" (desktop & mobile)
  - [x] `components/Hero.tsx`: Updated eyebrow, heading ("Give Your Products a Place Inside a Busy Café."), description, 4 benefits, 2 CTAs, secondary badge ("Extra Space. Extra Profit.")
  - [x] `components/HeroStats.tsx`: Uses updated stats labels ("Café Spaces Listed")
  - [x] `components/SpaceSearch.tsx`: Updated default space types, space sizes, default category ("Packaged Snacks & Gourmet Foods"), and label "Space Size"
  - [x] `components/GymSpaceShowcase.tsx`: Updated section headers ("Café Display Opportunities") & Category 03 exact text/CTAs
  - [x] `components/PopularCategories.tsx`: Updated section header ("Popular Café Product Categories") & category cards
  - [x] `components/HowItWorks.tsx`: Updated 5 steps text for café space sharing
  - [x] `components/WhyChooseUs.tsx`: Updated section description and feature cards
  - [x] `components/EnquiryForm.tsx`: Updated role labels ("Café Owner"), "Café Name *", dropdown options, placeholders, helper text
  - [x] `components/FAQ.tsx`: Updated section description and FAQ accordion
  - [x] `components/TrustStrip.tsx`: Uses updated trust strip items
  - [x] `components/Footer.tsx`: Preserved brand identity & contact info, updated navigation
  - [x] `components/AboutUs.tsx`: Updated text & venue tags to cafés, coffee shops, espresso bars, etc.
  - [x] `components/Benefits.tsx`: Updated section description & comments
  - [x] `components/SpaceTypes.tsx`: Updated section description
  - [x] `components/Pricing.tsx`: Updated section description

- [x] **3. SEO & Layout (`app/`)**
  - [x] `app/layout.tsx`: Updated title ("Café Display Space for Rent in India | Racks on Rent"), meta description, keywords, OpenGraph, JSON-LD schema

- [x] **4. Image Replacement**
  - [x] Updated category & showcase images to café display space imagery

- [x] **5. Verification & QA**
  - [x] Running `npx next build` (Passes 100% cleanly)
  - [x] Project-wide grep search audit for leftover bakery terms (Clean)
  - [x] Responsive UI verification
