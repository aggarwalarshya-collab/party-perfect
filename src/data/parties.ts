import diwali from "@/assets/party-diwali.jpg";
import datenight from "@/assets/party-datenight.jpg";
import baby from "@/assets/party-baby.jpg";
import bachelorette from "@/assets/party-bachelorette.jpg";
import kids from "@/assets/party-kids.jpg";
import anniversary from "@/assets/party-anniversary.jpg";
import sufi from "@/assets/party-sufi.jpg";
import movie from "@/assets/party-movie.jpg";
import proposal from "@/assets/party-proposal.jpg";
import bachelor from "@/assets/party-bachelor.jpg";
import chefs from "@/assets/party-chefs.jpg";
import tacos from "@/assets/party-tacos.jpg";
import karaoke from "@/assets/party-karaoke.jpg";
import housewarming from "@/assets/party-housewarming.jpg";
import celeb from "@/assets/exclusive-celeb.jpg";
import influencer from "@/assets/exclusive-influencer.jpg";
import wedding from "@/assets/exclusive-wedding.jpg";

export type SocialProof = {
  loved?: string;
  replicated?: number;
  endorsed?: string;
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
  span: "tall" | "regular" | "short";
  vendors: { slug: string; name: string; role: string; price: string }[];
  kit: string;
  social: SocialProof;
};

// All cards use uniform aspect for visual consistency.
export const parties: Party[] = [
  {
    slug: "diwali-baithak",
    title: "Diwali Mehfil at Home",
    tagline: "Velvet floor seating, brass diyas in clusters, wine in crystal — a baithak that lingers.",
    occasion: "Festive",
    vibe: "Mehfil · Cosy",
    city: "Delhi NCR",
    guests: "20–40",
    budget: 95000,
    budgetLabel: "₹80K–1.1L",
    badge: "Seasonal",
    image: diwali,
    span: "regular",
    kit: "Diwali Hosting Kit",
    social: { loved: "Most loved in Delhi", replicated: 142, endorsed: "@masabagupta" },
    vendors: [
      { slug: "marigold-lane", name: "Marigold Lane", role: "Decor + diyas", price: "₹35,000" },
      { slug: "chatori-galli", name: "Chatori Galli", role: "Mithai + chaat counter", price: "₹22,000" },
      { slug: "dholwala-bros", name: "Dholwala Bros.", role: "Sufi musicians", price: "₹18,000" },
    ],
  },
  {
    slug: "sufi-baithak-night",
    title: "Sufi Baithak Night",
    tagline: "Low velvet seating, tabla & harmonium, kebabs on brass — the kind of night that ends at 2am.",
    occasion: "House Party",
    vibe: "Mehfil · Intimate",
    city: "Mumbai",
    guests: "12–20",
    budget: 55000,
    budgetLabel: "₹45–65K",
    badge: "New",
    image: sufi,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { loved: "Editors' obsession", replicated: 47 },
    vendors: [
      { slug: "maison-noir", name: "Maison Noir", role: "Floor seating + drapes", price: "₹22,000" },
      { slug: "chef-vikrant", name: "Chef Vikrant", role: "Kebab counter", price: "₹18,000" },
      { slug: "vinyl-hours", name: "Sufi Trio", role: "Tabla · harmonium · vocals", price: "₹15,000" },
    ],
  },
  {
    slug: "pampas-baby-shower",
    title: "The Champagne Baby Shower",
    tagline: "Sculptural balloons, a marble cake plinth, orchids and a neon ‘baby’ — Kylie called.",
    occasion: "Baby Shower",
    vibe: "Modern · Luxe",
    city: "Bangalore",
    guests: "20–30",
    budget: 85000,
    budgetLabel: "₹70K–1L",
    badge: "Trending",
    image: baby,
    span: "regular",
    kit: "Boho Baby Shower Kit",
    social: { loved: "Most loved in Bangalore", replicated: 89 },
    vendors: [
      { slug: "bloom-arch", name: "Bloom & Arch Co.", role: "Balloon installation", price: "₹38,000" },
      { slug: "grazing-plate", name: "The Grazing Plate", role: "Charcuterie tower", price: "₹14,000" },
      { slug: "lumen-lens", name: "Lumen Lens", role: "Photographer", price: "₹15,000" },
    ],
  },
  {
    slug: "rooftop-date-night",
    title: "Rooftop Date Night",
    tagline: "Two of you, a city skyline, fairy lights, and dangerously good wine.",
    occasion: "Anniversary",
    vibe: "Intimate · Romantic",
    city: "Mumbai",
    guests: "2",
    budget: 14000,
    budgetLabel: "₹10–18K",
    badge: "Editor's Pick",
    image: datenight,
    span: "regular",
    kit: "Anniversary At Home Kit",
    social: { replicated: 134, endorsed: "@diipakhosla" },
    vendors: [
      { slug: "skyline-sutra", name: "Skyline Sutra", role: "Rooftop styling", price: "₹6,000" },
      { slug: "petal-wax", name: "Petal & Wax", role: "Florals + candles", price: "₹3,500" },
      { slug: "chef-anaya", name: "Chef Anaya", role: "Private chef", price: "₹6,500" },
    ],
  },
  {
    slug: "proposal-setup",
    title: "The Proposal Setup",
    tagline: "Petals in a heart, champagne on ice, a hundred candles — and yes, the ring on velvet.",
    occasion: "Proposal",
    vibe: "Romantic · Cinematic",
    city: "Delhi NCR",
    guests: "2",
    budget: 19000,
    budgetLabel: "₹9,999–₹29,999",
    badge: "New",
    image: proposal,
    span: "regular",
    kit: "Anniversary At Home Kit",
    social: { loved: "Highest-rated setup", replicated: 76 },
    vendors: [
      { slug: "petal-wax", name: "Petal & Wax", role: "Petals + candle wall", price: "₹9,500" },
      { slug: "lumen-lens", name: "Lumen Lens", role: "Hidden photographer", price: "₹8,500" },
    ],
  },
  {
    slug: "movie-night-home",
    title: "Movie Night at Home",
    tagline: "Velvet sectional, brass popcorn bowls, wine, fairy-lit. Press play.",
    occasion: "House Party",
    vibe: "Cosy · Cinematic",
    city: "Mumbai",
    guests: "4–8",
    budget: 12000,
    budgetLabel: "₹8–15K",
    badge: "Best Seller",
    image: movie,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { replicated: 198 },
    vendors: [
      { slug: "skyline-sutra", name: "Cinema At Home Co.", role: "Projector + screen", price: "₹6,000" },
      { slug: "grazing-plate", name: "The Grazing Plate", role: "Popcorn + snack bar", price: "₹4,500" },
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
    span: "regular",
    kit: "Bachelorette Bride Kit",
    social: { loved: "Most loved in Mumbai", replicated: 218, endorsed: "@komalpandeyofficial" },
    vendors: [
      { slug: "confetti-co", name: "Confetti Co.", role: "Balloon styling", price: "₹14,000" },
      { slug: "sugar-sundays", name: "Sugar Sundays", role: "Donut tower + cake", price: "₹9,500" },
      { slug: "disco-diaries", name: "Disco Diaries", role: "DJ + lights", price: "₹11,000" },
    ],
  },
  {
    slug: "bachelor-game-night",
    title: "Bachelor's Game Night",
    tagline: "Poker felt, premium whisky, leather chairs, a little cigar smoke. Strictly the boys.",
    occasion: "Bachelor",
    vibe: "Masculine · Luxe",
    city: "Delhi NCR",
    guests: "6–10",
    budget: 38000,
    budgetLabel: "₹30–45K",
    badge: "New",
    image: bachelor,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { replicated: 41 },
    vendors: [
      { slug: "maison-noir", name: "Maison Noir", role: "Poker table + styling", price: "₹14,000" },
      { slug: "chef-vikrant", name: "Chef Vikrant", role: "Chef's bar bites", price: "₹16,000" },
      { slug: "skyline-sutra", name: "Skyline Sutra", role: "Bartender + whisky pairing", price: "₹8,000" },
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
    budget: 28000,
    budgetLabel: "₹15–40K",
    badge: "Best Seller",
    image: kids,
    span: "regular",
    kit: "Kids Birthday Kit",
    social: { replicated: 173 },
    vendors: [
      { slug: "tiny-tents", name: "Tiny Tents", role: "Decor + arch", price: "₹14,000" },
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
    badge: "Trending",
    image: anniversary,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { loved: "Editors' obsession", replicated: 34 },
    vendors: [
      { slug: "maison-noir", name: "Maison Noir", role: "Tablescape + styling", price: "₹26,000" },
      { slug: "chef-vikrant", name: "Chef Vikrant", role: "5-course chef", price: "₹32,000" },
      { slug: "vinyl-hours", name: "Vinyl Hours", role: "Acoustic duo", price: "₹14,000" },
    ],
  },
  {
    slug: "chefs-table-at-home",
    title: "Chef's Table At Home",
    tagline: "Six courses, marble dining, oxblood velvet chairs — restaurant-grade, in your dining room.",
    occasion: "House Party",
    vibe: "Fine Dining · Black-tie",
    city: "Mumbai",
    guests: "8–12",
    budget: 75000,
    budgetLabel: "₹60–90K",
    badge: "Editor's Pick",
    image: chefs,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { loved: "Most loved", replicated: 28 },
    vendors: [
      { slug: "chef-vikrant", name: "Chef Vikrant", role: "6-course tasting menu", price: "₹52,000" },
      { slug: "maison-noir", name: "Maison Noir", role: "Marble setup + service", price: "₹18,000" },
    ],
  },
  {
    slug: "tacos-and-salsa-night",
    title: "Tacos & Salsa Night",
    tagline: "Build-your-own taco station, salted margaritas, terracotta — a Tuesday turned into a Saturday.",
    occasion: "House Party",
    vibe: "Casual · Festive",
    city: "Bangalore",
    guests: "10–15",
    budget: 32000,
    budgetLabel: "₹25–40K",
    badge: "Trending",
    image: tacos,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { replicated: 112 },
    vendors: [
      { slug: "grazing-plate", name: "Casa Cantina", role: "Taco + salsa station", price: "₹18,000" },
      { slug: "skyline-sutra", name: "Margarita Bar Co.", role: "Bartender + bar", price: "₹10,000" },
    ],
  },
  {
    slug: "karaoke-jam-night",
    title: "Karaoke & Live Jamming",
    tagline: "Mic on a stand, a velvet sofa, a neon ‘sing’ — and absolutely no inhibitions.",
    occasion: "House Party",
    vibe: "Music · Cosy",
    city: "Mumbai",
    guests: "8–15",
    budget: 22000,
    budgetLabel: "₹18–28K",
    badge: "New",
    image: karaoke,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { replicated: 64 },
    vendors: [
      { slug: "vinyl-hours", name: "Vinyl Hours", role: "Karaoke + jam setup", price: "₹12,000" },
      { slug: "skyline-sutra", name: "Bartender", role: "Mixers + wine", price: "₹8,000" },
    ],
  },
  {
    slug: "house-warming",
    title: "The House Warming",
    tagline: "Champagne tower, a console of florals, a grazing of cheese — a soft launch.",
    occasion: "House Warming",
    vibe: "Elegant · Daytime",
    city: "Delhi NCR",
    guests: "25–40",
    budget: 65000,
    budgetLabel: "₹50–80K",
    badge: "New",
    image: housewarming,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { replicated: 38 },
    vendors: [
      { slug: "bloom-arch", name: "Bloom & Arch Co.", role: "Floral console + drapes", price: "₹22,000" },
      { slug: "grazing-plate", name: "The Grazing Plate", role: "Cheese + grazing table", price: "₹16,000" },
      { slug: "skyline-sutra", name: "Champagne Tower Co.", role: "Bar + tower", price: "₹14,000" },
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

// Premium Party Edits — ₹149 per the concept note
export const exclusives: Exclusive[] = [
  {
    slug: "the-met-after",
    title: "The Met-After Dinner",
    by: "Sonam K. Ahuja",
    byHandle: "@sonamkapoor",
    tagline: "Black-tie at home, with a tablescape that flirts back.",
    image: celeb,
    price: 149,
    span: "tall",
  },
  {
    slug: "rooftop-sundowner",
    title: "Bombay Sundowner",
    by: "Diipa Khosla",
    byHandle: "@diipakhosla",
    tagline: "Velvet drapes, brass goblets, golden hour cheating in our favour.",
    image: influencer,
    price: 149,
    span: "regular",
  },
  {
    slug: "modern-sangeet",
    title: "The Modern Sangeet",
    by: "Tarun Tahiliani Studio",
    byHandle: "@taruntahiliani",
    tagline: "Old-world wedding glamour with a wicked playlist.",
    image: wedding,
    price: 149,
    span: "tall",
  },
];

import kitBoho from "@/assets/kit-boho.jpg";
import kitDiwali from "@/assets/kit-diwali.jpg";
import kitBach from "@/assets/kit-bachelorette.jpg";
import kitKids from "@/assets/kit-kids.jpg";
import kitAnniv from "@/assets/kit-anniversary.jpg";
import kitDinner from "@/assets/kit-dinner.jpg";

// Per concept note: Standard ₹129, Customized ₹299
export const kits = [
  { slug: "boho-baby-shower", name: "Boho Baby Shower Kit", standardPrice: 129, customPrice: 299, items: "Invites · Menu cards · Games · Signage", preview: ["Pampas invite", "Grazing menu", "Bingo card", "Welcome sign"], image: kitBoho, color: "var(--blush-soft)" },
  { slug: "diwali-hosting", name: "Diwali Hosting Kit", standardPrice: 129, customPrice: 299, items: "Place cards · Menu · Tambola · Wishes board", preview: ["Marigold invite", "Mehfil menu", "Tambola sheet", "Diya tags"], image: kitDiwali, color: "var(--gold)" },
  { slug: "bachelorette-bride", name: "Bachelorette Bride Kit", standardPrice: 129, customPrice: 299, items: "Invites · Drinking games · Photo props · Sash printable", preview: ["Disco invite", "Truth-or-shot", "Photo signs", "Bride sash"], image: kitBach, color: "var(--blush)" },
  { slug: "kids-birthday", name: "Kids Birthday Kit", standardPrice: 129, customPrice: 299, items: "Invites · Thank-you cards · 5 games · Colouring sheets", preview: ["Rainbow invite", "Thank-you card", "Treasure hunt", "Colouring sheet"], image: kitKids, color: "var(--gold-soft)" },
  { slug: "anniversary-home", name: "Anniversary At Home Kit", standardPrice: 129, customPrice: 299, items: "Menu · Love-notes jar · Playlist · Candle map", preview: ["Date menu", "Love-notes jar", "Playlist QR", "Candle map"], image: kitAnniv, color: "var(--oxblood)" },
  { slug: "dinner-party", name: "Dinner Party Kit", standardPrice: 129, customPrice: 299, items: "Place cards · Menu · Seating chart · Conversation cards", preview: ["Place cards", "Tasting menu", "Seating chart", "Convo cards"], image: kitDinner, color: "var(--ink)" },
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
    role: "Modern Decor",
    city: "Bangalore",
    rating: 4.8,
    events: 187,
    responseTime: "same day",
    basedIn: "Indiranagar, Bangalore",
    blurb: "Sculptural balloons, marble plinths, sun-drenched setups with a flair for terracotta and dried palm.",
    contact: { phone: "+91 90xxx 22210", email: "studio@bloomarch.co", instagram: "@bloomarch.co" },
    packages: [
      { name: "Balloon arch + table", price: "₹28,000", includes: "8ft arch · pampas table · grazing plinth" },
      { name: "Full luxe shower", price: "₹62,000", includes: "Arch · drapes · seating · signage · florals" },
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

// Vendor growth packs — from concept note
export const growthPacks = [
  {
    slug: "enquiry",
    name: "Enquiry Pack",
    price: 1999,
    tag: "Get started",
    headline: "Keep the enquiries flowing.",
    description:
      "After your 3 free enquiries, this keeps your inbox warm. Basic listing visibility across the discovery feed.",
    includes: [
      "Continue receiving customer enquiries after the 3 free credits",
      "Basic listing visibility on category and city pages",
      "WhatsApp-first lead delivery",
      "Standard editor support",
    ],
  },
  {
    slug: "visibility",
    name: "Visibility Pack",
    price: 5999,
    tag: "Most popular",
    headline: "Show up where hosts are looking.",
    description:
      "Everything in the Enquiry Pack — plus priority placement across search, feed, occasion and ‘available this weekend’ slots.",
    includes: [
      "Everything in the Enquiry Pack",
      "Priority placement in search results",
      "Featured on occasion + city feeds",
      "‘Available this weekend’ high-intent slots",
      "Editorial profile refresh, once per quarter",
    ],
  },
  {
    slug: "growth",
    name: "Growth Pack",
    price: 19999,
    tag: "Scale fastest",
    headline: "We market you, off-platform too.",
    description:
      "Everything in Visibility — plus inclusion in our off-app campaigns: WhatsApp blasts, influencer edits, partner listings, seasonal pushes.",
    includes: [
      "Everything in the Visibility Pack",
      "Inclusion in WhatsApp customer broadcasts",
      "Featured in influencer & celebrity edits where relevant",
      "Partner listings (venues, societies, Airbnb)",
      "Seasonal campaign placements (Diwali, wedding, summer)",
      "Quarterly performance review with the editorial team",
    ],
  },
];
