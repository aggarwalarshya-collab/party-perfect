import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Party Budget Calculator — partystack" },
      { name: "description", content: "Estimate your party cost by occasion, city, guest count and vibe." },
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

function CalcPage() {
  const [occasion, setOccasion] = useState("Baby Shower");
  const [city, setCity] = useState("Mumbai");
  const [vibe, setVibe] = useState("Classic");
  const [guests, setGuests] = useState(25);

  const { low, high, breakdown } = useMemo(() => {
    const base = (occasionRates[occasion] ?? 1500) * guests * cityMul[city] * vibeMul[vibe];
    const decor = base * 0.4;
    const fnb = base * 0.35;
    const photo = base * 0.12;
    const extras = base * 0.13;
    return {
      low: Math.round(base * 0.85),
      high: Math.round(base * 1.15),
      breakdown: [
        ["Decor & styling", decor],
        ["F&B / cake", fnb],
        ["Photography", photo],
        ["Entertainment & extras", extras],
      ] as [string, number][],
    };
  }, [occasion, city, vibe, guests]);

  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <div>
      <section className="border-b border-border bg-gradient-sunset">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Budget calculator</div>
          <h1 className="mt-2 font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            How much will <br /><span className="italic text-primary">this party cost?</span>
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            A grounded estimate based on real vendor quotes from our network. Move the sliders.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <div className="space-y-8 rounded-3xl border border-border bg-card p-7 shadow-soft md:p-10">
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
              <input
                type="range"
                min={2}
                max={150}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full accent-[var(--primary)]"
              />
            </Field>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="sticky top-24 overflow-hidden rounded-3xl border-2 border-foreground bg-foreground text-background shadow-soft">
            <div className="bg-[var(--confetti-peach)] px-7 py-5 text-foreground">
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
            <div className="bg-background/10 px-7 py-5 text-sm text-background/80">
              Want a real shortlist for this budget? <span className="font-medium text-[var(--confetti-peach)]">Send a brief →</span>
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
    <button
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
        active ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"
      }`}
    >
      {children}
    </button>
  );
}
