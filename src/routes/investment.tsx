import { createFileRoute } from "@tanstack/react-router";
import { Investment, EMI, FAQ } from "@/components/site/Sections";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "Investment — Vaikuntham Luxury Estates" },
      { name: "description", content: "Investment intelligence, ROI insights, and a luxury-segment EMI calculator from Vaikuntham." },
      { property: "og:title", content: "Investment — Vaikuntham" },
      { property: "og:description", content: "Wealth, built brick by brick — data-driven luxury real estate investing." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Investment Intelligence" title="Wealth, built brick by brick" desc="Pair trophy real estate with rigorous market analytics so your portfolio compounds through every cycle." />
      <Investment />
      <EMI />
      <FAQ />
    </>
  ),
});
