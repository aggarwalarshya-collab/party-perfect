import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-oxblood-deep text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="font-display text-3xl font-semibold tracking-tight">
            House of Affairs<span className="text-gold">.</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-background/70">
            The designer party house. We curate the prettiest celebrations in town —
            and quietly hand you the keys.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold/80">
            Made with bad influence in India
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/70">For hosts</div>
          <ul className="mt-4 space-y-2 text-sm text-background/85">
            <li><Link to="/" className="hover:text-gold">The Feed</Link></li>
            <li><Link to="/discover" className="hover:text-gold">Discover</Link></li>
            <li><Link to="/exclusive" className="hover:text-gold">Exclusive collections</Link></li>
            <li><Link to="/kits" className="hover:text-gold">Party kits</Link></li>
            <li><Link to="/calculator" className="hover:text-gold">Budget calculator</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/70">For vendors</div>
          <ul className="mt-4 space-y-2 text-sm text-background/85">
            <li><span>List your business</span></li>
            <li><span>Enquiry pack</span></li>
            <li><span>Visibility pack</span></li>
            <li><span>Growth pack</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 px-5 py-5 text-xs text-background/60 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span>© {new Date().getFullYear()} House of Affairs</span>
          <span>RSVP: hello@houseofaffairs.in</span>
        </div>
      </div>
    </footer>
  );
}
