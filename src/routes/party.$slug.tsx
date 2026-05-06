import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { parties } from "@/data/parties";
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
          { title: `${loaderData.party.title} — partystack` },
          { name: "description", content: loaderData.party.tagline },
          { property: "og:title", content: loaderData.party.title },
          { property: "og:description", content: loaderData.party.tagline },
          { property: "og:image", content: loaderData.party.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-display text-5xl font-semibold">Party not found</h1>
      <Link to="/" className="mt-6 inline-block text-primary hover:underline">← Back to feed</Link>
    </div>
  ),
  component: PartyDetail,
});

function PartyDetail() {
  const { party } = Route.useLoaderData();
  const others = parties.filter((p) => p.slug !== party.slug).slice(0, 3);

  return (
    <article>
      <section className="border-b border-border bg-gradient-sunset">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-12 md:gap-14 md:px-8 md:py-16">
          <div className="md:col-span-7">
            <Link to="/" className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary">
              ← The Feed
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              <span className="rounded-full bg-foreground px-3 py-1 text-background">{party.badge}</span>
              <span>{party.occasion}</span>·<span>{party.city}</span>·<span>{party.vibe}</span>
            </div>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
              {party.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-foreground/70 text-balance">{party.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-90">
                Replicate this party · ₹299
              </button>
              <button className="rounded-full border border-foreground/20 bg-background/70 px-6 py-3 text-sm font-medium backdrop-blur hover:bg-background">
                Save to party board ♡
              </button>
            </div>
          </div>
          <div className="md:col-span-5">
            <img
              src={party.image}
              alt={party.title}
              loading="eager"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">The vendor stack</h2>
          <p className="mt-2 text-muted-foreground">Curated, verified, available. Tap to view profile.</p>
          <ul className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card">
            {party.vendors.map((v) => (
              <li key={v.name} className="flex items-center justify-between gap-4 px-6 py-5">
                <div>
                  <div className="font-display text-xl font-semibold">{v.name}</div>
                  <div className="text-sm text-muted-foreground">{v.role}</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-lg">{v.price}</div>
                  <div className="text-xs uppercase tracking-wider text-[var(--confetti-mint)] mix-blend-multiply">
                    Available this weekend
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <aside className="md:col-span-5">
          <div className="sticky top-24 space-y-5">
            <div className="rounded-3xl border-2 border-foreground bg-card p-7 shadow-card">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Estimated total</div>
              <div className="mt-1 font-display text-4xl font-semibold">{party.budgetLabel}</div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <Stat label="Guests" value={party.guests} />
                <Stat label="City" value={party.city} />
                <Stat label="Occasion" value={party.occasion} />
                <Stat label="Vibe" value={party.vibe} />
              </div>
            </div>
            <div className="rounded-3xl bg-foreground p-7 text-background">
              <div className="font-display text-xl font-semibold">Pair with the {party.kit}</div>
              <p className="mt-1 text-sm text-background/70">
                Invites, menus, games and signage — printable, shipped to inbox.
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-display text-2xl">₹499</span>
                <Link to="/kits" className="rounded-full bg-[var(--confetti-peach)] px-5 py-2 text-sm font-medium text-foreground">
                  View kit →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">More parties to steal</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
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
