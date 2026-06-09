REVOKE SELECT, UPDATE, DELETE ON public.contact_messages FROM anon, authenticated;
CREATE POLICY "Only service role can read contact messages" ON public.contact_messages FOR SELECT TO anon, authenticated USING (false);
CREATE POLICY "Only service role can update contact messages" ON public.contact_messages FOR UPDATE TO anon, authenticated USING (false);
CREATE POLICY "Only service role can delete contact messages" ON public.contact_messages FOR DELETE TO anon, authenticated USING (false);