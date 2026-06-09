import { createFileRoute } from "@tanstack/react-router";
import { useId, useState, cloneElement, isValidElement } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SegmentedNav } from "@/components/SegmentedNav";
import jetInteriorAsset from "@/assets/jet-interior-hero.jpg.asset.json";

export const Route = createFileRoute("/bespoke")({
  head: () => ({
    meta: [
      { title: "Bespoke Private Jet Charter from Amsterdam — Amsterdam Jets" },
      { name: "description", content: "Design your private jet charter from Amsterdam Schiphol. Specify routing, schedule and preferences — operator-agnostic sourcing from 10,000+ aircraft." },
      { property: "og:title", content: "Bespoke Private Jet Charter from Amsterdam" },
      { property: "og:description", content: "Design your private jet charter from Amsterdam Schiphol. Operator-agnostic sourcing, quotes within the hour." },
      { property: "og:url", content: "https://amsterdamjet.com/bespoke" },
    ],
    links: [{ rel: "canonical", href: "https://amsterdamjet.com/bespoke" }],
  }),
  component: BespokePage,
});

const services = [
  "Ground Transportation (Chauffeur to/from aircraft)",
  "Bespoke In-flight Catering",
  "Traveling with Pets",
  "Stay (Villa or Hotel booking)",
  "Leisure (Yachts, private wine tours, experiences)",
];

const paxOptions = [
  ...Array.from({ length: 20 }, (_, i) => `${i + 1} Passenger${i === 0 ? "" : "s"}`),
  "20+ Passengers",
];

function BespokePage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow w-full pb-section-gap">
        <div className="relative overflow-hidden">
          <img
            src={jetInteriorAsset.url}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-15"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <div className="relative">
            <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex justify-center">
              <SegmentedNav active="/bespoke" />
            </section>
            <section className="w-full pb-10 flex flex-col items-center justify-center text-center px-margin-mobile">
              <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface max-w-4xl mx-auto mb-6">
                Design your journey.
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Specify your routing, schedule, and preferences. Our operations team will curate the
                optimal aircraft for your mission.
              </p>
            </section>
          </div>
        </div>

        <section className="max-w-[800px] mx-auto px-margin-mobile md:px-0">
          <form className="w-full flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
            <FormCard title="Routing">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <Field icon="flight_takeoff" label="From">
                  <input type="text" placeholder="City or Airport Code" className={inputCls} />
                </Field>
                <Field icon="flight_land" label="To">
                  <input type="text" placeholder="City or Airport Code" className={inputCls} />
                </Field>
              </div>
            </FormCard>

            <FormCard title="Schedule">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <Field icon="calendar_today" label="Departure Date">
                  <input type="date" className={inputCls} />
                </Field>
                <Field icon="schedule" label="Preferred Time">
                  <input type="time" className={inputCls} />
                </Field>
              </div>
              <label className="flex items-center gap-3 mt-2 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" />
                <span className="text-body-md text-on-surface">Add return flight</span>
              </label>
            </FormCard>

            <FormCard title="Details & Requirements">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <Field icon="group" label="Passengers">
                  <select className={`${inputCls} cursor-pointer`} defaultValue="4 Passengers">
                    {paxOptions.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <label className="text-label-bold text-on-surface-variant">Additional Services</label>
                <div className="flex flex-col gap-3">
                  {services.map((s) => {
                    const on = !!checked[s];
                    return (
                      <label key={s} className="flex items-center gap-3 cursor-pointer group">
                        <span
                          className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                            on ? "border-primary" : "border-outline-variant group-hover:border-primary"
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined text-[16px] transition-colors ${
                              on ? "text-primary" : "text-transparent group-hover:text-primary/40"
                            }`}
                          >
                            check
                          </span>
                        </span>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={on}
                          onChange={(e) => setChecked((c) => ({ ...c, [s]: e.target.checked }))}
                        />
                        <span className="text-body-md text-on-surface">{s}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </FormCard>

            <div className="flex flex-col items-center gap-4 pt-8">
              <button
                type="submit"
                className="animate-cta-glow bg-primary text-on-primary w-full md:w-auto px-12 py-4 rounded-full text-label-bold text-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-2"
              >
                Request Your Charter
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="text-sm text-on-surface-variant/70">Response within the hour · No obligation</p>
            </div>
          </form>
        </section>

        {/* What is bespoke charter */}
        <section className="max-w-[900px] mx-auto px-margin-mobile md:px-0 mt-section-gap">
          <p className="text-label-bold uppercase text-primary mb-3">What is a bespoke charter?</p>
          <h2 className="text-headline-md md:text-display-lg-mobile text-on-surface mb-6">
            One brief. The right aircraft. Every time.
          </h2>
          <div className="grid md:grid-cols-2 gap-gutter text-body-lg text-on-surface-variant">
            <p>
              A bespoke charter means we build your flight from a blank sheet. You tell us where,
              when, and with whom — we source the optimal aircraft from a global fleet of more than
              10,000 jets, handle slots, permits, catering and ground transport.
            </p>
            <p>
              You are never tied to a single operator, fleet or hub. That's why bespoke is the most
              cost-efficient way to fly privately for anything outside a standard return: one-ways,
              multi-leg trips, time-critical missions, or oversized groups.
            </p>
          </div>
          <ul className="grid md:grid-cols-3 gap-gutter mt-10">
            {[
              { i: "verified", t: "Operator-agnostic", b: "We pick the best aircraft for your trip, not the one we happen to own." },
              { i: "savings", t: "Better pricing", b: "Live access to empty-leg and repositioning rates across Europe and beyond." },
              { i: "support_agent", t: "One point of contact", b: "A dedicated flight coordinator from quote to landing — 24/7." },
            ].map((x) => (
              <li key={x.t} className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6">
                <span className="material-symbols-outlined text-primary mb-3 block">{x.i}</span>
                <h3 className="text-headline-md text-on-surface mb-2" style={{ fontSize: 20, lineHeight: "28px" }}>
                  {x.t}
                </h3>
                <p className="text-body-md text-on-surface-variant">{x.b}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Concierges — black section */}
        <section className="px-margin-mobile md:px-margin-desktop mt-section-gap">
          <div className="max-w-container-max mx-auto bg-on-surface text-on-primary rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-label-bold uppercase text-on-primary/60 mb-3">For Concierges</p>
              <h2 className="text-headline-md md:text-display-lg-mobile mb-6">
                We love working with concierges.
              </h2>
              <p className="text-body-lg opacity-80 mb-6">
                Lifestyle managers, family offices and 5-star hotel concierges trust us to deliver
                charter requests on tight timelines, with discretion and clean commission terms.
              </p>
              <ul className="space-y-3 text-body-md opacity-90">
                {[
                  "Dedicated concierge line — quotes back inside the hour",
                  "Transparent commission on every booking",
                  "White-label quote sheets and itineraries",
                  "Multi-leg, multi-aircraft and group movements handled end-to-end",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="material-symbols-outlined text-on-primary/60">check</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-on-primary/5 border border-on-primary/10 rounded-2xl p-8">
              <h3 className="text-headline-md mb-4" style={{ fontSize: 22, lineHeight: "30px" }}>
                Open a concierge account
              </h3>
              <p className="text-body-md opacity-80 mb-6">
                Get a dedicated coordinator and preferential terms for your clients' charter
                requests.
              </p>
              <a
                href="mailto:Amsterdamjets@gmail.com?subject=Concierge%20account%20request"
                className="bg-on-primary text-on-surface px-6 py-3 rounded-full text-label-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Amsterdamjets@gmail.com
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Corporate flyers */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-section-gap">
          <div className="grid md:grid-cols-2 gap-gutter items-start">
            <div>
              <p className="text-label-bold uppercase text-primary mb-3">Corporate flyers</p>
              <h2 className="text-headline-md md:text-display-lg-mobile text-on-surface mb-6">
                Built for the way executives actually fly.
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-6">
                Roadshows, M&A meetings, board offsites, plant visits — we move executive teams and
                deal rooms across Europe and the Atlantic on schedule, with a single invoice and
                full reporting.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-gutter">
              {[
                { i: "trending_up", t: "Roadshow programs", b: "Multi-city, multi-day investor and sales tours coordinated end-to-end." },
                { i: "policy", t: "Travel policy fit", b: "Documented sourcing, safety standards and audit-ready invoicing." },
                { i: "groups", t: "Board & team movements", b: "Up to 19 seats per aircraft, with secure meeting space at altitude." },
                { i: "handshake", t: "M&A discretion", b: "Code-named trips, NDA-friendly crews, no public flight tracking." },
              ].map((x) => (
                <li key={x.t} className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6">
                  <span className="material-symbols-outlined text-primary mb-3 block">{x.i}</span>
                  <h3 className="text-on-surface mb-2 font-bold" style={{ fontSize: 18 }}>
                    {x.t}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">{x.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-outline-variant/50 py-3 text-body-lg text-on-surface focus:outline-none focus:border-primary focus:border-b-2 transition-all placeholder:text-on-surface-variant/40";

function FormCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)]">
      <h2 className="text-headline-md text-on-surface mb-2 border-b border-outline-variant/20 pb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Field({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 z-20">
      <label className="text-label-bold text-on-surface-variant flex items-center gap-2">
        <span className="material-symbols-outlined text-lg">{icon}</span> {label}
      </label>
      {children}
    </div>
  );
}
