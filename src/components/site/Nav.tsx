import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Properties", href: "#properties" },
  { label: "Categories", href: "#categories" },
  { label: "Investment", href: "#investment" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-full bg-gradient-gold grid place-items-center shadow-gold">
            <span className="font-display text-charcoal text-lg font-semibold">V</span>
          </div>
          <div className="leading-none">
            <div className="font-display text-xl tracking-wide">Vaikuntham</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Luxury Estates</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-gold transition-colors relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium hover:shadow-gold transition-shadow"
          >
            Book Consultation
          </a>
        </div>
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass mt-3 mx-4 rounded-2xl p-6 flex flex-col gap-4 animate-fade-in">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium text-center"
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}
