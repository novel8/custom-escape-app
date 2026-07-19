import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";

export const Route = createFileRoute("/tour-guides")({
  head: () => ({
    meta: [
      { title: "Tour Guides — NOVEL" },
      {
        name: "description",
        content:
          "Meet the storytellers, historians, and locals who lead NOVEL journeys.",
      },
    ],
  }),
  component: GuidesPage,
});

function GuidesPage() {
  return (
    <CatalogPage
      issue="Ledger 03"
      eyebrow="The Storytellers"
      title="Guides who know the back doors."
      intro="Historians, chefs, glaciologists, and locals — each vetted, each with a decade or more on the ground."
      ctaLabel="Request a guide"
      items={[
        {
          id: "haruki",
          title: "Haruki O.",
          meta: "Kyoto — Temples & tea ceremony",
          detail:
            "Third-generation tea master. Reads Higashiyama like a book. Private access to two closed sub-temples.",
          price: "$680 / day",
        },
        {
          id: "eleni",
          title: "Eleni P.",
          meta: "Cyclades — Marine archaeology",
          detail:
            "Diver and archaeologist. Leads private caique days through wrecks, sea caves, and empty coves.",
          price: "$540 / day",
        },
        {
          id: "youssef",
          title: "Youssef B.",
          meta: "Morocco — Souks & Sahara",
          detail:
            "From Marrakech's medina to the Erg Chigaga dunes. Speaks five languages and knows every cook.",
          price: "$420 / day",
        },
        {
          id: "camila",
          title: "Camila R.",
          meta: "Patagonia — Ice & rivers",
          detail:
            "Glaciologist and packrafter. Runs multi-day traverses across the Northern Ice Field.",
          price: "$780 / day",
        },
      ]}
    />
  );
}
