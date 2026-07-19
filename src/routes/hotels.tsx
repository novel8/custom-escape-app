import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "Hotels in Ethiopia — NOVEL" },
      {
        name: "description",
        content:
          "Boutique hotels, highland lodges, and heritage retreats across Ethiopia — hand-selected by NOVEL.",
      },
    ],
  }),
  component: HotelsPage,
});

function HotelsPage() {
  return (
    <CatalogPage
      issue="Ledger 01"
      eyebrow="Places to Sleep"
      title="Ethiopian hotels chosen for their silence."
      intro="Highland lodges, Addis boutiques, and heritage retreats — each selected for atmosphere over amenity."
      items={[
        {
          id: "mesqel-addis",
          title: "Mesqel House",
          meta: "Addis Ababa — 14 rooms",
          detail:
            "A restored Italianate villa on Entoto slope. Injera breakfasts, Ethiopian jazz nights, and a cedar-lined library.",
          price: "$420 / night",
        },
        {
          id: "limalimo",
          title: "Limalimo Escarpment Lodge",
          meta: "Simien Mountains — 12 rooms",
          detail:
            "Timber and stone perched above a 1,000-metre cliff. Gelada baboons at dawn, guided ridge treks after coffee.",
          price: "$680 / night",
        },
        {
          id: "ben-abeba",
          title: "Tukul Village",
          meta: "Lalibela — 8 tukuls",
          detail:
            "Traditional round stone tukuls overlooking the rock-hewn churches. Private priest-led dawn visits arranged.",
          price: "$540 / night",
        },
        {
          id: "kuriftu-bahir",
          title: "Kuriftu Lake Retreat",
          meta: "Bahir Dar — 22 rooms",
          detail:
            "Lakeside pavilions on Tana. Boat access to island monasteries, spa built around a natural spring.",
          price: "$380 / night",
        },
        {
          id: "afar-camp",
          title: "Erta Ale Base Camp",
          meta: "Danakil Depression — 6 tents",
          detail:
            "Permanent expedition tents at the volcano approach. Afar guides, satellite comms, cold beer under the stars.",
          price: "$720 / night",
        },
      ]}
    />
  );
}
