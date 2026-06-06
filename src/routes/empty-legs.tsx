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
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD56qWY6nfI7c2pHcmTxGmPwMes09APSbKr5mYJdpfBAftNQ_p-yNXLgIQuel1FDpuOYMVGZFKG6psXxb2atnd0Mv7X1_8ZP5gZeweKXjzv1mun0uCN8macl-IxCGtEL1NVjr_YJkCCD5DgBfClq3IeRpMNYFD__S1hE5d0KaFk5N5CcQbheHkmvczdYV7uN2Q6UEqTqpPuZLnQIJ8fF-XMvsI4mFGnqMLC7vbQJaUO0HRitbKMLEEWASMgA0Fkt1mAf78A_sJ1Jhte",
  },
  {
    from: "Amsterdam",
    to: "Ibiza",
    aircraft: "Embraer Phenom 300",
    meta: "June 15th · 12:40 · 6 Passengers",
    normal: "€25.000",
    price: "€12.500",
    detail: "1 Pax · €100 per extra pax",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAj4Iax-SwzMAzsh06RrwOJXpfRcwIb8p_MypiU0eo_WjValG-bsIRahekNsaVOd6Od89wJKQ0YePZxBiLy26NxPstYElVKrmx0KwZk38DmDrnOAa7VSnqLSr9nPNCwX6Ct2iFob2QQyuENXnkhQ90jahr5WgNpjfZupkSVzLLo8R7LXNGSaDod0OTfPfBwpJDPabvtGvIpmDpXXkz0cgN6SlJHEJ3odebKvttDDLX-mqp-iP0gUI0R2R7Zw3oWxczjBYOPHPVs3OH8",
  },
  {
    from: "Amsterdam",
    to: "Malaga",
    aircraft: "Cessna Citation CJ3",
    meta: "June 7–9th · 09:00 · 6 Passengers",
    normal: "€25.000",
    price: "€12.930",
    detail: "Entire Jet",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDByrUnYNETRTyrHcgzpEDRw_kImynbgltBhAC1iTGk_dSVszafhdtCBLnBZmbgQa9cGMtW2401BTZNoA4ZTuXHYZRhDNGtneCuABRsIrE8UCKu3TekvGVY4fdQa6DWEOfT73LknBS4bBBKZ-2CH3dS9mKvCjxfMgI7RO4XTEegBXvfnI7hhXI3aKqclfs19Gc2qIEoGkDnfOMcN-y7ecIOGWJN2KJDTMFT6YbipWyRe4boAsLDdRTmzn4xX7nYM5ZaHB9AKZTcnv3o",
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
                    <h3 className="text-headline-md text-on-surface mb-1">{l.from}</h3>
                    <span className="material-symbols-outlined text-on-surface-variant mb-1 block">
                      arrow_downward
                    </span>
                    <h3 className="text-headline-md text-on-surface">{l.to}</h3>
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
                  <button className="w-full bg-primary text-on-primary py-4 rounded-lg text-label-bold hover:bg-primary-container transition-colors flex items-center justify-center gap-2">
                    Book Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
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
