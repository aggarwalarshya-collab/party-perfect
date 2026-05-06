import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { parties } from "@/data/parties";
import { PartyCard } from "@/components/PartyCard";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Find my party — partystack" },
      { name: "description", content: "Tell us your occasion, city, date and budget. Get a curated shortlist of vendors and party packages." },
    ],
  }),
  component: DiscoverPage,
});

const occasions = ["All", "Baby Shower", "Anniversary", "Festive", "Bachelorette", "Kids Birthday"];
const cities = ["All", "Mumbai", "Delhi NCR", "Bangalore"];

function DiscoverPage() {
  const [occasion, setOccasion] = useState("All");
  const [city, setCity] = useState("All");
  const [budget, setBudget] = useState(150000);
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(
    () =>
      parties.filter(
        (p) =>
          (occasion === "All" || p.occasion === occasion) &&
          (city === "All" || p.city === city) &&
          p.budget <= budget,
      ),
    [occasion, city, budget],
  );

  return (
    <div>
      <section className="border-b border-border bg-gradient-sunset">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Find my party</div>
          <h1 className="mt-2 font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            Tell us the brief.<br />
            <span className="italic text-primary">We'll curate the rest.</span>
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Filter the feed live, or share a full brief and our planner will WhatsApp you a
            shortlisted package within 48 hours. ₹1,499 — refunded against any vendor you book.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:grid md:grid-cols-12 md:gap-10 md:px-8">
        {/* FILTERS */}
        <aside className="md:col-span-4 lg:col-span-3">
          <div className="sticky top-24 space-y-7 rounded-3xl border border-border bg-card p-6 shadow-soft">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Occasion</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {occasions.map((o) => (
                  <button
                    key={o}
                    onClick={() => setOccasion(o)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition ${
                      occasion === o
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground/40"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">City</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {cities.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCity(c)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition ${
                      city === c
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground/40"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Budget cap</span>
                <span className="font-display text-lg font-semibold text-primary">₹{(budget / 1000).toFixed(0)}K</span>
              </div>
              <input
                type="range"
                min={10000}
                max={200000}
                step={5000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="mt-3 w-full accent-[var(--primary)]"
              />
              <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                <span>₹10K</span><span>₹2L</span>
              </div>
            </div>

            <div className="rounded-2xl bg-foreground p-5 text-background">
              <div className="font-display text-xl font-semibold">Want a human?</div>
              <p className="mt-1 text-sm text-background/70">
                Our planner DMs you a curated shortlist on WhatsApp in 48 hrs.
              </p>
              <button
                onClick={() => setSubmitted(true)}
                className="mt-4 w-full rounded-full bg-[var(--confetti-peach)] py-2.5 text-sm font-medium text-foreground transition hover:opacity-90"
              >
                {submitted ? "✓ Brief sent — we'll text you" : "Get my curated shortlist · ₹1,499"}
              </button>
            </div>
          </div>
        </aside>

        {/* RESULTS */}
        <div className="mt-10 md:col-span-8 md:mt-0 lg:col-span-9">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold">
              {filtered.length} curated {filtered.length === 1 ? "party" : "parties"}
            </h2>
            <span className="text-sm text-muted-foreground">Sorted by relevance</span>
          </div>
          {filtered.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-dashed border-border p-12 text-center text-muted-foreground">
              No parties match — try widening the budget or city.
            </div>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {filtered.map((p) => (
                <PartyCard key={p.slug} party={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
