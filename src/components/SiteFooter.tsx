import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/20 mt-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl text-on-surface">flight_takeoff</span>
            <span className="text-lg font-bold text-on-surface">Amsterdam Jets</span>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-sm">
            © 2026 Amsterdam Jets. All rights reserved. Private aviation, refined.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end items-start pt-2">
          <Link to="/empty-legs" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">
            Empty Legs
          </Link>
          <Link to="/bespoke" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">
            Bespoke Charter
          </Link>
          <Link to="/helicopter" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">
            Helicopter
          </Link>
          <Link to="/fleet" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">
            Destinations
          </Link>
          <Link to="/instagram" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">
            Instagram
          </Link>
          <Link to="/contact" className="text-on-surface-variant hover:text-primary transition-colors text-body-md">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
