import { createFileRoute } from "@tanstack/react-router";
import { Properties } from "@/components/site/Properties";
import { Categories, Newsletter } from "@/components/site/Sections";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Vaikuntham Luxury Estates" },
      { name: "description", content: "Browse hand-picked luxury villas, penthouses, and investment properties across India and GCC." },
      { property: "og:title", content: "Properties — Vaikuntham" },
      { property: "og:description", content: "Hand-picked trophy assets in India's most sought-after addresses." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Featured Residences" title="Properties of distinction" desc="A curated portfolio of trophy assets in India's most sought-after addresses." />
      <Properties />
      <Categories />
      <Newsletter />
    </>
  ),
});
