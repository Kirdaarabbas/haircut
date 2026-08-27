import { ServiceCategory, ReviewItem, WhyUsItem, ProductItem } from './types';

export const BUSINESS_INFO = {
  name: "HairCut",
  tagline: "Where Every Look Becomes Your Signature.",
  subTagline: "15+ years of professional expertise in hair, beauty, grooming and makeovers — designed around you.",
  type: "Premium Unisex Salon",
  experience: "15+ Years",
  phone: "8130937598",
  phoneDisplay: "+91 81309 37598",
  address: "Plot No. 8, Om Vihar Colony, Behind ABESIT, Ghaziabad, Uttar Pradesh 201001",
  shortAddress: "Plot No. 8, Om Vihar Colony, Behind ABESIT, Ghaziabad 201001",
  timings: "Daily: 7:00 AM – 11:00 PM",
  trustLine: "15+ Years Experience • Men & Women • Open Daily 7 AM – 11 PM",
  googleMapsUrl: "https://maps.google.com/?q=Plot+No.+8,+Om+Vihar+Colony,+Behind+ABESIT,+Ghaziabad,+Uttar+Pradesh+201001",
  whatsappUrl: "https://wa.me/918130937598",
};

// Curated high-resolution, realistic salon photography (max 5-6 across site)
export const SALON_IMAGES = {
  hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80", // Elegant luxury salon interior with warm lighting
  womensHair: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80", // Premium women's hair styling
  mensGrooming: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80", // Sharp men's haircut & beard craft
  beautySkin: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80", // Gentle relaxing facial & skin care
  bridalMakeover: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80", // Luxurious Indian bridal look & jewels
  products: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80", // Professional salon bottle haircare & serum
};

export const WOMENS_HAIR_SERVICES: ServiceCategory = {
  id: "womens-hair",
  title: "Women's Hair",
  tagline: "Precision cutting, styling, advanced smoothing & couture hair color.",
  iconName: "Sparkles",
  image: SALON_IMAGES.womensHair,
  ctaText: "Book Women's Hair Service",
  services: [
    { name: "Haircut & Styling", price: "₹500", popular: true },
    { name: "Hair Wash & Blow Dry", price: "₹400" },
    { name: "Hair Spa", price: "₹1,000", popular: true },
    { name: "Hair Smoothening", price: "₹3,500" },
    { name: "Hair Keratin Treatment", price: "₹4,000", popular: true },
    { name: "Hair Coloring", price: "₹1,500+" },
    { name: "Global Hair Color", price: "₹2,500+" },
    { name: "Hair Highlights", price: "₹2,000+" },
    { name: "Bridal Hair Styling", price: "₹2,500" },
  ],
};

export const MENS_GROOMING_SERVICES: ServiceCategory = {
  id: "mens-grooming",
  title: "Men's Grooming",
  tagline: "Sharp fades, bespoke beard sculpts, invigorating head spa & skincare.",
  iconName: "Scissors",
  image: SALON_IMAGES.mensGrooming,
  ctaText: "Book Men's Grooming",
  services: [
    { name: "Men's Haircut", price: "₹300", popular: true },
    { name: "Premium Haircut & Styling", price: "₹500", popular: true },
    { name: "Beard Trim", price: "₹200" },
    { name: "Beard Styling", price: "₹300" },
    { name: "Hair + Beard Combo", price: "₹600", popular: true },
    { name: "Men's Hair Spa", price: "₹800" },
    { name: "Facial", price: "₹800" },
    { name: "Head Massage", price: "₹400" },
  ],
};

export const BEAUTY_SKIN_SERVICES: ServiceCategory = {
  id: "beauty-skin",
  title: "Beauty & Skin",
  tagline: "Deep purifying facials, organic detan, gentle waxing & rejuvenating care.",
  iconName: "Feather",
  image: SALON_IMAGES.beautySkin,
  ctaText: "Book Beauty Service",
  services: [
    { name: "Cleanup", price: "₹600" },
    { name: "Facial", price: "₹1,000", popular: true },
    { name: "Premium Facial", price: "₹1,500", popular: true },
    { name: "Detan", price: "₹500" },
    { name: "Threading", price: "₹100+" },
    { name: "Waxing", price: "₹500+" },
    { name: "Manicure", price: "₹600" },
    { name: "Pedicure", price: "₹700" },
  ],
};

export const BRIDAL_MAKEOVER_SERVICES: ServiceCategory = {
  id: "bridal-makeover",
  title: "Bridal Makeover",
  tagline: "Bespoke bridal artistry, HD engagement glamour & radiant pre-bridal rituals.",
  iconName: "Crown",
  image: SALON_IMAGES.bridalMakeover,
  featured: true,
  ctaText: "Book Bridal Consultation",
  services: [
    { name: "Bridal Makeover", price: "Starting ₹8,999", popular: true },
    { name: "Engagement Makeup", price: "Starting ₹4,999", popular: true },
    { name: "Party Makeup", price: "Starting ₹2,999" },
    { name: "Bridal Hair Styling", price: "₹2,500" },
    { name: "Draping", price: "₹1,000" },
    { name: "Pre-Bridal Grooming", price: "Starting ₹3,999", popular: true },
  ],
};

export const MENS_HAIR_BEARD_QUICK: ServiceCategory = {
  id: "mens-hair-beard",
  title: "Men's Hair & Beard Quick Bar",
  tagline: "Quick signature grooming essentials for gentlemen on the go.",
  iconName: "UserCheck",
  ctaText: "Book Men's Grooming",
  services: [
    { name: "Classic Haircut", price: "₹300" },
    { name: "Premium Haircut", price: "₹500", popular: true },
    { name: "Beard Trim", price: "₹200" },
    { name: "Beard Styling", price: "₹300" },
    { name: "Hair + Beard Combo", price: "₹600", popular: true },
  ],
};

export const BEAUTY_PRODUCTS_LIST: ProductItem[] = [
  {
    category: "Hair Care",
    description: "Keratin repair shampoos, deep nourishment masks, and sulphate-free formulations.",
    highlights: ["Sulphate & Paraben Free", "Colour Protection", "Salon Strength"]
  },
  {
    category: "Skin Care",
    description: "Hydrating botanical cleansers, gold glow serums, and sun protection creams.",
    highlights: ["Dermatologically Tested", "Pure Botanicals", "Instant Glow"]
  },
  {
    category: "Styling Products",
    description: "High-hold matte clays, heat protection sprays, and high-shine styling serums.",
    highlights: ["All-Day Hold", "Zero Flaking", "Thermal Shield"]
  },
  {
    category: "Grooming Essentials",
    description: "Organic beard growth oils, soothing aftershave balms, and exfoliating scrubs.",
    highlights: ["Natural Essential Oils", "Anti-Irritation", "Gentle Care"]
  },
  {
    category: "Professional Treatment Products",
    description: "Intense hair spa elixirs, anti-dandruff concentrates, and deep repair ampoules.",
    highlights: ["Therapeutic Grade", "Clinical Formulation", "Visible Revival"]
  }
];

export const WHY_US_CARDS: WhyUsItem[] = [
  {
    title: "15+ Years Experience",
    description: "Trusted salon expertise built over more than 15 years in Ghaziabad with thousands of loyal patrons.",
    iconName: "Award"
  },
  {
    title: "Unisex Expertise",
    description: "Specialized stylists and dedicated zones providing top-tier services for both men and women.",
    iconName: "Users"
  },
  {
    title: "Premium Products",
    description: "Only certified international and professional hair & skin care brands touching your hair and body.",
    iconName: "ShieldCheck"
  },
  {
    title: "Personalized Styling",
    description: "Customized consultations matching your face structure, hair texture, skin tone, and personal aesthetic.",
    iconName: "SlidersHorizontal"
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Rahul S.",
    rating: 5,
    comment: "Excellent service and very professional staff. The haircut and styling were exactly what I wanted.",
    serviceUsed: "Men's Haircut & Beard Styling",
    date: "Verified Client"
  },
  {
    id: "rev-2",
    name: "Neha M.",
    rating: 5,
    comment: "One of the best salon experiences I've had. The staff understood exactly what I wanted and the results were beautiful.",
    serviceUsed: "Hair Keratin & Global Color",
    date: "Verified Client"
  },
  {
    id: "rev-3",
    name: "Simran K.",
    rating: 5,
    comment: "I booked my bridal makeover here and was extremely happy with the final look. Highly recommended.",
    serviceUsed: "Full Bridal Makeover Package",
    date: "Verified Client"
  },
  {
    id: "rev-4",
    name: "Aman K.",
    rating: 5,
    comment: "Great salon for both grooming and hair services. The quality and attention to detail are excellent.",
    serviceUsed: "Hair Spa & Premium Facial",
    date: "Verified Client"
  }
];
