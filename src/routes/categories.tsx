import { createFileRoute } from "@tanstack/react-router";
import { Categories, WhyChoose } from "@/components/site/Sections";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — Vaikuntham Luxury Estates" },
      { name: "description", content: "Explore Vaikuntham's portfolio: luxury villas, premium apartments, plots, commercial spaces, farmhouses, and investment properties." },
      { property: "og:title", content: "Categories — Vaikuntham" },
      { property: "og:description", content: "Luxury, in every form — villas, penthouses, plots, and more." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Portfolio" title="Luxury, in every form" desc="From sky-high penthouses to vast estates — every Vaikuntham category is curated for the few." />
      <Categories />
      <WhyChoose />
    </>
  ),
});
