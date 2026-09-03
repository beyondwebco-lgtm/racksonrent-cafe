export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface HeroConfig {
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  stepsLabel: string;
  partnershipLabel: string;
}

export interface JourneyRoleConfig {
  label: string;
  tabLabel: string;
  badge: string;
  heading: string;
  image: string;
  alt: string;
  downloadName: string;
  caption: string;
}

export interface CTAConfig {
  badge: string;
  title: string;
  description: string;
  ownerButton: string;
  brandButton: string;
}

export interface HowItWorksData {
  categoryName: string;
  hero: HeroConfig;
  spaceOwner: JourneyRoleConfig;
  brand: JourneyRoleConfig;
  features: FeatureItem[];
  cta: CTAConfig;
}

/**
 * Default Category-Agnostic How It Works Configuration
 * Serves as the base placeholder template for any Racks on Rent vertical.
 */
export const defaultHowItWorksData: HowItWorksData = {
  categoryName: "[CATEGORY NAME]",

  hero: {
    badge: "[CATEGORY] RETAIL PARTNERSHIP",
    title: "How It Works",
    description: "[INSERT CATEGORY-SPECIFIC DESCRIPTION]",
    image: "/images/placeholders/how-it-works-hero.jpg",
    alt: "[CATEGORY] retail partnership",
    stepsLabel: "6 Simple Steps",
    partnershipLabel: "Win-Win Partnership",
  },

  spaceOwner: {
    label: "[SPACE OWNER TYPE]",
    tabLabel: "For [SPACE OWNER TYPE]",
    badge: "[SPACE OWNER TYPE] GUIDE",
    heading: "[OWNER JOURNEY HEADLINE]",
    image: "/images/placeholders/owner-journey.jpg",
    alt: "[SPACE OWNER TYPE] journey infographic",
    downloadName: "RacksOnRent_Owner_Guide.png",
    caption: "[OWNER JOURNEY SUMMARY]",
  },

  brand: {
    label: "[BRAND / STARTUP TYPE]",
    tabLabel: "For [BRAND / STARTUP TYPE]",
    badge: "BRANDS & STARTUPS GUIDE",
    heading: "[BRAND JOURNEY HEADLINE]",
    image: "/images/placeholders/brand-journey.jpg",
    alt: "[BRAND / STARTUP TYPE] journey infographic",
    downloadName: "RacksOnRent_Brand_Guide.png",
    caption: "[BRAND JOURNEY SUMMARY]",
  },

  features: [
    {
      icon: "zap",
      title: "[FAST SETUP BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
    {
      icon: "users",
      title: "[FOOTFALL BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
    {
      icon: "building",
      title: "[SPACE OWNER BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
    {
      icon: "shield",
      title: "[LOW RISK BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
  ],

  cta: {
    badge: "[START TODAY]",
    title: "Ready to Turn Space Into Opportunity?",
    description: "[INSERT CATEGORY-SPECIFIC CTA DESCRIPTION]",
    ownerButton: "List Your Space",
    brandButton: "Showcase Your Brand",
  },
};

/**
 * Café Vertical Preset Example
 */
export const cafeHowItWorksData: HowItWorksData = {
  categoryName: "Café",

  hero: {
    badge: "CAFÉ RETAIL PARTNERSHIP",
    title: "How It Works",
    description: "Transforming underutilized café counters, shelves, and display corners into high-earning retail display opportunities for gourmet food & lifestyle brands.",
    image: "/images/placeholders/how-it-works-hero.jpg",
    alt: "Café retail display space partnership",
    stepsLabel: "6 Simple Steps",
    partnershipLabel: "Win-Win Partnership",
  },

  spaceOwner: {
    label: "Café Owners",
    tabLabel: "For Café Owners",
    badge: "CAFÉ OWNERS GUIDE",
    heading: "Sublet Café Space. Share Success.",
    image: "/images/placeholders/owner-journey.jpg",
    alt: "How It Works for Café Owners Infographic",
    downloadName: "RacksOnRent_Café_Owners_Guide.png",
    caption: "6 Easy Steps to Turn Café Counter & Shelf Space Into Steady Monthly Income",
  },

  brand: {
    label: "Food Brands & Entrepreneurs",
    tabLabel: "For Brands & Entrepreneurs",
    badge: "FOOD BRANDS & STARTUPS GUIDE",
    heading: "Your Product. Inside Busy Cafés.",
    image: "/images/placeholders/brand-journey.jpg",
    alt: "How It Works for Food Brands Infographic",
    downloadName: "RacksOnRent_Café_Brands_Guide.png",
    caption: "6 Easy Steps to Place Your Products Front-and-Center to Café Visitors",
  },

  features: [
    {
      icon: "zap",
      title: "Fast Setup",
      description: "Get display racks active in high-traffic café spaces within days.",
    },
    {
      icon: "users",
      title: "Built-In Footfall",
      description: "Tap into thousands of daily coffee lovers, remote workers, and foodies.",
    },
    {
      icon: "building",
      title: "Passive Café Income",
      description: "Monetize unused counter space and wall shelves into recurring rental income.",
    },
    {
      icon: "shield",
      title: "Low Risk Growth",
      description: "Showcase packaged foods with zero permanent construction and minimal overhead.",
    },
  ],

  cta: {
    badge: "START TODAY",
    title: "Ready to Turn Space Into Opportunity?",
    description: "Whether you own a café or want to expand your food brand, we connect you for mutual success.",
    ownerButton: "List Your Café Space",
    brandButton: "Showcase Your Brand",
  },
};
