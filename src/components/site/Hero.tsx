import { Search, MapPin, Home, Wallet, ArrowRight, PlayCircle } from "lucide-react";
import heroImg from "@/assets/hero-villa.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury villa at twilight"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-light text-xs uppercase tracking-[0.3em] text-gold mb-8 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Where Luxury Meets Legacy
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground animate-fade-in">
            Discover <span className="italic text-gradient-gold">Exceptional</span>
            <br /> Living with Vaikuntham
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in">
            Luxury Residences, Premium Villas & Investment Opportunities curated for those who
            demand more than a home — a legacy.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in">
            <a
              href="#properties"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:shadow-luxury transition-all"
            >
              Explore Properties
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass-light text-foreground font-medium hover:border-gold/40 transition-colors"
            >
              <PlayCircle className="h-4 w-4 text-gold" />
              Schedule Consultation
            </a>
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-16 glass rounded-2xl p-3 md:p-4 shadow-luxury animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-2">
            <SearchField icon={<MapPin className="h-4 w-4" />} label="Location" placeholder="Bengaluru, Mumbai, Dubai…" />
            <SearchField icon={<Home className="h-4 w-4" />} label="Property Type" placeholder="Villa, Penthouse, Plot…" />
            <SearchField icon={<Wallet className="h-4 w-4" />} label="Budget" placeholder="₹2 Cr – ₹50 Cr" />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold text-primary-foreground px-6 py-4 font-medium hover:shadow-gold transition-shadow">
              <Search className="h-4 w-4" /> Search
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-foreground animate-fade-in">
          {[
            ["20+", "Years of Legacy"],
            ["₹8,500 Cr", "Properties Sold"],
            ["1,200+", "Elite Clients"],
            ["95%", "Repeat Investors"],
          ].map(([v, k]) => (
            <div key={k} className="border-l border-gold/30 pl-4">
              <div className="font-display text-3xl md:text-4xl text-gradient-gold">{v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchField({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) {
  return (
    <label className="flex items-center gap-3 rounded-xl bg-muted/40 border border-border px-4 py-3 hover:border-gold/40 transition-colors">
      <span className="text-gold">{icon}</span>
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground/70 w-full"
        />
      </div>
    </label>
  );
}
