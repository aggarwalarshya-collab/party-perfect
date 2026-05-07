import { Link } from "@tanstack/react-router";

const links = [
  { to: "/" as const, label: "Feed" },
  { to: "/search" as const, label: "Search" },
  { to: "/exclusive" as const, label: "Exclusive" },
  { to: "/kits" as const, label: "Party Kits" },
  { to: "/calculator" as const, label: "Budget" },
  { to: "/vendors" as const, label: "For Vendors" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-oxblood font-display text-sm italic text-gold">H</span>
          <div className="leading-none">
            <div className="font-display text-lg font-semibold tracking-tight">House of Affairs</div>
            <div className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:block">
              by invitation, by design
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3.5 py-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "rounded-full px-3.5 py-1.5 text-sm bg-blush-soft text-oxblood ring-1 ring-oxblood/20",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/search"
          className="rounded-full bg-oxblood px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft ring-1 ring-gold/40 transition hover:opacity-95"
        >
          Plan an affair
        </Link>
      </div>
    </header>
  );
}
