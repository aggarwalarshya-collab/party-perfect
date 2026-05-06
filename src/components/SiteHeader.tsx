import { Link } from "@tanstack/react-router";

const links = [
  { to: "/" as const, label: "Feed" },
  { to: "/discover" as const, label: "Find my party" },
  { to: "/kits" as const, label: "Kits" },
  { to: "/calculator" as const, label: "Budget" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
          partystack
          <span className="hidden text-xs font-sans font-normal uppercase tracking-[0.2em] text-muted-foreground md:inline">
            / celebration infra
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm bg-foreground text-background" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/discover"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
        >
          Plan my party
        </Link>
      </div>
    </header>
  );
}
