import { Link } from "@tanstack/react-router";

const segments = [
  { to: "/empty-legs", label: "Empty Legs" },
  { to: "/bespoke", label: "Bespoke Charter" },
  { to: "/helicopter", label: "Helicopter" },
] as const;

export type SegmentPath = (typeof segments)[number]["to"];

export function SegmentedNav({ active }: { active: SegmentPath }) {
  return (
    <div className="bg-surface-container-low rounded-full p-2 inline-flex border border-outline-variant/20">
      {segments.map((s) => {
        const isActive = s.to === active;
        return (
          <Link
            key={s.label}
            to={s.to}
            className={
              isActive
                ? "px-6 py-2 rounded-full bg-on-surface text-on-primary text-label-bold shadow-sm"
                : "px-6 py-2 rounded-full text-label-bold text-on-surface-variant hover:text-on-surface transition-colors"
            }
          >
            {s.label}
          </Link>
        );
      })}
    </div>
  );
}
