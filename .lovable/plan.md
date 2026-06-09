# Fixes

## 1. WhatsApp button works
The `wa.me/message/Z6A6W7IAFVHAO1` URL is blocked inside Lovable's preview iframe (`ERR_BLOCKED_BY_RESPONSE`), so the link looks "broken" in preview but works on the published site. To make it work in both:
- Change `WhatsAppButton.tsx` and the contact-page WhatsApp link from a plain `<a target="_blank">` to a button using `window.open(url, "_blank", "noopener")` so the new tab opens from the top window, escaping the preview iframe.

## 2. Contact form sends in-browser (no mail app)
Replace the `mailto:` approach with a real server-side send via Lovable Cloud + Resend:
- Enable Lovable Cloud.
- Add `RESEND_API_KEY` secret (Resend free tier = 100 emails/day; sender starts as `onboarding@resend.dev` until a domain is verified).
- Create `src/lib/contact.functions.ts` exporting `sendContact` (`createServerFn`, Zod-validated: name, email, phone?, message), which POSTs to Resend with `to: Amsterdamjets@gmail.com`, `reply_to: <user email>`.
- Update `src/routes/contact.tsx` form to call `useServerFn(sendContact)`, show success/error toast, no `mailto:` redirect.

## 3. Broken destination images
Swap the 404'ing Unsplash IDs in `src/lib/locations.ts`:
- Marbella → working Mediterranean coast photo
- North Africa → working Marrakech/Sahara photo

## Files
- Edit: `src/components/WhatsAppButton.tsx`, `src/routes/contact.tsx`, `src/lib/locations.ts`
- Create: `src/lib/contact.functions.ts`
- Cloud: enable + add `RESEND_API_KEY`

## Note
Email will send from `onboarding@resend.dev` until you verify `amsterdamjet.com` in Resend. Replies will still go to the visitor's address via `reply_to`.
