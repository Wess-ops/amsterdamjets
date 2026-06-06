import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="bg-background sticky top-0 border-b border-outline-variant/30 z-50 w-full">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-2xl text-on-surface">flight_takeoff</span>
          <span className="text-xl font-bold tracking-tight text-on-surface">Amsterdam Jets</span>
          <span className="material-symbols-outlined filled text-primary">check_circle</span>
        </Link>
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
