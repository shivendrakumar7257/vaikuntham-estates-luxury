import { createFileRoute } from "@tanstack/react-router";
import { Contact, FAQ, Newsletter } from "@/components/site/Sections";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vaikuntham Luxury Estates" },
      { name: "description", content: "Speak with a senior Vaikuntham advisor. Private consultations, complete discretion." },
      { property: "og:title", content: "Contact — Vaikuntham" },
      { property: "og:description", content: "Your next address starts with a single message." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Begin the Conversation" title="Your next address starts here" desc="Share a few details and a senior advisor will reach you within 24 hours — with complete discretion." />
      <Contact />
      <FAQ />
      <Newsletter />
    </>
  ),
});
