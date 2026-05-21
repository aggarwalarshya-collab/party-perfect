import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: "List your business — House of Affairs" },
      { name: "description", content: "Become a House of Affairs vendor. Avg ₹1.4L/mo additional revenue, 40+ qualified leads. Onboard in 5 days." },
    ],
  }),
  component: VendorsLanding,
});

function VendorsLanding() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">For Vendors</div>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            Get discovered by hosts <br />
            <span className="italic text-gold">who actually book.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-background/80 md:text-lg">
            India's most aspirational party feed sends you pre-qualified leads — already
            briefed on your style, vibe and price range. No cold calls. No tyre-kickers.
          </p>

          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            <Stat big="₹1.4L" sub="avg. additional monthly revenue" />
            <Stat big="42+" sub="qualified leads / month" />
            <Stat big="5 days" sub="verified & live, end-to-end" />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#apply" className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-foreground hover:opacity-90">
              Apply to list →
            </a>
            <Link to="/vendors/growth-packs" className="rounded-full border border-gold/40 bg-background/5 px-6 py-3 text-sm font-medium text-background hover:bg-background/10">
              See growth packs →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Why House of Affairs</div>
        <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
          The leads are <span className="italic">already warm.</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Editorial discovery", "Featured inside curated party stories — hosts arrive inspired, not comparison-shopping."],
            ["Pre-briefed enquiries", "Every lead comes with date, city, guest count and budget. You quote, you don't qualify."],
            ["Designer brand halo", "Sit alongside celebrity edits and tastemaker collections. Charge what you're worth."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="font-display text-2xl font-semibold">{t}</div>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-border bg-blush-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Onboarding · 5 working days</div>
          <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
            From application to first lead — in a week.
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Apply", "2-min form: portfolio link, city, categories."],
              ["02", "Verify", "We check work samples, references and pricing."],
              ["03", "Onboard", "Curated profile built by our editors. Free."],
              ["04", "Receive leads", "Show up in feeds, search, and concierge briefs."],
            ].map(([n, t, d]) => (
              <li key={t} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-display text-3xl text-oxblood">{n}</div>
                <div className="mt-2 font-display text-xl font-semibold">{t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-foreground/70">
            Avg verification & onboarding TAT: <strong>3–5 working days.</strong> Free basic profile, always.
          </p>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="mx-auto max-w-3xl px-5 py-20 md:px-8">
        <div className="rounded-3xl border-2 border-foreground bg-card p-8 shadow-lux md:p-12">
          <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Apply to list</div>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Tell us about your studio.</h2>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-blush-soft p-6 text-foreground">
              <div className="font-display text-xl font-semibold">✓ Application received</div>
              <p className="mt-1 text-sm text-foreground/75">
                Our editor will be in touch within 48 hours. Meanwhile,{" "}
                <Link to="/vendors/growth-packs" className="text-oxblood underline">
                  preview growth packs
                </Link>
                .
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-8 grid gap-5"
            >
              <Field label="Studio / business name">
                <input required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-oxblood focus:outline-none" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Category">
                  <select className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-oxblood focus:outline-none">
                    <option>Decor & florals</option>
                    <option>Photographer</option>
                    <option>Cake / bakery</option>
                    <option>Caterer / private chef</option>
                    <option>Music / DJ</option>
                    <option>Venue</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="City">
                  <input required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-oxblood focus:outline-none" />
                </Field>
              </div>
              <Field label="Instagram / portfolio link">
                <input required type="url" placeholder="https://instagram.com/…" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-oxblood focus:outline-none" />
              </Field>
              <Field label="WhatsApp">
                <input required type="tel" placeholder="+91 …" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-oxblood focus:outline-none" />
              </Field>
              <Field label="A line about what you do best">
                <textarea rows={3} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-oxblood focus:outline-none" />
              </Field>
              <button type="submit" className="rounded-full bg-oxblood px-6 py-3.5 text-sm font-medium text-background ring-1 ring-gold/40 hover:opacity-95">
                Submit application →
              </button>
              <p className="text-xs text-muted-foreground">
                Free to apply. Free basic profile. Paid growth packs are optional.
              </p>
            </form>
          )}
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="mt-2">{children}</div>
    </label>
  );
}
