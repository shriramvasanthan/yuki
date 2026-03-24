// products-data.js
export const products = [
  // BAMBOO SALT
  { id: "bs-1x", name: "1× Roasted Bamboo Salt", category: "bamboo-salt", categoryLabel: "Bamboo Salt", sub: "1kg · Ivory White", price: 1500, emoji: "🧂", badge: "", desc: "Gently roasted once, our entry-level bamboo salt is ivory white with a mild mineral flavour and gentle alkalinity. Perfect for everyday cooking." },
  { id: "bs-2x", name: "2× Roasted Bamboo Salt", category: "bamboo-salt", categoryLabel: "Bamboo Salt", sub: "1kg · Silver Grey", price: 2500, emoji: "🧂", badge: "", desc: "Double roasted for enhanced mineral concentration and a subtle, complex flavour profile. Silver-grey in appearance." },
  { id: "bs-3x", name: "3× Roasted Bamboo Salt", category: "bamboo-salt", categoryLabel: "Bamboo Salt", sub: "1kg · Lavender", price: 3500, emoji: "🧂", badge: "", desc: "Three roasting cycles bring out a distinctive lavender hue, high silica content, and a uniquely smooth flavour." },
  { id: "bs-4x", name: "4× Roasted Bamboo Salt", category: "bamboo-salt", categoryLabel: "Bamboo Salt", sub: "1kg · Pale Grey", price: 4500, emoji: "🧂", badge: "", desc: "Rich in trace minerals with notable detoxification properties. Pale grey colour with a bold mineral taste." },
  { id: "bs-5x", name: "5× Roasted Bamboo Salt", category: "bamboo-salt", categoryLabel: "Bamboo Salt", sub: "1kg · Silver-Grey", price: 5000, emoji: "🧂", badge: "", desc: "Mid-range roast with beautifully balanced minerals and deep alkalinity for wellness support." },
  { id: "bs-6x", name: "6× Roasted Bamboo Salt", category: "bamboo-salt", categoryLabel: "Bamboo Salt", sub: "1kg · Dark Grey", price: 5500, emoji: "🧂", badge: "", desc: "Dark grey with high alkaline pH. Exceptional mineral density and a bold, earthy flavour." },
  { id: "bs-7x", name: "7× Roasted Bamboo Salt", category: "bamboo-salt", categoryLabel: "Bamboo Salt", sub: "1kg · Charcoal", price: 6500, emoji: "🧂", badge: "", desc: "Deep charcoal-grey salt with supreme detox properties. Preferred by wellness practitioners." },
  { id: "bs-8x", name: "8× Roasted Bamboo Salt", category: "bamboo-salt", categoryLabel: "Bamboo Salt", sub: "1kg · Deep Black", price: 7500, emoji: "🧂", badge: "", desc: "Near-black salt with ultra-concentrated minerals. An extraordinary wellness ingredient." },
  { id: "bs-9x", name: "9× Roasted Bamboo Salt", category: "bamboo-salt", categoryLabel: "Bamboo Salt", sub: "1kg · Volcanic Black", price: 8500, emoji: "🧂", badge: "Premium", desc: "The pinnacle of bamboo salt. Roasted 9 times to produce volcanic black crystals with the highest mineral and alkalinity levels." },

  // VEGETABLE SALT
  { id: "vs-drum", name: "Drumstick Salt", category: "vegetable-salt", categoryLabel: "Vegetable Salt", sub: "Drumstick Extract · 250g", price: 349, emoji: "🥬", badge: "", desc: "Bamboo salt infused with drumstick (moringa) extract. Rich in iron and calcium for bone strength." },
  { id: "vs-beet", name: "Beetroot Salt", category: "vegetable-salt", categoryLabel: "Vegetable Salt", sub: "Beetroot Extract · 250g", price: 349, emoji: "🫚", badge: "", desc: "Vibrant beetroot-infused salt with natural antioxidants and a beautiful deep pink colour." },
  { id: "vs-spin", name: "Spinach Salt", category: "vegetable-salt", categoryLabel: "Vegetable Salt", sub: "Spinach Extract · 250g", price: 299, emoji: "🌿", badge: "", desc: "Spinach-enriched salt with abundant iron and chlorophyll for natural energy." },
  { id: "vs-carr", name: "Carrot Salt", category: "vegetable-salt", categoryLabel: "Vegetable Salt", sub: "Carrot Extract · 250g", price: 299, emoji: "🥕", badge: "", desc: "Carrot extract infused salt — rich in beta-carotene and vitamin A for eye health." },
  { id: "vs-herb", name: "Herbal Vegetable Salt Mix", category: "vegetable-salt", categoryLabel: "Vegetable Salt", sub: "Multi-Veggie Blend · 300g", price: 449, emoji: "🌾", badge: "", desc: "A premium blend of multiple vegetable extracts in bamboo salt — the ultimate wellness seasoning." },

  // BAMBOO PRODUCTS
  { id: "bp-brush", name: "Bamboo Toothbrush", category: "bamboo-products", categoryLabel: "Bamboo Products", sub: "Eco Friendly · 1 pc", price: 149, emoji: "🪥", badge: "", desc: "Biodegradable bamboo toothbrush with charcoal-infused bristles for natural whitening." },
  { id: "bp-comb", name: "Bamboo Comb", category: "bamboo-products", categoryLabel: "Bamboo Products", sub: "Anti-Static · 1 pc", price: 199, emoji: "🪮", badge: "", desc: "Handcrafted anti-static bamboo comb. Gentle on scalp, no plastic, fully compostable." },
  { id: "bp-cont", name: "Bamboo Containers", category: "bamboo-products", categoryLabel: "Bamboo Products", sub: "Eco Friendly · 1 pc", price: 399, emoji: "🫙", badge: "", desc: "Hand-turned bamboo storage containers — perfect for spices, salt, or wellness products." },

  // CHARCOAL PRODUCTS
  { id: "cp-tooth", name: "Charcoal Toothpaste", category: "charcoal", categoryLabel: "Charcoal Products", sub: "Whitening · 1 pc", price: 349, emoji: "🦷", badge: "", desc: "Bamboo charcoal toothpaste for natural whitening and deep antibacterial cleansing." },
  { id: "cp-soap", name: "Charcoal Soap", category: "charcoal", categoryLabel: "Charcoal Products", sub: "Detox Formula · 1 pc", price: 199, emoji: "🧼", badge: "", desc: "Cold-pressed bamboo charcoal soap with coconut oil. Deep cleanses and detoxifies skin." },
  { id: "cp-face", name: "Charcoal Face Cleanser", category: "charcoal", categoryLabel: "Charcoal Products", sub: "Deep Cleanse · 1 pc", price: 499, emoji: "💆", badge: "", desc: "Activated bamboo charcoal face cleanser for pore-deep purification and radiant skin." },
  { id: "cp-detox", name: "Charcoal Detox Powder", category: "charcoal", categoryLabel: "Charcoal Products", sub: "Activated · 100g", price: 599, emoji: "🌑", badge: "", desc: "Ultra-fine activated bamboo charcoal powder for internal detox and teeth polishing." },

  // SPICES
  { id: "sp-pep", name: "Black Pepper", category: "spices", categoryLabel: "Spices", sub: "Kerala Origin · 100g", price: 220, emoji: "🌶️", badge: "", desc: "Premium Kerala black pepper — hand harvested, sun dried, and packed for full aroma." },
  { id: "sp-cin", name: "Cinnamon", category: "spices", categoryLabel: "Spices", sub: "Ceylon Grade · 100g", price: 180, emoji: "🌿", badge: "", desc: "True Ceylon cinnamon — delicate, sweet, and ideal for both cooking and wellness." },
  { id: "sp-clov", name: "Clove", category: "spices", categoryLabel: "Spices", sub: "Hand Picked · 100g", price: 250, emoji: "🌸", badge: "", desc: "Aromatic hand-picked cloves with powerful antioxidant and antimicrobial properties." },

  // NUTS
  { id: "nt-alm", name: "Premium Badam", category: "nuts", categoryLabel: "Nuts", sub: "California Select · 250g", price: 199, emoji: "🌰", badge: "", desc: "Premium California almonds, raw and natural. Rich in healthy fats, vitamin E, and magnesium." },
  { id: "nt-pis", name: "Pista", category: "nuts", categoryLabel: "Nuts", sub: "Roasted & Salted · 250g", price: 499, emoji: "🫘", badge: "", desc: "Lightly roasted and salted pistachios with sea salt. A perfect healthy snack." },
  { id: "nt-cas", name: "Cashew", category: "nuts", categoryLabel: "Nuts", sub: "W180 Grade · 250g", price: 299, emoji: "🥜", badge: "", desc: "Large-grade W180 cashews — creamy, buttery, and rich in zinc and magnesium." },

  // ORGANIC
  { id: "og-hon", name: "Organic Honey", category: "organic", categoryLabel: "Organic", sub: "Raw & Pure · 500g", price: 399, emoji: "🍯", badge: "", desc: "Unprocessed raw honey harvested from wild forest bees. Packed with enzymes and antioxidants." },
  { id: "og-tea", name: "Herbal Tea", category: "organic", categoryLabel: "Organic", sub: "Detox Blend · 100g", price: 299, emoji: "🍵", badge: "", desc: "A curated blend of tulsi, ginger, green tea, and bamboo extract for daily detox and calm." },
  { id: "og-bar", name: "Nutrition Bar", category: "organic", categoryLabel: "Organic", sub: "Natural Sweeteners · 60g", price: 199, emoji: "🍫", badge: "", desc: "Wholesome nutrition bars sweetened with dates and honey. No refined sugar, full of goodness." },
];

export const categories = [
  { id: "all", label: "All Products" },
  { id: "bamboo-salt", label: "Bamboo Salt" },
  { id: "vegetable-salt", label: "Vegetable Salt" },
  { id: "bamboo-products", label: "Bamboo Products" },
  { id: "charcoal", label: "Charcoal" },
  { id: "spices", label: "Spices" },
  { id: "nuts", label: "Nuts" },
  { id: "organic", label: "Organic" },
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}
