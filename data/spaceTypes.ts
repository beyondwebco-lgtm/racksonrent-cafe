export interface SpaceTypeItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export const COMPACT_SPACE_TYPES: SpaceTypeItem[] = [
  {
    id: "cafe-counter",
    name: "Café Counter Display",
    description: "Checkout counter display spot capturing every café customer during purchase.",
    iconName: "Store",
  },
  {
    id: "eye-level-shelf",
    name: "Eye-Level Café Shelf",
    description: "Dedicated eye-level wooden or glass shelf for packaged snacks, chocolates, and treats.",
    iconName: "Layers",
  },
  {
    id: "checkout-counter",
    name: "Checkout Counter Space",
    description: "High-visibility point-of-sale display right beside the billing counter.",
    iconName: "Store",
  },
  {
    id: "refrigerated-display",
    name: "Refrigerated Display Space",
    description: "Chilled counter space for cold-pressed beverages, kombucha, and chilled desserts.",
    iconName: "Coffee",
  },
  {
    id: "tabletop-display",
    name: "Tabletop Display",
    description: "Promotional tabletop stand placed in customer seating areas for high engagement.",
    iconName: "Gift",
  },
  {
    id: "grab-and-go",
    name: "Grab-and-Go Rack",
    description: "Floor-standing rack setup near the ordering line for quick-buy packaged items.",
    iconName: "Box",
  },
];

export const RACK_SIZES = [
  { id: "small", name: "Small Display", dimensions: "Up to 2x1 ft" },
  { id: "medium", name: "Medium Display", dimensions: "Up to 3x2 ft" },
  { id: "large", name: "Large Display", dimensions: "Up to 5x2 ft" },
  { id: "countertop", name: "Countertop Space", dimensions: "Billing Counter Area" },
  { id: "custom", name: "Custom Space", dimensions: "Full Café Display / Corner" },
];


