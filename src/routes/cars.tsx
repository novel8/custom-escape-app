import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";

export const Route = createFileRoute("/cars")({
  head: () => ({
    meta: [
      { title: "Cars — NOVEL" },
      {
        name: "description",
        content:
          "Chauffeured fleet, self-drive classics, and electric charters arranged by NOVEL.",
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
      title="Transit, quietly resolved."
      intro="Chauffeured saloons, self-drive classics, and long-range electric charters — every transfer arranged before you land."
      ctaLabel="Reserve transit"
      items={[
        {
          id: "s-class",
          title: "Mercedes S-Class",
          meta: "Chauffeured — up to 3 guests",
          detail:
            "Long-wheelbase saloon with a vetted driver. Ideal for airport transfers and city days.",
          price: "$620 / day",
        },
        {
          id: "range-rover",
          title: "Range Rover Autobiography",
          meta: "Chauffeured — up to 4 guests",
          detail:
            "For countryside routes, mountain approaches, and rougher coastal roads.",
          price: "$780 / day",
        },
        {
          id: "porsche-964",
          title: "Porsche 911 (964)",
          meta: "Self-drive — 2 guests",
          detail:
            "Restored air-cooled classic. Delivered to your hotel, insured, tank full.",
          price: "$1.2K / day",
        },
        {
          id: "ev-van",
          title: "EQV Electric Van",
          meta: "Chauffeured — up to 6 guests",
          detail:
            "Long-range electric with lounge seating. For families and small groups on longer routes.",
          price: "$540 / day",
        },
      ]}
    />
  );
}
