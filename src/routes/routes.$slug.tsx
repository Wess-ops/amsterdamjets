import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { locations } from "@/lib/locations";

const SITE = "https://amsterdamjet.com";

function buildFaq(loc: (typeof locations)[number]) {
  return [
    {
      q: `How long is a private jet flight from Amsterdam to ${loc.name}?`,
      a: `${loc.flightTime}. Departures are typically from Amsterdam Schiphol (AMS) or Rotterdam The Hague (RTM).`,
    },
    {
      q: `Which airports do you use for ${loc.name}?`,
      a: `We use ${loc.airports.join(", ")}. We'll recommend the best option for your itinerary and timing.`,
    },
    {
      q: `How much does a private jet from Amsterdam to ${loc.name} cost?`,
      a: `${loc.priceFrom}. Empty-leg flights and shoulder-season pricing can be significantly lower — ask us for live availability.`,
    },
    {
      q: `How far in advance should I book?`,
      a: `${loc.bookWindow}. For high-demand events and holidays we recommend reserving earlier.`,
    },
  ];
}

export const Route = createFileRoute("/routes/$slug")({
  loader: ({ params }) => {
    const loc = locations.find((l) => l.slug === params.slug);
    if (!loc) throw notFound();
    return loc;
  },
  head: ({ params, loaderData }) =>
    loaderData
      ? {
          meta: [
            {
              title: `Private Jet Amsterdam to ${loaderData.name} — Charter from Schiphol | Amsterdam Jets`,
            },
            {
              name: "description",
              content: `Private jet charter Amsterdam to ${loaderData.name}. ${loaderData.flightTime}. ${loaderData.priceFrom}. Quotes within the hour from Amsterdam Schiphol.`,
            },
            {
              property: "og:title",
              content: `Private Jet Amsterdam to ${loaderData.name}`,
            },
            {
              property: "og:description",
              content: `${loaderData.flightTime}. ${loaderData.priceFrom}. Charter direct from Amsterdam Schiphol with Amsterdam Jets.`,
            },
            { property: "og:type", content: "article" },
            { property: "og:image", content: loaderData.img },
            { property: "og:url", content: `${SITE}/routes/${params.slug}` },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: loaderData.img },
          ],
          links: [{ rel: "canonical", href: `${SITE}/routes/${params.slug}` }],
          scripts: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: `Private Jet Amsterdam to ${loaderData.name}`,
                description: loaderData.blog.intro,
                image: loaderData.img,
                author: { "@type": "Organization", name: "Amsterdam Jets" },
                publisher: { "@type": "Organization", name: "Amsterdam Jets" },
                mainEntityOfPage: `${SITE}/routes/${params.slug}`,
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                  { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE}/fleet` },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: `Amsterdam to ${loaderData.name}`,
                    item: `${SITE}/routes/${params.slug}`,
                  },
                ],
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: buildFaq(loaderData).map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            },
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
  const faq = buildFaq(loc);
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
            <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary">
              Private jet Amsterdam to {loc.name}
            </h1>
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
            <h2 className="text-label-bold uppercase text-on-surface-variant mb-3">Preferred airports</h2>
            <ul className="mb-6 space-y-1">
              {loc.airports.map((a: string) => (
                <li key={a} className="text-body-md text-on-surface">
                  {a}
                </li>
              ))}
            </ul>
            <h2 className="text-label-bold uppercase text-on-surface-variant mb-3">When to fly</h2>
            <p className="text-body-md text-on-surface">{loc.seasons}</p>
          </aside>
        </section>

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
            {loc.blog.sections.map((s: { h: string; p: string }) => (
              <div key={s.h}>
                <h3 className="text-headline-md text-on-surface mb-3" style={{ fontSize: 24, lineHeight: "32px" }}>
                  {s.h}
                </h3>
                <p className="text-body-lg text-on-surface-variant">{s.p}</p>
              </div>
            ))}
          </article>

          {/* FAQ */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-headline-md md:text-display-lg-mobile text-on-surface mb-8">
              Amsterdam to {loc.name} — frequently asked
            </h2>
            <div className="flex flex-col gap-6">
              {faq.map((f) => (
                <div
                  key={f.q}
                  className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6"
                >
                  <h3 className="text-on-surface font-bold mb-2" style={{ fontSize: 18 }}>
                    {f.q}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">{f.a}</p>
                </div>
              ))}
            </div>
            <Link
              to="/bespoke"
              className="mt-10 animate-cta-glow bg-primary text-on-primary px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 hover:bg-primary-container transition-colors"
            >
              Request your charter
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </section>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
