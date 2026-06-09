import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Amsterdam Jets" },
      { name: "description", content: "Reach our flight team 24/7. Quotes within the hour." },
      { property: "og:title", content: "Contact — Amsterdam Jets" },
      { property: "og:description", content: "Reach our flight team 24/7. Quotes within the hour." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-grow w-full pb-section-gap">
        <section className="pt-24 pb-12 text-center px-margin-mobile">
          <p className="text-label-bold uppercase text-primary mb-3">Get in touch</p>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface max-w-3xl mx-auto mb-6">
            Speak with our flight team.
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Available 24/7. Quotes typically returned inside the hour.
          </p>
        </section>

        <section className="max-w-[900px] mx-auto px-margin-mobile grid md:grid-cols-3 gap-gutter mb-section-gap">
          {[
            { i: "mail", t: "Email", v: "Amsterdamjets@gmail.com", href: "mailto:Amsterdamjets@gmail.com" },
            { i: "chat", t: "WhatsApp", v: "Message us", href: "https://wa.me/message/Z6A6W7IAFVHAO1" },
            { i: "schedule", t: "Hours", v: "24/7 · Reply within the hour", href: "mailto:Amsterdamjets@gmail.com" },
          ].map((c) => (
            <a
              key={c.t}
              href={c.href}
              className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <span className="material-symbols-outlined text-primary mb-3 block">{c.i}</span>
              <h3 className="text-on-surface font-bold mb-1">{c.t}</h3>
              <p className="text-body-md text-on-surface-variant">{c.v}</p>
            </a>
          ))}
        </section>

        <section className="max-w-[800px] mx-auto px-margin-mobile md:px-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const name = String(fd.get("name") || "");
              const email = String(fd.get("email") || "");
              const phone = String(fd.get("phone") || "");
              const message = String(fd.get("message") || "");
              const subject = encodeURIComponent(`Charter enquiry — ${name || "Website"}`);
              const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
              );
              window.location.href = `mailto:Amsterdamjets@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 md:p-12 flex flex-col gap-8"
          >
            <h2 className="text-headline-md text-on-surface border-b border-outline-variant/20 pb-4">
              Send us a message
            </h2>
            <div className="grid md:grid-cols-2 gap-gutter">
              <Field label="Name">
                <input name="name" type="text" required placeholder="Your full name" className={inputCls} />
              </Field>
              <Field label="Email">
                <input name="email" type="email" required placeholder="you@email.com" className={inputCls} />
              </Field>
            </div>
            <Field label="Phone">
              <input name="phone" type="tel" placeholder="+31 ..." className={inputCls} />
            </Field>
            <Field label="How can we help?">
              <textarea name="message" rows={5} placeholder="Tell us about your trip" className={inputCls} />
            </Field>
            <button
              type="submit"
              className="bg-on-surface text-on-primary px-8 py-4 rounded-full text-label-bold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity self-start"
            >
              Send message
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <p className="text-sm text-on-surface-variant/70">
              This opens your email app pre-addressed to Amsterdamjets@gmail.com.
            </p>
          </form>

          <div className="flex flex-col items-center gap-3 pt-12">
            <p className="text-body-md text-on-surface-variant">Ready to fly?</p>
            <Link
              to="/bespoke"
              className="bg-primary hover:bg-primary-container text-on-primary px-10 py-4 rounded-full text-label-bold inline-flex items-center gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-105"
            >
              Request Your Charter
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-outline-variant/50 py-3 text-body-lg text-on-surface focus:outline-none focus:border-primary focus:border-b-2 transition-all placeholder:text-on-surface-variant/40";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-label-bold text-on-surface-variant">{label}</label>
      {children}
    </div>
  );
}
