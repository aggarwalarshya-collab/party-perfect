import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/assistant")({
  head: () => ({
    meta: [
      { title: "Affair Assistant — House of Affairs" },
      { name: "description", content: "Hand us the brief. Within 24 hours we send back one tidy package of vendors, quotes and dates on WhatsApp. ₹499 / request." },
      { property: "og:title", content: "Affair Assistant — House of Affairs" },
      { property: "og:description", content: "₹499 / request. 24-hour turnaround." },
    ],
  }),
  component: AssistantPage,
});

const WA_NUMBER = "919999999999";

const steps = [
  { n: "01", t: "Send the brief", d: "Two lines is enough. City, occasion, headcount, rough budget." },
  { n: "02", t: "We curate, in 24 hrs", d: "Comparable quotes from 3+ vendors per role, availability checked." },
  { n: "03", t: "You pick. We coordinate.", d: "Decor, F&B, music, photo — one WhatsApp thread, one human reply." },
];

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
      {/* HERO with the OFFER spelled out clearly */}
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.3em] text-champagne">Affair Assistant</div>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl md:text-7xl">
                Hand us the brief.<br />
                <span className="italic text-sparkle">We do the chasing.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-background/80 md:text-lg">
                One flat price. One human on WhatsApp. One tidy package — back in 24 hours.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl bg-background p-6 text-foreground shadow-lux md:p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Price</div>
                    <div className="font-display text-5xl font-semibold text-oxblood">₹499</div>
                    <div className="text-xs text-muted-foreground">per request · refunded if you book any vendor through us</div>
                  </div>
                  <div className="rounded-full bg-champagne px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-oxblood-deep">
                    24-hr turnaround
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-foreground/85">
                  {[
                    "Quotes from 3+ vendors per role",
                    "Availability checks & follow-ups",
                    "Decor · F&B · music · photo · transport",
                    "One WhatsApp thread, one human reply",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-oxblood">✦</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS — clean hierarchy */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="font-display text-3xl text-champagne-deep">{s.n}</div>
              <div className="mt-2 font-display text-xl font-semibold">{s.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRIEF FORM */}
      <section className="mx-auto max-w-3xl px-4 pb-16 md:px-8 md:pb-24">
        <div className="rounded-3xl border-2 border-foreground bg-card p-6 shadow-lux md:p-10">
          <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Send your brief</div>
          <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">What are we planning?</h2>

          {paid ? (
            <div className="mt-8 rounded-2xl bg-blush-soft p-6 text-foreground">
              <div className="font-display text-xl font-semibold">✓ Brief sent on WhatsApp</div>
              <p className="mt-1 text-sm text-foreground/75">
                We'll reply with your curated package within 24 hours. Meanwhile, browse the{" "}
                <Link to="/" className="text-oxblood underline">feed</Link>.
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
                className="rounded-full bg-oxblood px-6 py-3.5 text-sm font-medium text-background ring-1 ring-champagne/40 hover:opacity-95"
              >
                Pay ₹499 & open WhatsApp →
              </button>
              <p className="text-xs text-muted-foreground">
                Payment is a dummy flow for this demo. You'll be redirected to WhatsApp with your brief pre-filled.
              </p>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
