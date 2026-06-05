import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: "List your business — House of Affairs" },
      { name: "description", content: "Become a House of Affairs vendor. Pre-briefed leads, editorial discovery, ₹1.4L avg monthly uplift." },
    ],
  }),
  component: VendorsLanding,
});

function VendorsLanding() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-cream">
      {/* HERO + WHY combined */}
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.3em] text-champagne">For Vendors</div>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-[1] tracking-tight md:text-6xl">
                Leads that arrive <span className="italic text-sparkle">pre-briefed.</span>
              </h1>
              <p className="mt-5 max-w-xl text-background/80 md:text-lg">
                Every enquiry comes with date, city, headcount and budget — already inspired by your style. No cold calls.
              </p>

              <ul className="mt-7 grid gap-2 text-sm text-background/90 sm:grid-cols-2">
                {[
                  "Editorial discovery in curated stories",
                  "Pre-qualified enquiries on WhatsApp",
                  "Free verified profile, always",
                  "Optional growth packs to scale",
                ].map((x) => (
                  <li key={x} className="flex gap-2"><span className="text-champagne">✦</span><span>{x}</span></li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#apply" className="rounded-full bg-champagne px-6 py-3 text-sm font-medium text-oxblood-deep hover:opacity-90">
                  Apply to list →
                </a>
                <Link to="/vendors/growth-packs" className="rounded-full border border-champagne/40 bg-background/5 px-6 py-3 text-sm font-medium text-background hover:bg-background/10">
                  Growth packs →
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="grid grid-cols-3 gap-3">
                <Stat big="₹1.4L" sub="avg / mo" />
                <Stat big="42+" sub="leads / mo" />
                <Stat big="5 days" sub="to go live" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACT ONBOARDING */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Onboarding · 5 working days</div>
        <h2 className="mt-1 font-display text-2xl font-semibold md:text-3xl">Application to first lead — in a week.</h2>
        <ol className="mt-5 flex flex-wrap gap-3 text-sm">
          {[
            ["01", "Apply", "2-min form"],
            ["02", "Verify", "Work + refs"],
            ["03", "Onboard", "Editor builds profile"],
            ["04", "Leads", "WhatsApp-first"],
          ].map(([n, t, d]) => (
            <li key={t} className="flex min-w-[140px] flex-1 items-center gap-3 rounded-2xl border border-border bg-card p-3">
              <span className="font-display text-2xl text-oxblood">{n}</span>
              <span>
                <span className="block font-medium">{t}</span>
                <span className="block text-xs text-muted-foreground">{d}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* APPLY */}
      <section id="apply" className="mx-auto max-w-3xl px-5 pb-20 md:px-8">
        <div className="rounded-3xl border-2 border-foreground bg-card p-8 shadow-lux md:p-12">
          <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Apply to list</div>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Tell us about your studio.</h2>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-blush-soft p-6 text-foreground">
              <div className="font-display text-xl font-semibold">✓ Application received</div>
              <p className="mt-1 text-sm text-foreground/75">
                Our editor will be in touch within 48 hours. Meanwhile,{" "}
                <Link to="/vendors/growth-packs" className="text-oxblood underline">preview growth packs</Link>.
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
                    <option>Bartender</option>
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
              <button type="submit" className="rounded-full bg-oxblood px-6 py-3.5 text-sm font-medium text-background ring-1 ring-champagne/40 hover:opacity-95">
                Submit application →
              </button>
              <p className="text-xs text-muted-foreground">Free to apply. Free basic profile. Paid growth packs are optional.</p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Stat({ big, sub }: { big: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-champagne/30 bg-background/5 p-4 text-center">
      <div className="font-display text-2xl text-champagne md:text-3xl">{big}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-background/75">{sub}</div>
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
