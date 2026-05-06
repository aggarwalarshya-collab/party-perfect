import { Link } from "@tanstack/react-router";
import type { Party } from "@/data/parties";

const badgeStyles: Record<Party["badge"], string> = {
  Trending: "bg-primary text-primary-foreground",
  Seasonal: "bg-[var(--confetti-coral)] text-background",
  "Best Seller": "bg-foreground text-background",
  New: "bg-[var(--confetti-mint)] text-foreground",
  "Editor's Pick": "bg-[var(--confetti-plum)] text-background",
};

export function PartyCard({ party, featured = false }: { party: Party; featured?: boolean }) {
  return (
    <Link
      to="/party/$slug"
      params={{ slug: party.slug }}
      className={`group block overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-soft ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/5]"}`}>
        <img
          src={party.image}
          alt={party.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${badgeStyles[party.badge]}`}>
          {party.badge}
        </span>
        <div className="absolute bottom-4 right-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
          {party.budgetLabel}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          <span>{party.occasion}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{party.city}</span>
        </div>
        <h3 className={`mt-2 font-display font-semibold leading-tight text-foreground ${featured ? "text-3xl md:text-4xl" : "text-xl"}`}>
          {party.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{party.tagline}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-foreground/70">
          <span>{party.vibe}</span>
          <span className="opacity-60 transition group-hover:opacity-100">Replicate →</span>
        </div>
      </div>
    </Link>
  );
}
