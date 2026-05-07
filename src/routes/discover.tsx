import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { parties } from "@/data/parties";
import { PartyCard } from "@/components/PartyCard";

export const Route = createFileRoute("/discover")({
  validateSearch: (s: Record<string, unknown>) => ({ q: typeof s.q === "string" ? s.q : "" }),
  head: () => ({
    meta: [
      { title: "Discover — House of Affairs" },
      { name: "description", content: "Type your affair. Filter by occasion, city and budget. Get a curated shortlist of parties and vendors." },
    ],
  }),
  component: DiscoverPage,
});

const occasions = ["All", "Baby Shower", "Anniversary", "Festive", "Bachelorette", "Kids Birthday"];
const cities = ["All", "Mumbai", "Delhi NCR", "Bangalore"];

function DiscoverPage() {
  const { q: initialQ } = Route.useSearch();
  const [q, setQ] = useState(initialQ ?? "");
  const [occasion, setOccasion] = useState("All");
  const [city, setCity] = useState("All");
  const [budget, setBudget] = useState(150000);
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(() => {
    const text = q.toLowerCase();
    return parties.filter(
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
  }, [occasion, city, budget, q]);

  return (
    <div>
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Discover</div>
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
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Occasion</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {occasions.map((o) => (
                  <button key={o} onClick={() => setOccasion(o)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition ${
                      occasion === o ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"
                    }`}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">City</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {cities.map((c) => (
                  <button key={c} onClick={() => setCity(c)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition ${
                      city === c ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"
                    }`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
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
              {filtered.length} curated {filtered.length === 1 ? "affair" : "affairs"}
            </h2>
            <span className="text-sm text-muted-foreground">Sorted: most loved → freshest</span>
          </div>
          {filtered.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
              Nothing matches. Loosen the budget, or send us the brief — we'll improvise.
            </div>
          ) : (
            <div className="masonry mt-6">
              {filtered.map((p) => <PartyCard key={p.slug} party={p} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
