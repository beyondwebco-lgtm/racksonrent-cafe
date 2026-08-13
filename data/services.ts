export interface ServiceSupported {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "packaged" | "beverages" | "healthy" | "display";
}

export const SERVICES_SUPPORTED: ServiceSupported[] = [
  {
    id: "packaged-snacks",
    title: "Packaged Snacks & Gourmet Foods",
    description: "Artisan chips, roasted makhana, trail mixes, and gourmet snacks.",
    iconName: "Utensils",
    category: "packaged"
  },
  {
    id: "gourmet-chocolates",
    title: "Desserts & Chocolates",
    description: "Fudge brownies, artisanal chocolates, cookies, and dessert jars.",
    iconName: "Cake",
    category: "packaged"
  },
  {
    id: "cold-beverages",
    title: "Cold Beverages & Kombucha",
    description: "Cold-pressed juices, kombucha, functional sodas, and cold brews.",
    iconName: "Sparkles",
    category: "beverages"
  },
  {
    id: "healthy-bites",
    title: "Healthy & Wellness Products",
    description: "Protein bars, sugar-free snacks, vegan bakes, and organic granola.",
    iconName: "Apple",
    category: "healthy"
  },
  {
    id: "artisanal-spreads",
    title: "Artisanal Spreads & Preserves",
    description: "Nut butters, raw honey, gourmet sauces, and small-batch preserves.",
    iconName: "HeartHandshake",
    category: "packaged"
  },
  {
    id: "lifestyle-merchandise",
    title: "Lifestyle & Coffee Accessories",
    description: "Custom mugs, journals, scented candles, and coffee accessories.",
    iconName: "ShoppingBag",
    category: "display"
  },
  {
    id: "cafe-counters",
    title: "Café Counter Displays",
    description: "Checkout counter display spots placed next to the billing register.",
    iconName: "Store",
    category: "display"
  },
  {
    id: "eye-level-shelves",
    title: "Eye-Level Café Shelves",
    description: "Dedicated wooden and glass shelves positioned at eye level for high visibility.",
    iconName: "Layers",
    category: "display"
  },
  {
    id: "refrigerated-showcases",
    title: "Refrigerated Display Cases",
    description: "Chilled display spaces for cold beverages and chilled dessert jars.",
    iconName: "Coffee",
    category: "display"
  }
];


