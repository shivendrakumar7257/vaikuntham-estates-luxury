import { createFileRoute } from "@tanstack/react-router";
import { About, WhyChoose, Testimonials } from "@/components/site/Sections";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vaikuntham Luxury Estates" },
      { name: "description", content: "A house of legacy. Two decades guiding India's most discerning buyers and investors." },
      { property: "og:title", content: "About — Vaikuntham" },
      { property: "og:description", content: "A house of legacy. A name of trust." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="About Vaikuntham" title="A house of legacy. A name of trust." desc="Born in 2004 with a singular vision — to bring the world's most refined homes to India's most discerning families." />
      <About />
      <WhyChoose />
      <Testimonials />
    </>
  ),
});
