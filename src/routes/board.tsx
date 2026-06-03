import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { parties } from "@/data/parties";
import { PartyCard } from "@/components/PartyCard";
import { board } from "@/lib/board";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "My Board — House of Affairs" },
      { name: "description", content: "Your saved affairs, recently browsed, and recommendations." },
    ],
  }),
  component: BoardPage,
});

function BoardPage() {
  const [, force] = useState(0);
  useEffect(() => {
    const fn = () => force((n) => n + 1);
    window.addEventListener("hoa:board", fn);
    return () => window.removeEventListener("hoa:board", fn);
  }, []);

  const saved = useMemo(() => parties.filter((p) => board.saved().includes(p.slug)), []);
  const browsed = useMemo(() => {
    const ids = board.browsed();
    return ids.map((s) => parties.find((p) => p.slug === s)).filter(Boolean) as typeof parties;
  }, []);
  const recs = useMemo(() => {
    // recommend based on occasions/cities of saved+browsed
    const seen = new Set([...saved.map((p) => p.slug), ...browsed.map((p) => p.slug)]);
    const occ = new Set([...saved, ...browsed].map((p) => p.occasion));
    const city = new Set([...saved, ...browsed].map((p) => p.city));
    const ranked = parties
      .filter((p) => !seen.has(p.slug))
      .map((p) => ({ p, score: (occ.has(p.occasion) ? 2 : 0) + (city.has(p.city) ? 1 : 0) + (p.badge === "Best Seller" ? 1 : 0) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((x) => x.p);
    return ranked;
  }, [saved, browsed]);

  return (
    <div>
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="text-xs uppercase tracking-[0.3em] text-champagne">My Board</div>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1] tracking-tight md:text-6xl">
            Everything you've <span className="italic text-sparkle">loved</span>.
          </h1>
          <p className="mt-4 max-w-xl text-background/80">
            Saved affairs, what you've browsed and a few we think you'll love next.
          </p>
        </div>
      </section>

      <Section title="Saved" empty="Heart anything in the feed to save it here.">
        {saved}
      </Section>
      <Section title="Recently browsed" empty="Open an affair and we'll remember it for you.">
        {browsed}
      </Section>
      <Section title="Recommended for you" empty="Browse a few affairs and we'll start tailoring picks.">
        {recs}
      </Section>

      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <Link to="/" className="text-sm text-oxblood hover:underline">← Back to feed</Link>
      </div>
    </div>
  );
}

function Section({ title, empty, children }: { title: string; empty: string; children: typeof parties }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <h2 className="font-display text-2xl font-semibold md:text-3xl">{title}</h2>
      {children.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">{empty}</p>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {children.map((p) => <PartyCard key={p.slug} party={p} />)}
        </div>
      )}
    </section>
  );
}
