import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SegmentedNav } from "@/components/SegmentedNav";

export const Route = createFileRoute("/helicopter")({
  head: () => ({
    meta: [
      { title: "Helicopter Charter — Amsterdam Jets" },
      {
        name: "description",
        content:
          "On-demand helicopter charters across Europe for business, leisure, transfers and real estate showings.",
      },
    ],
  }),
  component: HelicopterPage,
});

const useCases = [
  {
    icon: "business_center",
    title: "Business",
    body: "Skip traffic, hit three cities in a day, land closer to the meeting than any car or commercial flight allows.",
  },
  {
    icon: "beach_access",
    title: "Leisure",
    body: "Airport-to-villa transfers on the Côte d'Azur, Mallorca, Sardinia or the Amalfi coast — door to door in minutes.",
  },
  {
    icon: "home_work",
    title: "Real Estate",
    body: "Aerial property showings and same-day multi-site tours for private estates, vineyards, and development sites.",
  },
  {
    icon: "celebration",
    title: "Events",
    body: "Weddings, F1 weekends, yacht boarding, festivals — arrive on schedule, leave when you want.",
  },
];

function HelicopterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow">
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex justify-center">
          <SegmentedNav active="/helicopter" />
        </section>

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20 text-center">
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-6 max-w-4xl mx-auto">
            Helicopter charter,<br />all across Europe.
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Transport, leisure, business. From a 15-minute airport transfer to a multi-stop real
            estate tour — we coordinate the aircraft, the pilots and the landing permits.
          </p>
          <Link
            to="/bespoke"
            className="bg-primary hover:bg-primary-container text-on-primary text-label-bold px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            Request a Helicopter
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </section>

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-8 flex flex-col items-start"
              >
                <div className="bg-primary-fixed text-on-primary-fixed rounded-full p-3 mb-6">
                  <span className="material-symbols-outlined">{u.icon}</span>
                </div>
                <h3 className="text-headline-md text-on-surface mb-3">{u.title}</h3>
                <p className="text-body-md text-on-surface-variant">{u.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop pb-section-gap">
          <div className="max-w-container-max mx-auto bg-on-surface rounded-3xl p-10 md:p-16 text-on-primary">
            <h2 className="text-headline-md md:text-display-lg-mobile mb-6 max-w-3xl">
              From Monaco to Mallorca — landed in under an hour.
            </h2>
            <p className="text-body-lg opacity-80 max-w-2xl mb-8">
              We operate light singles, twins and VIP-configured helicopters across every major
              European market. Tell us where and when, we handle the rest — including helipad
              clearance at private estates, hotels and marinas.
            </p>
            <Link
              to="/bespoke"
              className="bg-on-primary text-on-surface px-6 py-3 rounded-full text-label-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Plan your flight
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
