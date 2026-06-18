import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Properties } from "@/components/site/Properties";
import { WhyChoose, Categories, Showcase, Testimonials, Newsletter } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaikuntham — Luxury Real Estate · Where Luxury Meets Legacy" },
      { name: "description", content: "Vaikuntham curates India's most exceptional villas, penthouses, and investment properties for discerning buyers and investors." },
      { property: "og:title", content: "Vaikuntham — Luxury Real Estate" },
      { property: "og:description", content: "Discover exceptional living — luxury residences, premium villas & investment opportunities." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Properties />
      <WhyChoose />
      <Categories />
      <Showcase />
      <Testimonials />
      <Newsletter />
    </>
  );
}
