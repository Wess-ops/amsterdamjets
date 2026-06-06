import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SegmentedNav } from "@/components/SegmentedNav";

export const Route = createFileRoute("/bespoke")({
  head: () => ({
    meta: [
      { title: "Bespoke Charter Request — Amsterdam Jets" },
      { name: "description", content: "Design your journey. Specify your routing, schedule, and preferences." },
    ],
  }),
  component: BespokePage,
});

const services = [
  "Ground Transportation (Chauffeur to/from aircraft)",
  "Bespoke In-flight Catering",
  "Traveling with Pets",
];

function BespokePage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow w-full pb-section-gap">
        <section className="w-full pt-20 pb-10 flex flex-col items-center justify-center text-center px-margin-mobile">
          <div className="mb-12">
            <SegmentedNav active="/" />
          </div>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface max-w-4xl mx-auto mb-6">
            Design your journey.
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Specify your routing, schedule, and preferences. Our operations team will curate the
            optimal aircraft for your mission.
          </p>
        </section>

        <section className="max-w-[800px] mx-auto px-margin-mobile md:px-0">
          <form className="w-full flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
            <FormCard title="Routing">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter relative">
                <div className="hidden md:block absolute top-1/2 left-[calc(50%-1.5rem)] w-12 h-px bg-outline-variant/50 -translate-y-1/2 z-0" />
                <div className="hidden md:flex absolute top-1/2 left-[calc(50%-12px)] w-6 h-6 bg-surface-container-lowest border border-outline-variant/50 rounded-full items-center justify-center z-10 -translate-y-1/2">
                  <span className="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_forward</span>
                </div>
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
                  <select className={`${inputCls} cursor-pointer`}>
                    <option>1-4 Passengers (Light Jet)</option>
                    <option>5-8 Passengers (Midsize Jet)</option>
                    <option>9-14 Passengers (Heavy Jet)</option>
                    <option>15+ Passengers (Airliner)</option>
                    <option>Not sure yet</option>
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
                className="bg-primary text-on-primary w-full md:w-auto px-12 py-4 rounded-full text-label-bold text-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                Request Your Charter
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="text-sm text-on-surface-variant/70">Response within the hour · No obligation</p>
            </div>
          </form>
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
