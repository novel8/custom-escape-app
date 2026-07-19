import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";

export const Route = createFileRoute("/cars")({
  head: () => ({
    meta: [
      { title: "Cars & Transit — NOVEL Ethiopia" },
      {
        name: "description",
        content:
          "4x4 fleets, chauffeured saloons, and long-range expedition vehicles arranged by NOVEL across Ethiopia.",
      },
    ],
  }),
  component: CarsPage,
});

function CarsPage() {
  return (
    <CatalogPage
      issue="Ledger 04"
      eyebrow="Ways to Move"
      title="Ethiopian transit, quietly resolved."
      intro="4x4 expedition rigs, chauffeured saloons, and long-range convoys — every transfer arranged before you land at Bole."
      ctaLabel="Reserve transit"
      items={[
        {
          id: "landcruiser-78",
          title: "Toyota Land Cruiser 78",
          meta: "Chauffeured — up to 4 guests",
          detail:
            "The workhorse of the Ethiopian highlands. Roof rack, long-range tank, driver who knows every switchback.",
          price: "$280 / day",
        },
        {
          id: "hilux-convoy",
          title: "Hilux Expedition Convoy",
          meta: "Chauffeured — Danakil-ready",
          detail:
            "Two-vehicle minimum for Afar routes. Recovery gear, satellite comms, local escort where required.",
          price: "$520 / day",
        },
        {
          id: "e-class-addis",
          title: "Mercedes E-Class",
          meta: "Chauffeured — Addis city days",
          detail:
            "Airport transfers, embassy runs, evenings at Yod Abyssinia. Vetted driver, bottled water, wifi.",
          price: "$220 / day",
        },
        {
          id: "coaster",
          title: "Toyota Coaster",
          meta: "Chauffeured — up to 14 guests",
          detail:
            "For historic-route groups. Reclining seats, luggage hold, air-con — long days made bearable.",
          price: "$460 / day",
        },
        {
          id: "domestic-flight",
          title: "Ethiopian Airlines Domestic",
          meta: "Booked & managed",
          detail:
            "Addis to Lalibela, Gondar, Axum, Mekele, Arba Minch. Sequenced with your ground transit — no missed connections.",
          price: "from $180 / leg",
        },
      ]}
    />
  );
}
