import { createFileRoute, Link } from "@tanstack/react-router";
import { growthPacks } from "@/data/parties";

export const Route = createFileRoute("/vendors/growth-packs")({
  head: () => ({
    meta: [
      { title: "Growth Packs for Vendors — House of Affairs" },
      { name: "description", content: "Enquiry Pack ₹1,999/mo, Visibility Pack ₹5,999/mo, Growth Pack ₹19,999/mo. Real visibility for real party vendors." },
      { property: "og:title", content: "House of Affairs — Growth Packs for Vendors" },
      { property: "og:description", content: "From enquiry-only to full off-platform marketing. Pick your pace." },
    ],
  }),
  component: GrowthPacksPage,
});

const WA_NUMBER = "919999999999";

function GrowthPacksPage() {
  return (
    <div>
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Growth Packs</div>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl md:text-7xl">
            Get discovered by the
            <br /><span className="italic text-gold">hosts that actually book.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-background/80 md:text-lg">
            Your free profile gets you on the platform. These packs put you in front of people
            already planning — across our feed, search, occasion pages, partner channels and
            seasonal pushes.
          </p>
          <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
            <Stat big="1,200+" sub="vendors onboarded · year 1" />
            <Stat big="3,000+" sub="enquiries / month at exit" />
            <Stat big="₹1.4L" sub="avg additional revenue / vendor" />
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {growthPacks.map((p, i) => {
            const featured = i === 1;
            return (
              <article
                key={p.slug}
                className={`relative flex flex-col rounded-3xl border bg-card p-6 shadow-soft md:p-8 ${
                  featured ? "border-oxblood ring-2 ring-oxblood/30" : "border-border"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-oxblood px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-background">
                    {p.tag}
                  </span>
                )}
                {!featured && (
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.tag}</div>
                )}
                <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{p.name}</h2>
                <div className="mt-2 font-display text-3xl font-semibold text-oxblood md:text-4xl">
                  ₹{p.price.toLocaleString("en-IN")}
                  <span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <p className="mt-3 text-sm text-foreground/80">{p.headline}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.includes.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-0.5 text-oxblood">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                    `Hi! I'd like to sign up for the ${p.name} (₹${p.price}/mo). My studio is __`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-7 block rounded-full px-5 py-3 text-center text-sm font-medium ring-1 ring-gold/40 ${
                    featured ? "bg-oxblood text-background" : "border border-foreground bg-background text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  Activate {p.name} →
                </a>
              </article>
            );
          })}
        </div>

        {/* PITCH */}
        <div className="mt-14 grid gap-6 rounded-3xl bg-blush-soft p-6 md:grid-cols-2 md:p-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Why partner with us</div>
            <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
              The leads are <span className="italic">already warm.</span>
            </h3>
            <p className="mt-3 text-sm text-foreground/80 md:text-base">
              Every customer that lands on House of Affairs is mid-plan. They've browsed an
              affair, they like the look, and now they want vendors. You skip the comparison-shop
              tyre-kicking and quote a real brief.
            </p>
          </div>
          <ul className="grid gap-3 text-sm">
            {[
              ["Editorial discovery", "Featured inside curated stories — hosts arrive inspired."],
              ["Pre-briefed enquiries", "Every lead comes with date, city, guest count and budget."],
              ["Designer brand halo", "Sit alongside celebrity edits and tastemaker collections."],
              ["WhatsApp-first", "Leads arrive on WhatsApp. No new dashboards to learn."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-xl bg-card p-4 ring-1 ring-border">
                <div className="font-display text-base font-semibold">{t}</div>
                <div className="mt-1 text-foreground/70">{d}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="mt-12 rounded-3xl bg-oxblood p-6 text-background md:p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Not sure which pack?</div>
              <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                Tell us your studio. We'll recommend.
              </h3>
              <p className="mt-2 text-sm text-background/75 md:text-base">
                A 5-minute chat to figure out the right pack for your category, city, and goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to discuss the Growth Packs for my studio.")}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gold px-5 py-3 text-sm font-medium text-foreground hover:opacity-90"
              >
                WhatsApp us →
              </a>
              <a
                href="mailto:vendors@houseofaffairs.in?subject=Growth%20Packs%20Enquiry"
                className="rounded-full border border-gold/40 bg-background/5 px-5 py-3 text-sm font-medium text-background backdrop-blur hover:bg-background/10"
              >
                vendors@houseofaffairs.in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to="/vendors" className="text-sm text-oxblood hover:underline">← Back to vendor home</Link>
        </div>
      </section>
    </div>
  );
}

function Stat({ big, sub }: { big: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-gold/30 bg-background/5 p-5">
      <div className="font-display text-3xl text-gold md:text-4xl">{big}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-background/75">{sub}</div>
    </div>
  );
}
