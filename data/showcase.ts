export interface ShowcaseCategory {
  id: string;
  eyebrow: string;
  title: string;
  shortName: string;
  description: string;
  suitableFor: string[];
  benefits: string[];
  primaryCta: string;
  secondaryCta: string;
  image: string;
  iconName: string;
  rolePrimary: "gym-owner" | "wellness";
  spaceTypePrimary: string;
  roleSecondary: "gym-owner" | "wellness";
  categorySecondary: string;
}

export const SHOWCASE_CATEGORIES: ShowcaseCategory[] = [
  {
    id: "packaged-snacks",
    eyebrow: "Category 01",
    title: "Café Packaged Snacks & Gourmet Munchies",
    shortName: "Packaged Snacks & Gourmet Munchies",
    description:
      "Display artisan chips, roasted makhana, gourmet trail mixes, savory crisps, and healthy munchies on eye-level café shelves and grab-and-go counter racks.",
    suitableFor: [
      "Artisan chips",
      "Roasted makhana",
      "Gourmet trail mixes",
      "Flavored nuts & seeds",
      "Savory crisps",
      "Gourmet popcorn",
      "Baked snack bites",
    ],
    benefits: [
      "Prime grab-and-go café counter placement",
      "High daily footfall of coffee & snack buyers",
      "Instant brand discovery & impulse add-on sales",
      "Passive rental income for café owners",
      "Affordable retail exposure for snack brands",
    ],
    primaryCta: "List Café Snack Space",
    secondaryCta: "Find Space for Packaged Snacks",
    image: "/categories/packaged-snacks.png",
    iconName: "ShoppingBag",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Grab-and-Go Rack",
    roleSecondary: "wellness",
    categorySecondary: "Packaged Snacks & Gourmet Munchies",
  },
  {
    id: "desserts-chocolates",
    eyebrow: "Category 02",
    title: "Café Desserts & Artisanal Chocolates",
    shortName: "Desserts & Artisanal Chocolates",
    description:
      "Showcase handcrafted truffles, fudge brownies, gourmet cookies, chocolate bars, and dessert jars right near the café billing counter and checkout display.",
    suitableFor: [
      "Fudge brownies",
      "Handcrafted truffles",
      "Artisanal chocolate bars",
      "Gourmet cookies",
      "Macaron boxes",
      "Dessert jars",
      "Confectionery packs",
    ],
    benefits: [
      "Top checkout counter impulse purchases",
      "Direct reach to daily espresso & coffee drinkers",
      "Complements specialty coffee & beverage orders",
      "Strong local brand recognition",
      "Flexible weekly & monthly café rentals",
    ],
    primaryCta: "List Dessert Counter Space",
    secondaryCta: "Find Space for Chocolates & Desserts",
    image: "/categories/desserts-chocolates.png",
    iconName: "Cake",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Checkout Counter Space",
    roleSecondary: "wellness",
    categorySecondary: "Desserts & Artisanal Chocolates",
  },
  {
    id: "healthy-wellness",
    eyebrow: "Category 03",
    title: "Healthy Foods & Wellness Corner",
    shortName: "Healthy Foods & Wellness Corner",
    description:
      "Showcase protein snacks, sugar-free foods, granola, nutrition bars, vegan products, healthy beverages, and specialty wellness products to café customers looking for better everyday choices.",
    suitableFor: [
      "Protein bars",
      "Sugar-free snacks",
      "Granola packs",
      "Vegan treats",
      "Healthy beverages",
      "Trail mixes",
      "Organic snacks",
      "Gluten-free products",
    ],
    benefits: [
      "Reach health-conscious café customers",
      "Strong fit with coffee and snack purchases",
      "Premium product positioning inside top cafés",
      "High repeat-purchase potential",
      "Great for emerging wellness brands",
    ],
    primaryCta: "List Healthy Product Space",
    secondaryCta: "Find Space for Healthy Products",
    image: "/categories/healthy-foods.png",
    iconName: "Apple",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Eye-Level Café Shelf",
    roleSecondary: "wellness",
    categorySecondary: "Healthy Foods & Wellness Corner",
  },
  {
    id: "beverages-chiller",
    eyebrow: "Category 04",
    title: "Cold Brews, Kombucha & Beverage Chiller",
    shortName: "Cold Brews, Kombucha & Beverage Chiller",
    description:
      "Rent refrigerated shelf space inside cafés for bottled cold brews, organic kombucha, cold-pressed juices, functional sodas, and sparkling tonics.",
    suitableFor: [
      "Bottled cold brews",
      "Organic kombucha",
      "Cold-pressed juices",
      "Functional sodas",
      "Sparkling tonics",
      "Flavored coconut waters",
      "Plant-based protein shakes",
    ],
    benefits: [
      "High margin cold drink sales in cafés",
      "Complements hot espresso & coffee menus",
      "Chilled display quality & temperature control",
      "Broad appeal to café diners & remote workers",
      "Flexible refrigerator space options",
    ],
    primaryCta: "List Café Chiller Space",
    secondaryCta: "Find Space for Beverages",
    image: "/categories/beverages.png",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Refrigerated Display Space",
    roleSecondary: "wellness",
    categorySecondary: "Cold Brews, Kombucha & Beverage Chiller",
  },
  {
    id: "artisanal-spreads",
    eyebrow: "Category 05",
    title: "Artisanal Pantry & Specialty Spreads",
    shortName: "Artisanal Pantry & Specialty Spreads",
    description:
      "Feature small-batch nut butters, specialty coffee beans, wildflower honey, artisanal jams, and handcrafted food products on café wall displays and retail racks.",
    suitableFor: [
      "Specialty coffee beans",
      "Almond & hazelnut spreads",
      "Wildflower honey",
      "Artisanal jams & preserves",
      "Gourmet hot sauces",
      "Small-batch food gifts",
    ],
    benefits: [
      "Consistently high average order value",
      "Great fit for café retail gift shoppers",
      "Longer shelf-life packaged items",
      "High profit margin per unit",
      "Elevates café retail interior aesthetic",
    ],
    primaryCta: "List Café Pantry Space",
    secondaryCta: "Find Space for Artisanal Products",
    image: "/categories/artisanal-products.png",
    iconName: "HeartHandshake",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Wall Shelf",
    roleSecondary: "wellness",
    categorySecondary: "Artisanal Pantry & Specialty Spreads",
  },
  {
    id: "lifestyle-merch",
    eyebrow: "Category 06",
    title: "Coffee Merchandise & Lifestyle Corner",
    shortName: "Coffee Merchandise & Lifestyle Corner",
    description:
      "Display ceramic coffee mugs, reusable cups, canvas tote bags, coffee journals, scented candles, and coffee accessories inside lifestyle specialty cafés.",
    suitableFor: [
      "Ceramic coffee mugs",
      "Reusable travel tumblers",
      "Canvas tote bags",
      "Coffee journals & notebooks",
      "Scented soy candles",
      "Coffee brewing accessories",
    ],
    benefits: [
      "Attract lifestyle-focused café patrons",
      "High perceived brand value & gift appeal",
      "Zero product expiration risk",
      "Strong impulse buying from daily coffee drinkers",
      "Enhances café retail vibe & ambiance",
    ],
    primaryCta: "List Lifestyle Display Space",
    secondaryCta: "Find Space for Lifestyle Products",
    image: "/categories/lifestyle-accessories.png",
    iconName: "Store",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Tabletop Display",
    roleSecondary: "wellness",
    categorySecondary: "Coffee Merchandise & Lifestyle Corner",
  },
];

export const SHOWCASE_TRUST_ITEMS = [
  { label: "Verified Café Spaces", desc: "Curated & footfall checked", iconName: "ShieldCheck" },
  { label: "High Customer Footfall", desc: "Active café customers", iconName: "Users" },
  { label: "Flexible Display Formats", desc: "Shelves, counters & display corners", iconName: "Layers" },
  { label: "Dedicated Vendor Support", desc: "Pan-India matching team", iconName: "Headphones" },
  { label: "Pan India Expansion", desc: "Growing café partner network", iconName: "MapPin" },
];


