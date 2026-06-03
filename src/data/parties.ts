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
import spa from "@/assets/party-spa.jpg";
import golf from "@/assets/party-golf.jpg";
import christmas from "@/assets/party-christmas.jpg";
import onam from "@/assets/party-onam.jpg";
import yoga from "@/assets/party-yoga.jpg";
import cocktailCigar from "@/assets/party-cocktail-cigar.jpg";
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
    slug: "movie-night-home",
    title: "Movie Night at Home",
    tagline: "Velvet sectional, brass popcorn bowls, wine, fairy-lit. Press play.",
    occasion: "House Party",
    vibe: "Cosy · Cinematic",
    city: "Mumbai",
    guests: "4–8",
    budget: 5500,
    budgetLabel: "₹3K–10K",
    badge: "Best Seller",
    image: movie,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { replicated: 198 },
    vendors: [
      { slug: "skyline-sutra", name: "Cinema At Home Co.", role: "Projector + screen", price: "₹3,000" },
      { slug: "grazing-plate", name: "The Grazing Plate", role: "Popcorn + snack bar", price: "₹2,000" },
    ],
  },
    {
    slug: "boys-golf-game-night",
    title: "Boys' Mini-Golf Night",
    tagline: "Indoor putting green, whisky flights, leather chesterfields — Augusta meets your living room.",
    occasion: "Bachelor",
    vibe: "Masculine · Playful",
    city: "Delhi NCR",
    guests: "6–10",
    budget: 15500,
    budgetLabel: "₹12K–26K",
    badge: "New",
    image: golf,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { replicated: 23 },
    vendors: [
      { slug: "maison-noir", name: "Greens & Grain Co.", role: "Putting green + setup", price: "₹6,500" },
      { slug: "skyline-sutra", name: "Skyline Sutra", role: "Whisky pairing bar", price: "₹5,500" },
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
    budget: 14500,
    budgetLabel: "₹11K–26K",
    badge: "Trending",
    image: tacos,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { replicated: 112 },
    vendors: [
      { slug: "grazing-plate", name: "Casa Cantina", role: "Taco + salsa station", price: "₹8,000" },
      { slug: "skyline-sutra", name: "Margarita Bar Co.", role: "Bartender + bar", price: "₹4,500" },
    ],
  },
    {
    slug: "yoga-puppies-matcha",
    title: "Yoga with Puppies & Matcha",
    tagline: "Linen mats on the lawn, golden puppies underfoot, matcha lattes — a Sunday that resets you.",
    occasion: "House Party",
    vibe: "Wellness · Daytime",
    city: "Bangalore",
    guests: "6–12",
    budget: 13500,
    budgetLabel: "₹15–24K",
    badge: "New",
    image: yoga,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { loved: "Wellness pick", replicated: 31 },
    vendors: [
      { slug: "chef-anaya", name: "Calm Co. Yoga", role: "Instructor + mats", price: "₹6,000" },
      { slug: "grazing-plate", name: "Matcha Maison", role: "Matcha bar + bites", price: "₹4,500" },
      { slug: "petal-wax", name: "Pup Pals", role: "Therapy puppies (3)", price: "₹4,000" },
    ],
  },
    {
    slug: "cocktail-cigar-club",
    title: "Cocktail Making & Cigar Club Night",
    tagline: "A mixologist behind your marble bar, hand-rolled cigars, emerald velvet — a private speakeasy.",
    occasion: "House Party",
    vibe: "Masculine · Luxe",
    city: "Mumbai",
    guests: "8–14",
    budget: 25000,
    budgetLabel: "₹28–42K",
    badge: "New",
    image: cocktailCigar,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { loved: "Editors' obsession", replicated: 19 },
    vendors: [
      { slug: "skyline-sutra", name: "The Stir Co.", role: "Master mixologist + bar", price: "₹11,000" },
      { slug: "maison-noir", name: "Habano House", role: "Cigar curator + humidor", price: "₹8,500" },
      { slug: "chef-vikrant", name: "Chef Vikrant", role: "Bar bites + canapés", price: "₹6,000" },
    ],
  },  {
    slug: "diwali-baithak",
    title: "Diwali Mehfil at Home",
    tagline: "Velvet floor seating, brass diyas in clusters, wine in crystal — a baithak that lingers.",
    occasion: "Festive",
    vibe: "Mehfil · Cosy",
    city: "Delhi NCR",
    guests: "20–40",
    budget: 43500,
    budgetLabel: "₹36K–71K",
    badge: "Seasonal",
    image: diwali,
    span: "regular",
    kit: "Diwali Hosting Kit",
    social: { loved: "Most loved in Delhi", replicated: 142, endorsed: "@masabagupta" },
    vendors: [
      { slug: "marigold-lane", name: "Marigold Lane", role: "Decor + diyas", price: "₹16,000" },
      { slug: "chatori-galli", name: "Chatori Galli", role: "Mithai + chaat counter", price: "₹10,000" },
      { slug: "dholwala-bros", name: "Dholwala Bros.", role: "Sufi musicians", price: "₹8,000" },
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
    budget: 25000,
    budgetLabel: "₹20K–42K",
    badge: "New",
    image: sufi,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { loved: "Editors' obsession", replicated: 47 },
    vendors: [
      { slug: "maison-noir", name: "Maison Noir", role: "Floor seating + drapes", price: "₹10,000" },
      { slug: "chef-vikrant", name: "Chef Vikrant", role: "Kebab counter", price: "₹8,000" },
      { slug: "vinyl-hours", name: "Sufi Trio", role: "Tabla · harmonium · vocals", price: "₹7,000" },
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
    budget: 38500,
    budgetLabel: "₹31K–65K",
    badge: "Trending",
    image: baby,
    span: "regular",
    kit: "Boho Baby Shower Kit",
    social: { loved: "Most loved in Bangalore", replicated: 89 },
    vendors: [
      { slug: "bloom-arch", name: "Bloom & Arch Co.", role: "Balloon installation", price: "₹17,000" },
      { slug: "grazing-plate", name: "The Grazing Plate", role: "Charcuterie tower", price: "₹6,500" },
      { slug: "lumen-lens", name: "Lumen Lens", role: "Photographer", price: "₹7,000" },
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
    budget: 6500,
    budgetLabel: "₹4K–11K",
    badge: "Editor's Pick",
    image: datenight,
    span: "regular",
    kit: "Anniversary At Home Kit",
    social: { replicated: 134, endorsed: "@diipakhosla" },
    vendors: [
      { slug: "skyline-sutra", name: "Skyline Sutra", role: "Rooftop styling", price: "₹3,000" },
      { slug: "petal-wax", name: "Petal & Wax", role: "Florals + candles", price: "₹2,000" },
      { slug: "chef-anaya", name: "Chef Anaya", role: "Private chef", price: "₹3,000" },
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
    budget: 9000,
    budgetLabel: "₹4K–19K",
    badge: "New",
    image: proposal,
    span: "regular",
    kit: "Anniversary At Home Kit",
    social: { loved: "Highest-rated setup", replicated: 76 },
    vendors: [
      { slug: "petal-wax", name: "Petal & Wax", role: "Petals + candle wall", price: "₹4,000" },
      { slug: "lumen-lens", name: "Lumen Lens", role: "Hidden photographer", price: "₹4,000" },
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
    budget: 19000,
    budgetLabel: "₹16K–32K",
    badge: "Best Seller",
    image: bachelorette,
    span: "regular",
    kit: "Bachelorette Bride Kit",
    social: { loved: "Most loved in Mumbai", replicated: 218, endorsed: "@komalpandeyofficial" },
    vendors: [
      { slug: "confetti-co", name: "Confetti Co.", role: "Balloon styling", price: "₹6,500" },
      { slug: "sugar-sundays", name: "Sugar Sundays", role: "Donut tower + cake", price: "₹4,000" },
      { slug: "disco-diaries", name: "Disco Diaries", role: "DJ + lights", price: "₹5,000" },
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
    budget: 17000,
    budgetLabel: "₹13K–29K",
    badge: "New",
    image: bachelor,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { replicated: 41 },
    vendors: [
      { slug: "maison-noir", name: "Maison Noir", role: "Poker table + styling", price: "₹6,500" },
      { slug: "chef-vikrant", name: "Chef Vikrant", role: "Chef's bar bites", price: "₹7,500" },
      { slug: "skyline-sutra", name: "Skyline Sutra", role: "Bartender + whisky pairing", price: "₹3,500" },
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
    budget: 12500,
    budgetLabel: "₹7K–26K",
    badge: "Best Seller",
    image: kids,
    span: "regular",
    kit: "Kids Birthday Kit",
    social: { replicated: 173 },
    vendors: [
      { slug: "tiny-tents", name: "Tiny Tents", role: "Decor + arch", price: "₹6,500" },
      { slug: "frosted-studio", name: "Frosted Studio", role: "Custom cake", price: "₹3,000" },
      { slug: "kiddo-carnival", name: "Kiddo Carnival", role: "Entertainer + games", price: "₹4,000" },
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
    budget: 35500,
    budgetLabel: "₹29K–58K",
    badge: "Trending",
    image: anniversary,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { loved: "Editors' obsession", replicated: 34 },
    vendors: [
      { slug: "maison-noir", name: "Maison Noir", role: "Tablescape + styling", price: "₹12,000" },
      { slug: "chef-vikrant", name: "Chef Vikrant", role: "5-course chef", price: "₹14,500" },
      { slug: "vinyl-hours", name: "Vinyl Hours", role: "Acoustic duo", price: "₹6,500" },
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
    budget: 34500,
    budgetLabel: "₹27K–58K",
    badge: "Editor's Pick",
    image: chefs,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { loved: "Most loved", replicated: 28 },
    vendors: [
      { slug: "chef-vikrant", name: "Chef Vikrant", role: "6-course tasting menu", price: "₹24,000" },
      { slug: "maison-noir", name: "Maison Noir", role: "Marble setup + service", price: "₹8,000" },
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
    budget: 10000,
    budgetLabel: "₹7K–18K",
    badge: "New",
    image: karaoke,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { replicated: 64 },
    vendors: [
      { slug: "vinyl-hours", name: "Vinyl Hours", role: "Karaoke + jam setup", price: "₹5,500" },
      { slug: "skyline-sutra", name: "Bartender", role: "Mixers + wine", price: "₹3,500" },
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
    budget: 29500,
    budgetLabel: "₹22K–52K",
    badge: "New",
    image: housewarming,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { replicated: 38 },
    vendors: [
      { slug: "bloom-arch", name: "Bloom & Arch Co.", role: "Floral console + drapes", price: "₹10,000" },
      { slug: "grazing-plate", name: "The Grazing Plate", role: "Cheese + grazing table", price: "₹7,500" },
      { slug: "skyline-sutra", name: "Champagne Tower Co.", role: "Bar + tower", price: "₹6,500" },
    ],
  },
    {
    slug: "spa-day-at-home",
    title: "Spa Day at Home",
    tagline: "Robes, rose petals in marble bowls, eucalyptus steam — a Sunday that resets the week.",
    occasion: "House Party",
    vibe: "Wellness · Intimate",
    city: "Bangalore",
    guests: "4–8",
    budget: 12000,
    budgetLabel: "₹9K–21K",
    badge: "New",
    image: spa,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { loved: "Wellness pick", replicated: 52 },
    vendors: [
      { slug: "petal-wax", name: "Petal & Wax", role: "Florals + candles", price: "₹3,500" },
      { slug: "chef-anaya", name: "Glow Therapy Co.", role: "On-call therapists (2)", price: "₹6,500" },
    ],
  },
    {
    slug: "christmas-brunch",
    title: "Christmas Brunch at Home",
    tagline: "Pine garland down a long white table, gold cutlery, crimson ribbon, mimosas in cut glass.",
    occasion: "Festive",
    vibe: "Festive · Daytime",
    city: "Mumbai",
    guests: "12–20",
    budget: 26000,
    budgetLabel: "₹20K–45K",
    badge: "Seasonal",
    image: christmas,
    span: "regular",
    kit: "Dinner Party Kit",
    social: { loved: "December favourite", replicated: 67 },
    vendors: [
      { slug: "bloom-arch", name: "Bloom & Arch Co.", role: "Garland + tablescape", price: "₹10,000" },
      { slug: "grazing-plate", name: "The Grazing Plate", role: "Brunch + grazing", price: "₹9,000" },
      { slug: "chef-anaya", name: "Chef Anaya", role: "Roast + dessert course", price: "₹6,500" },
    ],
  },
    {
    slug: "onam-sadhya",
    title: "Onam Sadhya at Home",
    tagline: "Banana leaves, twenty-six dishes, pookalam at the door, jasmine in the air.",
    occasion: "Festive",
    vibe: "Traditional · Festive",
    city: "Bangalore",
    guests: "15–25",
    budget: 21500,
    budgetLabel: "₹17K–37K",
    badge: "Seasonal",
    image: onam,
    span: "regular",
    kit: "Diwali Hosting Kit",
    social: { loved: "Most loved down south", replicated: 41 },
    vendors: [
      { slug: "chatori-galli", name: "Sadhya Stories", role: "26-item sadhya catering", price: "₹12,000" },
      { slug: "marigold-lane", name: "Marigold Lane", role: "Pookalam + brass diyas", price: "₹6,500" },
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
  { slug: "boho-baby-shower", name: "Boho Baby Shower Kit", standardPrice: 500, customPrice: 500, items: "Invites · Menu cards · Games · Signage", preview: ["Pampas invite", "Grazing menu", "Bingo card", "Welcome sign"], image: kitBoho, color: "var(--blush-soft)" },
  { slug: "diwali-hosting", name: "Diwali Hosting Kit", standardPrice: 500, customPrice: 500, items: "Place cards · Menu · Tambola · Wishes board", preview: ["Marigold invite", "Mehfil menu", "Tambola sheet", "Diya tags"], image: kitDiwali, color: "var(--gold)" },
  { slug: "bachelorette-bride", name: "Bachelorette Bride Kit", standardPrice: 500, customPrice: 500, items: "Invites · Drinking games · Photo props · Sash printable", preview: ["Disco invite", "Truth-or-shot", "Photo signs", "Bride sash"], image: kitBach, color: "var(--blush)" },
  { slug: "kids-birthday", name: "Kids Birthday Kit", standardPrice: 500, customPrice: 500, items: "Invites · Thank-you cards · 5 games · Colouring sheets", preview: ["Rainbow invite", "Thank-you card", "Treasure hunt", "Colouring sheet"], image: kitKids, color: "var(--gold-soft)" },
  { slug: "anniversary-home", name: "Anniversary At Home Kit", standardPrice: 500, customPrice: 500, items: "Menu · Love-notes jar · Playlist · Candle map", preview: ["Date menu", "Love-notes jar", "Playlist QR", "Candle map"], image: kitAnniv, color: "var(--oxblood)" },
  { slug: "dinner-party", name: "Dinner Party Kit", standardPrice: 500, customPrice: 500, items: "Place cards · Menu · Seating chart · Conversation cards", preview: ["Place cards", "Tasting menu", "Seating chart", "Convo cards"], image: kitDinner, color: "var(--ink)" },
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
  availability: { status: "Available this weekend" | "Booking 2-3 weeks out" | "Limited slots"; nextOpen: string };
  serves: string[];
  specialties: string[];
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
    contact: { phone: "+91 98101 12345", email: "hello@marigoldlane.in", instagram: "@marigoldlane" },
    availability: { status: "Available this weekend", nextOpen: "Sat 18 Jul — 2 slots" },
    serves: ["Delhi NCR", "Gurgaon", "Noida"],
    specialties: ["Diwali baithak", "Floral chandeliers", "Mehfil styling"],
    packages: [
      { name: "Intimate setup", price: "₹24,500", includes: "Entryway arch · diya trail · 2 cushion corners" },
      { name: "Full mehfil", price: "₹54,500", includes: "Backdrop · floor seating · floral chandelier · diyas" },
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
    contact: { phone: "+91 90123 22210", email: "studio@bloomarch.co", instagram: "@bloomarch.co" },
    availability: { status: "Booking 2-3 weeks out", nextOpen: "Sat 1 Aug onwards" },
    serves: ["Bangalore", "Whitefield", "Mysuru (on request)"],
    specialties: ["Baby showers", "Balloon installations", "Pampas tablescapes"],
    packages: [
      { name: "Balloon arch + table", price: "₹19,500", includes: "8ft arch · pampas table · grazing plinth" },
      { name: "Full luxe shower", price: "₹43,500", includes: "Arch · drapes · seating · signage · florals" },
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
    contact: { phone: "+91 99201 88712", email: "party@confettico.in", instagram: "@confetti.co" },
    availability: { status: "Limited slots", nextOpen: "1 slot Sat, 2 Sun" },
    serves: ["Mumbai", "Navi Mumbai", "Thane"],
    specialties: ["Bachelorettes", "Disco brunches", "Neon styling"],
    packages: [
      { name: "Bachelorette balloon set", price: "₹10,000", includes: "Arch · letter balloons · neon sign rental" },
      { name: "Full venue styling", price: "₹26,500", includes: "Arch · ceiling installs · photo wall · props" },
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
    contact: { phone: "+91 98202 55501", email: "hello@chefanaya.in", instagram: "@chefanaya" },
    availability: { status: "Booking 2-3 weeks out", nextOpen: "Fri 24 Jul onwards" },
    serves: ["Mumbai", "Alibaug (on request)"],
    specialties: ["4-6 course tasting", "Pan-Asian", "Modern Indian"],
    packages: [
      { name: "Date night for 2", price: "₹4,500", includes: "4-course tasting · plating · dessert" },
      { name: "Dinner party for 10", price: "₹22,500", includes: "5-course · sommelier pairing · service" },
    ],
  },
  {
    slug: "chef-vikrant",
    name: "Chef Vikrant",
    role: "Private Chef + Kebab Counter",
    city: "Mumbai",
    rating: 4.9,
    events: 142,
    responseTime: "same day",
    basedIn: "Khar West, Mumbai",
    blurb: "Live kebab counters and 6-course tasting menus. Awadhi roots, contemporary plating.",
    contact: { phone: "+91 98203 47712", email: "kitchen@chefvikrant.in", instagram: "@chefvikrant.kitchen" },
    availability: { status: "Available this weekend", nextOpen: "Sat 18 Jul — kebab counter open" },
    serves: ["Mumbai", "Pune (on request)"],
    specialties: ["Kebab counter", "Chef's table", "Awadhi tasting menus"],
    packages: [
      { name: "Live kebab counter", price: "₹12,500", includes: "3 kebabs · live grill · chutneys (10 guests)" },
      { name: "6-course chef's table", price: "₹36,500", includes: "6 courses · plating · service (8-12 guests)" },
    ],
  },
  {
    slug: "maison-noir",
    name: "Maison Noir",
    role: "Tablescape + Styling",
    city: "Mumbai",
    rating: 4.9,
    events: 211,
    responseTime: "under 2 hrs",
    basedIn: "Worli, Mumbai",
    blurb: "Black-tie tablescapes, marble service, floor seating that doesn't make backs ache. Editorial through-and-through.",
    contact: { phone: "+91 98204 11220", email: "studio@maisonnoir.in", instagram: "@maison.noir" },
    availability: { status: "Limited slots", nextOpen: "2 slots Sat, 1 Sun" },
    serves: ["Mumbai", "Delhi NCR", "Bangalore (with travel)"],
    specialties: ["Noir dinners", "Floor seating mehfils", "Chef's table styling"],
    packages: [
      { name: "Intimate tablescape", price: "₹15,500", includes: "Linen · candlesticks · service ware (10)" },
      { name: "Full noir dinner", price: "₹54,500", includes: "Tables · seating · drapes · florals · service" },
    ],
  },
  {
    slug: "skyline-sutra",
    name: "Skyline Sutra",
    role: "Rooftop + Bar Styling",
    city: "Mumbai",
    rating: 4.8,
    events: 178,
    responseTime: "same day",
    basedIn: "Bandra West, Mumbai",
    blurb: "Rooftop date nights, whisky pairing bars, champagne towers. Anywhere with a view, we set the scene.",
    contact: { phone: "+91 98205 99012", email: "hello@skylinesutra.in", instagram: "@skyline.sutra" },
    availability: { status: "Available this weekend", nextOpen: "Sat & Sun — multiple slots" },
    serves: ["Mumbai", "Goa (Nov–Mar)"],
    specialties: ["Rooftop date nights", "Bartending", "Champagne towers"],
    packages: [
      { name: "Date night rooftop", price: "₹4,000", includes: "Styling · candles · fairy lights · setup" },
      { name: "Bar + bartender", price: "₹10,000", includes: "Bartender · 3 cocktails · glassware (15 guests)" },
    ],
  },
  {
    slug: "petal-wax",
    name: "Petal & Wax",
    role: "Florals + Candles",
    city: "Delhi NCR",
    rating: 4.9,
    events: 264,
    responseTime: "under 2 hrs",
    basedIn: "Defence Colony, Delhi",
    blurb: "Petals, pillars, hand-poured candles. The proposal vendor on speed-dial across Delhi.",
    contact: { phone: "+91 98106 33214", email: "studio@petalandwax.in", instagram: "@petal.and.wax" },
    availability: { status: "Available this weekend", nextOpen: "Same-day for proposals" },
    serves: ["Delhi NCR", "Gurgaon", "Noida"],
    specialties: ["Proposals", "Candle walls", "Hand-tied florals"],
    packages: [
      { name: "Proposal setup", price: "₹6,500", includes: "Petal heart · 100 candles · ring stand" },
      { name: "Anniversary table florals", price: "₹2,500", includes: "Centerpiece · taper candles · place posies" },
    ],
  },
  {
    slug: "grazing-plate",
    name: "The Grazing Plate",
    role: "Charcuterie + Grazing",
    city: "Bangalore",
    rating: 4.8,
    events: 156,
    responseTime: "within a day",
    basedIn: "Koramangala, Bangalore",
    blurb: "Cheese towers, charcuterie sprawls, grazing tables that hold their good looks for four hours.",
    contact: { phone: "+91 90124 78801", email: "hello@grazingplate.in", instagram: "@grazing.plate" },
    availability: { status: "Booking 2-3 weeks out", nextOpen: "Sat 1 Aug onwards" },
    serves: ["Bangalore", "Mumbai (on request)"],
    specialties: ["Grazing tables", "Cheese towers", "Brunch counters"],
    packages: [
      { name: "Charcuterie tower (15)", price: "₹10,000", includes: "Cheese · meats · crackers · seasonal fruit" },
      { name: "Full grazing table (30)", price: "₹18,000", includes: "8ft table · cheese · meats · dips · fruit" },
    ],
  },
  {
    slug: "lumen-lens",
    name: "Lumen Lens",
    role: "Photographer",
    city: "Bangalore",
    rating: 5.0,
    events: 184,
    responseTime: "within a day",
    basedIn: "HSR Layout, Bangalore",
    blurb: "Documentary-style party photography. Light, real, no awkward poses. Hidden-photographer specialist for proposals.",
    contact: { phone: "+91 90125 41217", email: "hello@lumenlens.in", instagram: "@lumen.lens" },
    availability: { status: "Limited slots", nextOpen: "2 slots Sat" },
    serves: ["Bangalore", "Goa (Nov–Mar)", "Mumbai (on request)"],
    specialties: ["Proposals", "Baby showers", "Editorial party photography"],
    packages: [
      { name: "Hidden photographer (proposal)", price: "₹6,000", includes: "2 hours · 60 edited photos · reel" },
      { name: "Full event coverage (4hr)", price: "₹10,500", includes: "150 edited photos · highlight reel" },
    ],
  },
  {
    slug: "chatori-galli",
    name: "Chatori Galli",
    role: "Mithai + Live Chaat",
    city: "Delhi NCR",
    rating: 4.8,
    events: 132,
    responseTime: "same day",
    basedIn: "Lajpat Nagar, Delhi",
    blurb: "Live chaat counters, mithai trays in brass, and golgappa shots that go viral every Diwali.",
    contact: { phone: "+91 98107 88820", email: "orders@chatorigalli.in", instagram: "@chatori.galli" },
    availability: { status: "Available this weekend", nextOpen: "Sat & Sun — slots open" },
    serves: ["Delhi NCR", "Gurgaon", "Noida"],
    specialties: ["Diwali", "Live chaat", "Sadhya & festive thalis"],
    packages: [
      { name: "Mithai + chaat counter (25)", price: "₹15,500", includes: "5 mithai · 3 chaats · live chef" },
      { name: "Full festive thali (40)", price: "₹33,500", includes: "Thali service · mithai · drinks" },
    ],
  },
  {
    slug: "dholwala-bros",
    name: "Dholwala Bros.",
    role: "Sufi + Dhol Musicians",
    city: "Delhi NCR",
    rating: 4.9,
    events: 298,
    responseTime: "under 2 hrs",
    basedIn: "Karol Bagh, Delhi",
    blurb: "Sufi qawwali trio, dhol players, harmonium — three generations of musicians, one WhatsApp number.",
    contact: { phone: "+91 98108 12290", email: "bookings@dholwalabros.in", instagram: "@dholwala.bros" },
    availability: { status: "Available this weekend", nextOpen: "Open this Sat night" },
    serves: ["Delhi NCR", "Chandigarh", "Jaipur (with travel)"],
    specialties: ["Sufi baithaks", "Sangeet", "Dhol entries"],
    packages: [
      { name: "Sufi trio (2 hrs)", price: "₹12,500", includes: "Tabla · harmonium · vocals" },
      { name: "Sangeet dhol set", price: "₹8,500", includes: "2 dholis · 1 hr · entry + sangeet" },
    ],
  },
  {
    slug: "vinyl-hours",
    name: "Vinyl Hours",
    role: "Live Music + Karaoke",
    city: "Mumbai",
    rating: 4.8,
    events: 104,
    responseTime: "within a day",
    basedIn: "Andheri West, Mumbai",
    blurb: "Acoustic duos, vinyl-led house DJs, full karaoke rigs. Music for nights that should last till 2am.",
    contact: { phone: "+91 98206 71103", email: "play@vinylhours.in", instagram: "@vinyl.hours" },
    availability: { status: "Limited slots", nextOpen: "1 slot Fri, 1 Sat" },
    serves: ["Mumbai", "Pune", "Goa (Nov–Mar)"],
    specialties: ["Karaoke setups", "Acoustic duos", "Vinyl DJs"],
    packages: [
      { name: "Karaoke + jam setup", price: "₹8,500", includes: "Mic · speakers · 200-song library" },
      { name: "Acoustic duo (3 hrs)", price: "₹10,000", includes: "Guitar + vocals · sound · 3 hr set" },
    ],
  },
  {
    slug: "disco-diaries",
    name: "Disco Diaries",
    role: "DJ + Lighting",
    city: "Mumbai",
    rating: 4.7,
    events: 167,
    responseTime: "same day",
    basedIn: "Versova, Mumbai",
    blurb: "Disco lights, party DJs, dancefloor in a box. Bachelorette specialists.",
    contact: { phone: "+91 98207 92214", email: "spin@discodiaries.in", instagram: "@disco.diaries" },
    availability: { status: "Available this weekend", nextOpen: "Sat & Sun — open" },
    serves: ["Mumbai", "Goa", "Lonavala"],
    specialties: ["Bachelorette brunches", "Birthdays", "Disco-themed setups"],
    packages: [
      { name: "DJ + lights (3 hrs)", price: "₹7,500", includes: "DJ · 4 disco lights · sound system" },
      { name: "Full dancefloor", price: "₹18,000", includes: "DJ · LED dancefloor · lights · smoke" },
    ],
  },
  {
    slug: "sugar-sundays",
    name: "Sugar Sundays",
    role: "Cakes + Dessert Towers",
    city: "Mumbai",
    rating: 4.9,
    events: 221,
    responseTime: "under 2 hrs",
    basedIn: "Khar West, Mumbai",
    blurb: "Donut towers, custom cakes, dessert tables. The bakery that bachelorettes screenshot.",
    contact: { phone: "+91 98208 33019", email: "bake@sugarsundays.in", instagram: "@sugar.sundays" },
    availability: { status: "Booking 2-3 weeks out", nextOpen: "Sat 25 Jul onwards" },
    serves: ["Mumbai", "Pune"],
    specialties: ["Donut towers", "Custom cakes", "Dessert tables"],
    packages: [
      { name: "Donut tower + cake (10)", price: "₹6,500", includes: "30 donuts · 1kg cake · stand" },
      { name: "Dessert table (25)", price: "₹15,500", includes: "Cake · donut tower · macarons · cupcakes" },
    ],
  },
  {
    slug: "tiny-tents",
    name: "Tiny Tents",
    role: "Kids' Party Decor",
    city: "Bangalore",
    rating: 4.9,
    events: 198,
    responseTime: "same day",
    basedIn: "Sarjapur, Bangalore",
    blurb: "Sleepover tents, rainbow arches, soft play setups for the under-10 crowd.",
    contact: { phone: "+91 90126 67782", email: "play@tinytents.in", instagram: "@tiny.tents" },
    availability: { status: "Available this weekend", nextOpen: "Sat & Sun — open" },
    serves: ["Bangalore", "Chennai (on request)"],
    specialties: ["Sleepover tents", "Rainbow arches", "Kids' parties"],
    packages: [
      { name: "Birthday arch + decor", price: "₹10,000", includes: "Arch · backdrop · table styling" },
      { name: "Sleepover (6 tents)", price: "₹15,500", includes: "Tents · linens · fairy lights · breakfast styling" },
    ],
  },
  {
    slug: "frosted-studio",
    name: "Frosted Studio",
    role: "Custom Cakes",
    city: "Bangalore",
    rating: 4.9,
    events: 174,
    responseTime: "within a day",
    basedIn: "Indiranagar, Bangalore",
    blurb: "Sculptural cakes, hand-painted detail, ridiculous-but-edible. Kids' birthdays a specialty.",
    contact: { phone: "+91 90127 21188", email: "hello@frostedstudio.in", instagram: "@frosted.studio" },
    availability: { status: "Limited slots", nextOpen: "2 slots Sat" },
    serves: ["Bangalore"],
    specialties: ["Sculptural cakes", "Kids' birthdays", "Hand-painted detail"],
    packages: [
      { name: "1kg custom cake", price: "₹4,500", includes: "Theme · hand-painted · 1kg" },
      { name: "Tiered cake (3kg)", price: "₹10,000", includes: "3 tiers · theme · sugar flowers" },
    ],
  },
  {
    slug: "kiddo-carnival",
    name: "Kiddo Carnival",
    role: "Kids Entertainers + Games",
    city: "Bangalore",
    rating: 4.8,
    events: 142,
    responseTime: "same day",
    basedIn: "JP Nagar, Bangalore",
    blurb: "Magicians, balloon artists, treasure hunts. Two hours of holding kids' attention so parents can breathe.",
    contact: { phone: "+91 90128 55471", email: "fun@kiddocarnival.in", instagram: "@kiddo.carnival" },
    availability: { status: "Available this weekend", nextOpen: "Sat AM, Sun AM slots open" },
    serves: ["Bangalore", "Mysuru (on request)"],
    specialties: ["Magicians", "Balloon artists", "Treasure hunts"],
    packages: [
      { name: "Entertainer (2 hrs)", price: "₹6,500", includes: "Magician · balloon art · games" },
      { name: "Full carnival (3 hrs)", price: "₹12,500", includes: "3 entertainers · games · prizes" },
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
