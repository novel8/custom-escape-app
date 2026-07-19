import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";

export const Route = createFileRoute("/tour-guides")({
  head: () => ({
    meta: [
      { title: "Ethiopian Tour Guides — NOVEL" },
      {
        name: "description",
        content:
          "Meet the historians, priests, and highland guides who lead NOVEL journeys across Ethiopia.",
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
      title="Guides who know Ethiopia by name."
      intro="Historians, priests, trekkers, and anthropologists — each vetted, each with a decade or more on the ground."
      ctaLabel="Request a guide"
      items={[
        {
          id: "tewodros",
          title: "Tewodros A.",
          meta: "Lalibela — Sacred history",
          detail:
            "Deacon of the Bete Giyorgis. Fluent in Ge'ez, reads the church walls like scripture, arranges dawn liturgy.",
          price: "$260 / day",
        },
        {
          id: "meseret",
          title: "Meseret G.",
          meta: "Simien — Highland trekking",
          detail:
            "Certified mountain guide from Debark. Ten seasons on the escarpment. Knows every gelada troop by sight.",
          price: "$220 / day",
        },
        {
          id: "abdu",
          title: "Abdu M.",
          meta: "Danakil — Afar expedition",
          detail:
            "Afar-born expedition leader. Salt caravan routes, volcano approaches, and the delicate politics of the region.",
          price: "$340 / day",
        },
        {
          id: "lulit",
          title: "Lulit B.",
          meta: "Omo Valley — Anthropology",
          detail:
            "PhD in cultural anthropology, twelve years with Hamer and Karo communities. Respectful, unhurried access.",
          price: "$380 / day",
        },
        {
          id: "yonas",
          title: "Yonas T.",
          meta: "Addis — City & coffee",
          detail:
            "Third-generation coffee trader. Walks Piazza and Merkato, then hosts a home ceremony in Shiro Meda.",
          price: "$180 / day",
        },
      ]}
    />
  );
}
