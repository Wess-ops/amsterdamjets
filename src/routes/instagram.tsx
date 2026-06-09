import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/instagram")({
  head: () => ({
    meta: [
      { title: "Instagram @amsterdamjets — Amsterdam Jets" },
      { name: "description", content: "Follow @amsterdamjets — empty legs, charters and helicopter trips across the globe." },
      { property: "og:title", content: "Follow @amsterdamjets" },
      { property: "og:description", content: "Empty legs, charters and helicopter trips across the globe." },
      { property: "og:url", content: "https://amsterdamjet.com/instagram" },
    ],
    links: [{ rel: "canonical", href: "https://amsterdamjet.com/instagram" }],
  }),
  component: InstagramPage,
});

const tiles = [
  "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=900&auto=format&fit=crop",
];

function InstagramPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow w-full pb-section-gap">
        <section className="pt-24 pb-12 text-center px-margin-mobile max-w-[800px] mx-auto">
          <p className="text-label-bold uppercase text-primary mb-3">@amsterdamjets</p>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
            Follow the flight deck.
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-8">
            13.8k followers · Empty legs, charters and helicopter trips, posted as they happen.
          </p>
          <a
            href="https://instagram.com/amsterdamjets"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-on-surface text-on-primary px-8 py-4 rounded-full text-label-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined">photo_camera</span>
            Open on Instagram
          </a>
        </section>

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {tiles.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/amsterdamjets"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden rounded-2xl group relative"
              >
                <img
                  src={src}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/40 transition-colors flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    open_in_new
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
