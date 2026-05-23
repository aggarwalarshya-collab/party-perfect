import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/assistant")({
  head: () => ({
    meta: [
      { title: "Affair Assistant — House of Affairs" },
      { name: "description", content: "Hand the brief to us. We coordinate every vendor on WhatsApp, compare prices, follow up. ₹499/request." },
      { property: "og:title", content: "Affair Assistant — House of Affairs" },
      { property: "og:description", content: "₹499/request. We coordinate every vendor on WhatsApp. You just RSVP." },
    ],
  }),
  component: AssistantPage,
});

const WA_NUMBER = "919999999999";

function AssistantPage() {
  const [paid, setPaid] = useState(false);
  const [brief, setBrief] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaid(true);
    const msg = encodeURIComponent(
      `Hi! I just paid ₹499 for the Affair Assistant. Here's my brief:\n\n${brief || "(no brief)"}`,
    );
    setTimeout(() => window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank"), 500);
  };

  return (
    <div>
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Affair Assistant</div>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl md:text-7xl">
            Hand us the brief.
            <br />
            <span className="italic text-gold">We do the flirting.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-background/80 md:text-lg">
            ₹499 per request. We coordinate every vendor on WhatsApp, compare prices, follow up,
            and slide back into your DMs with one tidy package. Refunded if you book any vendor
            through us.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-12 md:gap-12 md:px-8 md:py-20">
        <div className="md:col-span-7">
          <div className="rounded-3xl border-2 border-foreground bg-card p-6 shadow-lux md:p-10">
            <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Send your brief</div>
            <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">What are we planning?</h2>

            {paid ? (
              <div className="mt-8 rounded-2xl bg-blush-soft p-6 text-foreground">
                <div className="font-display text-xl font-semibold">✓ Brief sent on WhatsApp</div>
                <p className="mt-1 text-sm text-foreground/75">
                  Our editor will reply within 4 hours. Meanwhile, browse the{" "}
                  <Link to="/" className="text-oxblood underline">
                    feed
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 grid gap-5">
                <label className="block">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Tell us everything</div>
                  <textarea
                    required
                    rows={6}
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="e.g. Sufi baithak at home, Saturday, 15 guests, Bandra, ₹50K budget, want florist + tabla + kebab counter."
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-oxblood focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-oxblood px-6 py-3.5 text-sm font-medium text-background ring-1 ring-gold/40 hover:opacity-95"
                >
                  Pay ₹499 & open WhatsApp →
                </button>
                <p className="text-xs text-muted-foreground">
                  Payment is a dummy flow for this demo. You'll be redirected to WhatsApp with
                  your brief pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="space-y-5 md:sticky md:top-24">
            <div className="rounded-2xl bg-foreground p-7 text-background">
              <div className="font-display text-xl font-semibold">What you get</div>
              <ul className="mt-4 space-y-3 text-sm text-background/85">
                {[
                  "Vendor coordination across decor, F&B, music, photo",
                  "Price comparison from 3+ options per vendor",
                  "Availability check & follow-ups",
                  "One tidy WhatsApp summary with prices & calendars",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-gold">✦</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-oxblood">Doing more than one?</div>
              <div className="mt-1 font-display text-xl font-semibold">Become a House member</div>
              <p className="mt-2 text-sm text-muted-foreground">
                ₹499 for 3 months. 2 Assistant requests free, 2 Standard Kits free, unlimited
                Premium Edits, weekend affair early access, vendor perks.
              </p>
              <Link to="/exclusive" className="mt-4 inline-block text-sm text-oxblood hover:underline">
                Enter the House →
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
