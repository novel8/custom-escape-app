import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "Hotels — NOVEL" },
      {
        name: "description",
        content:
          "Boutique hotels, private villas, and dark-sky retreats hand-selected by NOVEL.",
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
      title="Hotels chosen for their silence."
      intro="Boutique properties, private villas, and dark-sky retreats — each selected for atmosphere over amenity."
      items={[
        {
          id: "aman-kyoto",
          title: "The Cedar Ryokan",
          meta: "Kyoto, JP — 12 rooms",
          detail:
            "A hidden ryokan wrapped in cedar and moss. Private onsen, kaiseki dinners, and unhurried mornings.",
          price: "$1.4K / night",
        },
        {
          id: "milos-villa",
          title: "Aegean Cliff Villa",
          meta: "Milos, GR — 4 bedrooms",
          detail:
            "A whitewashed monolith perched above the sea. Infinity pool, private chef, moonlit terraces.",
          price: "$2.8K / night",
        },
        {
          id: "atlas-lodge",
          title: "Atlas Stone Lodge",
          meta: "Ourika, MA — 8 rooms",
          detail:
            "A remote lodge in the High Atlas. Wood-fired hammam, Berber breakfasts, no signal by design.",
          price: "$900 / night",
        },
        {
          id: "patagonia",
          title: "Fjord House",
          meta: "Aysén, CL — 6 rooms",
          detail:
            "Timber and glass at the edge of a Patagonian fjord. Guided ice-fields and quiet evenings.",
          price: "$1.7K / night",
        },
      ]}
    />
  );
}
