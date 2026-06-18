export function PageHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <section className="relative pt-40 pb-20 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/60 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[60rem] bg-gradient-gold opacity-[0.08] blur-3xl rounded-full" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
          <span className="h-px w-8 bg-gold" />
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl text-foreground leading-tight">{title}</h1>
        {desc && <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">{desc}</p>}
      </div>
    </section>
  );
}
