import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Ethiopia Destinations — NOVEL" },
      {
        name: "description",
        content:
          "Curated Ethiopian destinations — Lalibela, Simien, Danakil, Omo Valley, Axum. Chapters in the NOVEL archive.",
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
      title="Ethiopia, arranged as chapters."
      intro="A slow-growing library of regions we know intimately — from the sacred north to the tribal south."
      items={[
        {
          id: "historic-north",
          title: "The Historic Route",
          meta: "North Ethiopia — 10 to 14 days",
          detail:
            "Lalibela's rock-hewn churches, Gondar's castles, Axum's stelae, and the island monasteries of Lake Tana.",
          price: "from $3.6K",
        },
        {
          id: "simien",
          title: "Simien Highlands",
          meta: "Amhara — 6 to 9 days",
          detail:
            "Multi-day treks along the escarpment. Ethiopian wolves, gelada troops, and nights in eco-lodges above the clouds.",
          price: "from $2.9K",
        },
        {
          id: "danakil",
          title: "Danakil & Erta Ale",
          meta: "Afar — 5 to 7 days",
          detail:
            "The lowest, hottest point on Earth. Sulphur pools of Dallol, salt caravans, and a night at the lava lake rim.",
          price: "from $4.1K",
        },
        {
          id: "omo",
          title: "The Omo Valley",
          meta: "South — 8 to 12 days",
          detail:
            "Respectful visits with Hamer, Karo, and Mursi communities. Slow travel with a long-term local anthropologist.",
          price: "from $4.6K",
        },
        {
          id: "coffee",
          title: "Coffee Origins",
          meta: "Sidamo & Yirgacheffe — 5 days",
          detail:
            "Walk the forests where coffee was first cultivated. Wet-mill visits, cuppings, and a farmer's home ceremony.",
          price: "from $2.4K",
        },
      ]}
    />
  );
}
