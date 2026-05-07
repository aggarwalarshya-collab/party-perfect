import { Link } from "@tanstack/react-router";

const links = [
  { to: "/" as const, label: "Feed" },
  { to: "/discover" as const, label: "Discover" },
  { to: "/exclusive" as const, label: "Exclusive" },
  { to: "/kits" as const, label: "Kits" },
  { to: "/calculator" as const, label: "Budget" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-oxblood text-[10px] font-display italic text-gold">H</span>
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
              activeProps={{ className: "rounded-full px-3.5 py-1.5 text-sm bg-foreground text-background" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/discover"
          className="rounded-full bg-oxblood px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft ring-1 ring-gold/40 transition hover:opacity-95"
        >
          Plan an affair
        </Link>
      </div>
    </header>
  );
}
