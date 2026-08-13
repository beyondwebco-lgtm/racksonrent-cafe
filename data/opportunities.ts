export interface OpportunityExample {
  id: string;
  title: string;
  location: string;
  spaceType: string;
  suitableFor: string;
  approxSize: string;
  arrangement: string;
  badgeText: string;
  description: string;
  bgGradient: string;
}

export const SAMPLE_OPPORTUNITIES: OpportunityExample[] = [
  {
    id: "premium-cafe-counter",
    title: "Eye-Level Café Counter Display",
    location: "Hyderabad (Banjara Hills / Jubilee Hills)",
    spaceType: "Eye-Level Glass Display Shelf inside high-footfall specialty café",
    suitableFor: "Packaged gourmet snacks, healthy bites, chocolates & gift items",
    approxSize: "4 ft x 2 ft display counter",
    arrangement: "Monthly Café Space Rental",
    badgeText: "Featured Café",
    description: "Prime eye-level display counter inside a popular specialty café serving 500+ daily visitors.",
    bgGradient: "from-[#3D0710] to-[#6B0F1A]"
  },
  {
    id: "checkout-snack-rack",
    title: "Checkout Countertop Snack Rack",
    location: "Vijayawada (MG Road area)",
    spaceType: "Countertop display stand right beside café checkout register",
    suitableFor: "Artisanal cookies, trail mixes, energy bars & roasted nuts",
    approxSize: "3 ft countertop display rack",
    arrangement: "Weekly / Monthly Space Rental",
    badgeText: "High Footfall",
    description: "Top impulse-buy location right at the billing counter capturing every customer during checkout.",
    bgGradient: "from-yellow-950/90 to-amber-950/90"
  },
  {
    id: "beverage-chiller-shelf",
    title: "Refrigerated Beverage Showcase",
    location: "Bengaluru (Indiranagar / HSR Layout)",
    spaceType: "Dedicated chilled glass display layer near coffee bar",
    suitableFor: "Cold-pressed juices, kombucha, functional sodas & cold brews",
    approxSize: "4 ft x 1.5 ft refrigerated shelf",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "Temperature Controlled",
    description: "Chilled display layer positioned right beside the barista espresso counter.",
    bgGradient: "from-[#3D0710] to-[#6B0F1A]"
  },
  {
    id: "gourmet-pantry-wall",
    title: "Gourmet Pantry Wall Display",
    location: "Visakhapatnam (Beach Road area)",
    spaceType: "Promotional wall shelf display with warm spot lighting",
    suitableFor: "Nut butters, organic honey, artisanal spreads & snack jars",
    approxSize: "4 ft x 1.5 ft wall rack",
    arrangement: "Monthly Café Space Sublet",
    badgeText: "Prime Spot",
    description: "Eye-catching illuminated wall display next to the café seating area in a bustling seafront outlet.",
    bgGradient: "from-amber-900/90 to-stone-900/90"
  },
  {
    id: "lifestyle-merch-corner",
    title: "Lifestyle & Accessories Corner",
    location: "Chennai (Velachery area)",
    spaceType: "Tabletop & retail display corner near café entrance",
    suitableFor: "Coffee mugs, journals, scented candles & lifestyle gifts",
    approxSize: "3.5 ft retail showcase",
    arrangement: "Monthly Space Rental",
    badgeText: "Lifestyle Retail",
    description: "Premium retail display corner ideal for lifestyle merchandise and specialty coffee gifts.",
    bgGradient: "from-rose-950/90 to-pink-950/90"
  },
  {
    id: "grab-and-go-unit",
    title: "Grab-and-Go Entrance Display",
    location: "Guntur (Lakshmipuram area)",
    spaceType: "Floor-standing grab-and-go display unit near main entrance",
    suitableFor: "Packaged snacks, protein bars, bottled drinks & gift boxes",
    approxSize: "5 ft x 2 ft promotional rack",
    arrangement: "Flexible Monthly Rental",
    badgeText: "High Visibility",
    description: "High-impact entrance spot inside a busy coffee lounge for instant impulse buys.",
    bgGradient: "from-purple-950/90 to-rose-950/90"
  }
];


