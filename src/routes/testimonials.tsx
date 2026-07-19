import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Novel Travel Archives" },
      {
        name: "description",
        content:
          "Field notes from Novel travelers — dispatches on Kyoto ryokans, Aegean villas, Patagonian ice, and midnight transit.",
      },
      { property: "og:title", content: "Testimonials — Novel" },
      {
        property: "og:description",
        content:
          "Correspondence from past travelers on tours arranged by Novel.",
      },
    ],
  }),
  component: TestimonialsPage,
});

const entries = [
  {
    quote:
      "Novel edited our honeymoon like a manuscript. Ten days in Kyoto felt like a single, quiet paragraph — perfectly placed.",
    name: "Amara & Jonas W.",
    trip: "Kyoto & Naoshima, 10 nights",
    date: "Mar 2026",
  },
  {
    quote:
      "The car arrived at 04:12 exactly. That precision continued for two weeks. I have never traveled with less friction.",
    name: "Priya Rao",
    trip: "Milos & Athens, 8 nights",
    date: "Sep 2025",
  },
  {
    quote:
      "Their glaciologist walked us onto the ice at dawn. It was not a tour. It was a lecture in the middle of a cathedral.",
    name: "Henrik Öberg",
    trip: "Patagonia expedition, 12 nights",
    date: "Nov 2025",
  },
  {
    quote:
      "One WhatsApp thread. One person. Every question answered before I finished typing. This is what a travel agent should be.",
    name: "Delphine M.",
    trip: "Marrakech & Atlas, 7 nights",
    date: "Feb 2026",
  },
  {
    quote:
      "They rerouted us mid-flight after a strike in Rome and we didn't lose a single reservation. I still don't know how.",
    name: "The Okonkwo family",
    trip: "Italy grand tour, 14 nights",
    date: "Jul 2025",
  },
];

function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />
      <div className="max-w-md mx-auto">
        <header className="px-6 pt-10 pb-10 animate-reveal">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/80 mb-5 block">
            Correspondence — Filed Reports
          </span>
          <h1 className="font-display text-4xl leading-[1.05] italic font-medium tracking-tight mb-6">
            Dispatches from the field.
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[34ch]">
            Unedited notes returned by travelers after their chapters closed.
            Names printed with permission.
          </p>
        </header>

        <section className="px-6 pb-16">
          <div
            className="flex justify-between items-end border-b border-border pb-3 mb-10 animate-reveal"
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="font-display text-xl italic">The Archive</h2>
            <span className="font-mono text-[10px] text-accent">
              {String(entries.length).padStart(2, "0")} entries
            </span>
          </div>

          <ul className="space-y-12">
            {entries.map((e, i) => (
              <li
                key={i}
                className="animate-reveal border-b border-border pb-10 last:border-b-0"
                style={{ animationDelay: `${150 + i * 80}ms` }}
              >
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <span className="font-mono text-[9px] text-accent/50">
                    Nº {String(i + 1).padStart(3, "0")}
                  </span>
                  <span className="font-mono text-[9px] text-accent">
                    {e.date}
                  </span>
                </div>
                <blockquote className="font-display text-xl italic leading-snug text-foreground/95 mb-5">
                  &ldquo;{e.quote}&rdquo;
                </blockquote>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground">
                    — {e.name}
                  </span>
                  <span className="font-mono text-[9px] text-muted-foreground">
                    {e.trip}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-4 p-8 bg-accent text-background mb-12 animate-reveal">
          <h2 className="font-display text-2xl italic mb-3 leading-tight">
            Write the next entry.
          </h2>
          <p className="text-background/70 text-xs mb-6 leading-relaxed">
            Every itinerary begins as a paragraph in an email. Send us yours.
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
