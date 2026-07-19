import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

type Item = {
  id: string;
  title: string;
  meta: string;
  detail: string;
  price: string;
};

export function CatalogPage({
  issue,
  eyebrow,
  title,
  intro,
  items,
  ctaLabel = "Inquire",
}: {
  issue: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: Item[];
  ctaLabel?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteNav />
      <div className="max-w-md mx-auto">
        <header className="px-6 pt-10 pb-10 animate-reveal">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/80 mb-5 block">
            {issue} — {eyebrow}
          </span>
          <h1 className="font-display text-4xl leading-[1.05] text-balance mb-6 italic font-medium tracking-tight">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-[32ch] text-sm leading-relaxed">
            {intro}
          </p>
        </header>

        <section className="px-6 pb-16">
          <div
            className="flex justify-between items-end border-b border-border pb-3 mb-10 animate-reveal"
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="font-display text-xl italic">The Ledger</h2>
            <span className="font-mono text-[10px] text-accent">
              {String(items.length).padStart(2, "0")} entries
            </span>
          </div>

          <ul className="space-y-10">
            {items.map((it, i) => (
              <li
                key={it.id}
                className="group animate-reveal border-b border-border pb-8 last:border-b-0"
                style={{ animationDelay: `${150 + i * 80}ms` }}
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="font-mono text-[9px] text-accent/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] text-accent font-medium">
                    {it.price}
                  </span>
                </div>
                <h3 className="font-display text-2xl tracking-wide italic mb-2">
                  {it.title}
                </h3>
                <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest block mb-3">
                  {it.meta}
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {it.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-4 p-8 bg-accent text-background mb-12 animate-reveal">
          <h2 className="font-display text-2xl italic mb-3 leading-tight">
            Compose your itinerary.
          </h2>
          <p className="text-background/70 text-xs mb-6 leading-relaxed">
            Every entry is a starting point. Tell us what caught your eye and
            we'll build the rest of the journey around it.
          </p>
          <Link
            to="/"
            hash="inquire"
            className="block w-full py-4 text-center bg-background text-accent text-[10px] font-bold uppercase tracking-[0.2em] ring-1 ring-background"
          >
            {ctaLabel}
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

export const _unused = createFileRoute;
