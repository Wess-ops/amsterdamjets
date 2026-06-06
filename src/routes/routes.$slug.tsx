import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { locations } from "@/lib/locations";

export const Route = createFileRoute("/routes/$slug")({
  loader: ({ params }) => {
    const loc = locations.find((l) => l.slug === params.slug);
    if (!loc) throw notFound();
    return loc;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `Private Jet to ${loaderData.name} — Amsterdam Jets` },
            { name: "description", content: loaderData.tagline },
            { property: "og:title", content: `Private Jet to ${loaderData.name}` },
            { property: "og:description", content: loaderData.tagline },
            { property: "og:image", content: loaderData.img },
          ],
        }
      : {},
  errorComponent: ({ error }) => (
    <div className="p-12 text-center">Couldn't load route: {error.message}</div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow flex flex-col items-center justify-center p-12 text-center">
        <h1 className="text-headline-md mb-4">Destination not found</h1>
        <Link to="/fleet" className="text-primary underline">
          Back to all destinations
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
  component: RouteDetail,
});

function RouteDetail() {
  const loc = Route.useLoaderData();
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow">
        <section className="relative w-full h-[420px] md:h-[560px] overflow-hidden">
          <img alt={loc.name} src={loc.img} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent" />
          <div className="absolute inset-0 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col justify-end pb-12">
            <Link
              to="/fleet"
              className="text-on-primary/80 hover:text-on-primary text-label-bold mb-4 inline-flex items-center gap-2 self-start"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              All destinations
            </Link>
            <p className="text-label-bold text-on-primary/80 uppercase mb-2">{loc.region}</p>
            <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary">{loc.name}</h1>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          <article className="lg:col-span-2 flex flex-col gap-6">
            <p className="text-body-lg text-on-surface-variant">{loc.tagline}</p>
            {loc.body.map((p, i) => (
              <p key={i} className="text-body-lg text-on-surface">
                {p}
              </p>
            ))}
            <Link
              to="/bespoke"
              className="self-start bg-primary text-on-primary px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 mt-4 hover:bg-primary-container transition-colors"
            >
              Request a charter to {loc.name}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </article>
          <aside className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 h-fit">
            <h3 className="text-label-bold uppercase text-on-surface-variant mb-3">Preferred airports</h3>
            <ul className="mb-6 space-y-1">
              {loc.airports.map((a) => (
                <li key={a} className="text-body-md text-on-surface">
                  {a}
                </li>
              ))}
            </ul>
            <h3 className="text-label-bold uppercase text-on-surface-variant mb-3">When to fly</h3>
            <p className="text-body-md text-on-surface">{loc.seasons}</p>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
