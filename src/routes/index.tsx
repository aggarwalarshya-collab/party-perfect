import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { parties } from "@/data/parties";
import { PartyCard } from "@/components/PartyCard";
import hero from "@/assets/hero-affairs.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Affairs — the curated party-planning layer for urban India" },
      { name: "description", content: "Discover, compare and assemble beautiful celebrations — vendors, party kits and the Affair Assistant. By invitation, by design." },
      { property: "og:title", content: "House of Affairs" },
      { property: "og:description", content: "By invitation, by design." },
    ],
  }),
  component: FeedPage,
});

const promptIdeas = [
  "Sufi baithak at home, 15 guests",
  "Mom's 60th birthday — intimate",
  "Diwali for 30, ~₹1L",
  "Bachelorette weekend in Goa",
  "Anniversary surprise, just two of us",
  "Kid's first birthday — pastel",
];

function FeedPage() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const submit = (text?: string) => {
    const query = (text ?? q).trim();
    navigate({ to: "/search", search: { q: query || undefined } as never });
  };

  return (
    <div>
      {/* HERO — big brand presence, NL search, single beautiful image */}
      <section className="relative overflow-hidden border-b border-border bg-oxblood-deep text-background">
        <div className="absolute inset-0">
          <img src={hero} alt="Curated dinner affair at home" width={1920} height={1080} className="h-full w-full object-cover opacity-45" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-oxblood-deep/65 via-oxblood-deep/85 to-oxblood-deep" />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-14 text-center md:px-8 md:pt-24 md:pb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            By invitation · by design
          </div>

          <div className="mt-6 font-display text-3xl font-semibold tracking-tight text-gold md:text-4xl">
            House of <span className="italic">Affairs</span>
          </div>

          <h1 className="mt-3 font-display text-[2.4rem] font-semibold leading-[0.98] tracking-tight text-balance sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            Tell us your <span className="italic text-gold">affair.</span>
            <br />
            We'll set the table.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-background/80 text-balance md:text-lg">
            From a sufi baithak to a chef's table at home — type whatever you're plotting and
            we'll curate the vendors, the look and the price.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="mx-auto mt-8 flex w-full max-w-3xl items-stretch gap-2 rounded-2xl border border-gold/40 bg-background p-2 text-foreground shadow-lux sm:rounded-full"
          >
            <span className="hidden self-center pl-4 text-oxblood sm:inline">✦</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="“I want a sufi baithak at home, 15 guests…”"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-muted-foreground md:text-base"
            />
            <button
              type="submit"
              className="rounded-xl bg-oxblood px-4 py-3 text-sm font-medium text-background ring-1 ring-gold/40 transition hover:opacity-95 sm:rounded-full sm:px-6"
            >
              Curate →
            </button>
          </form>
          <div className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-2">
            {promptIdeas.map((p) => (
              <button
                key={p}
                onClick={() => {
                  setQ(p);
                  submit(p);
                }}
                className="rounded-full border border-gold/25 bg-background/5 px-3 py-1.5 text-[11px] text-background/85 transition hover:border-gold hover:text-gold md:text-xs"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-border bg-foreground py-3 text-background">
        <div className="ticker flex gap-12 whitespace-nowrap font-display text-sm">
          {[...Array(2)].flatMap((_, n) =>
            [
              "✦ Trending: Diwali baithak",
              "✦ Most loved in Mumbai: Disco bachelorette",
              "✦ New: Sufi baithak night",
              "✦ 218 hosts replicated this month",
              "✦ Party Kits from ₹129",
              "✦ Editor's Pick: rooftop date night",
            ].map((t, i) => (
              <span key={`${n}-${i}`} className="opacity-90">
                {t}
              </span>
            )),
          )}
        </div>
      </div>

      {/* FEED — vogue × pinterest × instagram chic */}
      <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
        {/* subtle decorative background */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-12 -z-10 flex justify-center">
          <div className="h-72 w-[80%] rounded-full bg-blush-soft blur-3xl opacity-60" />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-oxblood">The Affair Feed</div>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-5xl">
              Ideas you'll <span className="italic text-oxblood">screenshot.</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
              A scroll of real, replicable affairs — from sufi baithaks to chef's tables. Tap any
              card to see vendors, prices and recreate it in your city.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full bg-blush-soft px-3 py-1 text-oxblood">
              ♡ Save to your party board
            </span>
          </div>
        </div>

        <div className="masonry mt-8 md:mt-12">
          {parties.map((p) => (
            <PartyCard key={p.slug} party={p} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-border bg-oxblood text-background">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">How it works</div>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight md:text-6xl">
                From <span className="italic text-gold">scroll</span> to celebration in three steps.
              </h2>
            </div>
            <div className="md:col-span-7">
              <ol className="divide-y divide-background/15">
                {[
                  ["Tell us the affair", "Type the brief or browse the feed. We curate the vendors, the look and the price."],
                  ["Save & replicate", "Heart what you love. Replicate to surface vendors in your city across budgets — free."],
                  ["Hand it to the Affair Assistant", "₹499/request. We coordinate every vendor on WhatsApp. You just RSVP."],
                ].map(([t, d], i) => (
                  <li key={t} className="grid grid-cols-[auto_1fr] gap-6 py-6">
                    <div className="font-display text-3xl text-gold">0{i + 1}</div>
                    <div>
                      <div className="font-display text-xl font-semibold md:text-2xl">{t}</div>
                      <div className="mt-1 text-sm text-background/75 md:text-base">{d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
