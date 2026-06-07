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
            {loc.body.map((p: string, i: number) => (
              <p key={i} className="text-body-lg text-on-surface">
                {p}
              </p>
            ))}
            <Link
              to="/bespoke"
              className="self-start animate-cta-glow bg-primary text-on-primary px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 mt-4 hover:bg-primary-container transition-colors"
            >
              Request a charter to {loc.name}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </article>
          <aside className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 h-fit">
            <h3 className="text-label-bold uppercase text-on-surface-variant mb-3">Preferred airports</h3>
            <ul className="mb-6 space-y-1">
              {loc.airports.map((a: string) => (
                <li key={a} className="text-body-md text-on-surface">
                  {a}
                </li>
              ))}
            </ul>
            <h3 className="text-label-bold uppercase text-on-surface-variant mb-3">When to fly</h3>
            <p className="text-body-md text-on-surface">{loc.seasons}</p>
          </aside>
        </section>

        {/* Route stats strip */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { i: "schedule", t: "Flight time", v: loc.flightTime },
              { i: "payments", t: "Indicative pricing", v: loc.priceFrom },
              { i: "event_available", t: "When to book", v: loc.bookWindow },
            ].map((x) => (
              <div
                key={x.t}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6"
              >
                <span className="material-symbols-outlined text-primary mb-3 block">{x.i}</span>
                <p className="text-label-bold uppercase text-on-surface-variant mb-1">{x.t}</p>
                <p className="text-body-lg text-on-surface font-semibold">{x.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Route blog post */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl overflow-hidden grid md:grid-cols-2">
            <div className="relative min-h-[280px] md:min-h-[420px]">
              <img alt={loc.name} src={loc.img} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-label-bold uppercase text-primary mb-3">
                Route guide · {loc.blog.readMins} min read
              </p>
              <h2 className="text-headline-md text-on-surface mb-4">{loc.blog.title}</h2>
              <p className="text-body-lg text-on-surface-variant mb-6">{loc.blog.intro}</p>
              <a href="#guide" className="text-primary text-label-bold inline-flex items-center gap-2">
                Read guide
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          <article id="guide" className="mt-16 max-w-3xl mx-auto flex flex-col gap-10">
            {loc.blog.sections.map((s) => (
              <div key={s.h}>
                <h3 className="text-headline-md text-on-surface mb-3" style={{ fontSize: 24, lineHeight: "32px" }}>
                  {s.h}
                </h3>
                <p className="text-body-lg text-on-surface-variant">{s.p}</p>
              </div>
            ))}
            <Link
              to="/bespoke"
              className="self-start animate-cta-glow bg-primary text-on-primary px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 mt-4 hover:bg-primary-container transition-colors"
            >
              Request your charter
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
