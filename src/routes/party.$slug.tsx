import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { parties, kits as allKits, vendors as allVendors } from "@/data/parties";
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
      <Link to="/" className="mt-6 inline-block text-oxblood hover:underline">
        ← Back to feed
      </Link>
    </div>
  ),
  component: PartyDetail,
});

const WA_NUMBER = "919999999999"; // dummy

function PartyDetail() {
  const { party } = Route.useLoaderData();
  const [showReplicate, setShowReplicate] = useState(false);
  const [assistPaid, setAssistPaid] = useState(false);
  const [kitPaid, setKitPaid] = useState(false);

  // Related affairs — same occasion first, then same city
  const related = [
    ...parties.filter((p) => p.slug !== party.slug && p.occasion === party.occasion),
    ...parties.filter((p) => p.slug !== party.slug && p.occasion !== party.occasion && p.city === party.city),
  ].slice(0, 3);

  const pairedKit = allKits.find((k) => k.name === party.kit) ?? allKits[0];
  const moreKits = allKits.filter((k) => k.slug !== pairedKit.slug).slice(0, 3);

  const replicateOptions = [
    { tier: "Lean", budget: "₹35–55K", vendors: 4, vibe: "DIY-friendly with our base vendors." },
    { tier: "Signature", budget: party.budgetLabel, vendors: 6, vibe: "The exact look from the feature." },
    { tier: "Premium", budget: "₹1.4L+", vendors: 8, vibe: "Upgraded florals, chef-led F&B, full coordination." },
  ];

  const payAssistant = () => {
    setAssistPaid(true);
    const msg = encodeURIComponent(
      `Hi! I just paid ₹499 for the Affair Assistant for "${party.title}" (${party.city}, ${party.guests} guests). Please help coordinate the vendors.`,
    );
    setTimeout(() => window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank"), 400);
  };
  const payKit = () => {
    setKitPaid(true);
    const msg = encodeURIComponent(`Hi! I just bought the ${pairedKit.name} (₹${pairedKit.standardPrice}). Please send it across.`);
    setTimeout(() => window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank"), 400);
  };

  return (
    <article>
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-12 md:gap-14 md:px-8 md:py-16">
          <div className="md:col-span-7">
            <Link to="/" className="text-xs uppercase tracking-[0.25em] text-gold/80 hover:text-gold">
              ← Back to feed
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.15em] text-background/80">
              <span className="rounded-full bg-gold px-3 py-1 text-foreground">{party.badge}</span>
              <span>{party.occasion}</span>·<span>{party.city}</span>·<span>{party.vibe}</span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl md:text-7xl">
              {party.title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-background/80 text-balance md:text-lg">{party.tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-background/85">
              {party.social.loved && (
                <span className="rounded-full bg-gold/20 px-3 py-1 text-gold">✦ {party.social.loved}</span>
              )}
              {party.social.replicated != null && <span>↻ replicated by {party.social.replicated} hosts</span>}
              {party.social.endorsed && (
                <span>
                  · loved by <span className="text-gold">{party.social.endorsed}</span>
                </span>
              )}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => setShowReplicate(true)}
                className="rounded-full bg-gold px-5 py-3 text-sm font-medium text-foreground shadow-soft hover:opacity-90"
              >
                Replicate this affair · free
              </button>
              <button className="rounded-full border border-gold/40 bg-background/5 px-5 py-3 text-sm font-medium text-background backdrop-blur hover:bg-background/10">
                Save to party board ♡
              </button>
            </div>
          </div>
          <div className="md:col-span-5">
            <img
              src={party.image}
              alt={party.title}
              loading="eager"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lux ring-1 ring-gold/20"
            />
          </div>
        </div>
      </section>

      {showReplicate && (
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
            <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Replicate this affair · free</div>
            <h2 className="mt-2 font-display text-2xl font-semibold md:text-4xl">
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

      {/* VENDOR STACK — full width with breathing room */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">The vendor stack</h2>
            <p className="mt-2 text-muted-foreground">Curated, verified, available. Tap a name for the full profile.</p>
            <ul className="mt-8 space-y-3">
              {party.vendors.map((v: typeof party.vendors[number]) => {
                const profile = allVendors.find((x) => x.slug === v.slug);
                return (
                  <li key={v.slug + v.name} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        {profile ? (
                          <Link to="/vendor/$slug" params={{ slug: v.slug }} className="font-display text-lg font-semibold hover:text-oxblood md:text-xl">
                            {v.name} →
                          </Link>
                        ) : (
                          <div className="font-display text-lg font-semibold md:text-xl">{v.name}</div>
                        )}
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
                  </li>
                );
              })}
            </ul>

            {/* AFFAIR ASSISTANT — sits with the vendor stack, breathing room */}
            <div className="mt-10 rounded-3xl bg-oxblood p-6 text-background ring-1 ring-gold/40 md:p-8">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Affair Assistant · ₹499/request</div>
              <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                Let us coordinate every vendor for you.
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-background/80 md:text-base">
                We handle the calls, the quotes, the negotiation — and reply on WhatsApp with one
                tidy package. Refunded if you book any vendor through us.
              </p>
              <button
                onClick={payAssistant}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-foreground hover:opacity-90"
              >
                {assistPaid ? "✓ Paid — opening WhatsApp" : "Pay ₹499 & open WhatsApp →"}
              </button>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="space-y-5 md:sticky md:top-24">
              <div className="rounded-2xl border-2 border-foreground bg-card p-6 md:p-7">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Estimated total</div>
                <div className="mt-1 font-display text-3xl font-semibold md:text-4xl">{party.budgetLabel}</div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <Stat label="Guests" value={party.guests} />
                  <Stat label="City" value={party.city} />
                  <Stat label="Occasion" value={party.occasion} />
                  <Stat label="Vibe" value={party.vibe} />
                </div>
              </div>

              {/* Paired kit upsell — fully integrated, with payment + WhatsApp flow */}
              <div className="overflow-hidden rounded-2xl bg-foreground text-background">
                <img src={pairedKit.image} alt={pairedKit.name} loading="lazy" className="aspect-[5/3] w-full object-cover" />
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold">Pair with</div>
                  <div className="mt-1 font-display text-xl font-semibold">{pairedKit.name}</div>
                  <p className="mt-1 text-sm text-background/70">{pairedKit.items}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-display text-2xl">₹{pairedKit.standardPrice}</div>
                      <div className="text-[10px] uppercase tracking-wider text-background/60">Standard · ₹{pairedKit.customPrice} customised</div>
                    </div>
                    <button
                      onClick={payKit}
                      className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-foreground hover:opacity-90"
                    >
                      {kitPaid ? "✓ Sent" : `Buy · ₹${pairedKit.standardPrice}`}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MORE KITS to explore */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-oxblood">More party kits</div>
              <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Add a little extra polish.</h2>
            </div>
            <Link to="/kits" className="text-sm text-oxblood hover:underline">All kits →</Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moreKits.map((k) => (
              <Link key={k.slug} to="/kits" className="group block overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:-translate-y-0.5 hover:shadow-soft">
                <img src={k.image} alt={k.name} loading="lazy" className="aspect-[5/3] w-full object-cover transition group-hover:scale-105" />
                <div className="flex items-center justify-between p-4">
                  <div className="min-w-0">
                    <div className="font-display text-base font-semibold">{k.name}</div>
                    <div className="text-xs text-muted-foreground">From ₹{k.standardPrice}</div>
                  </div>
                  <span className="text-xs text-oxblood">View →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MORE AFFAIRS — related by occasion */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 md:px-8 md:pb-20">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">
          More {party.occasion.toLowerCase()} affairs to steal
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Curated to feel like {party.title}.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <PartyCard key={p.slug} party={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-3 text-sm font-medium hover:bg-foreground hover:text-background">
            ← Back to the feed
          </Link>
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
