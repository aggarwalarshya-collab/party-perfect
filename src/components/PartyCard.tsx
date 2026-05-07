import { Link } from "@tanstack/react-router";
import type { Party } from "@/data/parties";

const badgeStyles: Record<Party["badge"], string> = {
  Trending: "bg-oxblood text-primary-foreground",
  Seasonal: "bg-gold text-foreground",
  "Best Seller": "bg-foreground text-background",
  New: "bg-background text-foreground border border-foreground/30",
  "Editor's Pick": "bg-oxblood-deep text-gold",
};

const spanH: Record<Party["span"], string> = {
  tall: "aspect-[3/4.4]",
  regular: "aspect-[3/4]",
  short: "aspect-[3/3.4]",
};

export function PartyCard({ party }: { party: Party }) {
  const { social } = party;
  return (
    <Link
      to="/party/$slug"
      params={{ slug: party.slug }}
      className="group block overflow-hidden rounded-2xl bg-card ring-1 ring-border/70 transition-all hover:-translate-y-0.5 hover:shadow-lux"
    >
      <div className={`relative overflow-hidden ${spanH[party.span]}`}>
        <img
          src={party.image}
          alt={party.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oxblood-deep/85 via-transparent to-transparent" />
        <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${badgeStyles[party.badge]}`}>
          {party.badge}
        </span>
        <button
          type="button"
          aria-label="Save to party board"
          onClick={(e) => { e.preventDefault(); }}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground/80 backdrop-blur transition hover:bg-oxblood hover:text-gold"
        >
          ♡
        </button>

        {/* social proof + meta over image */}
        <div className="absolute inset-x-0 bottom-0 p-4 text-background">
          {social.loved && (
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground">
              ✦ {social.loved}
            </div>
          )}
          <h3 className="font-display text-xl font-semibold leading-tight text-balance">
            {party.title}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-wider text-background/85">
            <span>{party.city}</span>
            <span className="h-1 w-1 rounded-full bg-gold/80" />
            <span>{party.budgetLabel}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3 text-[11px] text-foreground/70">
        <div className="flex items-center gap-2">
          {social.replicated != null && (
            <span>↻ {social.replicated} replicated</span>
          )}
          {social.endorsed && (
            <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px]">
              loved by <span className="text-oxblood">{social.endorsed}</span>
            </span>
          )}
        </div>
        <span className="opacity-60 transition group-hover:opacity-100">Open →</span>
      </div>
    </Link>
  );
}
