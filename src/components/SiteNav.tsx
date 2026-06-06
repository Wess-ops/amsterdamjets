import { Link } from "@tanstack/react-router";

const links = [
  { to: "/empty-legs", label: "Empty Legs" },
  { to: "/destinations", label: "Fleet" },
  { to: "/bespoke", label: "Bespoke" },
  { to: "/", label: "Experience" },
] as const;

export function SiteNav() {
  return (
    <header className="bg-background sticky top-0 border-b border-outline-variant/30 z-50 w-full">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-2xl text-on-surface">flight_takeoff</span>
          <span className="text-xl font-bold tracking-tight text-on-surface">Amsterdam Jets</span>
          <span className="material-symbols-outlined filled text-primary">check_circle</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center h-full">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-on-surface-variant hover:text-on-surface text-label-bold h-full flex items-center hover:opacity-80 transition-opacity"
              activeProps={{ className: "text-on-surface border-b-2 border-primary text-label-bold h-full flex items-center" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="hidden md:flex items-center justify-center bg-on-surface text-on-primary px-6 py-3 rounded-full text-label-bold hover:opacity-90 transition-opacity">
          Get in touch
        </button>
        <button className="md:hidden text-on-surface" aria-label="Menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
