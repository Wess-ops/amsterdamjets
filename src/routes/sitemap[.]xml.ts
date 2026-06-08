import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { locations } from "@/lib/locations";

const BASE_URL = "https://amsterdamjets.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/empty-legs", priority: "0.9", changefreq: "daily" },
          { path: "/bespoke", priority: "0.9", changefreq: "weekly" },
          { path: "/helicopter", priority: "0.8", changefreq: "weekly" },
          { path: "/fleet", priority: "0.7", changefreq: "weekly" },
          { path: "/contact", priority: "0.6", changefreq: "monthly" },
          { path: "/instagram", priority: "0.4", changefreq: "monthly" },
        ];

        const routePaths = locations.map((l) => ({
          path: `/routes/${l.slug}`,
          priority: "0.8",
          changefreq: "weekly" as const,
        }));

        const urls = [...staticPaths, ...routePaths].map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
