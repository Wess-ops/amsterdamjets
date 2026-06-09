import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SegmentedNav } from "@/components/SegmentedNav";
import { locations } from "@/lib/locations";

export const Route = createFileRoute("/empty-legs")({
  head: () => ({
    meta: [
      { title: "Empty Legs — Amsterdam Jets" },
      { name: "description", content: "Discounted empty-leg private jet flights across Europe." },
    ],
  }),
  component: EmptyLegsPage,
});

const legs = [
  {
    from: "Rotterdam",
    to: "Cannes",
    aircraft: "Cessna Citation CJ2",
    meta: "June 7th · 13:40 · 6 Passengers",
    normal: "€15.000",
    price: "€7.700",
    detail: "Entire Jet",
    img: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=1200&auto=format&fit=crop",
  },
  {
    from: "Amsterdam",
    to: "Ibiza",
    aircraft: "Embraer Phenom 300",
    meta: "June 15th · 12:40 · 6 Passengers",
    normal: "€25.000",
    price: "€12.500",
    detail: "1 Pax · €100 per extra pax",
    img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&auto=format&fit=crop",
  },
  {
    from: "Amsterdam",
    to: "Malaga",
    aircraft: "Cessna Citation CJ3",
    meta: "June 7–9th · 09:00 · 6 Passengers",
    normal: "€25.000",
    price: "€12.930",
    detail: "Entire Jet",
    img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1200&auto=format&fit=crop",
  },
];

function EmptyLegsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow">
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex justify-center">
          <SegmentedNav active="/empty-legs" />
        </section>
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {legs.map((l) => (
              <article
                key={l.from + l.to}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden flex flex-col group transition-all hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    alt={`${l.from} to ${l.to}`}
                    src={l.img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <span className="bg-on-surface/80 text-on-primary px-4 py-1.5 rounded-full text-label-bold backdrop-blur-sm">
                      {l.aircraft}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <span className="bg-surface-container px-3 py-1 rounded-full text-[12px] font-bold tracking-wider text-primary uppercase inline-block mb-4">
                      Empty Leg
                    </span>
                    <CityHeading name={l.from} />
                    <span className="material-symbols-outlined text-on-surface-variant mb-1 block">
                      arrow_downward
                    </span>
                    <CityHeading name={l.to} />
                  </div>
                  <div className="text-body-md text-on-surface-variant mb-8 flex-grow">
                    <p>{l.meta}</p>
                  </div>
                  <div className="flex justify-between items-end mb-6">
                    <div className="text-right w-full">
                      <p className="text-body-md text-outline line-through mb-1">Normally {l.normal}</p>
                      <p className="text-price-display text-on-surface leading-none">{l.price}</p>
                      <p className="text-body-md text-on-surface-variant mt-1">{l.detail}</p>
                    </div>
                  </div>
                  <Link
                    to="/bespoke"
                    className="w-full bg-primary text-on-primary py-4 rounded-lg text-label-bold hover:bg-primary-container transition-colors flex items-center justify-center gap-2"
                  >
                    Book Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function CityHeading({ name }: { name: string }) {
  const slug = locations.find(
    (l) => l.name.toLowerCase() === name.toLowerCase(),
  )?.slug;
  if (slug) {
    return (
      <Link
        to="/routes/$slug"
        params={{ slug }}
        className="text-headline-md text-on-surface hover:text-primary transition-colors block"
      >
        {name}
      </Link>
    );
  }
  return <h3 className="text-headline-md text-on-surface">{name}</h3>;
}
