import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { parties } from "@/data/parties";
import { PartyCard } from "@/components/PartyCard";

export const Route = createFileRoute("/search")({
  validateSearch: (s: Record<string, unknown>) => ({ q: typeof s.q === "string" ? s.q : "" }),
  head: () => ({
    meta: [
      { title: "Search — House of Affairs" },
      { name: "description", content: "Type your affair. Filter by occasion, city and budget. Get a curated shortlist of parties and vendors." },
    ],
  }),
  component: SearchPage,
});

const occasions = ["All", "Baby Shower", "Anniversary", "Festive", "Bachelorette", "Kids Birthday"];
const cities = ["All", "Mumbai", "Delhi NCR", "Bangalore"];

function score(p: (typeof parties)[number], text: string, occasion: string, city: string, budget: number) {
  let s = 0;
  if (text) {
    const t = text.toLowerCase();
    if (p.title.toLowerCase().includes(t)) s += 5;
    if (p.tagline.toLowerCase().includes(t)) s += 3;
    if (p.occasion.toLowerCase().includes(t)) s += 4;
    if (p.vibe.toLowerCase().includes(t)) s += 2;
    if (p.city.toLowerCase().includes(t)) s += 2;
  }
  if (occasion !== "All" && p.occasion === occasion) s += 4;
  if (city !== "All" && p.city === city) s += 3;
  if (p.budget <= budget) s += 2; else s -= 1;
  return s;
}

function SearchPage() {
  const { q: initialQ } = Route.useSearch();
  const [q, setQ] = useState(initialQ ?? "");
  const [occasion, setOccasion] = useState("All");
  const [city, setCity] = useState("All");
  const [budget, setBudget] = useState(150000);
  const [submitted, setSubmitted] = useState(false);

  const { strict, suggestions } = useMemo(() => {
    const text = q.toLowerCase();
    const strict = parties.filter(
      (p) =>
        (occasion === "All" || p.occasion === occasion) &&
        (city === "All" || p.city === city) &&
        p.budget <= budget &&
        (text === "" ||
          p.title.toLowerCase().includes(text) ||
          p.tagline.toLowerCase().includes(text) ||
          p.occasion.toLowerCase().includes(text) ||
          p.vibe.toLowerCase().includes(text)),
    );
    // Always provide ranked suggestions so result panel never feels empty
    const suggestions = [...parties]
      .map((p) => ({ p, s: score(p, q, occasion, city, budget) }))
      .sort((a, b) => b.s - a.s)
      .map((x) => x.p)
      .slice(0, 6);
    return { strict, suggestions };
  }, [occasion, city, budget, q]);

  const showSuggestions = strict.length === 0;
  const list = showSuggestions ? suggestions : strict;

  return (
    <div>
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Search</div>
          <h1 className="mt-2 font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            Tell us the brief.<br />
            <span className="italic text-gold">We'll do the flirting.</span>
          </h1>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-3xl items-center gap-2 rounded-full border border-gold/40 bg-background p-2 text-foreground shadow-lux">
            <span className="pl-4 text-oxblood">✦</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="“mom's 60th, intimate, gold accents”"
              className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-muted-foreground md:text-base"
            />
            <button type="submit" className="rounded-full bg-oxblood px-5 py-3 text-sm font-medium text-background ring-1 ring-gold/40">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:grid md:grid-cols-12 md:gap-10 md:px-8">
        <aside className="md:col-span-4 lg:col-span-3">
          <div className="sticky top-24 space-y-7 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <Section label="Occasion">
              <div className="flex flex-wrap gap-2">
                {occasions.map((o) => (
                  <Chip key={o} active={occasion === o} onClick={() => setOccasion(o)}>{o}</Chip>
                ))}
              </div>
            </Section>
            <Section label="City">
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <Chip key={c} active={city === c} onClick={() => setCity(c)}>{c}</Chip>
                ))}
              </div>
            </Section>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Budget cap</span>
                <span className="font-display text-lg font-semibold text-oxblood">₹{(budget / 1000).toFixed(0)}K</span>
              </div>
              <input type="range" min={10000} max={200000} step={5000} value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="mt-3 w-full accent-[var(--oxblood)]" />
              <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                <span>₹10K</span><span>₹2L</span>
              </div>
            </div>

            <div className="rounded-2xl bg-oxblood p-5 text-background ring-1 ring-gold/40">
              <div className="font-display text-xl font-semibold">WhatsApp Concierge</div>
              <p className="mt-1 text-sm text-background/75">
                Hand us the brief. We coordinate every vendor and slide back into your DMs in 48 hrs.
              </p>
              <button onClick={() => setSubmitted(true)}
                className="mt-4 w-full rounded-full bg-gold py-2.5 text-sm font-medium text-foreground transition hover:opacity-90">
                {submitted ? "✓ Brief sent — we'll text you" : "Get my shortlist · ₹1,499"}
              </button>
            </div>
          </div>
        </aside>

        <div className="mt-10 md:col-span-8 md:mt-0 lg:col-span-9">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold">
              {showSuggestions
                ? "You might also love these"
                : `${strict.length} curated ${strict.length === 1 ? "affair" : "affairs"}`}
            </h2>
            <Link to="/" className="text-sm text-oxblood hover:underline">Back to feed →</Link>
          </div>
          {showSuggestions && (
            <p className="mt-2 text-sm text-muted-foreground">
              Nothing matched the exact brief — here are the closest curated picks for you.
            </p>
          )}
          <div className="masonry mt-6">
            {list.map((p) => <PartyCard key={p.slug} party={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
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
      className={`rounded-full border px-3 py-1.5 text-sm transition ${
        active ? "border-oxblood bg-oxblood text-background" : "border-border hover:border-foreground/40"
      }`}>
      {children}
    </button>
  );
}
