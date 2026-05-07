import boho from "@/assets/party-boho.jpg";
import datenight from "@/assets/party-datenight.jpg";
import diwali from "@/assets/party-diwali.jpg";
import bachelorette from "@/assets/party-bachelorette.jpg";
import kids from "@/assets/party-kids.jpg";
import anniversary from "@/assets/party-anniversary.jpg";
import celeb from "@/assets/exclusive-celeb.jpg";
import influencer from "@/assets/exclusive-influencer.jpg";
import wedding from "@/assets/exclusive-wedding.jpg";

export type SocialProof = {
  loved?: string;        // "Most loved in Mumbai"
  replicated?: number;   // # of replicas
  endorsed?: string;     // influencer/celebrity name
};

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
  /** controls masonry tile height — visual variety */
  span: "tall" | "regular" | "short";
  vendors: { slug: string; name: string; role: string; price: string }[];
  kit: string;
  social: SocialProof;
};

export const parties: Party[] = [
  {
    slug: "diwali-house-party",
    title: "Diwali Mehfil at Home",
    tagline: "Marigolds, mehfil cushions, and a chaat counter that simply refuses to retire.",
    occasion: "Festive",
    vibe: "Traditional · Cosy",
    city: "Delhi NCR",
    guests: "30–50",
    budget: 95000,
    budgetLabel: "₹80K–1.1L",
    badge: "Seasonal",
    image: diwali,
    span: "tall",
    kit: "Diwali Hosting Kit",
    social: { loved: "Most loved in Delhi", replicated: 142, endorsed: "@masabagupta" },
    vendors: [
      { slug: "marigold-lane", name: "Marigold Lane", role: "Decor + diyas", price: "₹35,000" },
      { slug: "chatori-galli", name: "Chatori Galli", role: "Live chaat counter", price: "₹22,000" },
      { slug: "dholwala-bros", name: "Dholwala Bros.", role: "Live music", price: "₹12,000" },
    ],
  },
  {
    slug: "pampas-baby-shower",
    title: "The Pampas Baby Shower",
    tagline: "Soft terracotta, golden hour, and a balloon arch worth screenshotting twice.",
    occasion: "Baby Shower",
    vibe: "Boho · Outdoor",
    city: "Bangalore",
    guests: "20–30",
    budget: 65000,
    budgetLabel: "₹55–75K",
    badge: "Trending",
    image: boho,
    span: "regular",
    kit: "Boho Baby Shower Kit",
    social: { loved: "Most loved in Bangalore", replicated: 89 },
    vendors: [
      { slug: "bloom-arch", name: "Bloom & Arch Co.", role: "Decor", price: "₹28,000" },
      { slug: "grazing-plate", name: "The Grazing Plate", role: "Grazing board", price: "₹9,500" },
      { slug: "lumen-lens", name: "Lumen Lens", role: "Photographer", price: "₹15,000" },
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
    span: "short",
    kit: "Anniversary At Home Kit",
    social: { replicated: 61, endorsed: "@diipakhosla" },
    vendors: [
      { slug: "skyline-sutra", name: "Skyline Sutra", role: "Rooftop venue", price: "₹8,000" },
      { slug: "petal-wax", name: "Petal & Wax", role: "Florals + candles", price: "₹4,500" },
      { slug: "chef-anaya", name: "Chef Anaya", role: "Private chef", price: "₹6,500" },
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
    span: "tall",
    kit: "Bachelorette Bride Kit",
    social: { loved: "Most loved in Mumbai", replicated: 218, endorsed: "@komalpandeyofficial" },
    vendors: [
      { slug: "confetti-co", name: "Confetti Co.", role: "Balloon styling", price: "₹14,000" },
      { slug: "sugar-sundays", name: "Sugar Sundays", role: "Donut tower + cake", price: "₹9,500" },
      { slug: "disco-diaries", name: "Disco Diaries", role: "DJ + lights", price: "₹11,000" },
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
    span: "regular",
    kit: "Kids Birthday Kit",
    social: { replicated: 173 },
    vendors: [
      { slug: "tiny-tents", name: "Tiny Tents", role: "Decor + arch", price: "₹22,000" },
      { slug: "frosted-studio", name: "Frosted Studio", role: "Custom cake", price: "₹6,500" },
      { slug: "kiddo-carnival", name: "Kiddo Carnival", role: "Entertainer + games", price: "₹9,000" },
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
    span: "tall",
    kit: "Dinner Party Kit",
    social: { loved: "Editors' obsession", replicated: 34 },
    vendors: [
      { slug: "maison-noir", name: "Maison Noir", role: "Tablescape + styling", price: "₹26,000" },
      { slug: "chef-vikrant", name: "Chef Vikrant", role: "5-course chef", price: "₹32,000" },
      { slug: "vinyl-hours", name: "Vinyl Hours", role: "Acoustic duo", price: "₹14,000" },
    ],
  },
];

export type Exclusive = {
  slug: string;
  title: string;
  by: string;
  byHandle: string;
  tagline: string;
  image: string;
  price: number;
  span: "tall" | "regular";
};

export const exclusives: Exclusive[] = [
  {
    slug: "the-met-after",
    title: "The Met-After Dinner",
    by: "Sonam K. Ahuja",
    byHandle: "@sonamkapoor",
    tagline: "Black-tie at home, with a tablescape that flirts back.",
    image: celeb,
    price: 1499,
    span: "tall",
  },
  {
    slug: "rooftop-sundowner",
    title: "Bombay Sundowner",
    by: "Diipa Khosla",
    byHandle: "@diipakhosla",
    tagline: "Velvet drapes, brass goblets, golden hour cheating in our favour.",
    image: influencer,
    price: 1299,
    span: "regular",
  },
  {
    slug: "modern-sangeet",
    title: "The Modern Sangeet",
    by: "Tarun Tahiliani Studio",
    byHandle: "@taruntahiliani",
    tagline: "Old-world wedding glamour with a wicked playlist.",
    image: wedding,
    price: 1999,
    span: "tall",
  },
];

import kitBoho from "@/assets/kit-boho.jpg";
import kitDiwali from "@/assets/kit-diwali.jpg";
import kitBach from "@/assets/kit-bachelorette.jpg";
import kitKids from "@/assets/kit-kids.jpg";
import kitAnniv from "@/assets/kit-anniversary.jpg";
import kitDinner from "@/assets/kit-dinner.jpg";

export const kits = [
  { slug: "boho-baby-shower", name: "Boho Baby Shower Kit", price: 499, items: "Invites · Menu cards · Games · Signage", preview: ["Pampas invite", "Grazing menu", "Bingo card", "Welcome sign"], image: kitBoho, color: "var(--blush-soft)" },
  { slug: "diwali-hosting", name: "Diwali Hosting Kit", price: 499, items: "Place cards · Menu · Tambola · Wishes board", preview: ["Marigold invite", "Mehfil menu", "Tambola sheet", "Diya tags"], image: kitDiwali, color: "var(--gold)" },
  { slug: "bachelorette-bride", name: "Bachelorette Bride Kit", price: 499, items: "Invites · Drinking games · Photo props · Sash printable", preview: ["Disco invite", "Truth-or-shot", "Photo signs", "Bride sash"], image: kitBach, color: "var(--blush)" },
  { slug: "kids-birthday", name: "Kids Birthday Kit", price: 499, items: "Invites · Thank-you cards · 5 games · Colouring sheets", preview: ["Rainbow invite", "Thank-you card", "Treasure hunt", "Colouring sheet"], image: kitKids, color: "var(--gold-soft)" },
  { slug: "anniversary-home", name: "Anniversary At Home Kit", price: 499, items: "Menu · Love-notes jar · Playlist · Candle map", preview: ["Date menu", "Love-notes jar", "Playlist QR", "Candle map"], image: kitAnniv, color: "var(--oxblood)" },
  { slug: "dinner-party", name: "Dinner Party Kit", price: 499, items: "Place cards · Menu · Seating chart · Conversation cards", preview: ["Place cards", "Tasting menu", "Seating chart", "Convo cards"], image: kitDinner, color: "var(--ink)" },
];

export type Vendor = {
  slug: string;
  name: string;
  role: string;
  city: string;
  rating: number;
  events: number;
  responseTime: string;
  basedIn: string;
  blurb: string;
  contact: { phone: string; email: string; instagram: string };
  packages: { name: string; price: string; includes: string }[];
};

export const vendors: Vendor[] = [
  {
    slug: "marigold-lane",
    name: "Marigold Lane",
    role: "Decor + Florals",
    city: "Delhi NCR",
    rating: 4.9,
    events: 312,
    responseTime: "under 2 hrs",
    basedIn: "Greater Kailash, Delhi",
    blurb: "Festive florals with a modern, restrained hand. Marigolds that don't shout, candles that whisper.",
    contact: { phone: "+91 98xxx 12345", email: "hello@marigoldlane.in", instagram: "@marigoldlane" },
    packages: [
      { name: "Intimate setup", price: "₹35,000", includes: "Entryway arch · diya trail · 2 cushion corners" },
      { name: "Full mehfil", price: "₹78,000", includes: "Backdrop · floor seating · floral chandelier · diyas" },
    ],
  },
  {
    slug: "bloom-arch",
    name: "Bloom & Arch Co.",
    role: "Boho Decor",
    city: "Bangalore",
    rating: 4.8,
    events: 187,
    responseTime: "same day",
    basedIn: "Indiranagar, Bangalore",
    blurb: "Pampas-led, sun-drenched setups with a flair for terracotta and dried palm.",
    contact: { phone: "+91 90xxx 22210", email: "studio@bloomarch.co", instagram: "@bloomarch.co" },
    packages: [
      { name: "Balloon arch + table", price: "₹28,000", includes: "8ft arch · pampas table · grazing plinth" },
      { name: "Full boho garden", price: "₹62,000", includes: "Arch · drapes · seating · signage · florals" },
    ],
  },
  {
    slug: "confetti-co",
    name: "Confetti Co.",
    role: "Balloon Styling",
    city: "Mumbai",
    rating: 4.9,
    events: 421,
    responseTime: "under 1 hr",
    basedIn: "Bandra West, Mumbai",
    blurb: "If it's pink, sequinned and Instagrammable, we made it.",
    contact: { phone: "+91 99xxx 88712", email: "party@confettico.in", instagram: "@confetti.co" },
    packages: [
      { name: "Bachelorette balloon set", price: "₹14,000", includes: "Arch · letter balloons · neon sign rental" },
      { name: "Full venue styling", price: "₹38,000", includes: "Arch · ceiling installs · photo wall · props" },
    ],
  },
  {
    slug: "chef-anaya",
    name: "Chef Anaya",
    role: "Private Chef",
    city: "Mumbai",
    rating: 5.0,
    events: 96,
    responseTime: "within a day",
    basedIn: "Lower Parel, Mumbai",
    blurb: "Ex-Wasabi. Brings a 4-course tasting menu and zero attitude.",
    contact: { phone: "+91 98xxx 55501", email: "hello@chefanaya.in", instagram: "@chefanaya" },
    packages: [
      { name: "Date night for 2", price: "₹6,500", includes: "4-course tasting · plating · dessert" },
      { name: "Dinner party for 10", price: "₹32,000", includes: "5-course · sommelier pairing · service" },
    ],
  },
];
