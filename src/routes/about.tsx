import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — NOVEL Ethiopia" },
      {
        name: "description",
        content:
          "NOVEL is an Addis-based tour agency crafting personalized Ethiopian journeys — the ethos, the team, the archive behind every itinerary.",
      },
      { property: "og:title", content: "About Us — NOVEL Ethiopia" },
      {
        property: "og:description",
        content:
          "Meet the Addis-based archivists behind NOVEL — designing unhurried, meticulous travel across Ethiopia.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    n: "01",
    title: "Traveler-First",
    body: "We're a young startup, which means every guest matters enormously. Your trip is not one of thousands — it's one of the first.",
  },
  {
    n: "02",
    title: "Honest Value",
    body: "No inflated agency margins. We connect you directly with vetted Ethiopian guides, drivers, and lodges at fair, transparent prices.",
  },
  {
    n: "03",
    title: "Local, End-to-End",
    body: "Founded and run in Addis Ababa. When something changes on the ground — weather, roads, permits — we're already there to reroute.",
  },
];

const team = [
  { name: "Founding Team", role: "Addis-based, small & scrappy", city: "Addis Ababa" },
  { name: "Local Guide Network", role: "Historic Route, Simien, Danakil, Omo", city: "Across Ethiopia" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />
      <div className="max-w-md mx-auto">
        <header className="px-6 pt-10 pb-12 animate-reveal">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/80 mb-5 block">
            Colophon — About the House
          </span>
          <h1 className="font-display text-4xl leading-[1.05] italic font-medium tracking-tight mb-6">
            A new Ethiopian travel startup, built around you.
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[34ch]">
            NOVEL is a young Addis-based travel startup with a simple mission:
            deliver real value to tourists visiting Ethiopia. We handle
            flights, lodging, transit, and tours as one seamless plan — no
            agency bloat, no cookie-cutter itineraries, no surprises. Because
            we're just starting out, every traveler gets our full attention
            and our best pricing.
          </p>
        </header>


        <section className="px-6 pb-14">
          <div className="flex justify-between items-end border-b border-border pb-3 mb-8">
            <h2 className="font-display text-xl italic">The Ethos</h2>
            <span className="font-mono text-[10px] text-accent">03 pillars</span>
          </div>
          <ul className="space-y-8">
            {pillars.map((p, i) => (
              <li
                key={p.n}
                className="animate-reveal border-b border-border pb-6 last:border-b-0"
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                <span className="font-mono text-[9px] text-accent/60">
                  {p.n}
                </span>
                <h3 className="font-display text-2xl italic tracking-tight mt-2 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="px-6 pb-16">
          <div className="flex justify-between items-end border-b border-border pb-3 mb-8">
            <h2 className="font-display text-xl italic">The Desk</h2>
            <span className="font-mono text-[10px] text-accent">
              {String(team.length).padStart(2, "0")} correspondents
            </span>
          </div>
          <ul className="space-y-6">
            {team.map((m, i) => (
              <li
                key={m.name}
                className="flex items-baseline justify-between gap-4 border-b border-border pb-4 animate-reveal"
                style={{ animationDelay: `${120 + i * 60}ms` }}
              >
                <div>
                  <h3 className="font-display text-lg italic">{m.name}</h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    {m.role}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-accent">
                  {m.city}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-4 p-8 bg-accent text-background mb-12 animate-reveal">
          <h2 className="font-display text-2xl italic mb-3 leading-tight">
            Begin a correspondence.
          </h2>
          <p className="text-background/70 text-xs mb-6 leading-relaxed">
            Tell us which corner of Ethiopia keeps returning to mind. We'll
            write back within one working day.
          </p>
          <Link
            to="/"
            hash="inquire"
            className="block w-full py-4 text-center bg-background text-accent text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            Open Inquiry
          </Link>
        </section>

        <footer className="py-10 border-t border-border">
          <p className="px-6 text-center font-mono text-[8px] text-muted-foreground/60 uppercase tracking-[0.1em]">
            ©2026 Novel Ethiopia. Built for the Highlands.
          </p>
        </footer>
      </div>
    </div>
  );
}
