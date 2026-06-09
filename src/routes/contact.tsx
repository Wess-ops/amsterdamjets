import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_URL = "https://wa.me/message/Z6A6W7IAFVHAO1";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Amsterdam Jets — Private Jet Charter from Amsterdam" },
      { name: "description", content: "Reach the Amsterdam Jets flight team 24/7. Email Amsterdamjets@gmail.com or message us on WhatsApp — quotes within the hour." },
      { property: "og:title", content: "Contact Amsterdam Jets" },
      { property: "og:description", content: "Email Amsterdamjets@gmail.com or WhatsApp our flight team — quotes within the hour." },
      { property: "og:url", content: "https://amsterdamjet.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://amsterdamjet.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const openWhatsApp = () => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim() || null;
    const message = String(fd.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email and message.");
      return;
    }
    if (name.length > 200 || email.length > 320 || message.length > 5000) {
      setStatus("error");
      setErrorMsg("One of the fields is too long.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    const { error } = await supabase
      .from("contact_messages")
      .insert({ name, email, phone, message });

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your message. Please WhatsApp us instead.");
      return;
    }
    setStatus("sent");
    form.reset();
  };

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
          <a
            href="mailto:Amsterdamjets@gmail.com"
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/40 transition-colors"
          >
            <span className="material-symbols-outlined text-primary mb-3 block">mail</span>
            <h3 className="text-on-surface font-bold mb-1">Email</h3>
            <p className="text-body-md text-on-surface-variant">Amsterdamjets@gmail.com</p>
          </a>
          <button
            type="button"
            onClick={openWhatsApp}
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/40 transition-colors text-left"
          >
            <span className="material-symbols-outlined text-primary mb-3 block">chat</span>
            <h3 className="text-on-surface font-bold mb-1">WhatsApp</h3>
            <p className="text-body-md text-on-surface-variant">Message us</p>
          </button>
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6">
            <span className="material-symbols-outlined text-primary mb-3 block">schedule</span>
            <h3 className="text-on-surface font-bold mb-1">Hours</h3>
            <p className="text-body-md text-on-surface-variant">24/7 · Reply within the hour</p>
          </div>
        </section>

        <section className="max-w-[800px] mx-auto px-margin-mobile md:px-0">
          <form
            onSubmit={handleSubmit}
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 md:p-12 flex flex-col gap-8"
          >
            <h2 className="text-headline-md text-on-surface border-b border-outline-variant/20 pb-4">
              Send us a message
            </h2>
            <div className="grid md:grid-cols-2 gap-gutter">
              <Field label="Name">
                <input name="name" type="text" required maxLength={200} placeholder="Your full name" className={inputCls} />
              </Field>
              <Field label="Email">
                <input name="email" type="email" required maxLength={320} placeholder="you@email.com" className={inputCls} />
              </Field>
            </div>
            <Field label="Phone">
              <input name="phone" type="tel" maxLength={50} placeholder="+31 ..." className={inputCls} />
            </Field>
            <Field label="How can we help?">
              <textarea name="message" rows={5} required maxLength={5000} placeholder="Tell us about your trip" className={inputCls} />
            </Field>
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-on-surface text-on-primary px-8 py-4 rounded-full text-label-bold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity self-start disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            {status === "sent" && (
              <p className="text-body-md text-primary">Thanks — your message has been sent. We'll reply within the hour.</p>
            )}
            {status === "error" && (
              <p className="text-body-md text-red-500">{errorMsg}</p>
            )}
            {status !== "sent" && status !== "error" && (
              <p className="text-sm text-on-surface-variant">
                Sent directly to our flight team — no email app required.
              </p>
            )}
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
  "w-full bg-transparent border-b border-outline-variant/50 py-3 text-body-lg text-on-surface focus:outline-none focus:border-primary focus:border-b-2 transition-all placeholder:text-on-surface-variant";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-label-bold text-on-surface-variant">{label}</label>
      {children}
    </div>
  );
}
