import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-oxblood-deep text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            House of <span className="italic text-gold">Affairs</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-background/70">
            The curated party-planning layer for urban India — discover, compare and assemble
            beautiful celebrations, faster.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold/80">
            Your house of planning celebrations
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/70">For hosts</div>
          <ul className="mt-4 space-y-2 text-sm text-background/85">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/exclusive" className="hover:text-gold">Exclusive Affairs</Link></li>
            <li><Link to="/assistant" className="hover:text-gold">Affair Assistant</Link></li>
            <li><Link to="/kits" className="hover:text-gold">Party Kits</Link></li>
            <li><Link to="/calculator" className="hover:text-gold">Budget Calculator</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/70">For vendors</div>
          <ul className="mt-4 space-y-2 text-sm text-background/85">
            <li><Link to="/vendors" className="hover:text-gold">List your business</Link></li>
            <li><Link to="/vendors/growth-packs" className="hover:text-gold">Growth Packs</Link></li>
            <li><a href="mailto:vendors@houseofaffairs.in" className="hover:text-gold">vendors@houseofaffairs.in</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 px-5 py-5 text-xs text-background/60 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} House of Affairs</span>
          <span>RSVP: hello@houseofaffairs.in</span>
        </div>
      </div>
    </footer>
  );
}
