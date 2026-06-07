import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { parties } from "@/data/parties";
import { PartyCard } from "@/components/PartyCard";
import hero from "@/assets/hero-affairs.jpg";
import heroVideo from "@/assets/hero-affair-build.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Affairs — the curated party-planning layer for urban India" },
      { name: "description", content: "Discover, compare and assemble beautiful celebrations — vendors, party kits and the Affair Assistant. Your celebrations, our planning." },
      { property: "og:title", content: "House of Affairs" },
      { property: "og:description", content: "Your celebrations, our planning." },
    ],
  }),
  component: FeedPage,
});

const promptIdeas = [
  "Sufi baithak at home, 15 guests",
  "Diwali for 30, ~₹1L",
  "Anniversary surprise, just two of us",
];

type Filter =
  | "All"
  | "Under ₹5K"
  | "Under ₹10K"
  | "Premium"
  | "Food"
  | "Gaming"
  | "Surprises"
  | "Unique & Trending"
  | "Seasonal";
const FILTERS: Filter[] = ["All", "Under ₹5K", "Under ₹10K", "Premium", "Food", "Gaming", "Surprises", "Unique & Trending", "Seasonal"];

const STEP_MOBILE = 8;
const STEP_DESKTOP = 16;

// ---------- Lightweight calculator (mirrors /calculator styling) ----------
const occasionRates: Record<string, number> = {
  "Baby Shower": 1800,
  Anniversary: 2200,
  "Birthday (Kids)": 1400,
  "Birthday (Adult)": 1700,
  Bachelorette: 2400,
  "Festive / Diwali": 2000,
};
const cityMul: Record<string, number> = { Mumbai: 1.2, "Delhi NCR": 1.1, Bangalore: 1.0, "Other Tier-1": 0.9 };
const vibeMul: Record<string, number> = { Minimal: 0.85, Classic: 1.0, "Glam / Editorial": 1.35 };

function FeedPage() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("All");
  const [shown, setShown] = useState(STEP_MOBILE);

  // Parse "starting from" price out of budgetLabel (e.g. "₹3K–10K" → 3000)
  const startsAt = (p: typeof parties[number]) => {
    const m = p.budgetLabel.match(/₹\s*(\d+)\s*[K]?\s*[–-]/i);
    return m ? parseInt(m[1], 10) * 1000 : p.budget;
  };
  const PREMIUM_SLUGS = new Set([
    "cocktail-cigar-club",
    "chefs-table-at-home",
    "noir-anniversary-dinner",
    "sufi-baithak-night",
    "diwali-baithak",
    "modern-sangeet",
  ]);

  const filtered = useMemo(() => {
    if (filter === "All") return parties;
    if (filter === "Under ₹5K") return parties.filter((p) => startsAt(p) <= 6000);
    if (filter === "Under ₹10K") return parties.filter((p) => startsAt(p) <= 10000);
    if (filter === "Premium") return parties.filter((p) => PREMIUM_SLUGS.has(p.slug) || p.budget >= 25000 || p.badge === "Editor's Pick");
    if (filter === "Seasonal") return parties.filter((p) => p.badge === "Seasonal" || /diwali|christmas|onam|festive/i.test(p.title));
    if (filter === "Unique & Trending") return parties.filter((p) => p.badge === "Trending" || p.badge === "Editor's Pick");
    if (filter === "Food") return parties.filter((p) => /chef|tacos|brunch|dinner|sadhya|grazing|cocktail|cigar|bbq|baithak/i.test(p.title + p.tagline));
    if (filter === "Gaming") return parties.filter((p) => /golf|karaoke|game|poker|mini|board/i.test(p.title + p.tagline));
    if (filter === "Surprises") return parties.filter((p) => /proposal|surprise|anniversary|date/i.test(p.title + p.tagline + p.occasion));
    return parties;
  }, [filter]);

  const submit = (text?: string) => {
    const query = (text ?? q).trim();
    navigate({ to: "/search", search: { q: query || undefined } as never });
  };

  return (
    <div className="bg-cream">
      {/* HERO — darker for readability */}
      <section className="relative overflow-hidden bg-oxblood-deep text-background">
        <div className="absolute inset-0">
          <video
            src={heroVideo.url}
            poster={hero}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Stronger dark gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-oxblood-deep/55 via-oxblood-deep/35 to-oxblood-deep/90" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-end px-5 pb-12 pt-24 text-center md:min-h-[82vh] md:px-8 md:pb-20 md:pt-32">
          <h1 className="font-display text-[2.4rem] font-semibold leading-[0.98] tracking-tight text-balance text-cream sm:text-5xl md:text-7xl lg:text-[5rem]">
            Tell us your <span className="italic text-sparkle">affair.</span>
            <br />
            We'll set the table.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-cream/85 text-balance md:text-base">
            From a sufi baithak to a chef's table at home — type whatever you're plotting and we'll
            curate the vendors, the look and the price.
          </p>

          <div className="mt-8 w-full max-w-3xl rounded-3xl bg-oxblood-deep/65 p-3 backdrop-blur-md ring-1 ring-champagne/30 shadow-lux">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
              className="flex items-stretch gap-2 rounded-2xl bg-background p-2 text-foreground sm:rounded-full"
            >
              <span className="hidden self-center pl-4 text-oxblood sm:inline">✦</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="“I want a sufi baithak at home, 15 guests…”"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-muted-foreground md:text-base"
              />
              <button
                type="submit"
                className="rounded-xl bg-oxblood px-4 py-3 text-sm font-medium text-background ring-1 ring-champagne/40 transition hover:opacity-95 sm:rounded-full sm:px-6"
              >
                Curate →
              </button>
            </form>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {promptIdeas.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setQ(p);
                    submit(p);
                  }}
                  className="rounded-full border border-champagne/35 bg-oxblood-deep/40 px-3 py-1.5 text-[11px] text-cream/95 backdrop-blur transition hover:border-champagne hover:text-champagne md:text-xs"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-oxblood-deep/40 bg-foreground py-3 text-background">
        <div className="ticker flex gap-12 whitespace-nowrap font-display text-sm">
          {[...Array(2)].flatMap((_, n) =>
            [
              "✦ Trending: Diwali baithak",
              "✦ Most loved in Mumbai: Disco bachelorette",
              "✦ New: Sufi baithak night",
              "✦ 218 hosts replicated this month",
              "✦ Party Kits from ₹129",
              "✦ Editor's Pick: rooftop date night",
            ].map((t, i) => (
              <span key={`${n}-${i}`} className="opacity-90">
                {t}
              </span>
            )),
          )}
        </div>
      </div>

      {/* FEED — cream base, blends seamlessly with subsequent sections */}
      <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-12 -z-10 flex justify-center">
          <div className="h-72 w-[80%] rounded-full bg-blush-soft blur-3xl opacity-60" />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-oxblood">The Affair Feed</div>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-5xl">
              Bring these <span className="italic text-sparkle">affairs</span> home.
            </h2>
          </div>
        </div>

        {/* Filters row — explicit label + icon */}
        <div className="mt-6 -mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
          <div className="flex min-w-max items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-oxblood-deep/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-oxblood-deep">
              {/* sliders icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="4" y1="6" x2="20" y2="6" /><circle cx="9" cy="6" r="2.2" fill="currentColor" stroke="none" />
                <line x1="4" y1="12" x2="20" y2="12" /><circle cx="15" cy="12" r="2.2" fill="currentColor" stroke="none" />
                <line x1="4" y1="18" x2="20" y2="18" /><circle cx="8" cy="18" r="2.2" fill="currentColor" stroke="none" />
              </svg>
              Filters
            </span>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => { setFilter(f); setShown(STEP_MOBILE); }}
                className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm transition ${
                  filter === f
                    ? "border-oxblood bg-oxblood text-background"
                    : "border-border bg-card text-foreground/80 hover:border-oxblood/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-10">
          {/* Show different counts via classes: STEP_MOBILE on mobile, STEP_DESKTOP on desktop, until expanded */}
          {filtered.map((p, i) => {
            const mobileHidden = i >= shown;
            const desktopHidden = i >= Math.max(shown, STEP_DESKTOP);
            return (
              <div
                key={p.slug}
                className={`${mobileHidden ? "hidden" : ""} ${desktopHidden ? "lg:hidden" : "lg:block"}`}
              >
                <PartyCard party={p} />
              </div>
            );
          })}
        </div>

        {/* View more — hidden once everything is shown on the active breakpoint */}
        {(shown < filtered.length || filtered.length > STEP_DESKTOP) && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShown((s) => s + (window.innerWidth >= 1024 ? STEP_DESKTOP : STEP_MOBILE))}
              className="rounded-full border border-oxblood bg-background px-6 py-3 text-sm font-medium text-oxblood transition hover:bg-oxblood hover:text-background"
            >
              View more affairs →
            </button>
          </div>
        )}
      </section>

      {/* HOW IT WORKS — visually unified, with imagery, less text */}
      <section className="relative overflow-hidden bg-cream">
        <div aria-hidden className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-blush-soft blur-3xl opacity-70" />
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.28em] text-oxblood">How it works</div>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Scroll. Curate. <span className="italic text-sparkle">Celebrate.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", icon: "✦", t: "Tell us the affair", d: "Type the brief or browse the feed." },
              { n: "02", icon: "♡", t: "Save & replicate", d: "Heart what you love — we surface vendors in your city." },
              { n: "03", icon: "✉", t: "Hand it to us", d: "₹499 / request. We do the chasing on WhatsApp." },
            ].map((s) => (
              <div key={s.n} className="rounded-3xl bg-background p-6 ring-1 ring-border shadow-soft md:p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl text-oxblood">{s.n}</span>
                  <span className="text-2xl text-champagne-deep">{s.icon}</span>
                </div>
                <div className="mt-4 font-display text-xl font-semibold md:text-2xl">{s.t}</div>
                <p className="mt-1 text-sm text-foreground/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORY + INLINE CALCULATOR — single seamless block */}
      <section className="relative bg-cream">
        <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <div className="grid gap-8 md:grid-cols-12">
            {/* Vendor directory link — imagery-led */}
            <div className="relative overflow-hidden rounded-3xl bg-foreground text-background shadow-lux md:col-span-5">
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-oxblood via-oxblood-deep to-foreground" />
              <div className="relative flex h-full flex-col justify-between p-7 md:p-9">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-champagne">The Directory</div>
                  <h3 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
                    Every vendor we'd <span className="italic text-sparkle">vouch for.</span>
                  </h3>
                </div>
                <div className="mt-8 flex flex-wrap gap-2 text-[11px] text-background/85">
                  {["Bartenders", "Caterers", "Florists", "Photographers", "DJs", "Musicians", "Cakes", "Kids"].map((c) => (
                    <span key={c} className="rounded-full border border-champagne/30 px-2.5 py-1">
                      {c}
                    </span>
                  ))}
                </div>
                <Link
                  to="/directory"
                  className="mt-6 inline-block self-start rounded-full bg-champagne px-5 py-3 text-sm font-medium text-oxblood-deep hover:opacity-95"
                >
                  Browse the directory →
                </Link>
              </div>
            </div>

            {/* Inline budget calculator — mirrors /calculator visual */}
            <div className="rounded-3xl bg-background p-7 ring-1 ring-border shadow-soft md:col-span-7 md:p-9">
              <MiniCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* AFFAIR ASSISTANT TEASER */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 md:grid-cols-12 md:items-center md:gap-12 md:px-8 md:pb-24">
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.28em] text-oxblood">Affair Assistant · ₹499 / request</div>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Don't want to chase vendors? <span className="italic text-sparkle">Hand it over.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-foreground/75 md:text-base">
              Two-line brief. <strong>24-hour</strong> turnaround. One tidy package on WhatsApp.
            </p>
            <div className="mt-6">
              <Link
                to="/assistant"
                className="rounded-full bg-oxblood px-5 py-3 text-sm font-medium text-background ring-1 ring-champagne/40 hover:opacity-95"
              >
                Send a brief →
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-champagne/30 bg-background p-6 shadow-lux md:p-8">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-oxblood" /> Sample brief on WhatsApp
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-oxblood px-4 py-2.5 text-background">
                  Sufi baithak at home, Sat 15th, 18 guests, Bandra, ~₹60K.
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5 text-foreground">
                  On it. Pulling 3 florists, 2 tabla trios, 1 kebab counter. Full package in 24 hrs. ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MiniCalculator() {
  const [occasion, setOccasion] = useState("Baby Shower");
  const [city, setCity] = useState("Mumbai");
  const [vibe, setVibe] = useState("Classic");
  const [guests, setGuests] = useState(25);

  const { low, high, breakdown } = useMemo(() => {
    const base = (occasionRates[occasion] ?? 1500) * guests * cityMul[city] * vibeMul[vibe];
    return {
      low: Math.round(base * 0.85),
      high: Math.round(base * 1.15),
      breakdown: [
        ["Decor & styling", base * 0.4],
        ["F&B / cake", base * 0.35],
        ["Photography", base * 0.12],
        ["Extras", base * 0.13],
      ] as [string, number][],
    };
  }, [occasion, city, vibe, guests]);

  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-oxblood">Budget Calculator</div>
          <h3 className="mt-2 font-display text-3xl font-semibold leading-tight md:text-4xl">
            What will it <span className="italic text-sparkle">actually</span> cost?
          </h3>
        </div>
        <Link to="/calculator" className="hidden text-xs text-oxblood hover:underline sm:inline">
          Full calculator →
        </Link>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="space-y-4">
          <FieldRow label="Occasion">
            <div className="flex flex-wrap gap-1.5">
              {Object.keys(occasionRates).map((o) => (
                <Chip key={o} active={occasion === o} onClick={() => setOccasion(o)}>{o}</Chip>
              ))}
            </div>
          </FieldRow>
          <FieldRow label="City">
            <div className="flex flex-wrap gap-1.5">
              {Object.keys(cityMul).map((c) => (
                <Chip key={c} active={city === c} onClick={() => setCity(c)}>{c}</Chip>
              ))}
            </div>
          </FieldRow>
          <FieldRow label="Vibe">
            <div className="flex flex-wrap gap-1.5">
              {Object.keys(vibeMul).map((v) => (
                <Chip key={v} active={vibe === v} onClick={() => setVibe(v)}>{v}</Chip>
              ))}
            </div>
          </FieldRow>
          <FieldRow label={`Guests · ${guests}`}>
            <input type="range" min={2} max={150} value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full accent-[var(--oxblood)]" />
          </FieldRow>
        </div>

        <div className="overflow-hidden rounded-2xl bg-foreground text-background">
          <div className="bg-champagne px-5 py-4 text-oxblood-deep">
            <div className="text-[10px] uppercase tracking-wider">Estimated cost</div>
            <div className="mt-0.5 font-display text-2xl font-semibold md:text-3xl">
              {fmt(low)} – {fmt(high)}
            </div>
          </div>
          <div className="space-y-2.5 px-5 py-4">
            {breakdown.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between text-sm text-background/85">
                <span>{k}</span>
                <span className="font-display">{fmt(v)}</span>
              </div>
            ))}
          </div>
          <Link to="/calculator" className="block bg-oxblood px-5 py-3 text-center text-xs font-medium text-background hover:opacity-95">
            Open full calculator →
          </Link>
        </div>
      </div>
    </div>
  );
}

function FieldRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className={`rounded-full border px-2.5 py-1 text-xs transition ${
        active ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"
      }`}>
      {children}
    </button>
  );
}
