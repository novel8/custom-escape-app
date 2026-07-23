import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — NOVEL Ethiopia" },
      {
        name: "description",
        content:
          "NOVEL is a new Ethiopian travel startup. Be one of our first travelers and help write the archive.",
      },
      { property: "og:title", content: "Testimonials — NOVEL Ethiopia" },
      {
        property: "og:description",
        content:
          "We're just getting started. Be the first traveler to file a report from Ethiopia with NOVEL.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />
      <div className="max-w-md mx-auto">
        <header className="px-6 pt-10 pb-10 animate-reveal">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/80 mb-5 block">
            Correspondence — Issue 01
          </span>
          <h1 className="font-display text-4xl leading-[1.05] italic font-medium tracking-tight mb-6">
            The archive begins with you.
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[34ch]">
            NOVEL is a new travel startup. We haven't filed a single
            testimonial yet — and that's exactly the point. The first pages
            of this archive are waiting to be written by our first travelers.
          </p>
        </header>

        <section className="px-6 pb-16">
          <div
            className="flex justify-between items-end border-b border-border pb-3 mb-10 animate-reveal"
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="font-display text-xl italic">The Archive</h2>
            <span className="font-mono text-[10px] text-accent">00 entries</span>
          </div>

          <div
            className="border border-dashed border-border p-8 text-center animate-reveal"
            style={{ animationDelay: "180ms" }}
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70 block mb-4">
              Nº 001 — Reserved
            </span>
            <p className="font-display text-2xl italic leading-snug text-foreground/90 mb-4">
              &ldquo;This entry is waiting for its author.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[30ch] mx-auto">
              Be our first traveler. In exchange for honest feedback after
              your Ethiopian chapter closes, we'll extend our founding-guest
              pricing and a level of attention only a small team can offer.
            </p>
          </div>
        </section>

        <section className="mx-4 p-8 bg-accent text-background mb-12 animate-reveal">
          <h2 className="font-display text-2xl italic mb-3 leading-tight">
            Write the first entry.
          </h2>
          <p className="text-background/70 text-xs mb-6 leading-relaxed">
            Every Ethiopian itinerary begins as a paragraph in an email.
            Send us yours — we'll reply within a day.
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
