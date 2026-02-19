import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import productOil from "@/assets/product-oil.jpg";
import productCleanser from "@/assets/product-cleanser.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  tagline: string;
  description: string;
  ingredients: string;
  howToUse: string;
}

export const products: Product[] = [
  {
    id: "botanical-radiance-serum",
    name: "Botanical Radiance Serum",
    category: "Serums",
    price: "$185",
    image: productSerum,
    tagline: "Luminous glow, naturally",
    description: "A luxurious blend of rare botanical extracts that penetrate deep to restore your skin's natural radiance. Formulated with Ayurvedic wisdom and backed by modern dermatological science, this serum delivers visible results from the very first application.",
    ingredients: "Kumkumadi Tailam, Saffron Extract, Sandalwood Oil, Turmeric Root Extract, Rose Hip Seed Oil, Vitamin C, Hyaluronic Acid, Niacinamide",
    howToUse: "Apply 3-4 drops to cleansed face and neck. Gently press into skin using upward motions. Use morning and evening for best results. Follow with moisturizer.",
  },
  {
    id: "hydra-luxe-moisturizer",
    name: "Hydra-Luxe Moisturizer",
    category: "Moisturizers",
    price: "$145",
    image: productCream,
    tagline: "Deep nourishment, pure comfort",
    description: "A rich yet lightweight moisturizer infused with ancient Ayurvedic herbs and modern hydration science. Locks in moisture for 72 hours while strengthening your skin barrier with the power of Ashwagandha and Brahmi.",
    ingredients: "Ashwagandha Root Extract, Brahmi, Shea Butter, Aloe Vera, Jojoba Oil, Ceramides, Squalane, Green Tea Extract",
    howToUse: "After serum, take a pearl-sized amount and warm between palms. Press gently onto face and neck. Can be used day and night.",
  },
  {
    id: "elixir-face-oil",
    name: "Elixir Face Oil",
    category: "Face Oils",
    price: "$210",
    image: productOil,
    tagline: "Ancient botanicals, modern radiance",
    description: "Our signature face oil is a masterful blend of 12 precious botanical oils, inspired by the ancient Kumkumadi Tailam recipe. Each drop delivers potent antioxidants and essential fatty acids for a youthful, dewy complexion.",
    ingredients: "Kumkumadi Oil, Bakuchiol, Marula Oil, Rosehip Seed Oil, Argan Oil, Saffron, Turmeric, Vetiver, Frankincense, Neroli",
    howToUse: "Warm 4-5 drops between palms. Press into slightly damp skin. Use as the last step of your evening routine. Can be mixed with moisturizer for daytime use.",
  },
  {
    id: "purifying-botanical-cleanser",
    name: "Purifying Botanical Cleanser",
    category: "Cleansers",
    price: "$95",
    image: productCleanser,
    tagline: "Gentle strength, clear skin",
    description: "A gentle yet effective cleanser that harnesses the purifying power of Neem and Tulsi. Removes impurities and makeup while maintaining your skin's natural pH balance. Leaves skin feeling fresh, clean, and perfectly balanced.",
    ingredients: "Neem Leaf Extract, Tulsi (Holy Basil), Multani Mitti (Fuller's Earth), Tea Tree Oil, Chamomile Extract, Glycerin, Coconut Oil",
    howToUse: "Massage a small amount onto damp face in circular motions. Rinse thoroughly with lukewarm water. Use morning and evening.",
  },
  {
    id: "renewal-night-cream",
    name: "Renewal Night Cream",
    category: "Moisturizers",
    price: "$165",
    image: productCream,
    tagline: "Overnight transformation",
    description: "While you sleep, this intensive night cream works with your skin's natural renewal cycle. Enriched with Bakuchiol — nature's retinol — and Ayurvedic adaptogens to repair, restore, and rejuvenate.",
    ingredients: "Bakuchiol, Ashwagandha, Shatavari Root, Retinol, Peptides, Shea Butter, Evening Primrose Oil, Lavender Essential Oil",
    howToUse: "Apply generously to cleansed face and neck before bed. Allow to absorb fully. Wake up to renewed, glowing skin.",
  },
  {
    id: "brightening-essence",
    name: "Brightening Essence",
    category: "Serums",
    price: "$155",
    image: productSerum,
    tagline: "Illuminate from within",
    description: "A lightweight, fast-absorbing essence that targets dullness and uneven skin tone. Powered by Saffron and Licorice Root — revered in Ayurveda for their brightening properties.",
    ingredients: "Saffron Extract, Licorice Root, Kojic Acid, Alpha Arbutin, Rice Ferment Filtrate, Niacinamide, Vitamin C, Centella Asiatica",
    howToUse: "After cleansing, pour a small amount into palms and pat onto face. Layer under serum and moisturizer. Use morning and evening.",
  },
  {
    id: "detox-clay-cleanser",
    name: "Detox Clay Cleanser",
    category: "Cleansers",
    price: "$85",
    image: productCleanser,
    tagline: "Deep purification, gentle care",
    description: "An Ayurvedic-inspired clay cleanser that draws out toxins and excess oil while nourishing the skin. Multani Mitti and Kaolin Clay combined with soothing botanicals for a spa-like cleansing experience.",
    ingredients: "Multani Mitti, Kaolin Clay, Neem Oil, Turmeric, Rose Water, Sandalwood Powder, Aloe Vera, Glycerin",
    howToUse: "Mix with water to form a paste. Apply to damp skin and massage gently. Leave for 1-2 minutes for enhanced benefits. Rinse with cool water.",
  },
  {
    id: "nourishing-body-oil",
    name: "Nourishing Body Oil",
    category: "Face Oils",
    price: "$120",
    image: productOil,
    tagline: "Full body botanical luxury",
    description: "Inspired by the Ayurvedic practice of Abhyanga (self-massage), this luxurious body oil deeply nourishes while calming the mind. A blend of warm sesame oil, coconut, and aromatic botanicals.",
    ingredients: "Sesame Oil, Coconut Oil, Almond Oil, Dashmool Extract, Bala Root, Brahmi, Jasmine, Ylang Ylang",
    howToUse: "Warm oil between palms. Massage into body using long strokes on limbs and circular motions on joints. Best used after bathing on damp skin.",
  },
];

export const categories = ["All", "Serums", "Moisturizers", "Cleansers", "Face Oils"];
