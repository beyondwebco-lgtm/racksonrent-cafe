export interface JourneyStep {
  stepNumber: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  visualTag: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: 1,
    title: "Café Owners List Available Space",
    shortDescription: "Café owners list available shelves, counters, racks, refrigerated spaces, or display corners.",
    detailedDescription: "Café owners post available eye-level racks, glass display counters, tabletop areas, or entrance corners looking for partner food and lifestyle brands.",
    iconName: "Store",
    visualTag: "Café Space Sublet"
  },
  {
    stepNumber: 2,
    title: "Brands Browse Café Spaces",
    shortDescription: "Brands and entrepreneurs search available spaces by city, location, size, and display type.",
    detailedDescription: "Vendors search by café location, space size, customer footfall, and product category to find the ideal retail display spot.",
    iconName: "Eye",
    visualTag: "Targeted Discovery"
  },
  {
    stepNumber: 3,
    title: "Reserve a Café Display Space",
    shortDescription: "Choose a suitable café display location and agree on a rental arrangement.",
    detailedDescription: "Food brands and creators agree on flexible daily, weekly, or monthly rental terms directly with the café owner with zero heavy standalone retail overhead.",
    iconName: "UserCheck",
    visualTag: "Flexible Rental"
  },
  {
    stepNumber: 4,
    title: "Set Up Product Display",
    shortDescription: "Products are displayed inside the café where customers discover and purchase them.",
    detailedDescription: "Packaged snacks, cold beverages, artisanal chocolates, healthy treats, or lifestyle merchandise are attractively arranged with branding.",
    iconName: "Maximize2",
    visualTag: "Retail Display Setup"
  },
  {
    stepNumber: 5,
    title: "Café Customers Discover Items",
    shortDescription: "Active café visitors notice and purchase new artisanal and specialty products.",
    detailedDescription: "Engaged café visitors discover unique local items while buying their daily coffee, lunch, or beverages.",
    iconName: "MessageCircle",
    visualTag: "High Footfall Sales"
  },
  {
    stepNumber: 6,
    title: "Products Sold Inside Café",
    shortDescription: "Products are sold right at the café checkout counter or display corner.",
    detailedDescription: "Smooth checkout transactions happen directly inside the café, creating instant retail sales for the brand.",
    iconName: "ShoppingBag",
    visualTag: "Instant Retail Sales"
  },
  {
    stepNumber: 7,
    title: "Shared Success & Revenue",
    shortDescription: "Café owners earn extra income while brands gain valuable offline visibility.",
    detailedDescription: "A thriving win-win relationship: café owners earn rental income from underutilized space while brands scale offline presence across town.",
    iconName: "TrendingUp",
    visualTag: "Shared Success"
  }
];


