import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Novel Travel Archives" },
      {
        name: "description",
        content:
          "Novel is a tour agency crafting personalized, nocturnal journeys — the ethos, the team, the archive behind every itinerary.",
      },
      { property: "og:title", content: "About Us — Novel Travel Archives" },
      {
        property: "og:description",
        content:
          "Meet the archivists behind Novel — a small team designing unhurried, meticulous travel.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    n: "01",
    title: "The Archivist",
    body: "We treat every destination like a document — researched, footnoted, quietly interpreted.",
  },
  {
    n: "02",
    title: "The Editor",
    body: "Itineraries are edited, not stacked. What we remove is as considered as what we include.",
  },
  {
    n: "03",
    title: "The Companion",
    body: "One point of contact, awake in your timezone, from first inquiry to the flight home.",
  },
];

const team = [
  { name: "Ines Marcheva", role: "Founder, Head of Chapters", city: "Lisbon" },
  { name: "Kaito Renn", role: "Asia Correspondent", city: "Kyoto" },
  { name: "Sena Okafor", role: "Africa & Levant Desk", city: "Marrakech" },
  { name: "Julien Vasco", role: "Fleet & Transit", city: "Milan" },
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
            A small studio for unhurried travel.
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[34ch]">
            Novel is a tour agency of ten. We specialize in unique,
            personalized journeys — flights, lodging, transit, and tours
            arranged as one continuous document. Stress-free by design.
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
            Tell us where your mind keeps wandering. We'll write back within
            one working day.
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
            ©2026 Novel Archives. Built for the Night.
          </p>
        </footer>
      </div>
    </div>
  );
}
