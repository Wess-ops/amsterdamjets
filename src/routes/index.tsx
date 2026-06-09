import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SegmentedNav } from "@/components/SegmentedNav";
import { locations } from "@/lib/locations";

const FAQS = [
  {
    q: "How much does a private jet from Amsterdam cost?",
    a: "From €7,900 one-way Amsterdam to Paris on a light jet, €8,500 to London, €16,000 to Mallorca and €55,000+ to Dubai on a super-mid. Empty-leg pricing on European corridors regularly drops 40–70%.",
  },
  {
    q: "Which airport do private jets use in Amsterdam?",
    a: "Most charter flights depart from Amsterdam Schiphol (AMS), specifically Schiphol-Oost, which is the dedicated general aviation terminal. Rotterdam The Hague (RTM) is also used for short-leg European flights.",
  },
  {
    q: "How quickly can a charter be arranged?",
    a: "Quotes are typically returned inside the hour. Aircraft can be sourced and airborne in as little as two hours from confirmation, subject to crew callout and slot coordination.",
  },
  {
    q: "Do you offer empty legs?",
    a: "Yes — discounted one-way empty legs across Europe are listed on our Empty Legs page and refreshed daily. Set a route alert and we'll message you when a match comes up.",
  },
  {
    q: "Is Amsterdam Jets an operator or a broker?",
    a: "We are operator-agnostic. That means we source the optimal aircraft for each mission from a global fleet of more than 10,000 Wyvern and ARGUS-rated aircraft, rather than pushing a fixed fleet.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Private Jet Charter from Amsterdam — Empty Legs, Bespoke & Helicopter | Amsterdam Jets" },
      { name: "description", content: "Private jet charter from Amsterdam Schiphol to London, Paris, Ibiza, Mallorca, Dubai and beyond. Empty legs, bespoke charters and helicopter transfers — quotes within the hour." },
      { property: "og:title", content: "Private Jet Charter from Amsterdam — Amsterdam Jets" },
      { property: "og:description", content: "Charter any jet, anywhere. Empty legs, bespoke charters and helicopter transfers from Amsterdam Schiphol." },
      { property: "og:url", content: "https://amsterdamjet.com/" },
    ],
    links: [{ rel: "canonical", href: "https://amsterdamjet.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Amsterdam Jets",
          url: "https://amsterdamjet.com",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow">
        <section className="relative pt-24 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center overflow-hidden">
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.08] pointer-events-none select-none"
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1800&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-background/80 pointer-events-none" />
          <div className="relative z-10 mb-16">
            <SegmentedNav active="/bespoke" />
          </div>
          <h1 className="relative z-10 text-display-lg-mobile md:text-display-lg text-on-surface mb-6 max-w-4xl mx-auto">
            Charter any jet,<br />anywhere.
          </h1>
          <p className="relative z-10 text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            No fleet limits. No fixed routes. Tell us where you want to go and we handle everything —
            aircraft selection, permits, ground transport.
          </p>
          <Link
            to="/bespoke"
            className="relative z-10 animate-cta-glow bg-primary hover:bg-primary-container text-on-primary text-label-bold px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-105 mb-4"
          >
            Request Your Charter
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          <p className="relative z-10 text-sm text-on-surface-variant/70">Response within the hour · No obligation</p>
        </section>

        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                icon: "public",
                bg: "bg-primary-fixed",
                fg: "text-on-primary-fixed",
                title: "Global Reach",
                body: "Access to over 10,000 aircraft worldwide, ensuring the perfect match for your journey, wherever you are.",
              },
              {
                icon: "schedule",
                bg: "bg-secondary-fixed",
                fg: "text-on-secondary-fixed",
                title: "Rapid Response",
                body: "Aircraft can be sourced and ready for departure in as little as two hours from your confirmation.",
              },
              {
                icon: "verified_user",
                bg: "bg-error-container",
                fg: "text-on-error-container",
                title: "Verified Safety",
                body: "Rigorous vetting of all operators. We only partner with Wyvern and ARGUS rated carriers.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`${f.bg} rounded-full p-3 mb-6 ${f.fg}`}>
                  <span className="material-symbols-outlined">{f.icon}</span>
                </div>
                <h2 className="text-headline-md text-on-surface mb-4">{f.title}</h2>
                <p className="text-body-md text-on-surface-variant">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent z-10" />
            <img
              alt="Private jet at dusk"
              className="w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1800&auto=format&fit=crop"
            />
            <div className="absolute bottom-12 left-12 z-20 max-w-xl">
              <span className="bg-surface-container-lowest/20 backdrop-blur-md text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                The Fleet
              </span>
              <h2 className="text-headline-md text-on-primary mb-2">Uncompromising Comfort</h2>
              <p className="text-body-lg text-on-primary/90">
                Experience the pinnacle of private travel with our curated selection of heavy jets.
              </p>
            </div>
          </div>
        </section>

        {/* Image mosaic */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="md:row-span-2 aspect-[3/4] md:aspect-auto rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1200&auto=format&fit=crop" alt="Cabin interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900&auto=format&fit=crop" alt="Jet on tarmac" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=900&auto=format&fit=crop" alt="Approach" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&auto=format&fit=crop" alt="Above the clouds" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=900&auto=format&fit=crop" alt="Helicopter" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </section>

        {/* Popular routes from Amsterdam */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-10 text-center">
            <p className="text-label-bold uppercase text-primary mb-3">Popular routes</p>
            <h2 className="text-headline-md md:text-display-lg-mobile text-on-surface">
              Private jet charter from Amsterdam
            </h2>
            <p className="text-body-lg text-on-surface-variant mt-4 max-w-2xl mx-auto">
              Indicative pricing and flight times from Amsterdam Schiphol (AMS) to the destinations
              we fly most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {locations.map((l) => (
              <Link
                key={l.slug}
                to="/routes/$slug"
                params={{ slug: l.slug }}
                className="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden flex flex-col hover:border-primary/40 transition-colors"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={l.img}
                    alt={`Private jet Amsterdam to ${l.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-headline-md text-on-surface" style={{ fontSize: 20, lineHeight: "26px" }}>
                    Amsterdam to {l.name}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">{l.flightTime}</p>
                  <p className="text-body-md text-on-surface font-semibold">{l.priceFrom}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* About — short factual block for LLM/AI search */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="text-label-bold uppercase text-primary mb-3">About</p>
            <h2 className="text-headline-md md:text-display-lg-mobile text-on-surface mb-6">
              Private jet charter, based in Amsterdam.
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-4">
              Amsterdam Jets is an operator-agnostic private aviation broker headquartered in
              Amsterdam, the Netherlands. We arrange private jet, helicopter and empty-leg flights
              from Amsterdam Schiphol (AMS) and Rotterdam (RTM) to destinations across Europe, the
              Middle East, North Africa, the United States and the Caribbean.
            </p>
            <p className="text-body-lg text-on-surface-variant">
              Quotes are typically returned within the hour. Aircraft are sourced from a global
              fleet of more than 10,000 Wyvern and ARGUS-rated jets, and can be airborne in as
              little as two hours from confirmation. Reach our flight team 24/7 by WhatsApp or at
              Amsterdamjets@gmail.com.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headline-md md:text-display-lg-mobile text-on-surface mb-8">
              Frequently asked
            </h2>
            <div className="flex flex-col gap-4">
              {FAQS.map((f) => (
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
          </div>
        </section>


        {/* Closing CTA */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
          <div className="bg-on-surface text-on-primary rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-headline-md md:text-display-lg-mobile mb-4">Wheels up, today.</h2>
            <p className="text-body-lg opacity-80 max-w-xl mx-auto mb-8">
              Tell us where and when. We'll have aircraft options back within the hour.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/bespoke" className="animate-cta-glow bg-on-primary text-on-surface px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                Request Your Charter
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link to="/contact" className="border border-on-primary/30 text-on-primary px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 hover:bg-on-primary/10 transition-colors">
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
