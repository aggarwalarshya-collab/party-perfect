import { createFileRoute } from "@tanstack/react-router";
import { kits } from "@/data/parties";

export const Route = createFileRoute("/kits")({
  head: () => ({
    meta: [
      { title: "Party Kits — partystack" },
      { name: "description", content: "Printable invites, menus, games, signage & more. ₹499 kits to complete your party in style." },
    ],
  }),
  component: KitsPage,
});

function KitsPage() {
  return (
    <div>
      <section className="border-b border-border bg-gradient-sunset">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Party Kits</div>
          <h1 className="mt-2 font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            Finish the party in <span className="italic text-primary">five clicks.</span>
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Designer-made printables for every occasion — invites, menus, drinking games,
            signage, and thank-you cards. Delivered to your inbox in minutes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kits.map((k, i) => (
            <article
              key={k.slug}
              className="group relative overflow-hidden rounded-3xl border-2 border-foreground bg-card p-6 transition hover:-translate-y-1"
              style={{ boxShadow: `8px 10px 0 -2px color-mix(in oklab, ${k.color} 80%, transparent)` }}
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-70 blur-2xl"
                style={{ background: k.color }}
              />
              <div className="relative">
                <div className="font-display text-5xl font-semibold text-primary">0{i + 1}</div>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-tight">{k.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{k.items}</p>
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">One-time</div>
                    <div className="font-display text-3xl font-semibold">₹{k.price}</div>
                  </div>
                  <button className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition group-hover:bg-primary">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-foreground p-10 text-background md:p-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-background/60">Replicate this party</div>
              <h3 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
                Want the exact edit from our feed?
              </h3>
              <p className="mt-3 text-background/70">
                Get the full vendor list, mood board, shopping list and printable kit — exactly
                as photographed. ₹299 per exclusive edit.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <button className="rounded-full bg-[var(--confetti-peach)] px-6 py-3 text-sm font-medium text-foreground hover:opacity-90">
                Browse exclusive edits →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
