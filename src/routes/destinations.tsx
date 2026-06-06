import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Amsterdam Jets" },
      { name: "description", content: "From the Riviera to the Greek islands — we fly the routes that matter." },
    ],
  }),
  component: DestinationsPage,
});

const destinations = [
  { name: "Ibiza", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1eftYsRDwzMLrNDchuR4MFJQkJlYSzo3fOZdUQr0PhpLgYxg0rPuB933-ii4eIQw14VbKboFpxN0TCQeIhGI3v0LLihOUCOmh4JlIDKI00qPs2G7hNx0cE29GnfIjWSQP0ar2pppGKW-E7WNgwWKuZldRKanxHf64Sj4ipD0_xryX86TUQYl9WojLa7lwVwaJAjbkdltXoDC-uhEJab8ZqiuQ3okGD3VZ7f-_w90FTpvaQMogxGBi_sq-vPaBKXIclf1u_2jR6_A" },
  { name: "Nice", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu34DMdaPbN14HNVSrfj4WklpVM1jXAeJBD5OS3rgBzMTSNmw60h8RmzBA_2LI3be1wM8v_YGgVRPHXyz5s7o9_0C4RzlDvXP35UxKEezcpvJg1B0KDpw_PRsFCXfeBi3tQy2T3Lujxdyx7mtevu83D_dqjDXswQud6Y5C68sR_f3JQ28LwOWBoq66zytQMA1Po3SZXF_4z8oaN-dgiEm72Z1c-zR1womtdzMnDh0Z1FhazMs7KW-W2z0yX0bSI80NmqwTmnYEUQ7T" },
  { name: "Mykonos", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqVUDL_xXSsJFBvDVEvDiQ0UQhLq0rDFduCTqxpaB91ftiSMctyjPlUidKYnV27nOQVuI_qK2ctgZnpc-p6FXfRRcGitqsBwLHTA2hSt30rC1nXUSTDHAzv7ixYj-bfqwtzSGoU9xqloe8MWd831DriUnl9toSOzTaabnJgeg1sBcNiheXzO9SFb4FLsMwPb-9mZImm8h0YZ-vZuFryU534UY0U1T4Wha8JPsLmMS_ixpx-Pty0IWdoT-721UT9UEanGY-2t6VIj1x" },
  { name: "Sardinia", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIEjCT3oymFdh7fjMR6_BU206kuDtuXC-WazB-ye38AnZbKmQlMmdiAh81MuaFsinatph41uVdfRlR3vqB7CWyrR-BCoo5DbKyeTmFG5ovQOaSq0nRQ-kT8M50yWr8GpJsO9pMgcMAwAAEZ7Td3377xGBmjxZRrRSiv7DyssAz7pReL5sAWAoldnvxDm0xP1LGaHA6PD7bnyKbsry1V8sP9lRNTKUMIPUzXbyFewzuPqLqvBjcpDIcXPfVs-sw900QHzSlv0M-r0eM" },
];

function DestinationsPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (delta: number) =>
    scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow pt-section-gap pb-section-gap">
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-label-bold text-on-surface-variant uppercase mb-4">Where we fly</p>
              <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface">
                Europe and beyond.
              </h1>
            </div>
            <div className="max-w-md md:text-right">
              <p className="text-body-lg text-on-surface-variant">
                From the Riviera to the Greek islands —<br className="hidden md:block" />
                we fly the routes that matter.
              </p>
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x snap-mandatory"
            >
              {destinations.map((d) => (
                <div
                  key={d.name}
                  className="relative flex-none w-[280px] md:w-[320px] lg:w-[380px] aspect-[3/4] rounded-xl overflow-hidden snap-start group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                >
                  <img
                    alt={d.name}
                    src={d.img}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 card-gradient" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                    <h3 className="text-headline-md text-on-primary mb-1">{d.name}</h3>
                  </div>
                </div>
              ))}
              <div className="flex-none w-4 md:w-12" />
            </div>
            <div className="hidden md:flex justify-end gap-2 mt-4 pr-12">
              <button
                onClick={() => scroll(-400)}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
              </button>
              <button
                onClick={() => scroll(400)}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
