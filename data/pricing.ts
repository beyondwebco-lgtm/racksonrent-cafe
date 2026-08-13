export interface PricingTier {
  id: string;
  title: string;
  targetRole: string;
  priceDisplay: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  roleType: "gym-owner" | "wellness";
  highlighted?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "cafe-listing",
    title: "Café Space Listing",
    targetRole: "For Café Owners",
    priceDisplay: "Free",
    period: "Forever",
    description: "List your unused café shelves, counter space, or display corners and start earning extra monthly income.",
    features: [
      "Zero listing & setup fees",
      "Direct brand enquiry matching",
      "Set your own space rent terms",
      "Full approval over displayed products"
    ],
    ctaLabel: "List Your Café Space",
    roleType: "gym-owner",
    highlighted: true
  },
  {
    id: "vendor-space-rental",
    title: "Display Space Placement",
    targetRole: "For Food Brands & Entrepreneurs",
    priceDisplay: "Flexible Plans",
    period: "Daily, Weekly or Monthly",
    description: "Display and sell your food, beverage, or lifestyle products inside top local cafés.",
    features: [
      "Access high daily café customer footfall",
      "Flexible space sizes & display formats",
      "Direct contact with café owners",
      "No heavy standalone retail overhead"
    ],
    ctaLabel: "Find Café Space",
    roleType: "wellness",
    highlighted: false
  }
];


