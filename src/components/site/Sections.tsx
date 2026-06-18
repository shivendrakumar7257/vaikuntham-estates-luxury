import { ShieldCheck, Award, FileCheck, TrendingUp, Scale, Headphones, Building2, Home, LandPlot, Briefcase, Trees, LineChart, Star, Quote, Phone, Mail, MessageCircle, MapPin, Calculator, Sparkles, Send } from "lucide-react";
import { SectionHeader } from "./Properties";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import { useState } from "react";

export function WhyChoose() {
  const items = [
    { icon: ShieldCheck, t: "Trusted Partner", d: "Two decades guiding India's most discerning buyers." },
    { icon: Award, t: "Premium Locations", d: "Addresses that define prestige and long-term value." },
    { icon: FileCheck, t: "Verified Properties", d: "Every title legally vetted and physically inspected." },
    { icon: TrendingUp, t: "Investment Guidance", d: "Data-driven insights and portfolio strategy." },
    { icon: Scale, t: "Legal Assistance", d: "In-house counsel for seamless transactions." },
    { icon: Headphones, t: "End-to-End Support", d: "From discovery to handover and beyond." },
  ];
  return (
    <section className="py-28 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Why Vaikuntham" title="A standard of service as rare as the homes we represent" center />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-background p-10 group hover:bg-card transition-colors">
              <div className="h-14 w-14 rounded-2xl bg-gradient-gold grid place-items-center mb-6 shadow-gold group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6 text-charcoal" />
              </div>
              <h3 className="font-display text-2xl text-foreground">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Categories() {
  const cats = [
    { icon: Home, t: "Luxury Villas", c: "120+" },
    { icon: Building2, t: "Premium Apartments", c: "240+" },
    { icon: LandPlot, t: "Residential Plots", c: "85+" },
    { icon: Briefcase, t: "Commercial Spaces", c: "60+" },
    { icon: Trees, t: "Farm Houses", c: "40+" },
    { icon: LineChart, t: "Investment Properties", c: "150+" },
  ];
  return (
    <section id="categories" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Portfolio" title="Luxury, in every form" />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5">
          {cats.map(({ icon: Icon, t, c }) => (
            <a
              href="#properties"
              key={t}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-gold/40 transition-all"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-gold opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
              <Icon className="h-8 w-8 text-gold mb-6" />
              <h3 className="font-display text-xl md:text-2xl text-foreground">{t}</h3>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{c} listings</div>
              <div className="mt-6 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">Explore →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  const slides = [
    { img: p1, t: "Aurelian Villa", h: "Private rooftop garden · 5 bed" },
    { img: p2, t: "Skyline Penthouse", h: "270° sea view · Smart home" },
    { img: p4, t: "Hilltop Estate", h: "1.2 acre · Infinity pool" },
  ];
  const [i, setI] = useState(0);
  const active = slides[i];
  return (
    <section className="py-28 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Interactive Showcase" title="Step inside before you step in" />
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden rounded-3xl border border-border">
            <img src={active.img} alt={active.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-xs uppercase tracking-widest text-gold">Featured</div>
              <h3 className="mt-2 font-display text-3xl md:text-5xl text-foreground">{active.t}</h3>
              <p className="mt-2 text-muted-foreground">{active.h}</p>
              <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium">
                Take Virtual Tour
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {slides.map((s, idx) => (
              <button
                key={s.t}
                onClick={() => setI(idx)}
                className={`group flex items-center gap-4 p-3 rounded-2xl border transition-all text-left ${
                  i === idx ? "border-gold/60 bg-card shadow-gold" : "border-border bg-card/40 hover:border-gold/30"
                }`}
              >
                <img src={s.img} alt={s.t} loading="lazy" className="h-20 w-28 rounded-xl object-cover shrink-0" />
                <div className="min-w-0">
                  <div className="font-display text-lg text-foreground">{s.t}</div>
                  <div className="text-xs text-muted-foreground truncate">{s.h}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Investment() {
  const stats = [
    { v: "18.4%", l: "Avg. annual ROI" },
    { v: "2.3×", l: "5-yr appreciation" },
    { v: "₹8,500 Cr", l: "Assets transacted" },
    { v: "AAA", l: "Asset quality" },
  ];
  return (
    <section id="investment" className="py-28">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader eyebrow="Investment Intelligence" title="Wealth, built brick by brick" desc="We pair trophy real estate with rigorous market analytics so your portfolio compounds through every cycle." />
          <div className="mt-10 grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-border p-6 bg-card">
                <div className="font-display text-4xl text-gradient-gold">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <Chart />
      </div>
    </section>
  );
}

function Chart() {
  const points = [40, 55, 48, 70, 82, 75, 95, 110, 125, 118, 140, 165];
  const max = Math.max(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 100 - (p / max) * 90;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
  const area = `${path} L 100 100 L 0 100 Z`;
  return (
    <div className="relative rounded-3xl border border-border bg-card p-8 shadow-luxury">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-gold">Market Index</div>
          <div className="font-display text-2xl text-foreground">Luxury Segment Growth</div>
        </div>
        <div className="text-right">
          <div className="text-gradient-gold font-display text-3xl">+312%</div>
          <div className="text-xs text-muted-foreground">last decade</div>
        </div>
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-56">
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.14 84)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.82 0.14 84)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#g)" />
        <path d={path} fill="none" stroke="oklch(0.82 0.14 84)" strokeWidth="0.8" />
      </svg>
      <div className="grid grid-cols-4 text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
        <span>2014</span><span>2018</span><span>2022</span><span className="text-right">2025</span>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-28 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={p1} alt="About Vaikuntham" loading="lazy" className="rounded-3xl object-cover w-full aspect-[4/5]" />
          <div className="absolute -bottom-8 -right-4 md:-right-8 glass rounded-2xl p-6 max-w-xs shadow-luxury">
            <div className="font-display text-5xl text-gradient-gold">20+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years crafting legacies across India & GCC</div>
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="About Vaikuntham" title="A house of legacy. A name of trust." desc="Born in 2004 with a singular vision — to bring the world's most refined homes to India's most discerning families. Today, Vaikuntham stands as a sanctuary for buyers, investors, and visionaries who refuse to compromise." />
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-gold">Our Vision</div>
              <p className="mt-2 text-sm text-muted-foreground">To redefine luxury living by making every home a generational asset.</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold">Our Mission</div>
              <p className="mt-2 text-sm text-muted-foreground">Match exceptional clients with exceptional addresses — with absolute integrity.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-11 w-11 rounded-full bg-gradient-gold border-2 border-background" />
              ))}
            </div>
            <div>
              <div className="font-display text-foreground">Meet our advisors</div>
              <div className="text-xs text-muted-foreground">42 senior consultants · 9 cities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const tt = [
    { n: "Arjun Mehta", r: "Industrialist · Mumbai", q: "Vaikuntham didn't sell us a penthouse. They curated a legacy for our family.", s: 5 },
    { n: "Priya & Karan Shah", r: "Investors · Dubai", q: "Discretion, diligence, and detail — every interaction felt bespoke.", s: 5 },
    { n: "Dr. Ravi Iyer", r: "Cardiologist · Bengaluru", q: "From legal to handover, they removed every friction. A masterclass in service.", s: 5 },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Client Voices" title="Stories of trust, told best by those we serve" center />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tt.map((t) => (
            <div key={t.n} className="group relative rounded-3xl border border-border bg-card p-8 hover:border-gold/40 transition-colors">
              <Quote className="h-8 w-8 text-gold opacity-40" />
              <p className="mt-4 text-foreground/90 font-display text-xl leading-relaxed">"{t.q}"</p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: t.s }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 pt-6 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-gradient-gold" />
                <div>
                  <div className="font-display text-foreground">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const ps = [
    { img: p1, t: "The Aurelian Collection", s: "Ongoing", loc: "Whitefield" },
    { img: p2, t: "Skyline Worli", s: "Ready to Move", loc: "Mumbai" },
    { img: p4, t: "Nandi Hills Residences", s: "Upcoming", loc: "Karnataka" },
  ];
  const color = (s: string) =>
    s === "Ongoing" ? "text-gold border-gold/40" : s === "Ready to Move" ? "text-emerald-400 border-emerald-400/40" : "text-sky-300 border-sky-300/40";
  return (
    <section id="projects" className="py-28 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Latest Projects" title="Crafted today. Coveted tomorrow." />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ps.map((p) => (
            <article key={p.t} className="group relative overflow-hidden rounded-3xl border border-border">
              <img src={p.img} alt={p.t} loading="lazy" className="aspect-[3/4] object-cover w-full transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className={`px-3 py-1 rounded-full glass-light text-[10px] uppercase tracking-widest border ${color(p.s)}`}>{p.s}</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="text-xs text-muted-foreground">{p.loc}</div>
                <h3 className="font-display text-2xl text-foreground mt-1">{p.t}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EMI() {
  const [amount, setAmount] = useState(50000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);
  const r = rate / 12 / 100;
  const n = years * 12;
  const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader eyebrow="Mortgage Calculator" title="Plan your investment with precision" desc="Estimate your monthly outflow on any Vaikuntham asset." />
        </div>
        <div className="glass rounded-3xl p-8 shadow-luxury">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="h-5 w-5 text-gold" />
            <div className="font-display text-xl">EMI Estimate</div>
          </div>
          <Slider label="Loan Amount" value={`₹ ${(amount/10000000).toFixed(2)} Cr`} min={5000000} max={500000000} step={500000} v={amount} onChange={setAmount} />
          <Slider label="Interest Rate" value={`${rate.toFixed(2)} %`} min={6} max={14} step={0.1} v={rate} onChange={setRate} />
          <Slider label="Tenure" value={`${years} years`} min={5} max={30} step={1} v={years} onChange={setYears} />
          <div className="mt-8 pt-6 border-t border-border flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Monthly EMI</div>
              <div className="font-display text-4xl text-gradient-gold mt-1">₹ {Math.round(emi).toLocaleString("en-IN")}</div>
            </div>
            <a href="#contact" className="px-5 py-3 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium">Get pre-approved</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, min, max, step, v, onChange }: { label: string; value: string; min: number; max: number; step: number; v: number; onChange: (n: number) => void }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
        <span className="text-sm text-gold font-medium">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[oklch(0.82_0.14_84)]"
      />
    </div>
  );
}

export function FAQ() {
  const faqs = [
    { q: "How does Vaikuntham verify property titles?", a: "Every listing undergoes a 14-point legal audit by our in-house counsel, including encumbrance, RERA, and tax verification." },
    { q: "Do you assist NRI and international buyers?", a: "Yes. We handle FEMA compliance, remote signing, power-of-attorney, and end-to-end coordination for clients across 30+ countries." },
    { q: "What is your typical advisory engagement?", a: "From a single boutique villa to multi-asset portfolio strategy spanning residential, commercial, and land." },
    { q: "Can I list my luxury home with Vaikuntham?", a: "We curate sellers as carefully as buyers. Reach out and our acquisitions team will respond within 24 hours." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader eyebrow="Questions" title="Answers, before you ask" center />
        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-display text-lg text-foreground">{f.q}</span>
                <span className={`text-gold transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && <div className="px-6 pb-6 text-sm text-muted-foreground animate-fade-in">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <SectionHeader eyebrow="Begin the Conversation" title="Your next address starts with a single message" desc="Share a few details and a senior advisor will reach you within 24 hours — with complete discretion." />
          <div className="mt-10 space-y-4">
            <ContactRow icon={Phone} label="+91 80 4567 8900" sub="Mon – Sat, 9:00 – 19:00 IST" />
            <ContactRow icon={Mail} label="advisors@vaikuntham.estate" sub="Replies within 4 hours" />
            <ContactRow icon={MessageCircle} label="WhatsApp Concierge" sub="Instant chat with a live advisor" highlight />
            <ContactRow icon={MapPin} label="Vaikuntham House, UB City, Bengaluru" sub="By appointment only" />
          </div>
          <div className="mt-10 aspect-[16/9] rounded-3xl overflow-hidden border border-border bg-card grid place-items-center text-muted-foreground text-sm">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-gold mx-auto mb-2" />
              Interactive map · UB City, Bengaluru
            </div>
          </div>
        </div>
        <form className="glass rounded-3xl p-8 shadow-luxury space-y-5">
          <Field label="Full Name" placeholder="e.g. Arjun Mehta" />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Email" placeholder="you@example.com" type="email" />
            <Field label="Phone" placeholder="+91 ..." />
          </div>
          <Field label="Interest" placeholder="Villa in Bengaluru, ₹10–15 Cr" />
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea rows={4} placeholder="Tell us what you are looking for…" className="mt-2 w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/50" />
          </div>
          <button type="button" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold">
            <Send className="h-4 w-4" /> Request Private Consultation
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, sub, highlight }: { icon: typeof Phone; label: string; sub: string; highlight?: boolean }) {
  return (
    <div className={`flex items-center gap-4 p-5 rounded-2xl border ${highlight ? "border-gold/40 bg-card" : "border-border bg-card/40"}`}>
      <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center shrink-0">
        <Icon className="h-5 w-5 text-charcoal" />
      </div>
      <div className="min-w-0">
        <div className="font-display text-lg text-foreground truncate">{label}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-2 w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/50" />
    </div>
  );
}

export function Newsletter() {
  return (
    <section className="py-20 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Sparkles className="h-6 w-6 text-gold mx-auto" />
        <h2 className="mt-4 font-display text-3xl md:text-4xl">The Vaikuntham Dossier</h2>
        <p className="mt-3 text-muted-foreground">Monthly off-market listings, market intelligence, and private events — delivered with discretion.</p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input type="email" placeholder="your@email.com" className="flex-1 bg-muted/40 border border-border rounded-full px-5 py-3 text-sm outline-none focus:border-gold/50" />
          <button type="button" className="px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    { t: "Explore", l: ["Properties", "Categories", "Projects", "Investment"] },
    { t: "Company", l: ["About", "Advisors", "Careers", "Press"] },
    { t: "Resources", l: ["Blog", "Market Reports", "FAQ", "Legal"] },
  ];
  return (
    <footer className="pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-gold grid place-items-center"><span className="font-display text-charcoal text-lg">V</span></div>
              <div>
                <div className="font-display text-xl">Vaikuntham</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Where Luxury Meets Legacy</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm">India's house of luxury real estate. Curating trophy homes, premium investments, and generational legacies since 2004.</p>
          </div>
          {cols.map(c => (
            <div key={c.t}>
              <div className="text-xs uppercase tracking-widest text-gold">{c.t}</div>
              <ul className="mt-4 space-y-2">
                {c.l.map(i => <li key={i}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 hairline" />
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2026 Vaikuntham Luxury Estates. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">RERA Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="tel:+918045678900" className="fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full bg-gradient-gold grid place-items-center shadow-gold hover:scale-110 transition-transform" aria-label="Call">
        <Phone className="h-5 w-5 text-charcoal" />
      </a>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {open && (
          <div className="bg-card border border-border rounded-2xl p-5 w-80 shadow-luxury animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-full bg-gradient-gold grid place-items-center"><Sparkles className="h-4 w-4 text-charcoal" /></div>
              <div>
                <div className="font-display text-foreground">Vaikuntham AI</div>
                <div className="text-[10px] uppercase tracking-widest text-gold">Property Concierge</div>
              </div>
            </div>
            <div className="rounded-xl bg-muted/40 border border-border p-3 text-sm text-muted-foreground">Hi — I can help you discover villas, calculate EMIs, or book a private viewing. What are you looking for?</div>
            <div className="mt-3 flex gap-2">
              <input placeholder="Ask anything…" className="flex-1 bg-muted/40 border border-border rounded-full px-4 py-2 text-sm outline-none focus:border-gold/50" />
              <button className="h-9 w-9 rounded-full bg-gradient-gold grid place-items-center"><Send className="h-4 w-4 text-charcoal" /></button>
            </div>
          </div>
        )}
        <button onClick={() => setOpen(v => !v)} className="h-14 w-14 rounded-full bg-gradient-gold grid place-items-center shadow-gold hover:scale-110 transition-transform" aria-label="AI Assistant">
          <Sparkles className="h-5 w-5 text-charcoal" />
        </button>
      </div>
    </>
  );
}
