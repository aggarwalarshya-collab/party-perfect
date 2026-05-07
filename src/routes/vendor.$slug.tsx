import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { vendors, parties } from "@/data/parties";

export const Route = createFileRoute("/vendor/$slug")({
  loader: ({ params }) => {
    const vendor = vendors.find((v) => v.slug === params.slug);
    if (!vendor) throw notFound();
    return { vendor };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.vendor.name} — House of Affairs` },
          { name: "description", content: loaderData.vendor.blurb },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-display text-5xl font-semibold">Vendor not found</h1>
      <Link to="/" className="mt-6 inline-block text-oxblood hover:underline">← Back to feed</Link>
    </div>
  ),
  component: VendorDetail,
});

function VendorDetail() {
  const { vendor } = Route.useLoaderData();
  const featured = parties.filter((p) => p.vendors.some((v: { slug: string }) => v.slug === vendor.slug));

  return (
    <div>
      <section className="border-b border-border bg-oxblood-deep text-background">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Vendor profile</div>
          <h1 className="mt-2 font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            {vendor.name}
          </h1>
          <p className="mt-3 text-background/75">{vendor.role} · {vendor.basedIn}</p>
          <div className="mt-6 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["★ " + vendor.rating, "Rating"],
              [vendor.events + "+", "Events booked"],
              [vendor.responseTime, "Responds"],
              [vendor.city, "Based in"],
            ].map(([k, v]) => (
              <div key={v} className="rounded-2xl border border-gold/25 bg-background/5 p-4">
                <div className="font-display text-2xl text-gold">{k}</div>
                <div className="text-[10px] uppercase tracking-wider text-background/70">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl font-semibold">About</h2>
          <p className="mt-3 text-foreground/80">{vendor.blurb}</p>

          <h3 className="mt-10 font-display text-2xl font-semibold">Signature packages</h3>
          <ul className="mt-4 space-y-3">
            {vendor.packages.map((p) => (
              <li key={p.name} className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5">
                <div>
                  <div className="font-display text-lg font-semibold">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.includes}</div>
                </div>
                <div className="font-display text-xl text-oxblood">{p.price}</div>
              </li>
            ))}
          </ul>

          {featured.length > 0 && (
            <>
              <h3 className="mt-10 font-display text-2xl font-semibold">Featured in</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {featured.map((p) => (
                  <Link key={p.slug} to="/party/$slug" params={{ slug: p.slug }}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 hover:border-oxblood">
                    <img src={p.image} alt="" className="h-16 w-16 rounded-lg object-cover" />
                    <div>
                      <div className="font-display text-base font-semibold">{p.title}</div>
                      <div className="text-xs text-muted-foreground">{p.city} · {p.budgetLabel}</div>
                    </div>
                  </Link>
                ))}
              </ul>
            </>
          )}
        </div>

        <aside className="md:col-span-5">
          <div className="sticky top-24 space-y-5">
            <div className="rounded-2xl border-2 border-foreground bg-card p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Reach out directly</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>☎ <a className="hover:text-oxblood" href={`tel:${vendor.contact.phone.replace(/\s/g,"")}`}>{vendor.contact.phone}</a></li>
                <li>✉ <a className="hover:text-oxblood" href={`mailto:${vendor.contact.email}`}>{vendor.contact.email}</a></li>
                <li>◎ {vendor.contact.instagram}</li>
              </ul>
              <a href={`https://wa.me/${vendor.contact.phone.replace(/\D/g,"")}`}
                className="mt-5 block rounded-full bg-foreground py-2.5 text-center text-sm font-medium text-background hover:opacity-90">
                WhatsApp the vendor
              </a>
            </div>
            <div className="rounded-2xl bg-oxblood p-6 text-background ring-1 ring-gold/40">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Don't fancy the back-and-forth?</div>
              <div className="mt-1 font-display text-xl font-semibold">Let our Concierge do it.</div>
              <p className="mt-1 text-sm text-background/75">
                We coordinate quotes, dates and last-minute changes — all on WhatsApp.
              </p>
              <button className="mt-4 w-full rounded-full bg-gold py-2.5 text-sm font-medium text-foreground">
                Hand it over · ₹1,499
              </button>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
