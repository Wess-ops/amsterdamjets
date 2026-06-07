import { Link } from "@tanstack/react-router";

const segments = [
  { to: "/empty-legs", label: "Empty Legs" },
  { to: "/bespoke", label: "Bespoke Charter" },
  { to: "/helicopter", label: "Helicopter" },
] as const;

export type SegmentPath = (typeof segments)[number]["to"];

export function SegmentedNav({ active }: { active: SegmentPath }) {
  return (
    <div className="bg-surface-container-low rounded-full p-1.5 inline-flex border border-outline-variant/20">
      {segments.map((s) => {
        const isActive = s.to === active;
        return (
          <Link
            key={s.label}
            to={s.to}
            className={[
              "px-6 py-2 rounded-full text-label-bold whitespace-nowrap transition-colors duration-200",
              "inline-flex items-center justify-center leading-none",
              isActive
                ? "bg-on-surface text-on-primary shadow-sm"
                : "text-on-surface-variant hover:text-on-surface",
            ].join(" ")}
          >
            {s.label}
          </Link>
        );
      })}
    </div>
  );
}
