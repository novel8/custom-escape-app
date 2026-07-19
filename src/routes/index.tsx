import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImg from "@/assets/hero.jpg";
import kyotoImg from "@/assets/kyoto.jpg";
import milosImg from "@/assets/milos.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOVEL — Bespoke Travel & Tour Agency" },
      {
        name: "description",
        content:
          "NOVEL curates personalized tours, flights, stays, and transportation. Journeys that read like literature — hidden gems, effortless logistics.",
      },
      { property: "og:title", content: "NOVEL — Bespoke Travel & Tour Agency" },
      {
        property: "og:description",
        content:
          "Personalized itineraries for the culturally curious. Curated tour packages, private stays, and seamless travel logistics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const chapters = [
  {
    id: "kyoto",
    title: "The Silent Temples",
    location: "Kyoto, JP",
    meta: "09 Days — Curated Residency",
    price: "$4.2K",
    image: kyotoImg,
  },
  {
    id: "milos",
    title: "Aegean Stillness",
    location: "Milos, GR",
    meta: "07 Days — Private Coastal",
    price: "$3.8K",
    image: milosImg,
  },
];

const philosophy = [
  {
    n: "01",
    title: "Radical Tailoring",
    body: "No two travelers share the same curiosity. We build each journey from a blank page.",
  },
  {
    n: "02",
    title: "Hidden Access",
    body: "Private estates, local kitchens, and after-hours experts beyond the reach of standard agencies.",
  },
  {
    n: "03",
    title: "Zero Friction",
    body: "We manage every logistic — from first-class flights to bespoke dining — so you remain present.",
  },
];

const services = [
  { label: "Lodging", copy: "Boutique hotels & private dark-sky villas." },
  { label: "Transit", copy: "Electric fleets & private night charters." },
  { label: "Flights", copy: "First-class & executive concierge routing." },
  { label: "Tours", copy: "Guided heritage walks & wilderness treks." },
];

function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [destination, setDestination] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!destination || !email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-accent/30">
      <SiteNav />

      <div className="max-w-md mx-auto">
        {/* Hero */}
        <header className="px-6 pt-10 pb-12">
          <div className="animate-reveal">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/80 mb-5 block">
              Issue 04 — Midnight Transit
            </span>
            <h1 className="font-display text-5xl leading-[1.05] text-balance mb-6 italic font-medium tracking-tight">
              Travel as a form of literature.
            </h1>
            <p className="text-muted-foreground max-w-[32ch] text-sm leading-relaxed mb-8">
              NOVEL curates journeys that read like stories. Personalized
              itineraries, private stays, and seamless logistics for the
              culturally curious and the worldly at heart.
            </p>
            <img
              src={heroImg}
              alt="Moonlit mountains under a starry sky"
              width={1200}
              height={1500}
              className="w-full aspect-[4/5] object-cover ring-1 ring-white/5 mb-8"
            />
            <a
              href="#inquire"
              className="block w-full py-4 text-center border border-accent/20 text-[10px] font-medium uppercase tracking-[0.2em] bg-accent text-background transition-all hover:bg-accent/90 active:scale-[0.98]"
            >
              Inquire Now
            </a>
          </div>
        </header>

        {/* Chapters */}
        <section className="px-6 space-y-14" aria-label="Featured tour packages">
          <div
            className="flex justify-between items-end border-b border-border pb-3 animate-reveal"
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="font-display text-xl italic">Active Chapters</h2>
            <span className="font-mono text-[10px] text-accent">
              {String(chapters.length).padStart(2, "0")} / 12
            </span>
          </div>

          {chapters.map((c, i) => (
            <article
              key={c.id}
              className="group animate-reveal"
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <img
                src={c.image}
                alt={`${c.title} — ${c.location}`}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover mb-5 ring-1 ring-white/5"
              />
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-display text-lg tracking-wide">
                    {c.title}
                  </h3>
                  <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                    {c.meta}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-accent font-medium pt-1">
                  {c.price}
                </span>
              </div>
            </article>
          ))}
        </section>

        {/* Philosophy */}
        <section className="mx-6 py-16 px-6 bg-blue-950/20 mt-20 ring-1 ring-white/5">
          <div className="animate-reveal">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent mb-8 block">
              The Ethos
            </span>
            <div className="space-y-10">
              {philosophy.map((p) => (
                <div key={p.n} className="flex gap-5">
                  <span className="font-mono text-[10px] text-accent/50 shrink-0">
                    {p.n}
                  </span>
                  <div>
                    <h4 className="font-medium mb-2 uppercase text-[10px] tracking-[0.15em]">
                      {p.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-20">
          <h2 className="font-display text-xl italic mb-10 animate-reveal">
            The Service Ledger
          </h2>
          <div className="grid grid-cols-2 gap-px bg-white/5 ring-1 ring-white/10 animate-reveal">
            {services.map((s) => (
              <div
                key={s.label}
                className="bg-background p-5 aspect-square flex flex-col justify-between"
              >
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-accent">
                  {s.label}
                </span>
                <p className="text-[10px] leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Booking */}
        <section id="inquire" className="mx-4 p-8 bg-accent text-background mb-12">
          <div className="animate-reveal">
            <h2 className="font-display text-3xl italic mb-4 leading-tight">
              Begin your novel.
            </h2>
            <p className="text-background/70 text-xs mb-10 leading-relaxed">
              Tell us where you dream of being. Our consultants respond within
              24 hours to begin the dialogue.
            </p>
            {submitted ? (
              <div className="py-8 text-center">
                <p className="font-display text-2xl italic mb-2">Received.</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-background/70">
                  We will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-background/20 pb-2">
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="DESTINATION"
                    className="bg-transparent border-none outline-none font-mono text-[10px] w-full text-background placeholder:text-background/40 uppercase tracking-widest"
                  />
                </div>
                <div className="border-b border-background/20 pb-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="EMAIL ADDRESS"
                    className="bg-transparent border-none outline-none font-mono text-[10px] w-full text-background placeholder:text-background/40 uppercase tracking-widest"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-background text-accent text-[10px] font-bold uppercase tracking-[0.2em] mt-6 ring-1 ring-background hover:bg-background/90 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="px-6 text-center">
            <span className="font-display text-2xl uppercase tracking-tighter opacity-10 block mb-8">
              Novel
            </span>
            <div className="flex justify-center gap-8 font-mono text-[9px] text-muted-foreground uppercase tracking-[0.2em]">
              <span>IG</span>
              <span>Journal</span>
              <span>Contact</span>
            </div>
            <p className="mt-12 font-mono text-[8px] text-muted-foreground/60 uppercase tracking-[0.1em]">
              ©2026 Novel Archives. Built for the Night.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
