import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-semibold">partystack</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            The curated party-planning layer for urban India. Discover vendors,
            replicate parties, and assemble beautiful celebrations — faster.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Customers</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">The Feed</Link></li>
            <li><Link to="/discover" className="hover:text-primary">Find my party</Link></li>
            <li><Link to="/kits" className="hover:text-primary">Party kits</Link></li>
            <li><Link to="/calculator" className="hover:text-primary">Budget calculator</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Vendors</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><span className="text-muted-foreground">List your business</span></li>
            <li><span className="text-muted-foreground">Enquiry pack</span></li>
            <li><span className="text-muted-foreground">Visibility pack</span></li>
            <li><span className="text-muted-foreground">Growth pack</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-5 text-xs text-muted-foreground md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span>© {new Date().getFullYear()} partystack</span>
          <span>Made with confetti in India 🎈</span>
        </div>
      </div>
    </footer>
  );
}
