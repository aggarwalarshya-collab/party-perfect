import boho from "@/assets/party-boho.jpg";
import datenight from "@/assets/party-datenight.jpg";
import diwali from "@/assets/party-diwali.jpg";
import bachelorette from "@/assets/party-bachelorette.jpg";
import kids from "@/assets/party-kids.jpg";
import anniversary from "@/assets/party-anniversary.jpg";

export type Party = {
  slug: string;
  title: string;
  tagline: string;
  occasion: string;
  vibe: string;
  city: string;
  guests: string;
  budget: number;
  budgetLabel: string;
  badge: "Trending" | "Seasonal" | "Best Seller" | "New" | "Editor's Pick";
  image: string;
  vendors: { name: string; role: string; price: string }[];
  kit: string;
};

export const parties: Party[] = [
  {
    slug: "pampas-baby-shower",
    title: "The Pampas Baby Shower",
    tagline: "Soft terracotta, golden hour, and a balloon arch worth screenshotting.",
    occasion: "Baby Shower",
    vibe: "Boho · Outdoor",
    city: "Bangalore",
    guests: "20–30",
    budget: 65000,
    budgetLabel: "₹55–75K",
    badge: "Trending",
    image: boho,
    kit: "Boho Baby Shower Kit",
    vendors: [
      { name: "Bloom & Arch Co.", role: "Decor", price: "₹28,000" },
      { name: "The Grazing Plate", role: "Grazing board", price: "₹9,500" },
      { name: "Lumen Lens", role: "Photographer", price: "₹15,000" },
    ],
  },
  {
    slug: "rooftop-date-night",
    title: "Rooftop Date Night",
    tagline: "Just two of you, a city skyline, and dangerously good wine.",
    occasion: "Anniversary",
    vibe: "Intimate · Romantic",
    city: "Mumbai",
    guests: "2",
    budget: 18000,
    budgetLabel: "₹15–22K",
    badge: "Editor's Pick",
    image: datenight,
    kit: "Anniversary At Home Kit",
    vendors: [
      { name: "Skyline Sutra", role: "Rooftop venue", price: "₹8,000" },
      { name: "Petal & Wax", role: "Florals + candles", price: "₹4,500" },
      { name: "Chef Anaya", role: "Private chef", price: "₹6,500" },
    ],
  },
  {
    slug: "diwali-house-party",
    title: "Diwali House Party",
    tagline: "Marigolds, mehfil cushions, and a chaat counter that doesn't quit.",
    occasion: "Festive",
    vibe: "Traditional · Cosy",
    city: "Delhi NCR",
    guests: "30–50",
    budget: 95000,
    budgetLabel: "₹80K–1.1L",
    badge: "Seasonal",
    image: diwali,
    kit: "Diwali Hosting Kit",
    vendors: [
      { name: "Marigold Lane", role: "Decor + diyas", price: "₹35,000" },
      { name: "Chatori Galli", role: "Live chaat counter", price: "₹22,000" },
      { name: "Dholwala Bros.", role: "Live music", price: "₹12,000" },
    ],
  },
  {
    slug: "disco-bachelorette",
    title: "Disco Bachelorette Brunch",
    tagline: "Pink, sequins, mimosas — and a donut tower taller than the bride.",
    occasion: "Bachelorette",
    vibe: "Glam · Daytime",
    city: "Mumbai",
    guests: "8–12",
    budget: 42000,
    budgetLabel: "₹35–50K",
    badge: "Best Seller",
    image: bachelorette,
    kit: "Bachelorette Bride Kit",
    vendors: [
      { name: "Confetti Co.", role: "Balloon styling", price: "₹14,000" },
      { name: "Sugar Sundays", role: "Donut tower + cake", price: "₹9,500" },
      { name: "Disco Diaries", role: "DJ + lights", price: "₹11,000" },
    ],
  },
  {
    slug: "rainbow-first-birthday",
    title: "Rainbow First Birthday",
    tagline: "Unicorn cake, candy bar, and joy at toddler-eye level.",
    occasion: "Kids Birthday",
    vibe: "Pastel · Playful",
    city: "Bangalore",
    guests: "15–25 kids",
    budget: 55000,
    budgetLabel: "₹45–60K",
    badge: "Best Seller",
    image: kids,
    kit: "Kids Birthday Kit",
    vendors: [
      { name: "Tiny Tents", role: "Decor + arch", price: "₹22,000" },
      { name: "Frosted Studio", role: "Custom cake", price: "₹6,500" },
      { name: "Kiddo Carnival", role: "Entertainer + games", price: "₹9,000" },
    ],
  },
  {
    slug: "noir-anniversary-dinner",
    title: "Noir Anniversary Dinner",
    tagline: "Black linen, white orchids, candles low — a quiet, glamorous love letter.",
    occasion: "Anniversary",
    vibe: "Minimal · Black-tie",
    city: "Delhi NCR",
    guests: "10–14",
    budget: 78000,
    budgetLabel: "₹65–90K",
    badge: "New",
    image: anniversary,
    kit: "Dinner Party Kit",
    vendors: [
      { name: "Maison Noir", role: "Tablescape + styling", price: "₹26,000" },
      { name: "Chef Vikrant", role: "5-course chef", price: "₹32,000" },
      { name: "Vinyl Hours", role: "Acoustic duo", price: "₹14,000" },
    ],
  },
];

export const kits = [
  { slug: "boho-baby-shower", name: "Boho Baby Shower Kit", price: 499, items: "Invites · Menu cards · Games · Signage", color: "var(--confetti-peach)" },
  { slug: "diwali-hosting", name: "Diwali Hosting Kit", price: 499, items: "Place cards · Menu · Tambola · Wishes board", color: "var(--confetti-coral)" },
  { slug: "bachelorette-bride", name: "Bachelorette Bride Kit", price: 499, items: "Invites · Drinking games · Photo props · Sash printable", color: "var(--confetti-pink)" },
  { slug: "kids-birthday", name: "Kids Birthday Kit", price: 499, items: "Invites · Thank-you cards · 5 games · Colouring sheets", color: "var(--confetti-mint)" },
  { slug: "anniversary-home", name: "Anniversary At Home Kit", price: 499, items: "Menu · Love-notes jar · Playlist · Candle map", color: "var(--confetti-plum)" },
  { slug: "dinner-party", name: "Dinner Party Kit", price: 499, items: "Place cards · Menu · Seating chart · Conversation cards", color: "var(--confetti-coral)" },
];
