import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Private Jet Charter Cost Guide 2026 — Hourly Rates & Pricing | Amsterdam Jets" },
      { name: "description", content: "How much does a private jet charter cost? Guide to 2026 hourly rates for Light, Midsize, Heavy and Ultra-Long-Range jets. Factors, empty-leg discounts and Amsterdam route pricing." },
      { property: "og:title", content: "Private Jet Charter Cost Guide 2026 — Amsterdam Jets" },
      { property: "og:description", content: "Hourly rates, aircraft categories and what drives private jet charter pricing. Empty-leg discounts up to 70%." },
      { property: "og:url", content: "https://amsterdamjet.com/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://amsterdamjet.com/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How much does it cost to charter a private jet per hour?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Light jets average €2,200–€3,200 per hour, midsize jets €3,200–€4,500, super-midsize €4,000–€5,500, heavy jets €5,500–€8,000, and ultra-long-range jets €8,500–€13,000 per hour.",
              },
            },
            {
              "@type": "Question",
              name: "What factors affect private jet charter pricing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Aircraft size and category, flight duration and distance, repositioning fees, airport handling and landing fees, crew costs, fuel surcharges, de-icing in winter, and peak-season demand all influence the final charter price.",
              },
            },
            {
              "@type": "Question",
              name: "Are empty-leg flights cheaper?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Empty-leg flights — repositioning legs without passengers — are typically discounted 40% to 70% off standard charter rates. They suit flexible travellers who can align with a pre-scheduled routing.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: PricingPage,
});

const HOURLY_RATES = [
  {
    category: "Light Jet",
    examples: "Citation CJ2, Phenom 300, Learjet 40",
    pax: "4–7",
    range: "2,000–2,500 km",
    hourly: "€2,200 – €3,200",
    notes: "Ideal for short European hops: Amsterdam–Paris, Amsterdam–London.",
  },
  {
    category: "Midsize Jet",
    examples: "Citation XLS, Hawker 900XP, Gulfstream G150",
    pax: "6–8",
    range: "3,000–3,800 km",
    hourly: "€3,200 – €4,500",
    notes: "Comfortable for Amsterdam–Madrid or Amsterdam–Vienna non-stop.",
  },
  {
    category: "Super-Midsize",
    examples: "Citation Latitude, Challenger 350, Gulfstream G280",
    pax: "8–10",
    range: "5,500–6,500 km",
    hourly: "€4,000 – €5,500",
    notes: "Transcontinental range. Amsterdam–Dubai non-stop in some configurations.",
  },
  {
    category: "Heavy Jet",
    examples: "Gulfstream G450, Challenger 650, Falcon 900",
    pax: "10–14",
    range: "7,000–8,500 km",
    hourly: "€5,500 – €8,000",
    notes: "Amsterdam–New York or Amsterdam–Cape Town with full cabin service.",
  },
  {
    category: "Ultra-Long-Range",
    examples: "Gulfstream G650, Global 7500, Falcon 8X",
    pax: "12–19",
    range: "11,000–14,000 km",
    hourly: "€8,500 – €13,000",
    notes: "Non-stop to Singapore, Los Angeles or Buenos Aires. Stand-up cabins, full beds.",
  },
];

const AMSTERDAM_ROUTES = [
  { route: "Amsterdam – Paris", aircraft: "Light Jet", estPrice: "€7,900", flightTime: "1h 10m" },
  { route: "Amsterdam – London", aircraft: "Light Jet", estPrice: "€8,500", flightTime: "1h 15m" },
  { route: "Amsterdam – Ibiza", aircraft: "Midsize Jet", estPrice: "€14,500", flightTime: "2h 30m" },
  { route: "Amsterdam – Mallorca", aircraft: "Midsize Jet", estPrice: "€16,000", flightTime: "2h 40m" },
  { route: "Amsterdam – Dubai", aircraft: "Super-Midsize / Heavy", estPrice: "€55,000+", flightTime: "6h 45m" },
  { route: "Amsterdam – New York", aircraft: "Heavy / Ultra-Long-Range", estPrice: "€85,000+", flightTime: "8h 15m" },
];

const COST_FACTORS = [
  {
    title: "Aircraft Category",
    body: "Larger jets command higher hourly rates but reduce per-passenger cost on group charters. Light jets suit 1–4 passengers; heavy and ultra-long-range jets serve 10–19 passengers with bedroom and shower configurations.",
  },
  {
    title: "Flight Duration & Distance",
    body: "Charter pricing is fundamentally hourly. A 45-minute sector still incurs minimum daily charges (typically 1.0–2.0 flight hours). Ultra-long sectors add crew-rest and hotel costs for multi-leg journeys.",
  },
  {
    title: "Repositioning Fees",
    body: "If the nearest suitable aircraft is not at your departure airport, the empty positioning leg to pick you up is billable. Booking from a busy hub like Amsterdam Schiphol reduces this risk.",
  },
  {
    title: "Airport & Handling Fees",
    body: "Landing, parking, slot and handling fees vary by airport. Premium slots at Cannes, Geneva or St. Moritz during peak season can add €3,000–€8,000 to a single trip.",
  },
  {
    title: "Fuel Surcharges",
    body: "Jet-A1 price volatility is passed through as a fuel-surcharge line item or built into the hourly rate. Long-haul flights are more sensitive to fuel-price swings than short hops.",
  },
  {
    title: "Peak Season & Demand",
    body: "Cannes Film Festival, Monaco Grand Prix, Art Basel and Christmas/New Year drive 20–50% premiums. Booking 2–4 weeks ahead secures better rates and aircraft choice.",
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-24 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <p className="text-label-bold uppercase text-primary mb-3">Pricing Guide</p>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-6 max-w-4xl mx-auto">
            Private Jet Charter Costs in 2026
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Hourly rates, aircraft categories and the variables that shape your quote. No hidden fees — just transparent aviation pricing.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/bespoke"
              className="animate-cta-glow bg-primary hover:bg-primary-container text-on-primary text-label-bold px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-105"
            >
              Request a Quote
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              to="/empty-legs"
              className="border border-outline-variant text-on-surface px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 hover:bg-surface-container transition-colors"
            >
              Browse Empty Legs
            </Link>
          </div>
        </section>

        {/* Hourly rates table */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-10">
            <p className="text-label-bold uppercase text-primary mb-3">Hourly rates</p>
            <h2 className="text-headline-md md:text-display-lg-mobile text-on-surface mb-4">
              What does a private jet cost per hour?
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              These are indicative European charter rates for 2026, inclusive of aircraft, crew and standard handling. Fuel surcharges, peak premiums and special requests are quoted separately.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="py-4 pr-6 text-label-bold text-on-surface">Category</th>
                  <th className="py-4 pr-6 text-label-bold text-on-surface hidden md:table-cell">Examples</th>
                  <th className="py-4 pr-6 text-label-bold text-on-surface">Pax</th>
                  <th className="py-4 pr-6 text-label-bold text-on-surface hidden sm:table-cell">Range</th>
                  <th className="py-4 pr-6 text-label-bold text-primary text-right">Hourly Rate</th>
                </tr>
              </thead>
              <tbody>
                {HOURLY_RATES.map((row) => (
                  <tr key={row.category} className="border-b border-outline-variant/30 hover:bg-surface-container/40 transition-colors">
                    <td className="py-5 pr-6 align-top">
                      <span className="text-headline-sm text-on-surface font-semibold">{row.category}</span>
                      <p className="text-body-sm text-on-surface-variant mt-1 md:hidden">{row.examples}</p>
                      <p className="text-body-sm text-on-surface-variant mt-1 sm:hidden">{row.range}</p>
                    </td>
                    <td className="py-5 pr-6 text-body-md text-on-surface-variant hidden md:table-cell align-top">{row.examples}</td>
                    <td className="py-5 pr-6 text-body-md text-on-surface-variant align-top">{row.pax}</td>
                    <td className="py-5 pr-6 text-body-md text-on-surface-variant hidden sm:table-cell align-top">{row.range}</td>
                    <td className="py-5 pr-6 text-body-md text-primary font-bold text-right align-top whitespace-nowrap">{row.hourly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-on-surface-variant/70 mt-4">
            * Rates exclude VAT where applicable, positioning, de-icing, VIP handling and catering upgrades. Final quotes are provided within the hour.
          </p>
        </section>

        {/* Cost factors */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-10">
            <p className="text-label-bold uppercase text-primary mb-3">What drives the price</p>
            <h2 className="text-headline-md md:text-display-lg-mobile text-on-surface mb-4">
              6 variables that influence your charter quote
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {COST_FACTORS.map((f) => (
              <div
                key={f.title}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 flex flex-col"
              >
                <h3 className="text-headline-sm text-on-surface font-semibold mb-3">{f.title}</h3>
                <p className="text-body-md text-on-surface-variant">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Amsterdam routes */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-10">
            <p className="text-label-bold uppercase text-primary mb-3">Popular routes from Amsterdam</p>
            <h2 className="text-headline-md md:text-display-lg-mobile text-on-surface mb-4">
              Estimated charter prices from Schiphol
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Indicative one-way pricing for the routes we fly most often. Return trips and multi-leg journeys are quoted on request.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {AMSTERDAM_ROUTES.map((r) => (
              <div
                key={r.route}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 flex flex-col"
              >
                <p className="text-label-bold text-primary mb-2">{r.route}</p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-headline-md text-on-surface font-bold">{r.estPrice}</span>
                  <span className="text-body-sm text-on-surface-variant">one-way</span>
                </div>
                <div className="flex flex-col gap-1 text-body-sm text-on-surface-variant">
                  <span className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">airplanemode_active</span>
                    {r.aircraft}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    {r.flightTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Empty legs explainer */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="relative w-full rounded-3xl overflow-hidden bg-on-surface text-on-primary p-10 md:p-16">
            <div className="max-w-3xl">
              <p className="text-label-bold uppercase text-primary-fixed mb-3">Empty Leg Discounts</p>
              <h2 className="text-headline-md md:text-display-lg-mobile mb-4">
                Save 40–70% with empty-leg flights
              </h2>
              <p className="text-body-lg opacity-80 mb-6">
                When a private jet repositions empty to its next base or pick-up point, that leg is sold at a steep discount. If your travel plans are flexible, empty legs offer the same aircraft and service at a fraction of the cost.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/empty-legs"
                  className="animate-cta-glow bg-on-primary text-on-surface px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  View Empty Legs
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / long-form */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="text-label-bold uppercase text-primary mb-3">Common questions</p>
            <h2 className="text-headline-md md:text-display-lg-mobile text-on-surface mb-8">
              Private jet pricing, answered
            </h2>
            <div className="flex flex-col gap-6">
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6">
                <h3 className="text-on-surface font-bold mb-2" style={{ fontSize: 18 }}>
                  Is the hourly rate the total cost?
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  The hourly rate covers aircraft, crew and basic handling. Final invoices add fuel surcharges, landing fees, parking, de-icing (winter), VIP handling, catering upgrades and any positioning required to bring the aircraft to your departure airport.
                </p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6">
                <h3 className="text-on-surface font-bold mb-2" style={{ fontSize: 18 }}>
                  Do you charge for crew overnight stays?
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  On day trips within Europe, crew costs are included. For multi-day trips or journeys that exceed daily duty limits, crew hotels and per-diems are added to the quote — typically €300–€600 per crew member per night.
                </p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6">
                <h3 className="text-on-surface font-bold mb-2" style={{ fontSize: 18 }}>
                  Can I reduce cost by choosing a different airport?
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  Yes. Secondary airports often have lower landing and handling fees. Flying into London Biggin Hill instead of Heathrow, or Barcelona instead of Girona, can save €1,500–€4,000 on a single leg. We advise on the optimal airport pair for every mission.
                </p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6">
                <h3 className="text-on-surface font-bold mb-2" style={{ fontSize: 18 }}>
                  How do I get an exact quote?
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  Submit your route, dates and passenger count via our bespoke charter form. We return firm, all-inclusive quotes within the hour — no hidden fees, no obligation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-headline-md md:text-display-lg-mobile text-on-surface mb-4">
              Ready for a firm quote?
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
              Tell us your route, dates and preferences. We'll return aircraft options and all-inclusive pricing within the hour.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/bespoke"
                className="animate-cta-glow bg-primary text-on-primary px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Request Your Charter
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="border border-outline-variant text-on-surface px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 hover:bg-surface-container transition-colors"
              >
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
