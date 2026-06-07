import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";

export function SiteNav() {
  return (
    <header className="bg-background sticky top-0 border-b border-outline-variant/30 z-50 w-full">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-10 w-10" />
          <span className="text-xl font-bold tracking-tight text-on-surface">Amsterdam Jets</span>
          <span className="material-symbols-outlined filled text-primary">check_circle</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/instagram"
            className="hidden md:inline-flex items-center justify-center text-on-surface-variant hover:text-on-surface w-10 h-10 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <span className="material-symbols-outlined">photo_camera</span>
          </Link>
          <Link
            to="/contact"
            className="hidden md:flex items-center justify-center bg-on-surface text-on-primary px-6 py-3 rounded-full text-label-bold hover:opacity-90 transition-opacity"
          >
            Get in touch
          </Link>
          <Link to="/contact" className="md:hidden text-on-surface" aria-label="Contact">
            <span className="material-symbols-outlined">menu</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
