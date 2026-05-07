import { createFileRoute } from "@tanstack/react-router";
import { kits } from "@/data/parties";

export const Route = createFileRoute("/kits")({
  head: () => ({
    meta: [
      { title: "Designer Party Kits — House of Affairs" },
      { name: "description", content: "Printable invites, menus, games & signage. Designer kits at ₹499." },
    ],
  }),
  component: KitsPage,
});

function KitsPage() {
  return (
    <div>
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Designer Party Kits</div>
          <h1 className="mt-2 font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            Finish the affair in <span className="italic text-gold">five clicks.</span>
          </h1>
          <p className="mt-5 max-w-xl text-background/75">
            Designer-made printables for every occasion. Peek inside before you buy — invites,
            menus, drinking games, signage. Delivered to your inbox in minutes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kits.map((k) => (
            <article key={k.slug} className="group overflow-hidden rounded-2xl border-2 border-foreground bg-card transition hover:-translate-y-1 hover:shadow-lux">
              {/* preview tiles */}
              <div className="grid grid-cols-2 gap-1 p-3" style={{ backgroundColor: `color-mix(in oklab, ${k.color} 25%, transparent)` }}>
                {k.preview.map((label, idx) => (
                  <div key={label} className="relative aspect-square overflow-hidden rounded-lg bg-background ring-1 ring-border">
                    <div className="absolute inset-0 grain" style={{ backgroundColor: `color-mix(in oklab, ${k.color} ${30 + idx * 10}%, var(--background))` }} />
                    <div className="absolute inset-2 rounded-md border border-foreground/20 bg-background/60 backdrop-blur-sm grid place-items-center text-center px-2">
                      <span className="font-display text-xs font-semibold text-foreground/85">{label}</span>
                    </div>
                    <span className="absolute right-1 top-1 rounded-full bg-foreground px-1.5 py-0.5 text-[8px] uppercase tracking-wider text-background">
                      Preview
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold leading-tight">{k.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{k.items}</p>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">One-time</div>
                    <div className="font-display text-3xl font-semibold">₹{k.price}</div>
                  </div>
                  <button className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition group-hover:bg-oxblood">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
