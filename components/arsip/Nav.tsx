import { site } from "@/site.config";

export default function Nav() {
  return (
    <header className="pointer-events-auto flex items-center justify-between px-6 py-5 md:px-10">
      <a href="/" className="font-display text-2xl font-semibold text-cream">
        {site.name}
      </a>
      <nav aria-label="Navigasi utama" className="hidden gap-8 md:flex">
        {site.nav.map((item) =>
          item.ready ? (
            <a key={item.label} href={item.href} className="font-bold text-cream underline decoration-amber-glow decoration-2 underline-offset-8">
              {item.label}
            </a>
          ) : (
            <span key={item.label} className="cursor-default font-semibold text-cream/80" title="Segera hadir">
              {item.label}
            </span>
          ),
        )}
      </nav>
      <span className="btn-glass hidden text-sm md:inline-flex">Gratis untuk semua</span>
    </header>
  );
}
