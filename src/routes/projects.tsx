import { createFileRoute } from "@tanstack/react-router";
import { Projects, Showcase, Newsletter } from "@/components/site/Sections";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vaikuntham Luxury Estates" },
      { name: "description", content: "Ongoing, ready-to-move, and upcoming flagship Vaikuntham projects across India." },
      { property: "og:title", content: "Projects — Vaikuntham" },
      { property: "og:description", content: "Crafted today. Coveted tomorrow." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Latest Projects" title="Crafted today. Coveted tomorrow." desc="Flagship developments shaping India's most desirable skylines and landscapes." />
      <Projects />
      <Showcase />
      <Newsletter />
    </>
  ),
});
