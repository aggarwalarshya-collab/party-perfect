import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { parties, exclusives } from "@/data/parties";
import { PartyCard } from "@/components/PartyCard";
import hero from "@/assets/hero-affairs.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Affairs — the designer party house" },
      { name: "description", content: "Discover, save and replicate the prettiest celebrations in town. Curated vendors, exclusive collections, and printable kits." },
      { property: "og:title", content: "House of Affairs" },
      { property: "og:description", content: "By invitation, by design." },
    ],
  }),
  component: FeedPage,
});

const promptIdeas = [
  "I want to throw my mom a 60th birthday",
  "Bachelorette weekend in Goa, 8 girls",
  "Diwali at home, ~40 guests, ₹1L",
  "House warming, intimate, dinner-style",
  "Anniversary surprise, just two of us",
];

function FeedPage() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const seasonal = parties.filter((p) => p.badge === "Seasonal" || p.badge === "Trending");
  const bestsellers = parties.filter((p) => p.badge === "Best Seller");
  const rest = parties.filter((p) => !["Seasonal", "Trending", "Best Seller"].includes(p.badge));
  const ordered = [...seasonal, ...bestsellers, ...rest, ...parties, ...parties].slice(0, 18);

  const submit = (text?: string) => {
    const query = (text ?? q).trim();
    navigate({ to: "/search", search: { q: query || undefined } as never });
  };

  return (
    <div>
      {/* HERO with NL search */}
      <section className="relative overflow-hidden border-b border-border bg-oxblood-deep text-background">
        <div className="absolute inset-0 opacity-25">
          <img src={hero} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-oxblood-deep/60 via-oxblood-deep/85 to-oxblood-deep" />
        <div className="relative mx-auto max-w-5xl px-5 pt-20 pb-16 text-center md:pt-28 md:pb-20 md:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            By invitation · by design
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]">
            Tell us your <span className="italic text-gold">affair.</span>
            <br />We'll set the table.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-background/75 text-balance md:text-lg">
            Type whatever you're plotting. A 60th, a sneaky proposal, a "house warming" that's
            really just an excuse — we'll cough up curated ideas, vendors, and prices.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); submit(); }}
            className="mx-auto mt-10 flex w-full max-w-3xl items-center gap-2 rounded-full border border-gold/40 bg-background p-2 text-foreground shadow-lux"
          >
            <span className="pl-4 text-oxblood">✦</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="“I want to celebrate my mom's 60th birthday…”"
              className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-muted-foreground md:text-base"
            />
            <button
              type="submit"
              className="rounded-full bg-oxblood px-5 py-3 text-sm font-medium text-background ring-1 ring-gold/40 transition hover:opacity-95"
            >
              Curate →
            </button>
          </form>
          <div className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-2">
            {promptIdeas.map((p) => (
              <button
                key={p}
                onClick={() => { setQ(p); submit(p); }}
                className="rounded-full border border-gold/25 bg-background/5 px-3 py-1.5 text-xs text-background/85 transition hover:border-gold hover:text-gold"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-y border-border bg-foreground py-3 text-background overflow-hidden">
        <div className="ticker flex gap-12 whitespace-nowrap font-display text-sm">
          {[...Array(2)].flatMap((_, n) =>
            ["✦ Trending: Diwali mehfils", "✦ Most loved in Mumbai: Disco bachelorette", "✦ New drop: Noir anniversary", "✦ 218 hosts replicated this month", "✦ ₹499 designer kits", "✦ Editor's Pick: rooftop date night"].map((t, i) => (
              <span key={`${n}-${i}`} className="opacity-90">{t}</span>
            ))
          )}
        </div>
      </div>

      {/* EXCLUSIVE TEASER */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-oxblood">Exclusive · members only</div>
            <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
              Parties from people <span className="italic">you stalk online.</span>
            </h2>
          </div>
          <Link to="/exclusive" className="hidden text-sm text-oxblood hover:underline md:inline">
            Unlock the vault →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {exclusives.map((e) => (
            <Link key={e.slug} to="/exclusive" className="group relative block overflow-hidden rounded-2xl ring-1 ring-border">
              <img src={e.image} alt="" loading="lazy" className="aspect-[3/4] w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-oxblood-deep/55 backdrop-blur-md transition group-hover:backdrop-blur-sm" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-background">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">By {e.by}</div>
                <h3 className="mt-1 font-display text-2xl font-semibold">{e.title}</h3>
                <div className="mt-3 inline-flex items-center gap-2 self-start rounded-full bg-gold px-3 py-1 text-[11px] font-medium text-foreground">
                  ⌬ Locked · ₹{e.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PINTEREST FEED */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The Feed</div>
            <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
              Ideas you'll <span className="italic text-oxblood">screenshot.</span>
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Seasonal first, then bestsellers, then the rest. Save what you love to your party
              board — replicate when you're ready.
            </p>
          </div>
        </div>

        <div className="masonry mt-10">
          {ordered.map((p, i) => (
            <PartyCard key={`${p.slug}-${i}`} party={p} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-border bg-oxblood text-background">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">How it works</div>
              <h2 className="mt-2 font-display text-4xl font-semibold leading-tight md:text-6xl">
                From <span className="italic text-gold">scroll</span> to celebration in three flirty steps.
              </h2>
            </div>
            <div className="md:col-span-7">
              <ol className="divide-y divide-background/15">
                {[
                  ["Type the affair", "Tell us in your words. We turn it into a curated mood board with vendors and prices."],
                  ["Save & replicate", "Heart what you love. Tap Replicate — we surface vendors in your city across budgets."],
                  ["Outsource the boring", "Add our WhatsApp Concierge (paid) and we coordinate every vendor for you. You just RSVP."],
                ].map(([t, d], i) => (
                  <li key={t} className="grid grid-cols-[auto_1fr] gap-6 py-6">
                    <div className="font-display text-3xl text-gold">0{i + 1}</div>
                    <div>
                      <div className="font-display text-2xl font-semibold">{t}</div>
                      <div className="mt-1 text-background/75">{d}</div>
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
