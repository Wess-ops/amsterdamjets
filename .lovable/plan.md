## Plan

### 1. Fix missing images

- Audit pages for broken/missing images (likely on `fleet.tsx`, `helicopter.tsx`, `instagram.tsx`, location cards in `lib/locations.ts`, and the hero/section images on `index.tsx` and `bespoke.tsx`).
- Replace any broken/empty `img src` with reliable Unsplash hotlinks (jets, interiors, helicopters, and per-destination cityscapes for London, Paris, Milan, Mallorca, Marbella, North Africa, Dubai, Abu Dhabi, New York, Caribbean).

### 2. WhatsApp button + links

- Update `src/components/WhatsAppButton.tsx` href to `https://wa.me/message/Z6A6W7IAFVHAO1`.
- Update the WhatsApp link on `src/routes/contact.tsx` to the same URL.

### 3. Email everywhere

- Replace `fly@amsterdamjets.com` with `Amsterdamjets@gmail.com` on contact page, footer, and any JSON-LD/Organization schema.
- Make the contact form submit via `mailto:Amsterdamjets@gmail.com` with subject + body built from form fields (opens user's mail client; no backend needed).

### 4. SEO + AI SEO improvements with semrush

- **Root (`__root.tsx`)**: add `og:site_name`, canonical-less defaults, and JSON-LD `Organization` (name, url `https://amsterdamjet.com`, logo, email `Amsterdamjets@gmail.com`, `sameAs` Instagram, `contactPoint` with phone + WhatsApp).
- **Homepage (`index.tsx`)**: refine title/description toward "Private Jet Charter from Amsterdam — Schiphol"; add JSON-LD `WebSite` with `SearchAction`, and `Service` schema for private jet / helicopter / empty legs.
- **Per-route pages**: ensure each (`empty-legs`, `bespoke`, `helicopter`, `fleet`, `contact`, `instagram`) has unique title, description, og tags, and canonical link to `https://amsterdamjet.com/<path>`.
- **AI-search optimization** (LLM/Perplexity/ChatGPT friendliness):
  - Add a concise, factual "About Amsterdam Jets" block to homepage (who, where, services, coverage, contact) — LLMs cite clear declarative copy.
  - Expand FAQ JSON-LD coverage: add a `FAQPage` block on homepage and bespoke page (pricing, lead time, airports served from Amsterdam, payment, pets, luggage).
  - Add `speakable` schema on key pages.
  - Create `public/llms.txt` summarizing the site for AI crawlers (services, routes, contact).
  - Update `public/robots.txt` to explicitly allow GPTBot, PerplexityBot, ClaudeBot, Google-Extended.
- **Sitemap**: confirm `sitemap[.]xml.ts` uses `https://amsterdamjet.com` and includes every static + dynamic route.

### Files touched

- Edit: `src/components/WhatsAppButton.tsx`, `src/components/SiteFooter.tsx`, `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/contact.tsx`, `src/routes/bespoke.tsx`, `src/routes/empty-legs.tsx`, `src/routes/helicopter.tsx`, `src/routes/fleet.tsx`, `src/routes/instagram.tsx`, `src/routes/routes.$slug.tsx`, `src/routes/sitemap[.]xml.ts`, `src/lib/locations.ts`, `public/robots.txt`.
- Create: `public/llms.txt`.

No backend, dependencies, or design-system changes.