import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/assistant" as const, label: "Affair Assistant" },
  { to: "/kits" as const, label: "Party Kits" },
  { to: "/calculator" as const, label: "My Budget" },
  { to: "/exclusive" as const, label: "Exclusives" },
  { to: "/vendors" as const, label: "For Vendors" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-oxblood font-display text-base italic text-gold shadow-soft md:h-11 md:w-11">
            H
          </span>
          <div className="leading-none">
            <div className="font-display text-xl font-semibold tracking-tight md:text-2xl">
              House of <span className="italic text-oxblood">Affairs</span>
            </div>
            <div className="mt-0.5 hidden text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:block">
              your celebrations, our planning
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 lg:flex xl:gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="whitespace-nowrap rounded-full px-2 py-1.5 text-[12px] text-foreground/75 transition-colors hover:text-foreground xl:text-[13px]"
              activeProps={{
                className:
                  "whitespace-nowrap rounded-full px-2 py-1.5 text-[12px] xl:text-[13px] bg-blush-soft text-oxblood ring-1 ring-oxblood/20",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/assistant"
            className="hidden rounded-full bg-oxblood px-4 py-2 text-xs font-medium text-primary-foreground shadow-soft ring-1 ring-gold/40 transition hover:opacity-95 md:inline-block md:text-sm md:px-5"
          >
            Plan an affair
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card lg:hidden"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-sm text-foreground/85 hover:bg-secondary"
                    activeProps={{ className: "block rounded-xl px-3 py-3 text-sm bg-blush-soft text-oxblood font-medium" }}
                    activeOptions={{ exact: true }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/assistant"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-oxblood px-4 py-3 text-center text-sm font-medium text-primary-foreground ring-1 ring-gold/40"
                >
                  Plan an affair →
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
