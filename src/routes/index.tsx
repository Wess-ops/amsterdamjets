import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SegmentedNav } from "@/components/SegmentedNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amsterdam Jets — Bespoke Charter" },
      { name: "description", content: "Charter any jet, anywhere. No fleet limits. No fixed routes." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow">
        <section className="pt-24 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center">
          <div className="mb-16">
            <SegmentedNav active="/bespoke" />
          </div>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-6 max-w-4xl mx-auto">
            Charter any jet,<br />anywhere.
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            No fleet limits. No fixed routes. Tell us where you want to go and we handle everything —
            aircraft selection, permits, ground transport.
          </p>
          <Link
            to="/bespoke"
            className="bg-primary hover:bg-primary-container text-on-primary text-label-bold px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-105 mb-4"
          >
            Request Your Charter
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          <p className="text-sm text-on-surface-variant/70">Response within the hour · No obligation</p>
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
                <h3 className="text-headline-md text-on-surface mb-4">{f.title}</h3>
                <p className="text-body-md text-on-surface-variant">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent z-10" />
            <img
              alt="Private Jet at Dusk"
              className="w-full h-full object-cover object-center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaKiPv5Tfa536UGiAdR99DB4wO6BysObsMiDSVAJcN0OSm_OVmqmhdm8XQTqvJ06ir8SEZH9pYJtyt6pqC32qD63NYEbRV1vNQceWnRlPdye6mNL8nVQUTpfMtxdG4KXKxEs25ER_WyNkmIAuIjuXvgegYqhvLJ0lRo2LtHBgXNVZJCWj-mspSdvouxf5cPHgvbU9JUHjf4pbGBEPFEt5jaGBycfKEbJwKIxwNFNrnufzYUHawaAWtZkBTidqYmkX53qPwHkFb8z8N"
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

        {/* Closing CTA */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
          <div className="bg-on-surface text-on-primary rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-headline-md md:text-display-lg-mobile mb-4">Wheels up, today.</h2>
            <p className="text-body-lg opacity-80 max-w-xl mx-auto mb-8">
              Tell us where and when. We'll have aircraft options back within the hour.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/bespoke" className="bg-on-primary text-on-surface px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
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
