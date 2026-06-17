import { Bed, Bath, Maximize, MapPin, ArrowUpRight, Heart } from "lucide-react";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";

const props = [
  { img: p1, name: "The Aurelian Villa", loc: "Whitefield, Bengaluru", price: "₹ 12.5 Cr", beds: 5, baths: 6, area: "8,400 sqft", tag: "New Launch" },
  { img: p2, name: "Skyline Penthouse 42A", loc: "Worli Sea Face, Mumbai", price: "₹ 28.0 Cr", beds: 4, baths: 5, area: "6,200 sqft", tag: "Featured" },
  { img: p4, name: "Vaikuntham Estate", loc: "Nandi Hills, Karnataka", price: "₹ 9.8 Cr", beds: 6, baths: 7, area: "1.2 Acre", tag: "Exclusive" },
  { img: p3, name: "Meridian Commercial Tower", loc: "DLF Cyber City, Gurugram", price: "₹ 45.0 Cr", beds: 0, baths: 0, area: "22,000 sqft", tag: "Investment" },
];

export function Properties() {
  return (
    <section id="properties" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Featured Residences" title="Hand-picked homes for discerning lives" desc="A curated portfolio of trophy assets in India's most sought-after addresses." />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.map((p, i) => (
            <article
              key={p.name}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-500 ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent opacity-80" />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full glass-light text-[10px] uppercase tracking-widest text-gold">
                  {p.tag}
                </div>
                <button className="absolute top-4 right-4 h-9 w-9 grid place-items-center rounded-full glass-light hover:bg-gold/20 transition-colors" aria-label="Favorite">
                  <Heart className="h-4 w-4 text-foreground" />
                </button>

                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-gold" /> {p.loc}
                  </div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl text-foreground">{p.name}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-gradient-gold font-display text-xl">{p.price}</div>
                    <a href="#contact" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-foreground group-hover:text-gold transition-colors">
                      View Details <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-6 py-4 text-sm text-muted-foreground border-t border-border">
                {p.beds > 0 ? (
                  <>
                    <Spec icon={<Bed className="h-4 w-4" />} v={`${p.beds} Beds`} />
                    <Spec icon={<Bath className="h-4 w-4" />} v={`${p.baths} Baths`} />
                  </>
                ) : (
                  <Spec icon={<Maximize className="h-4 w-4" />} v="Grade A Office" />
                )}
                <Spec icon={<Maximize className="h-4 w-4" />} v={p.area} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spec({ icon, v }: { icon: React.ReactNode; v: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gold">{icon}</span> {v}
    </div>
  );
}

export function SectionHeader({ eyebrow, title, desc, center }: { eyebrow: string; title: string; desc?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}
