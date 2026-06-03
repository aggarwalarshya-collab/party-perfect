import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { parties } from "@/data/parties";
import { PartyCard } from "@/components/PartyCard";
import { MemberBadge } from "@/components/MemberBadge";
import hero from "@/assets/hero-affairs.jpg";
import heroVideo from "@/assets/hero-affair-build.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Affairs — the curated party-planning layer for urban India" },
      { name: "description", content: "Discover, compare and assemble beautiful celebrations — vendors, party kits and the Affair Assistant. Your celebrations, our planning." },
      { property: "og:title", content: "House of Affairs" },
      { property: "og:description", content: "Your celebrations, our planning." },
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

type Filter = "All" | "Budget" | "Food" | "Gaming" | "Surprises" | "Unique & Trending" | "Seasonal" | "New";
const FILTERS: Filter[] = ["All", "Budget", "Food", "Gaming", "Surprises", "Unique & Trending", "Seasonal", "New"];

function FeedPage() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return parties;
    if (filter === "Budget") return [...parties].sort((a, b) => a.budget - b.budget).slice(0, 12);
    if (filter === "Seasonal") return parties.filter((p) => p.badge === "Seasonal" || /diwali|christmas|onam|festive/i.test(p.title));
    if (filter === "New") return parties.filter((p) => p.badge === "New");
    if (filter === "Unique & Trending") return parties.filter((p) => p.badge === "Trending" || p.badge === "Editor's Pick");
    if (filter === "Food") return parties.filter((p) => /chef|tacos|brunch|dinner|sadhya|grazing|cocktail|cigar|bbq|baithak/i.test(p.title + p.tagline));
    if (filter === "Gaming") return parties.filter((p) => /golf|karaoke|game|poker|mini|board/i.test(p.title + p.tagline));
    if (filter === "Surprises") return parties.filter((p) => /proposal|surprise|anniversary|date/i.test(p.title + p.tagline + p.occasion));
    return parties;
  }, [filter]);

  const submit = (text?: string) => {
    const query = (text ?? q).trim();
    navigate({ to: "/search", search: { q: query || undefined } as never });
  };

  return (
    <div>
      {/* HERO — video forward, search lifted lower with strong blur backdrop */}
      <section className="relative overflow-hidden bg-oxblood-deep text-background">
        <div className="absolute inset-0">
          <video
            src={heroVideo.url}
            poster={hero}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Very light vignette so the film stays bright and visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-oxblood-deep/15 via-transparent to-oxblood-deep/70" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-end px-5 pb-12 pt-24 text-center md:min-h-[82vh] md:px-8 md:pb-20 md:pt-32">
          <h1 className="font-display text-[2.4rem] font-semibold leading-[0.98] tracking-tight text-balance text-cream sm:text-5xl md:text-7xl lg:text-[5rem]">
            Tell us your <span className="italic text-sparkle">affair.</span>
            <br />
            We'll set the table.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-cream/85 text-balance md:text-base">
            From a sufi baithak to a chef's table at home — type whatever you're plotting and we'll
            curate the vendors, the look and the price.
          </p>

          {/* Search bar — sits on its own blurred glass so the prompts stay legible over the film */}
          <div className="mt-8 w-full max-w-3xl rounded-3xl bg-oxblood-deep/55 p-3 backdrop-blur-md ring-1 ring-champagne/30 shadow-lux">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
              className="flex items-stretch gap-2 rounded-2xl bg-background p-2 text-foreground sm:rounded-full"
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
                className="rounded-xl bg-oxblood px-4 py-3 text-sm font-medium text-background ring-1 ring-champagne/40 transition hover:opacity-95 sm:rounded-full sm:px-6"
              >
                Curate →
              </button>
            </form>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {promptIdeas.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setQ(p);
                    submit(p);
                  }}
                  className="rounded-full border border-champagne/35 bg-oxblood-deep/40 px-3 py-1.5 text-[11px] text-cream/95 backdrop-blur transition hover:border-champagne hover:text-champagne md:text-xs"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TICKER — sits seamlessly on oxblood, no white line above */}
      <div className="overflow-hidden border-y border-oxblood-deep/40 bg-foreground py-3 text-background">
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

      {/* FEED with filters */}
      <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-12 -z-10 flex justify-center">
          <div className="h-72 w-[80%] rounded-full bg-blush-soft blur-3xl opacity-60" />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-oxblood">The Affair Feed</div>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-5xl">
              Bring these <span className="italic text-sparkle">affairs</span> home.
            </h2>
          </div>
        </div>

        {/* Filters row */}
        <div className="mt-6 -mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
          <div className="flex min-w-max gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                  filter === f
                    ? "border-oxblood bg-oxblood text-background"
                    : "border-border bg-card text-foreground/80 hover:border-oxblood/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-10">
          {filtered.map((p) => (
            <PartyCard key={p.slug} party={p} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS — moved up before tools */}
      <section className="border-t border-border bg-oxblood text-background">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.25em] text-champagne">How it works</div>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight md:text-6xl">
                From <span className="italic text-sparkle">scroll</span> to celebration in three steps.
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
                    <div className="font-display text-3xl text-champagne">0{i + 1}</div>
                    <div>
                      <div className="font-display text-xl font-semibold md:text-2xl">{t}</div>
                      <div className="mt-1 text-sm text-background/80 md:text-base">{d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CURATOR + BUDGET — DIY combined block */}
      <section className="border-t border-oxblood-deep/30 bg-blush-soft">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="rounded-3xl bg-background p-7 ring-1 ring-border shadow-soft md:p-9">
              <div className="text-xs uppercase tracking-[0.28em] text-oxblood">Roll your own</div>
              <h3 className="mt-2 font-display text-3xl font-semibold leading-tight md:text-4xl">
                Curate your own <span className="italic text-sparkle">affair</span>.
              </h3>
              <p className="mt-3 text-sm text-foreground/75 md:text-base">
                Pick a bartender, a caterer, a decor stylist — assemble the night that fits you,
                not a template. Every vendor profile shows availability, packages and DMs.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                {["Bartenders", "Chefs", "Florists", "Photographers", "DJs", "Musicians"].map((c) => (
                  <span key={c} className="rounded-full bg-secondary px-2.5 py-1">{c}</span>
                ))}
              </div>
              <Link
                to="/search"
                className="mt-6 inline-block rounded-full bg-oxblood px-5 py-3 text-sm font-medium text-background ring-1 ring-champagne/40 hover:opacity-95"
              >
                Browse the vendor directory →
              </Link>
            </div>

            <div className="rounded-3xl bg-foreground p-7 text-background shadow-lux md:p-9">
              <div className="text-xs uppercase tracking-[0.28em] text-champagne">Know the spend</div>
              <h3 className="mt-2 font-display text-3xl font-semibold leading-tight md:text-4xl">
                What will it <span className="italic text-sparkle">actually</span> cost?
              </h3>
              <p className="mt-3 text-sm text-background/75 md:text-base">
                Real estimates from real vendor quotes in our network. Pick occasion, city, guests
                and vibe — we show the bracket and the curated options that fit.
              </p>
              <Link
                to="/calculator"
                className="mt-6 inline-block rounded-full bg-champagne px-5 py-3 text-sm font-medium text-oxblood-deep hover:opacity-95"
              >
                Open the budget calculator →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AFFAIR ASSISTANT TEASER — cleaned up, 24hr SLA, single CTA */}
      <section className="border-t border-blush-soft bg-blush-soft">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-12 md:items-center md:gap-12 md:px-8 md:py-20">
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.28em] text-oxblood">Affair Assistant · ₹499/request</div>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Don't want to chase vendors? <span className="italic text-sparkle">Hand it over.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-foreground/75 md:text-base">
              Tell us the affair in two lines. Within <strong>24 hours</strong> (often quicker for
              urgent asks) we slide back into your DMs with one tidy package — quotes, dates,
              coordinated vendors. All on WhatsApp.
            </p>
            <div className="mt-6">
              <Link
                to="/assistant"
                className="rounded-full bg-oxblood px-5 py-3 text-sm font-medium text-background ring-1 ring-champagne/40 hover:opacity-95"
              >
                Send a brief →
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-champagne/30 bg-background p-6 shadow-lux md:p-8">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-oxblood" /> Sample brief on WhatsApp
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-oxblood px-4 py-2.5 text-background">
                  Sufi baithak at home, Sat 15th, 18 guests, Bandra, ~₹60K.
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5 text-foreground">
                  On it. Pulling 3 florists, 2 tabla trios, 1 kebab counter. Full package back in 24 hrs. ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBER PITCH — clearly branded block */}
      <section className="border-t border-border bg-gradient-champagne">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-12 text-center md:px-8 md:py-16">
          <MemberBadge />
          <h2 className="font-display text-3xl font-semibold leading-tight text-oxblood-deep md:text-4xl">
            Hosting more than one? Step inside the House.
          </h2>
          <p className="max-w-xl text-sm text-oxblood-deep/80 md:text-base">
            ₹499 / 3 months. 2 Assistant requests free, 2 Standard Kits, unlimited Premium Edits,
            weekend affair early access and vendor perks.
          </p>
          <Link
            to="/exclusive"
            className="mt-2 rounded-full bg-oxblood-deep px-6 py-3 text-sm font-medium text-champagne ring-1 ring-oxblood-deep/40 hover:opacity-95"
          >
            Enter the House →
          </Link>
        </div>
      </section>
    </div>
  );
}
