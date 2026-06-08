## 1. Hero background image (Bespoke page)

- Generate a cinematic private jet interior image (warm cabin, soft window light) and save to `src/assets/jet-interior-hero.jpg`.
- In `src/routes/bespoke.tsx`, wrap the hero block (segmented nav + headline + subcopy + CTA) in a `relative` container with an absolutely-positioned `<img>` background at ~15% opacity, plus a subtle white-to-transparent gradient overlay so the headline stays crisp.
- Keep text colors and the segmented nav unchanged; ensure the image sits behind content (`-z-10`, `object-cover`, `pointer-events-none`).

## 2. CTA glow on "Request Your Charter"

- The keyframe `cta-glow` already exists in `src/styles.css` and `.animate-cta-glow` is applied on the bespoke form button. The hero CTA in the screenshot is the blue button on the homepage (`src/routes/index.tsx`).
- Add `animate-cta-glow` to the primary "Request Your Charter" buttons on:
  - `src/routes/index.tsx` (hero + closing CTA)
  - `src/routes/contact.tsx`
  - `src/routes/empty-legs.tsx` and `src/routes/helicopter.tsx` if a primary CTA exists.

## 3. SEO — "Amsterdam to {destination}" focus

Goal: rank for "private jet Amsterdam to London", "Amsterdam to Ibiza private jet", etc.

### 3a. Per-route metadata rewrite
Update `head()` in each destination page (`src/routes/routes.$slug.tsx`) so title/description/OG follow the pattern:
- Title: `Private Jet Amsterdam to {City} — Charter from Schiphol | Amsterdam Jets`
- Description: 150-char sentence mentioning flight time, airports (AMS/Schiphol → local), indicative price, "book in X hours".
- Add `og:type=article`, canonical, and JSON-LD `Article` + `BreadcrumbList` (Home → Routes → City).

### 3b. Locations data enrichment (`src/lib/locations.ts`)
For each of the 10 cities add:
- `seoTitle`, `seoDescription`
- `flightTimeFromAMS`, `departureAirport: "Amsterdam Schiphol (AMS) / Rotterdam (RTM)"`, `arrivalAirports`
- Intro/sections already exist — rewrite first paragraph to lead with "Private jet from Amsterdam to {City}".

### 3c. New copy blocks on route page
Add an H1 of the form `Private jet charter Amsterdam to {City}` and an FAQ section (3–4 Q&As: "How long is the flight?", "Which airports?", "How much does it cost?", "How far in advance to book?") rendered with `FAQPage` JSON-LD.

### 3d. Homepage SEO
- Update `src/routes/index.tsx` `head()` title to `Private Jet Charter from Amsterdam — Empty Legs, Bespoke & Helicopter | Amsterdam Jets` and description mentioning Schiphol + top routes.
- Add a "Popular routes from Amsterdam" section linking to `/routes/{slug}` with H2 anchors using the "Amsterdam to {City}" phrasing — boosts internal linking and keyword surface.

### 3e. Root defaults
- In `src/routes/__root.tsx` ensure sitewide `og:site_name`, Organization JSON-LD with name "Amsterdam Jets", logo URL, and `sameAs` Instagram.
- Add `public/robots.txt` (allow all + sitemap) and `public/sitemap.xml` listing `/`, `/empty-legs`, `/bespoke`, `/helicopter`, `/fleet`, `/contact`, and every `/routes/{slug}`.

## Files touched

- create: `src/assets/jet-interior-hero.jpg` (+ `.asset.json` via lovable-assets if needed)
- edit: `src/routes/bespoke.tsx`, `src/routes/index.tsx`, `src/routes/contact.tsx`, `src/routes/empty-legs.tsx`, `src/routes/helicopter.tsx`, `src/routes/routes.$slug.tsx`, `src/routes/__root.tsx`, `src/lib/locations.ts`
- create: `public/robots.txt`, `public/sitemap.xml`

## Out of scope

- No backend, no new dependencies, no design-system token changes.