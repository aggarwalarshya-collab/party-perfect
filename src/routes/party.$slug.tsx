import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { parties, vendors as allVendors } from "@/data/parties";
import { PartyCard } from "@/components/PartyCard";

export const Route = createFileRoute("/party/$slug")({
  loader: ({ params }) => {
    const party = parties.find((p) => p.slug === params.slug);
    if (!party) throw notFound();
    return { party };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.party.title} — House of Affairs` },
          { name: "description", content: loaderData.party.tagline },
          { property: "og:title", content: loaderData.party.title },
          { property: "og:description", content: loaderData.party.tagline },
          { property: "og:image", content: loaderData.party.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-display text-5xl font-semibold">Affair not found</h1>
      <Link to="/" className="mt-6 inline-block text-oxblood hover:underline">← Back to feed</Link>
    </div>
  ),
  component: PartyDetail,
});

function PartyDetail() {
  const { party } = Route.useLoaderData();
  const [showReplicate, setShowReplicate] = useState(false);
  const others = parties.filter((p) => p.slug !== party.slug).slice(0, 3);

  // generate fake "replicate" vendor options across budgets
  const replicateOptions = [
    { tier: "Lean", budget: "₹35–55K", vendors: 4, vibe: "DIY-friendly with our base vendors." },
    { tier: "Signature", budget: party.budgetLabel, vendors: 6, vibe: "The exact look from the feature." },
    { tier: "Premium", budget: "₹1.4L+", vendors: 8, vibe: "Upgraded florals, chef-led F&B, full coordination." },
  ];

  return (
    <article>
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-12 md:gap-14 md:px-8 md:py-16">
          <div className="md:col-span-7">
            <Link to="/" className="text-xs uppercase tracking-[0.25em] text-gold/80 hover:text-gold">
              ← The Feed
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.15em] text-background/80">
              <span className="rounded-full bg-gold px-3 py-1 text-foreground">{party.badge}</span>
              <span>{party.occasion}</span>·<span>{party.city}</span>·<span>{party.vibe}</span>
            </div>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
              {party.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-background/75 text-balance">{party.tagline}</p>

            {/* social proof bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-background/85">
              {party.social.loved && <span className="rounded-full bg-gold/20 px-3 py-1 text-gold">✦ {party.social.loved}</span>}
              {party.social.replicated != null && <span>↻ replicated by {party.social.replicated} hosts</span>}
              {party.social.endorsed && <span>· loved by <span className="text-gold">{party.social.endorsed}</span></span>}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setShowReplicate(true)}
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-foreground shadow-soft hover:opacity-90"
              >
                Replicate this party · free
              </button>
              <button className="rounded-full border border-gold/40 bg-background/5 px-6 py-3 text-sm font-medium text-background backdrop-blur hover:bg-background/10">
                Save to party board ♡
              </button>
            </div>
          </div>
          <div className="md:col-span-5">
            <img src={party.image} alt={party.title} loading="eager"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lux ring-1 ring-gold/20" />
          </div>
        </div>
      </section>

      {showReplicate && (
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
            <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Replicate this party · free</div>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
              Three ways to recreate it in {party.city}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {replicateOptions.map((o) => (
                <div key={o.tier} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{o.tier}</div>
                  <div className="mt-1 font-display text-2xl font-semibold text-oxblood">{o.budget}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{o.vibe}</p>
                  <div className="mt-3 text-xs text-foreground/70">{o.vendors} vendors curated</div>
                  <button className="mt-5 w-full rounded-full bg-foreground py-2.5 text-sm font-medium text-background hover:opacity-90">
                    See vendor options →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">The vendor stack</h2>
          <p className="mt-2 text-muted-foreground">Curated, verified, available. Tap a name for the full profile.</p>
          <ul className="mt-8 space-y-3">
            {party.vendors.map((v: typeof party.vendors[number]) => {
              const profile = allVendors.find((x) => x.slug === v.slug);
              return (
                <li key={v.slug} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link to="/vendor/$slug" params={{ slug: v.slug }} className="font-display text-xl font-semibold hover:text-oxblood">
                        {v.name} →
                      </Link>
                      <div className="text-sm text-muted-foreground">{v.role}</div>
                      {profile && (
                        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-foreground/70">
                          <span>★ {profile.rating}</span>
                          <span>· {profile.events}+ events</span>
                          <span>· {profile.city}</span>
                          <span>· responds {profile.responseTime}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-display text-lg">{v.price}</div>
                      <div className="text-[10px] uppercase tracking-wider text-oxblood">Available this weekend</div>
                    </div>
                  </div>
                  {profile && (
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                      <a href={`tel:${profile.contact.phone.replace(/\s/g,"")}`} className="rounded-full border border-border px-3 py-1 hover:border-oxblood hover:text-oxblood">
                        ☎ {profile.contact.phone}
                      </a>
                      <a href={`mailto:${profile.contact.email}`} className="rounded-full border border-border px-3 py-1 hover:border-oxblood hover:text-oxblood">
                        ✉ {profile.contact.email}
                      </a>
                      <span className="rounded-full bg-secondary px-3 py-1 text-foreground/70">{profile.contact.instagram}</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="md:col-span-5">
          <div className="sticky top-24 space-y-5">
            <div className="rounded-2xl border-2 border-foreground bg-card p-7">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Estimated total</div>
              <div className="mt-1 font-display text-4xl font-semibold">{party.budgetLabel}</div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <Stat label="Guests" value={party.guests} />
                <Stat label="City" value={party.city} />
                <Stat label="Occasion" value={party.occasion} />
                <Stat label="Vibe" value={party.vibe} />
              </div>
            </div>

            <div className="rounded-2xl bg-oxblood p-7 text-background ring-1 ring-gold/40">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Paid · WhatsApp Concierge</div>
              <div className="mt-1 font-display text-2xl font-semibold">Let us coordinate the vendors</div>
              <p className="mt-2 text-sm text-background/75">
                We handle the calls, the quotes, the negotiation — and reply with one tidy package.
                Refunded if you book any vendor through us.
              </p>
              <button className="mt-5 w-full rounded-full bg-gold py-2.5 text-sm font-medium text-foreground hover:opacity-90">
                Hand it over · ₹1,499
              </button>
            </div>

            <div className="rounded-2xl bg-foreground p-7 text-background">
              <div className="font-display text-xl font-semibold">Pair with the {party.kit}</div>
              <p className="mt-1 text-sm text-background/70">
                Invites, menus, games and signage — printable, in your inbox.
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-display text-2xl">₹499</span>
                <Link to="/kits" className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-foreground">
                  View kit →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">More affairs to steal</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => <PartyCard key={p.slug} party={p} />)}
        </div>
      </section>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-secondary/60 px-3 py-2.5">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-sm font-medium">{value}</div>
    </div>
  );
}
