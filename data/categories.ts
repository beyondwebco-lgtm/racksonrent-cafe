export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  alt: string;
  badge?: string;
}

export const POPULAR_CATEGORIES: CategoryItem[] = [
  {
    id: "packaged-snacks",
    name: "Packaged Snacks & Gourmet Foods",
    description: "Chips, makhana, gourmet snacks, trail mixes, and roasted superfoods.",
    iconName: "Utensils",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&auto=format&fit=crop",
    alt: "Packaged gourmet snacks displayed on café shelves",
    badge: "High Demand",
  },
  {
    id: "desserts-chocolates",
    name: "Desserts & Chocolates",
    description: "Fudge brownies, artisanal chocolates, cookies, and premium sweet packs.",
    iconName: "Cake",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&auto=format&fit=crop",
    alt: "Premium chocolates and artisanal desserts inside café",
    badge: "Popular",
  },
  {
    id: "healthy-foods",
    name: "Healthy Foods & Wellness",
    description: "Protein bars, granola, sugar-free snacks, vegan and gluten-free treats.",
    iconName: "Apple",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop",
    alt: "Healthy wellness products and protein snacks display",
    badge: "Health First",
  },
  {
    id: "beverages",
    name: "Beverages & Cold Brews",
    description: "Cold-pressed juices, kombucha, functional beverages, and bottled mixers.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop",
    alt: "Bottled beverages and cold-pressed drinks in café refrigerator",
    badge: "Trending",
  },
  {
    id: "artisanal-products",
    name: "Artisanal & Small-Batch Foods",
    description: "Nut butters, artisanal spreads, gourmet sauces, and small-batch preserves.",
    iconName: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop",
    alt: "Small-batch artisanal products displayed on wooden shelf",
    badge: "Top Seller",
  },
  {
    id: "lifestyle-accessories",
    name: "Lifestyle & Coffee Accessories",
    description: "Custom mugs, journals, scented candles, coffee beans, and small gifts.",
    iconName: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop",
    alt: "Lifestyle accessories and coffee merchandise inside premium café",
    badge: "Lifestyle",
  },
  {
    id: "ready-to-eat",
    name: "Ready-to-Eat Gourmet Foods",
    description: "Energy bites, roasted nuts, granola bars, and quick café munchies.",
    iconName: "Store",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=800&auto=format&fit=crop",
    alt: "Ready to eat gourmet snacks displayed near billing counter",
  },
  {
    id: "organic-products",
    name: "Organic & Natural Products",
    description: "Organic seed mixes, natural honey, herb teas, and clean-label bakes.",
    iconName: "Layers",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop",
    alt: "Organic natural products displayed inside specialty coffee shop",
  },
  {
    id: "protein-fitness",
    name: "Protein & Fitness Snacks",
    description: "High-protein bars, keto snacks, energy gels, and workout bites.",
    iconName: "Apple",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=800&auto=format&fit=crop",
    alt: "Protein fitness snacks on café display rack",
  },
  {
    id: "gift-hampers",
    name: "Gourmet Gift Hampers",
    description: "Festive gift packs, specialty coffee hampers, and luxury treat boxes.",
    iconName: "Gift",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop",
    alt: "Gourmet coffee shop gift hampers and boxes",
    badge: "Festive",
  },
];


