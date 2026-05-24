import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { parties } from "@/data/parties";
import { PartyCard } from "@/components/PartyCard";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "My Budget — House of Affairs" },
      { name: "description", content: "Estimate your party cost — then check curated options matching your budget." },
    ],
  }),
  component: CalcPage,
});

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

const occasionMap: Record<string, string> = {
  "Baby Shower": "Baby Shower",
  Anniversary: "Anniversary",
  "Birthday (Kids)": "Kids Birthday",
  "Birthday (Adult)": "Anniversary",
  Bachelorette: "Bachelorette",
  "Festive / Diwali": "Festive",
};

function CalcPage() {
  const [occasion, setOccasion] = useState("Baby Shower");
  const [city, setCity] = useState("Mumbai");
  const [vibe, setVibe] = useState("Classic");
  const [guests, setGuests] = useState(25);
  const [showOptions, setShowOptions] = useState(false);

  const { low, high, breakdown } = useMemo(() => {
    const base = (occasionRates[occasion] ?? 1500) * guests * cityMul[city] * vibeMul[vibe];
    return {
      low: Math.round(base * 0.85),
      high: Math.round(base * 1.15),
      breakdown: [
        ["Decor & styling", base * 0.4],
        ["F&B / cake", base * 0.35],
        ["Photography", base * 0.12],
        ["Entertainment & extras", base * 0.13],
      ] as [string, number][],
    };
  }, [occasion, city, vibe, guests]);

  const { options, isFallback } = useMemo(() => {
    const occ = occasionMap[occasion];
    const cityName = city === "Other Tier-1" ? null : city;
    const strict = parties.filter(
      (p) =>
        (occ ? p.occasion === occ : true) &&
        (cityName ? p.city === cityName : true) &&
        p.budget >= low * 0.7 &&
        p.budget <= high * 1.3,
    );
    if (strict.length > 0) return { options: strict, isFallback: false };
    // Fallback: closest-by-budget across all parties
    const ranked = [...parties]
      .map((p) => {
        const mid = (low + high) / 2;
        const dist = Math.abs(p.budget - mid);
        const occMatch = occ && p.occasion === occ ? -50000 : 0;
        const cityMatch = cityName && p.city === cityName ? -25000 : 0;
        return { p, score: dist + occMatch + cityMatch };
      })
      .sort((a, b) => a.score - b.score)
      .map((x) => x.p)
      .slice(0, 4);
    return { options: ranked, isFallback: true };
  }, [occasion, city, low, high]);

  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <div>
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">My Budget</div>
          <h1 className="mt-2 font-display text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl md:text-7xl">
            Budget <span className="italic text-gold">Calculator.</span>
          </h1>
          <p className="mt-5 max-w-xl text-background/75">
            Grounded estimates from real vendor quotes in our network. Tweak the dials, then check
            curated options that fit.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <div className="space-y-8 rounded-2xl border border-border bg-card p-7 shadow-soft md:p-10">
            <Field label="Occasion">
              <div className="flex flex-wrap gap-2">
                {Object.keys(occasionRates).map((o) => (
                  <Chip key={o} active={occasion === o} onClick={() => setOccasion(o)}>{o}</Chip>
                ))}
              </div>
            </Field>
            <Field label="City">
              <div className="flex flex-wrap gap-2">
                {Object.keys(cityMul).map((c) => (
                  <Chip key={c} active={city === c} onClick={() => setCity(c)}>{c}</Chip>
                ))}
              </div>
            </Field>
            <Field label="Vibe">
              <div className="flex flex-wrap gap-2">
                {Object.keys(vibeMul).map((v) => (
                  <Chip key={v} active={vibe === v} onClick={() => setVibe(v)}>{v}</Chip>
                ))}
              </div>
            </Field>
            <Field label={`Guests · ${guests}`}>
              <input type="range" min={2} max={150} value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full accent-[var(--oxblood)]" />
            </Field>
          </div>

          <button
            onClick={() => setShowOptions(true)}
            className="mt-6 w-full rounded-full bg-oxblood px-6 py-4 text-sm font-medium text-background ring-1 ring-gold/40 hover:opacity-95"
          >
            ✦ Check available options for this budget
          </button>

          {showOptions && (
            <div className="mt-10">
              <h2 className="font-display text-3xl font-semibold">
                {isFallback ? "Closest curated picks for your brief" : `${options.length} curated ${options.length === 1 ? "affair" : "affairs"} for your brief`}
              </h2>
              {isFallback && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Nothing exact in this slot — here are the nearest matches by budget. <Link to="/search" className="text-oxblood hover:underline">Browse all →</Link>
                </p>
              )}
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {options.map((p) => <PartyCard key={p.slug} party={p} />)}
              </div>
            </div>
          )}
        </div>

        <aside className="md:col-span-5">
          <div className="sticky top-24 overflow-hidden rounded-2xl border-2 border-foreground bg-foreground text-background shadow-lux">
            <div className="bg-gold px-7 py-5 text-foreground">
              <div className="text-xs uppercase tracking-[0.18em]">Estimated cost</div>
              <div className="mt-1 font-display text-4xl font-semibold">
                {fmt(low)} – {fmt(high)}
              </div>
            </div>
            <div className="space-y-3 px-7 py-6">
              {breakdown.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-background/15 pb-3 last:border-0">
                  <span className="text-sm text-background/80">{k}</span>
                  <span className="font-display text-lg">{fmt(v)}</span>
                </div>
              ))}
            </div>
            <div className="bg-oxblood px-7 py-5 text-sm text-background/85 ring-1 ring-gold/30">
              Want a real shortlist for this budget? <Link to="/search" className="font-medium text-gold">Send a brief →</Link>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
        active ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"
      }`}>
      {children}
    </button>
  );
}
