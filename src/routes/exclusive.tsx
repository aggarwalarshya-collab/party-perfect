import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { exclusives } from "@/data/parties";

export const Route = createFileRoute("/exclusive")({
  head: () => ({
    meta: [
      { title: "Exclusive Collections — House of Affairs" },
      { name: "description", content: "Locked editorials by celebrities and tastemakers. Unlock the full vendor stack, mood board and exact recipe." },
      { property: "og:title", content: "House of Affairs — Exclusive" },
      { property: "og:description", content: "Parties from people you stalk online." },
    ],
  }),
  component: ExclusivePage,
});

function ExclusivePage() {
  const [unlocked, setUnlocked] = useState<Record<string, boolean>>({});
  const unlock = (slug: string) => setUnlocked((u) => ({ ...u, [slug]: true }));

  return (
    <div className="bg-oxblood-deep text-background">
      <section className="relative overflow-hidden border-b border-background/10">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">The Vault</div>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            Exclusive collections.<br />
            <span className="italic text-gold">Strictly by invitation.</span>
          </h1>
          <p className="mt-5 max-w-xl text-background/75 text-balance">
            Editorial parties co-created with celebrities, designers and tastemakers. Unlock the
            full mood, the exact vendor stack, and the hush-hush recipes. (No screenshots, please.)
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exclusives.map((e) => {
            const isOpen = unlocked[e.slug];
            return (
              <article key={e.slug} className="overflow-hidden rounded-2xl bg-background text-foreground ring-1 ring-gold/30 shadow-lux">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={e.image} alt={e.title} loading="lazy"
                    className={`h-full w-full object-cover transition duration-500 ${isOpen ? "" : "blur-md scale-110"}`} />
                  {!isOpen && <div className="absolute inset-0 bg-oxblood-deep/40" />}
                  <div className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground">
                    {isOpen ? "Unlocked" : "⌬ Locked"}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-background">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{e.byHandle}</div>
                    <div className="mt-1 font-display text-2xl font-semibold">{e.title}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground">{e.tagline}</p>
                  {isOpen ? (
                    <div className="mt-4 space-y-2 text-sm">
                      <Row label="Mood board" value="42 references · downloadable" />
                      <Row label="Vendor stack" value="6 vetted vendors · contacts unlocked" />
                      <Row label="Exact recipe" value="Decor list · F&B menu · playlist" />
                      <Link to="/discover" className="mt-3 inline-block rounded-full bg-oxblood px-4 py-2 text-xs font-medium text-background">
                        Open full edit →
                      </Link>
                    </div>
                  ) : (
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">Curator</div>
                        <div className="font-display text-base">{e.by}</div>
                      </div>
                      <button onClick={() => unlock(e.slug)}
                        className="rounded-full bg-oxblood px-4 py-2 text-xs font-medium text-background ring-1 ring-gold/40 hover:opacity-95">
                        Unlock · ₹{e.price}
                      </button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-gold/30 bg-oxblood p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Members' edit</div>
              <h3 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
                Want them all? <span className="italic text-gold">Become a member.</span>
              </h3>
              <p className="mt-3 max-w-md text-background/75">
                12 exclusive drops a year, early-bird vendor access, and our WhatsApp Concierge
                on speed-dial. The price of two decent dinners.
              </p>
            </div>
            <div className="md:justify-self-end">
              <button className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-foreground hover:opacity-90">
                Join the House · ₹4,999/yr
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border py-2 last:border-0">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}
