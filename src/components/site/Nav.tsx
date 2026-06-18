import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "Categories", to: "/categories" },
  { label: "Investment", to: "/investment" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-background border-b ${
        scrolled ? "border-border shadow-md py-3" : "border-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-full bg-gradient-gold grid place-items-center shadow-gold">
            <span className="font-display text-charcoal text-lg font-semibold">V</span>
          </div>
          <div className="leading-none">
            <div className="font-display text-xl tracking-wide text-foreground">Vaikuntham</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Luxury Estates</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-gold" }}
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium hover:shadow-gold transition-shadow"
          >
            Book Consultation
          </Link>
        </div>
        <button
          className="lg:hidden text-foreground cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-card border border-border shadow-lg mt-3 mx-4 rounded-2xl p-6 flex flex-col gap-4 animate-fade-in">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm text-foreground hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium text-center hover:shadow-gold"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}


