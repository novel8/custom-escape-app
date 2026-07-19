import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — NOVEL" },
      {
        name: "description",
        content:
          "Curated destinations from Kyoto to Patagonia. Chapters in the NOVEL travel archive.",
      },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <CatalogPage
      issue="Ledger 02"
      eyebrow="Where to Wander"
      title="Destinations, arranged as chapters."
      intro="A slow-growing library of places we know intimately. Each entry is a starting point for a longer story."
      items={[
        {
          id: "kyoto",
          title: "Kyoto & the Kii Peninsula",
          meta: "Japan — 9 to 14 days",
          detail:
            "Temple mornings in Higashiyama, forested pilgrimage on the Kumano Kodō, coastal ryokans on the return.",
          price: "from $4.2K",
        },
        {
          id: "cyclades",
          title: "The Cyclades After Dark",
          meta: "Greece — 7 to 10 days",
          detail:
            "Milos, Folegandros, Kimolos. Private caiques, moonlit swims, and villas built into the rock.",
          price: "from $3.8K",
        },
        {
          id: "morocco",
          title: "Atlas & the Southern Sands",
          meta: "Morocco — 10 days",
          detail:
            "Marrakech riads, the High Atlas, a night in the Sahara — end at a cedar hammam in the mountains.",
          price: "from $3.4K",
        },
        {
          id: "patagonia",
          title: "Aysén, Untraveled",
          meta: "Chile — 12 days",
          detail:
            "Fjords, marble caves, and the Northern Ice Field. Guided by glaciologists and quiet locals.",
          price: "from $6.1K",
        },
      ]}
    />
  );
}
