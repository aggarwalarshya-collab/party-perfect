import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/vendors/dashboard")({
  head: () => ({
    meta: [
      { title: "Growth Packs — Vendor Dashboard" },
      { name: "description", content: "Enquiry, Visibility and Growth packs to scale your bookings on House of Affairs." },
    ],
  }),
  component: VendorDashboard,
});

type Pack = {
  slug: "enquiry" | "visibility" | "growth";
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  benefits: string[];
  highlight?: boolean;
};

const packs: Pack[] = [
  {
    slug: "enquiry",
    name: "Enquiry Pack",
    price: "₹1,499",
    cadence: "/ month",
    tagline: "Stop chasing. Start quoting.",
    benefits: [
      "Up to 25 pre-qualified host enquiries / month",
      "Date, city, guest count & budget on every lead",
      "Direct WhatsApp handoff — no middle layer",
      "Lead-quality refund policy",
    ],
  },
  {
    slug: "visibility",
    name: "Visibility Pack",
    price: "₹3,999",
    cadence: "/ month",
    highlight: true,
    tagline: "Be the vendor everyone screenshots.",
    benefits: [
      "Everything in Enquiry Pack",
      "Featured slots inside 4 curated party stories / month",
      "Priority placement in Search & city Feed",
      "‘Verified Studio' badge on profile",
      "Editor-styled hero shot of your work",
    ],
  },
  {
    slug: "growth",
    name: "Growth Pack",
    price: "₹8,999",
    cadence: "/ month",
    tagline: "Build a brand, not just a backlog.",
    benefits: [
      "Everything in Visibility Pack",
      "1 dedicated editorial feature / quarter",
      "Inclusion in Exclusive collections & celebrity edits",
      "Concierge-routed premium briefs (₹1L+ budgets)",
      "Quarterly insights report + benchmarking",
      "Dedicated growth manager",
    ],
  },
];

function VendorDashboard() {
  const [active, setActive] = useState<Pack["slug"]>("visibility");
  const current = packs.find((p) => p.slug === active)!;

  return (
    <div>
      {/* HERO */}
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Vendor Dashboard · Growth</div>
              <h1 className="mt-2 font-display text-4xl font-semibold leading-[1] tracking-tight md:text-6xl">
                Pick your <span className="italic text-gold">growth lane.</span>
              </h1>
            </div>
            <Link to="/vendors" className="rounded-full border border-gold/40 px-4 py-2 text-sm hover:bg-background/5">
              ← Back to onboarding
            </Link>
          </div>

          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-4">
            <DashStat big="14" sub="open enquiries" />
            <DashStat big="₹2.1L" sub="quoted this month" />
            <DashStat big="68%" sub="response rate" />
            <DashStat big="4.9★" sub="host rating" />
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Growth packs</div>
        <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
          Three packs. Cancel anytime.
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          All packs include the free basic profile. Upgrade only when you're ready to scale.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packs.map((p) => {
            const isActive = active === p.slug;
            return (
              <article
                key={p.slug}
                className={`relative flex flex-col rounded-3xl border p-7 shadow-soft transition ${
                  p.highlight
                    ? "border-oxblood bg-card ring-2 ring-oxblood/20"
                    : "border-border bg-card"
                } ${isActive ? "-translate-y-1 shadow-lux" : ""}`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-oxblood px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-background">
                    Most loved
                  </span>
                )}
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.name}</div>
                <div className="mt-1 font-display text-2xl font-semibold italic text-oxblood">
                  {p.tagline}
                </div>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-semibold">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.cadence}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span className="mt-0.5 text-oxblood">✦</span>
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setActive(p.slug)}
                  className={`mt-7 rounded-full px-5 py-3 text-sm font-medium transition ${
                    p.highlight
                      ? "bg-oxblood text-background ring-1 ring-gold/40 hover:opacity-95"
                      : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  {isActive ? "✓ Selected" : `Choose ${p.name}`}
                </button>
              </article>
            );
          })}
        </div>

        {/* SELECTED RECAP */}
        <div className="mt-12 rounded-3xl border border-gold/30 bg-blush-soft p-7 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-oxblood">You're activating</div>
              <div className="mt-1 font-display text-3xl font-semibold">{current.name}</div>
              <p className="mt-2 max-w-xl text-foreground/75">{current.tagline} · Billed monthly. Cancel anytime.</p>
            </div>
            <button className="rounded-full bg-oxblood px-6 py-3 text-sm font-medium text-background ring-1 ring-gold/40 hover:opacity-95">
              Activate {current.name} · {current.price}{current.cadence}
            </button>
          </div>
        </div>
      </section>

      {/* MOCK ENQUIRIES */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Recent host enquiries</h2>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Last 7 days</span>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
            {[
              ["Riya M.", "Mumbai", "Bachelorette · 12 guests", "₹40K–55K", "Mar 14"],
              ["Aarav S.", "Delhi NCR", "Diwali at home · 35 guests", "₹80K–1L", "Mar 12"],
              ["Tanvi & Karan", "Bangalore", "Anniversary dinner · 10 guests", "₹65–80K", "Mar 11"],
              ["Neha P.", "Mumbai", "Baby shower · 25 guests", "₹50–70K", "Mar 09"],
            ].map(([who, city, brief, bud, when], i) => (
              <div key={i} className="grid grid-cols-2 items-center gap-3 border-b border-border px-5 py-4 text-sm last:border-0 md:grid-cols-[1fr_1fr_2fr_1fr_auto_auto]">
                <span className="font-medium">{who}</span>
                <span className="text-muted-foreground">{city}</span>
                <span className="hidden text-foreground/80 md:inline">{brief}</span>
                <span className="hidden font-display text-oxblood md:inline">{bud}</span>
                <span className="hidden text-xs text-muted-foreground md:inline">{when}</span>
                <button className="justify-self-end rounded-full bg-oxblood px-3 py-1.5 text-xs font-medium text-background">
                  Quote →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function DashStat({ big, sub }: { big: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-gold/25 bg-background/5 p-4">
      <div className="font-display text-3xl text-gold">{big}</div>
      <div className="text-[10px] uppercase tracking-wider text-background/75">{sub}</div>
    </div>
  );
}
