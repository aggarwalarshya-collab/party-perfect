import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { vendors } from "@/data/parties";

export const Route = createFileRoute("/directory")({
  head: () => ({
    meta: [
      { title: "Vendor Directory — House of Affairs" },
      { name: "description", content: "Browse curated bartenders, caterers, florists, photographers and musicians across India. Verified, rated, available." },
    ],
  }),
  component: Directory,
});

type Bucket = { key: string; label: string; emoji: string; match: RegExp };
const BUCKETS: Bucket[] = [
  { key: "decor", label: "Decor & Florals", emoji: "✿", match: /decor|floral|styling|tablescape|balloon|kid/i },
  { key: "food", label: "Caterers & Chefs", emoji: "✦", match: /chef|cater|grazing|charcut|mithai|chaat|kebab/i },
  { key: "bar", label: "Bartenders & Bars", emoji: "✦", match: /bar|rooftop|cocktail/i },
  { key: "music", label: "Music & DJs", emoji: "♪", match: /dj|music|sufi|dhol|karaoke|vinyl|qawwali/i },
  { key: "photo", label: "Photographers", emoji: "◉", match: /photo|lens/i },
  { key: "cake", label: "Cakes & Desserts", emoji: "◐", match: /cake|dessert|sugar|bake/i },
  { key: "kids", label: "Kids Entertainers", emoji: "★", match: /kid|carnival|tent/i },
];

function bucketFor(role: string) {
  return BUCKETS.find((b) => b.match.test(role))?.key ?? "decor";
}

const CITIES = ["All cities", "Mumbai", "Delhi NCR", "Bangalore", "Goa", "Pune"];

function Directory() {
  const [active, setActive] = useState<string>("all");
  const [city, setCity] = useState<string>("All cities");

  const filtered = useMemo(() => {
    return vendors.filter((v) => {
      const bucketOk = active === "all" || bucketFor(v.role) === active;
      const cityOk = city === "All cities" || v.city === city || v.serves.some((s) => s.includes(city));
      return bucketOk && cityOk;
    });
  }, [active, city]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: vendors.length };
    for (const b of BUCKETS) map[b.key] = vendors.filter((v) => bucketFor(v.role) === b.key).length;
    return map;
  }, []);

  return (
    <div className="bg-cream">
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="text-xs uppercase tracking-[0.3em] text-champagne">Vendor directory</div>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
            Every vendor we'd <span className="italic text-sparkle">vouch for.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-background/80 md:text-base">
            Hand-picked across categories — book directly, or hand the whole stack to the Affair Assistant.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Browse</span>
          <button
            onClick={() => setActive("all")}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
              active === "all" ? "border-oxblood bg-oxblood text-background" : "border-border bg-card hover:border-oxblood/40"
            }`}
          >
            All ({counts.all})
          </button>
          {BUCKETS.map((b) => (
            <button
              key={b.key}
              onClick={() => setActive(b.key)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                active === b.key ? "border-oxblood bg-oxblood text-background" : "border-border bg-card hover:border-oxblood/40"
              }`}
            >
              <span className="mr-1">{b.emoji}</span>
              {b.label} ({counts[b.key] ?? 0})
            </button>
          ))}
        </div>

        {/* City row */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">City</span>
          {CITIES.map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                city === c ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <Link
              key={v.slug}
              to="/vendor/$slug"
              params={{ slug: v.slug }}
              className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lux"
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-display text-lg font-semibold group-hover:text-oxblood md:text-xl">{v.name}</div>
                <span className="text-xs text-oxblood">★ {v.rating}</span>
              </div>
              <div className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">{v.role}</div>
              <p className="mt-3 line-clamp-2 text-sm text-foreground/75">{v.blurb}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-foreground/65">
                <span>{v.city}</span>
                <span>· {v.events}+ events</span>
                <span>· responds {v.responseTime}</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-blush-soft px-2.5 py-1 text-[11px] text-oxblood">
                <span className="h-1.5 w-1.5 rounded-full bg-oxblood" />
                {v.availability.status}
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
            No vendors match this filter yet. Try another city or category.
          </div>
        )}
      </section>
    </div>
  );
}
