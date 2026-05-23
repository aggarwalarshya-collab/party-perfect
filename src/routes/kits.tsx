import { createFileRoute, Link } from "@tanstack/react-router";
import { kits } from "@/data/parties";

export const Route = createFileRoute("/kits")({
  head: () => ({
    meta: [
      { title: "Party Kits — House of Affairs" },
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
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Party Kits</div>
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
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {kits.map((k) => (
            <article key={k.slug} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-lux">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={k.image}
                  alt={`${k.name} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-card/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground backdrop-blur">
                  ✦ Sneak peek
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-oxblood px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-background">
                  From ₹{k.standardPrice}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold leading-tight">{k.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{k.items}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {k.preview.map((label) => (
                    <span key={label} className="rounded-full bg-blush-soft px-2.5 py-1 text-[11px] text-foreground/80">
                      {label}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Standard / Customised</div>
                    <div className="font-display text-2xl font-semibold">₹{k.standardPrice} <span className="text-base text-muted-foreground">· ₹{k.customPrice}</span></div>
                  </div>
                  <button className="rounded-full bg-oxblood px-4 py-2.5 text-sm font-medium text-background transition hover:opacity-90">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* House member pitch */}
      <section className="border-t border-border bg-blush-soft">
        <div className="mx-auto max-w-5xl px-5 py-12 text-center md:px-8 md:py-16">
          <div className="text-xs uppercase tracking-[0.28em] text-oxblood">House member perk</div>
          <h2 className="mt-3 font-display text-2xl font-semibold leading-tight md:text-4xl">
            Two kits, on the house. <span className="italic text-oxblood">Every quarter.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-foreground/75 md:text-base">
            House members get two Standard Party Kits free, plus unlimited Premium Edits and
            two Affair Assistant requests — all for ₹499 / 3 months.
          </p>
          <Link
            to="/exclusive"
            className="mt-6 inline-block rounded-full bg-oxblood px-6 py-3 text-sm font-medium text-background ring-1 ring-gold/40 hover:opacity-95"
          >
            Enter the House as a member →
          </Link>
        </div>
      </section>
    </div>
  );
}
