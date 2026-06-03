import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Party } from "@/data/parties";
import { board } from "@/lib/board";

const badgeStyles: Record<Party["badge"], string> = {
  Trending: "bg-oxblood text-primary-foreground",
  Seasonal: "bg-champagne-deep text-oxblood-deep",
  "Best Seller": "bg-foreground text-background",
  New: "bg-champagne text-oxblood-deep",
  "Editor's Pick": "bg-oxblood-deep text-champagne",
};

export function PartyCard({ party }: { party: Party }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    setSaved(board.isSaved(party.slug));
    const fn = () => setSaved(board.isSaved(party.slug));
    window.addEventListener("hoa:board", fn);
    return () => window.removeEventListener("hoa:board", fn);
  }, [party.slug]);

  return (
    <Link
      to="/party/$slug"
      params={{ slug: party.slug }}
      className="group block overflow-hidden rounded-2xl bg-card ring-1 ring-border/70 transition-all hover:-translate-y-0.5 hover:shadow-lux"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={party.image}
          alt={party.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oxblood-deep/85 via-oxblood-deep/10 to-transparent" />

        {/* Single tag, top-left */}
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${badgeStyles[party.badge]}`}
        >
          {party.badge}
        </span>

        <button
          type="button"
          aria-label={saved ? "Remove from board" : "Save to party board"}
          onClick={(e) => {
            e.preventDefault();
            setSaved(board.toggleSaved(party.slug));
          }}
          className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full backdrop-blur transition ${
            saved ? "bg-oxblood text-champagne" : "bg-background/90 text-foreground/80 hover:bg-oxblood hover:text-champagne"
          }`}
        >
          {saved ? "♥" : "♡"}
        </button>

        <div className="absolute inset-x-0 bottom-0 p-4 text-background">
          <h3 className="font-display text-xl font-semibold leading-tight text-balance">
            {party.title}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-wider text-background/85">
            <span>{party.city}</span>
            <span className="h-1 w-1 rounded-full bg-champagne/80" />
            <span>{party.budgetLabel}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
