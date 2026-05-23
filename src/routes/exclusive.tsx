import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { exclusives } from "@/data/parties";

export const Route = createFileRoute("/exclusive")({
  head: () => ({
    meta: [
      { title: "Exclusive Affairs — Premium Edits + House Pass" },
      { name: "description", content: "Premium Edits at ₹149 — celebrity & tastemaker affair playbooks. Or enter the House as a member for unlimited access, weekend drops and concierge perks." },
      { property: "og:title", content: "House of Affairs — Exclusive" },
      { property: "og:description", content: "Premium Edits at ₹149. House Pass at ₹499/3mo." },
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
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Premium Edits · ₹149</div>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl md:text-7xl">
            The affairs <span className="italic text-gold">you stalked online.</span><br />
            Now with the recipe.
          </h1>
          <p className="mt-5 max-w-2xl text-background/75 text-balance md:text-lg">
            Premium Edits are full affair playbooks — co-created with celebrities, designers and
            tastemakers. Unlock the mood, the exact vendor stack, the menu and the playlist for
            <span className="text-gold"> just ₹149</span> per edit. Want them all?{" "}
            <a href="#house-pass" className="text-gold underline underline-offset-4">Enter the House as a member.</a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exclusives.map((e) => {
            const isOpen = unlocked[e.slug];
            return (
              <article key={e.slug} className="overflow-hidden rounded-2xl bg-background text-foreground ring-1 ring-gold/30 shadow-lux">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={e.image} alt={e.title} loading="lazy"
                    className={`h-full w-full object-cover transition duration-500 ${isOpen ? "" : "blur-md scale-110"}`} />
                  {!isOpen && <div className="absolute inset-0 bg-oxblood-deep/40" />}
                  <div className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground">
                    {isOpen ? "Unlocked" : "✦ Premium Edit"}
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
                      <Link to="/search" className="mt-3 inline-block rounded-full bg-oxblood px-4 py-2 text-xs font-medium text-background">
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

        {/* HOUSE PASS */}
        <div id="house-pass" className="mt-16 rounded-2xl border border-gold/30 bg-oxblood p-7 md:p-12">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">House Pass · become a House member</div>
              <h3 className="mt-2 font-display text-3xl font-semibold md:text-5xl">
                Enter the House. <span className="italic text-gold">Stay a while.</span>
              </h3>
              <p className="mt-3 max-w-md text-background/75">
                Three months. Unlimited Premium Edits, two free Affair Assistant requests,
                early access to weekend affairs, and members-only vendor rates.
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-background/85 sm:grid-cols-2">
                {[
                  "Unlimited Premium Edits (₹149 each, free for members)",
                  "2 Affair Assistant requests included",
                  "2 Standard Party Kits included",
                  "Early access to weekend affair drops",
                  "Members-only vendor pricing",
                  "WhatsApp concierge on speed dial",
                ].map((x) => (
                  <li key={x} className="flex gap-2"><span className="text-gold">✦</span><span>{x}</span></li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <div className="rounded-3xl bg-background p-7 text-foreground shadow-lux ring-1 ring-gold/40">
                <div className="text-xs uppercase tracking-[0.2em] text-oxblood">House membership</div>
                <div className="mt-2 font-display text-5xl font-semibold">₹499</div>
                <div className="text-sm text-muted-foreground">for three months</div>
                <button className="mt-5 w-full rounded-full bg-oxblood py-3 text-sm font-medium text-background ring-1 ring-gold/40 hover:opacity-95">
                  Enter the House →
                </button>
                <p className="mt-3 text-[11px] text-muted-foreground">
                  Cancel any time. No autorenew without a heads-up.
                </p>
              </div>
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
