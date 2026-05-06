import { createFileRoute, Link } from "@tanstack/react-router";
import { parties } from "@/data/parties";
import { PartyCard } from "@/components/PartyCard";
import hero from "@/assets/hero-party.jpg";

export const Route = createFileRoute("/")({
  component: FeedPage,
});

const tickerItems = [
  "✦ Trending: Pampas baby showers",
  "✦ Seasonal: Diwali hosting",
  "✦ Best seller: Disco bachelorette",
  "✦ New this week: Noir anniversary",
  "✦ Available this weekend in Mumbai",
  "✦ ₹499 printable party kits",
];

function FeedPage() {
  const trending = parties.filter((p) => p.badge === "Trending" || p.badge === "Seasonal");
  const bestSellers = parties.filter((p) => p.badge === "Best Seller");
  const rest = parties.filter((p) => !["Trending", "Seasonal", "Best Seller"].includes(p.badge));

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-sunset">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-12 pb-16 md:grid-cols-12 md:gap-14 md:px-8 md:pt-20 md:pb-24">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Celebration infrastructure · for urban India
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]">
              Throw the party<br />
              <span className="italic text-primary">they'll screenshot.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/70 text-balance">
              Discover curated parties, replicate the look with vetted vendors, and finish it
              off with printable kits. From rooftop date nights to Diwali mehfils — we've
              already done the planning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/discover"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-soft transition hover:opacity-90"
              >
                Find my party →
              </Link>
              <Link
                to="/kits"
                className="rounded-full border border-foreground/20 bg-background/70 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-background"
              >
                Browse ₹499 kits
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 text-sm">
              {[
                ["1,200+", "vendors curated"],
                ["6 cities", "expanding fast"],
                ["48hr", "WhatsApp planning"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-display text-2xl font-semibold text-primary">{k}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative md:col-span-5">
            <div className="float-slow relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-warm opacity-30 blur-2xl" />
              <img
                src={hero}
                alt="An aesthetic pastel celebration tablescape"
                width={1600}
                height={1200}
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-soft md:block">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">This weekend</div>
                <div className="mt-1 font-display text-lg font-semibold">37 vendors free</div>
                <div className="text-xs text-primary">in Mumbai · BLR · DEL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-y border-border bg-foreground py-3 text-background overflow-hidden">
        <div className="ticker flex gap-12 whitespace-nowrap font-display text-sm">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="opacity-90">{t}</span>
          ))}
        </div>
      </div>

      {/* TRENDING */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">01 — The Feed</div>
            <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">Trending & seasonal</h2>
          </div>
          <Link to="/discover" className="hidden text-sm text-primary hover:underline md:inline">
            See all parties →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {trending.map((p, i) => (
            <PartyCard key={p.slug} party={p} featured={i === 0} />
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">02 — Crowd favourites</div>
          <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">Best sellers</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Tried, photographed and replicated dozens of times. Pick a look, we wire up the rest.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {bestSellers.map((p) => (
              <PartyCard key={p.slug} party={p} />
            ))}
          </div>
        </div>
      </section>

      {/* MORE */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">03 — Fresh edits</div>
        <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">New & editor's picks</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {rest.map((p) => (
            <PartyCard key={p.slug} party={p} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-background/60">How it works</div>
              <h2 className="mt-2 font-display text-4xl font-semibold leading-tight md:text-6xl">
                From <span className="italic text-[var(--confetti-peach)]">scroll</span> to celebration in 3 steps.
              </h2>
            </div>
            <div className="md:col-span-7">
              <ol className="divide-y divide-background/15">
                {[
                  ["Scroll the feed", "Save parties you love to your party board. Filter by occasion, vibe, city, budget."],
                  ["Tell us your brief", "Date, guests, budget — we curate vendors and a shortlist in 48 hours over WhatsApp."],
                  ["Add a kit. Done.", "Printable invites, menus, games and signage delivered the same day."],
                ].map(([t, d], i) => (
                  <li key={t} className="grid grid-cols-[auto_1fr] gap-6 py-6">
                    <div className="font-display text-3xl text-[var(--confetti-peach)]">0{i + 1}</div>
                    <div>
                      <div className="font-display text-2xl font-semibold">{t}</div>
                      <div className="mt-1 text-background/70">{d}</div>
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
