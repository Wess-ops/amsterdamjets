import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { locations } from "@/lib/locations";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Private Jet Destinations & Guides — Amsterdam Jets" },
      {
        name: "description",
        content:
          "Private jet and helicopter guides for London, Paris, Milan, Mallorca, Marbella, Dubai, New York, the Caribbean and more.",
      },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow">
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-12">
          <p className="text-label-bold text-on-surface-variant uppercase mb-4">Destinations & Guides</p>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface max-w-3xl mb-6">
            Where we fly. Why people charter there.
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            City-by-city guides to the airports, helipads, seasons and reasons our clients book
            private aircraft to and from each destination.
          </p>
        </section>

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {locations.map((l) => (
              <Link
                key={l.slug}
                to="/routes/$slug"
                params={{ slug: l.slug }}
                className="group bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={l.name}
                    src={l.img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-label-bold text-primary uppercase mb-2">{l.region}</span>
                  <h3 className="text-headline-md text-on-surface mb-2">{l.name}</h3>
                  <p className="text-body-md text-on-surface-variant mb-4 flex-grow">{l.tagline}</p>
                  <span className="text-label-bold text-on-surface inline-flex items-center gap-2">
                    Read guide
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
